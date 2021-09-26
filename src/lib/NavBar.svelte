<script>
  import { config} from '$lib/config';
</script>


<nav class="navheader  rounded-lg">
  <div class="relative">
    <div class="max-w-6xl mx-auto px-4 ">
      <div class="flex justify-center ">
        <div class="flex">
          <div class="flex items-center">
            <span class="p-6 text-xl">
              <a href="/">{ config.title } </a>
            </span>
            <div>
              {#if config && config.links}
              {#each config.links as link} 
              <a href={`/${link}`} class="navelement">{link}</a>
              {/each}
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  .navheader {
    @apply pb-4;
  }
  .navelement {
    @apply p-6 text-sm font-semibold  transition duration-300;
  }
</style>
