<script>
	export let title;
	export let image;
	export let path;
</script>

<div class="card bordered svekyll-post">
	<div class="svekyll-title">
  {#if path}
		<a class="card-title" sveltekit:prefetch href={path.replace(/\.[^/.]+$/, '')}><div class="title">{title}</div></a>
	{:else}
		<div class="card-title">{title}</div>
	{/if}
  </div>

	<div class="card-body">
		{#if image}
			<div class="grid grid-cols-8">
				<div class="col-span-5 p-2">
					<slot />
				</div>
				<div class="col-span-3 p-2">
					<img alt="Accompaniment" src={image} />
				</div>
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</div>
