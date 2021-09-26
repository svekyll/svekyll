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
  import Card from "$lib/Card.svelte";
  import Footer from "$lib/Footer.svelte";
  export let posts;

  let items = posts;
  let currentPage = 1;
  let pageSize = 10;
  let paginatedItems;
  $: { 
    console.log('Items', items);
    paginatedItems = paginate({ items, pageSize, currentPage }) 
  };
</script>

<main>
  <article>
    {#if paginatedItems && paginatedItems.length }
    <div class="article-list">
      <div
        class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12"
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
    <div class="mx-auto">
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
  .article-list {
    @apply bg-white;
  }
</style>