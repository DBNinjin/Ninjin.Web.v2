<script>
	import { onMount } from 'svelte';
	import { getCookie, setCookie, checkURL } from '$lib/utils/cookies';
	import '$lib/assets/css/tailwind.css';
	import Header from '$lib/components/Layouts/Header.svelte';
	import Footer from '$lib/components/Layouts/Footer.svelte';
	import logoHeader from '$lib/assets/images/logo_header.png';
	import logoHeaderRevert from '$lib/assets/images/logo_header_revert.png';

	let isReverted = false;
	const cookieName = 'ninjin_nuiqka#eg@api/activate-revert-logo';

	onMount(() => {
		// Vérifie si le cookie est déjà présent
		const cookieStatus = getCookie(cookieName);
		isReverted = cookieStatus === 'true';

		// Si l'URL correspond à celle d'activation, mettre à jour le cookie
		if (checkURL('/api/activate-revert-logo')) {
			setCookie(cookieName, 'true', 30);
			isReverted = true;
		}

		if (isReverted) {
			console.log('[Infos] Running a reverted logo version, Nuiqka\'s EG is enabled');
		} else {
			console.log('[Infos] Running a normal logo version, Nuiqka\'s EG is disabled');
		}
	});
</script>

<Header />
<div class="container max-w-6xl mx-auto px-4">
	<main class="text-center mt-4 relative z-20">
		<img
			id="logo-header"
			src={isReverted ? logoHeaderRevert : logoHeader}
			alt="Ninjin Logo"
			class="w-full max-w-2xl mx-auto"
			draggable="false"
		/>

		<section
			class="bg-[#192908] bg-opacity-70 border-4 border-black mx-10 my-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
		>
			<slot />
		</section>
	</main>
</div>
<Footer />
