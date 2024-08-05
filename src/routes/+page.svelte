<script context="module">
	import Device from 'svelte-device-info';
</script>

<script>
	import { onMount } from 'svelte';
	import BigVideoOrImage from '$lib/components/Pages/BigVideoOrImage.svelte';
	import MetaData from '$lib/components/Layouts/MetaData.svelte';
	onMount(() => {
		let isPC;
		switch (true) {
			case Device.isMobile:
				isPC = false;
				break;
			case Device.isPhone:
				isPC = false;
				break;
			case Device.isTablet:
				isPC = false;
				break;
			default:
				isPC = true;
				break;
		}

		if (isPC) {
			document.body.style.overflow = 'hidden';
			console.log('Running on a PC device, overflow is disabled');
		} else {
			document.body.style.overflow = 'auto';
			console.log('Running on a mobile device, overflow is auto');
		}
	});

	var spanCss =
		'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500';
	var smallCss = 'ms-2 font-semibold';
</script>

<MetaData
	title="Accueil"
	description="Sur cette page, vous retrouverez le trailer du serveur Dragon Ball Ninjin ainsi qu'une courte présentation."
/>

<h1 class="text-5xl font-extrabold mb-5">
	<span class={spanCss}>Dragon Ball Ninjin</span><small class={smallCss}>est un serveur DB</small>
</h1>

<p class="text-center text-lg mt-4">
	Il s'agit d'un projet de <b>serveur Minecraft survival et semi-RP Francophone</b>, le but étant de
	se rapprocher le plus <b>fidèlement</b> possible de l'ambiance de l'<b>univers de Dragon Ball</b> décrit
	dans le manga et anime éponyme.
</p>

<BigVideoOrImage
	url="mtTeNcnHUBE"
	video_or_image="video"
	title="Dragon Ball Ninjin: Trailer (Video Player by YouTube)"
/>
