<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
   export async function load({ fetch }) {
    const res = await fetch(`/posts.json`);
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import { paginate, PaginationNav } from "svelte-paginate";
  import { setTheme } from '$lib/theme';
  import Card from "$lib/Card.svelte";
  import Footer from "$lib/Footer.svelte";
  import { onMount } from "svelte";
  import { config } from "$lib/config";
  export let posts;

  let items = posts;
  let currentPage = 1;
  let pageSize = 10;
  let paginatedItems;
  $: { 
    paginatedItems = paginate({ items, pageSize, currentPage }) 
  };

  onMount( () => {
    setTheme(config.theme);
  })

</script>

<main>
  <article>
    {#if paginatedItems && paginatedItems.length }
    <div class="article-list">
      <div
        class="container mx-auto svekyll-posts"
      >
        {#each paginatedItems as { datestamp, readingTime, metadata: { title, tags, outline, slug }, path }}
          <Card {title} {path}>
            <div class="mb-4">
              <div class="text-xs">
                published on: {datestamp}, reading time: {readingTime} minutes
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </div>
    <div class="mx-auto w-full pagenav">
      <PaginationNav
        totalItems={items.length}
        {pageSize}
        {currentPage}
        limit={1}
        showStepOptions={true}
        on:setPage={(e) => (currentPage = e.detail.page)}
      />
    </div>
    {:else}
      No items, please add some posts
    {/if}

    <Footer />
  </article>
</main>

<style>

</style>

