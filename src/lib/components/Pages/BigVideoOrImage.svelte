<script>
	export let url,
		video_or_image,
		link_global = false,
		name = 'default name',
		title = 'default title',
		target = '_blank';

	const _class = {
		image:
			'w-full max-w-3xl h-auto max-w-2xl rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1',
		video:
			'w-full aspect-video max-w-2xl h-auto rounded-md bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-1'
	};
</script>

{#if video_or_image == 'image'}
	<div class="flex justify-center mt-6">
		{#if link_global}
			<a href={url} {target} rel="noopener noreferrer" {title}>
				<img src={url} alt={name} draggable="false" class={_class['image']} />
			</a>
		{:else}
			<img src={url} alt={name} draggable="false" class={_class['image']} />
		{/if}
	</div>
{:else if video_or_image == 'video'}
	<div class="mt-5 flex items-center justify-center">
		<iframe
			class={_class['video']}
			width="560"
			height="315"
			src={`https://www.youtube-nocookie.com/embed/${url}`}
			{title}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		>
			<p class="text-center text-lg z-0">Your browser does not support the video tag.</p>
		</iframe>
	</div>
{:else}
	<!-- ??? Je fou quoi ici moi... -->
{/if}
