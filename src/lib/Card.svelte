<script>
	export let title;
	export let image;
	export let path;
</script>

<div class="card">
	{#if path}
		<a sveltekit:prefetch href={path.replace(/\.[^/.]+$/, '')}><div class="title">{title}</div></a>
	{:else}
		<div class="card-title">{title}</div>
	{/if}

	<div class="card-body">
		{#if image}
			<div class="grid grid-cols-8">
				<div class="col-span-5 p-2">
					<slot />
				</div>
				<div class="col-span-3 p-2">
					<img alt="Accompaniment" src={image} />
				</div>
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</div>
