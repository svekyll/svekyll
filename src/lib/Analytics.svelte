<script>
	import { config } from './config';
	import { browser } from '$app/env';
	import { page } from '$app/stores';

	function fixHost(host) {
		if (!host.startsWith('//') && !host.startsWith('http')) {
			return `//${host}`;
		} else {
			return host;
		}
	}

	function trackPageChange() {
		if (window._paq) {
			const { pathname } = window.location;
			window._paq.push(['setCustomUrl', pathname]);
			window._paq.push(['trackPageView']);
		}
	}

    $: $page.path, browser && trackPageChange();

</script>

<svelte:head>
	{#if config.analytics}
		{#if config.provider === 'matomo'}
			<script>
				var _paq = (window._paq = window._paq || []);
				_paq.push(['trackPageView']);
				_paq.push(['enableLinkTracking']);
				(function () {
					var u = {`${fixHost(config.analytics.matomo.url)}`};
					_paq.push(['setTrackerUrl', u + 'matomo.php']);
					_paq.push(['setSiteId', [`${config.analyics.matomo.site_id}`}]);
					var d = document,
						g = d.createElement('script'),
						s = d.getElementsByTagName('script')[0];
					g.async = true;
					g.src = u + 'matomo.js';
					conf;
					s.parentNode.insertBefore(g, s);
				})();
			</script>
		{/if}
	{/if}
</svelte:head>
