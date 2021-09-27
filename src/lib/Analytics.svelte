<script>
	import { config } from './config';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	function fixHost(host) {
		if (!host.startsWith('//') && !host.startsWith('http')) {
			return `//${host}`;
		} else {
			return host;
		}
	}

	onMount(() => {
		if (config.analytics && 
				config.analytics.matomo && 
				config.analytics.matomo.url && 
				config.analytics.matomo.site_id) {
			var _paq = (window._paq = window._paq || []);
			_paq.push(['trackPageView']);
			_paq.push(['enableLinkTracking']);
			(function () {
				var u = fixHost(config.analytics.matomo.url);
				_paq.push(['setTrackerUrl', u + 'matomo.php']);
				_paq.push(['setSiteId', config.analytics.matomo.site_id]);
				var d = document,
					g = d.createElement('script'),
					s = d.getElementsByTagName('script')[0];
				g.async = true;
				g.src = u + 'matomo.js';
				conf;
				s.parentNode.insertBefore(g, s);
			})();
		}
	});

	function trackPageChange() {
		if (window._paq) {
			const { pathname } = window.location;
			window._paq.push(['setCustomUrl', pathname]);
			window._paq.push(['trackPageView']);
		}
	}

	$: $page.path, browser && trackPageChange();
</script>
