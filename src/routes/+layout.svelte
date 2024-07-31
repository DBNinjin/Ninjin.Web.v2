<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import '$lib/assets/css/tailwind.css';
	import Header from '$lib/components/Layouts/Header.svelte';
	import Footer from '$lib/components/Layouts/Footer.svelte';
	import logoHeader from '$lib/assets/images/logo_header.png';
	import logoHeaderRevert from '$lib/assets/images/logo_header_revert.png';

	let logo = logoHeader;
	if (data.revertNinjinLogo != 'false') {
		logo = logoHeaderRevert;
	}
</script>

<Header />
<div class="container max-w-6xl mx-auto px-4">
	<main class="text-center mt-4 relative z-20">
		<img src={logo} alt="Ninjin Logo" class="w-full max-w-2xl mx-auto" draggable="false" />

		<section
			class="bg-[#192908] bg-opacity-70 border-4 border-black mx-10 my-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
		>
			<slot />
		</section>
	</main>
</div>
<Footer />
