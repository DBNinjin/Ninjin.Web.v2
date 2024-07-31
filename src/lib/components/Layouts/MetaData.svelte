<script>
	import { page } from '$app/stores';
	let url = `${$page.url.protocol}//${$page.url.hostname}${$page.url.pathname == '/' ? '' : $page.url.pathname}`;

	/**
	 * @type {string}
	 * @default undefined
	 * @required
	 */
	export let title;

	/**
	 * @type {string}
	 * @default undefined
	 * @required
	 */
	export let description;

	/**
	 * @type {any}
	 * @default null
	 * @optional
	 */
	export let image = `/api/og-images?title=${title.replaceAll(' ', '+')}&path=${$page.url.hostname}${$page.url.pathname == '/' ? '/' : $page.url.pathname}`;

	/**
	 * @type {any}
	 * @default null
	 * @optional
	 */
	export let imageAlt = 'API OG Images';

	/**
	 * @type {any}
	 * @default null
	 * @optional
	 */
	export let twitterCard = null;
</script>

<svelte:head>
	<title>{`${title} - Dragon Ball Ninjin`}</title>
	<meta name="title" content={`${title} - Dragon Ball Ninjin`} />
	<meta property="og:title" content={`${title} - Dragon Ball Ninjin`} />
	<meta property="twitter:title" content={`${title} - Dragon Ball Ninjin`} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="twitter:description" content={description} />
	<meta
		name="author"
		content={`Web V2: AnotherFrench.vercel.app (@AnotherFrench) / Server: Hedaox (@Hedaox) & Xamora`}
	/>
	<meta property="og:site_name" content="Dragon Ball Ninjin" />
	{#if image}
		<meta property="og:image" content={image} />
		<meta property="twitter:image" content={image} />
	{/if}
	{#if imageAlt}
		<meta property="og:image:alt" content={imageAlt} />
		<meta property="twitter:image:alt" content={imageAlt} />
	{/if}
	{#if twitterCard}
		<meta property="twitter:card" content={twitterCard} />
	{:else}
		<meta property="twitter:card" content="summary_large_image" />
	{/if}
	<meta property="og:url" content={url} />
	<meta property="twitter:url" content={url} />
</svelte:head>
