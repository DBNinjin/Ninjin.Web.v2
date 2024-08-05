<script>
	import map from '$lib/assets/images/ninjin_map.png';
	import MetaData from '$lib/components/Layouts/MetaData.svelte';
	import BigVideoOrImage from '$lib/components/Pages/BigVideoOrImage.svelte';
</script>

<MetaData
	title="Map"
	description="Sur cette page, vous allez pouvoir observer la map du serveur Minecraft avec tout les points réellement importants de noter."
/>

<h1 class="text-5xl font-extrabold mb-5">
	Map<small class="ms-2 font-semibold">de DB Ninjin</small>
</h1>

<p class="text-center text-lg mt-4">
	Voici la map du serveur, les dimensions sont 10000x8000 blocks.
</p>

<BigVideoOrImage
	url={map}
	video_or_image="image"
	link_global={true}
	name="map"
	title="Voir la map en plus grande"
	target="_blank"
/>
