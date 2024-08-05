<script>
	import MetaData from '$lib/components/Layouts/MetaData.svelte';
	import BigVideoOrImage from '$lib/components/Pages/BigVideoOrImage.svelte';
	import DiscordChannel from '$lib/components/Pages/DiscordChannel.svelte';
</script>

<MetaData
	title="Nous rejoindre"
	description="Sur cette page, vous allez apprendre comment rejoindre le serveur DB Ninjin ainsi que de découvrir une vidéo explicative pour mieux vous aider."
/>

<h1 class="text-5xl font-extrabold mb-5">
	<small class="ms-2 font-semibold">Comment</small> Rejoindre<small class="ms-2 font-semibold"
		>D.B. Ninjin ?</small
	>
</h1>

<p class="text-center text-lg mt-4">
	Pour nous rejoindre vous devez d'abord rejoindre le Discord afin d'être whitelist en allant sur le
	channel <DiscordChannel
		name="👤│demande-whitelist"
		guild_id="452572573532684309"
		channel_id="615641331494289409"
	/> mais avant veuillez lire les <DiscordChannel
		name="👤│instructions-whitelist"
		guild_id="452572573532684309"
		channel_id="696852947837124758"
	/>.
</p>

<BigVideoOrImage
	url="tTDmJj8PLJE"
	video_or_image="video"
	name="Comment rejoindre le serveur D.B. Ninjin ? (Video Player by YouTube)"
/>

<p class="text-center text-lg mt-4">
	En cas de crash, vérifiez que vous avez bien <a
		href="https://javadl.oracle.com/webapps/download/AutoDL?BundleId=238729_478a62b7d4e34b78b671c754eaaf38ab"
		title="Télécharger Java en 64 bit."
		rel="noopener"
		target="_self"><b>Java 64 bit</b></a
	>, en cas de problème persistant veuillez regarder la <DiscordChannel
		name="❓│faq"
		guild_id="452572573532684309"
		channel_id="574926744767954954"
	/> et les <DiscordChannel
		name="📎│liens-utiles"
		guild_id="452572573532684309"
		channel_id="452795124452294661"
	/>, si malgré tout les soucis persiste, n'hésitez pas à en parler avec les membres du Discord/du
	Staff peut-être que nous pourrons vous aider.
</p>
