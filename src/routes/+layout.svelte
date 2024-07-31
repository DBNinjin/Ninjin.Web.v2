<script>
	import '$lib/assets/css/tailwind.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import logoHeader from '$lib/assets/images/logo_header.png';
</script>

<div class="container mx-auto px-4">
	<Header />
	<main class="text-center mt-4">
		<img src={logoHeader} alt="Ninjin Logo" class="w-full max-w-2xl mx-auto" draggable="false" />

		<section class="bg-green-800 bg-opacity-70 border-8 border-black mx-10 my-4 p-6 rounded-lg">
			<slot />
		</section>
	</main>
</div>
<Footer />

<style lang="postcss">
	:global(body) {
		background-image: url('/assets/images/background.png'), url('/assets/images/background_end.png');
		background-repeat: no-repeat, repeat;
		background-size: contain;
		font-family: 'Olney', Verdana, sans-serif;
		color: white;
	}
</style>
