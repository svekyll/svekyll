<script>
	import { CONTRIBUTORS } from '$lib/Env';
	import { MD5 } from '$lib/md5.js';

	const contributors = CONTRIBUTORS;

	let images = [];

	onMount(() => {
		if (contributors) {
			contributors.split('/').forEach((c) => {
				console.log('Contributor: ', c);
				if (c) {
					const [email, name] = c.split(':');
					console.log('Email is', email);
					if (email) {
						images = [
							...images,
							{ src: `http://www.gravatar.com/avatar/${MD5(email)}.jpg?s=64&r=g`, name }
						];
					}
				}
			});
		}
	});

	import { onMount } from 'svelte';
</script>

{#if images && images.length > 0}
	<div>
		<div class="relative py-12  pl-4 text-xs">
			These people helped review this post, thanks!

			<!-- <div class="contributor-names">
      {contributors}
    </div> -->
			<div class="pt-4">
				{#each images as image, i}
					<img
						class="contributor"
						class:top={i === 0}
						class:offset={i !== 0}
						src={image.src}
						alt={image.name}
						width="32"
						height="32"
					/>
				{/each}
			</div>

			<style>
				.top {
					z-index: 10000;
				}
				.contributor-names {
					@apply text-xs text-gray-400;
				}
				.offset {
					@apply -inset-x-4;
					position: relative;
				}
				.contributor {
					@apply w-12 h-12 rounded-full relative inline-block;
				}
			</style>
		</div>
	</div>
{/if}
