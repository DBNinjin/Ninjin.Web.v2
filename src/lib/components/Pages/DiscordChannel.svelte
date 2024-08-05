<script>
	export let name,
		channel_id = '#',
		guild_id = '#';

	const _class = {
		span: 'inline-flex items-center bg-gray-700 text-white px-2 py-1 rounded-md font-semibold',
		text_span: 'text-blue-400'
	};
</script>

{#if channel_id == '#' || guild_id == '#'}
	<span class={_class['span']}>
		<span class={_class['text_span']}>#</span>{name}
	</span>
{:else}
	<a
		href={`https://discord.com/channels/${guild_id}/${channel_id}`}
		title={`Voir le canal ${name} sur Discord`}
		target="_blank"
		rel="noopener"
	>
		<span class={_class['span']}>
			<span class={_class['text_span']}>#</span>{name}
		</span>
	</a>
{/if}
