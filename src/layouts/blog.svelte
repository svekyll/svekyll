<script>
  import Card from "$lib/Card.svelte";
  import Contributors from "../routes/Contributors.svelte";
  import { seo } from "$lib/store";
  export let title;
  export let description;

  $seo = {
    title: title,
    description: description,
  };
</script>

<Card {title}>
  <slot />
</Card>
<Contributors />

<svelte:head>
  <title>{title}</title>
</svelte:head>

<style>
  .post {
    margin-bottom: 4rem;
  }
</style>
