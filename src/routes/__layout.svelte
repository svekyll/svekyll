<script>
	import { onMount } from 'svelte';
	import Seo from '$lib/Seo.svelte';
	import '../app.postcss';
	import './svekyll.css';
	import { setTheme } from '$lib/theme';
	import NavBar from '$lib/NavBar.svelte';
	import { config } from '$lib/config';
	import Analytics from '$lib/Analytics.svelte';

	onMount(() => {
		setTheme(config.theme);
	});

	onMount(() => {
		const pres = document.getElementsByTagName('pre');
		[...pres].forEach((p) => {
			p.setAttribute('data-prefix', '$');
		});
	});

</script>

<div class="body h-full w-full">
	<div class="body-wrapper max-w-screen-md mx-auto">
		<NavBar />
		<Seo />
		<Analytics/>
		<slot />
	</div>
</div>

<style>
</style>
