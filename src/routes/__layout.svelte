<script>
	import { onMount } from 'svelte';
	import Seo from '$lib/Seo.svelte';
	import '../app.postcss';
	import './svekyll.css';
	import { setTheme } from '$lib/theme';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import NavBar from '$lib/NavBar.svelte';
	import { config } from '$lib/config';

	onMount(() => {
		setTheme(config.theme);
	});

	function trackPageChange() {
		if (window._paq) {
			const { pathname } = window.location;
			window._paq.push(['setCustomUrl', pathname]);
			window._paq.push(['trackPageView']);
		}
	}

	onMount(() => {
		const pres = document.getElementsByTagName('pre');
		[...pres].forEach((p) => {
			p.setAttribute('data-prefix', '$');
		});
	});

	$: $page.path, browser && trackPageChange();
</script>

<div class="body h-full w-full">
	<div class="body-wrapper max-w-screen-md mx-auto">
		<NavBar />
		<Seo />
		<slot />
	</div>
</div>

<style>
</style>
