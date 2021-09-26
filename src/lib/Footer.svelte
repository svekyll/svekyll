<script>
import { config } from '$lib/config';

let twitter;
let github;
let found = false

try {
	({ twitter, github } = config);

} catch (err) {
	console.log(
		'No _config.yml found in environment, you may want to create a Jekyll style _config.yml file'
	);
}

</script>

{#if found}
<div class="footer mx-auto">
    <div class="flex justify-center">
        {#if twitter}
        <a class="identity" href={`https://twitter.com/${twitter}`} rel="me">Twitter</a>
        {/if}
        {#if github}
        <a class="identity" href={`https://github.com/${github}`} rel="me">Github</a>
        {/if}
    </div>
</div>
{/if}

<style>
.identity {
padding: 0.5rem;
}
</style>