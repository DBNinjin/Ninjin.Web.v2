<script>
	import '$lib/assets/css/tailwind.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import logoHeader from '$lib/assets/images/logo_header_2.png';
</script>

<div class="container mx-auto px-4">
	<Header />
	<main class="text-center mt-4 relative z-20">
		<img src={logoHeader} alt="Ninjin Logo" class="w-full max-w-2xl mx-auto" draggable="false" />

		<section
			class="bg-[#192908] bg-opacity-70 border-4 border-black mx-10 my-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
		>
			<slot />
		</section>
	</main>
</div>
<Footer />
<div class="repeat-background">
	<!-- Cette div couvre tout l'écran sous la première image de fond -->
</div>

<style lang="postcss">
	:global(.main-background) {
		background-image: url('/assets/images/background.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.repeat-background {
		background-image: url('/assets/images/background_end.png');
		background-repeat: repeat;
	}
</style>
