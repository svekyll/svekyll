<script>
    import Seo from '$lib/Seo.svelte';
  import { seo } from "$lib/store";
  export let title;
  export let description;

  $seo = {
    title: 'Chris Dawson: Resume',
    description: 'Chris Dawson: Resume',
  };
</script>

<Seo/>
<slot />

<svelte:head>
  <title>{title}</title>
</svelte:head>

<style>
  .post {
    margin-bottom: 4rem;
  }
</style>
