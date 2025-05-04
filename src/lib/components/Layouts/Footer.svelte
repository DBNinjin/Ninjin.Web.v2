<script>
	import logoDiscord from '$lib/assets/images/logo_discord.png';
	import logoYoutube from '$lib/assets/images/logo_youtube.png';
	import logoNinjin from '$lib/assets/images/logo_ninjin.png';

	var currentYears = new Date().getFullYear();
	const iconLinks = [
		{
			name: 'Rejoindre notre Discord',
			url: 'https://discord.gg/JcbAENk',
			icon: logoDiscord
		},
		{
			name: 'Regarder nous sur YouTube',
			url: 'https://www.youtube.com/channel/UCRQcMWRLBLC-jj1XvyCv7yA',
			icon: logoYoutube
		},
		{
			name: 'Télécharger le Launcher',
			url: 'https://github.com/Hedaox/Ninjin/raw/master/download/NinjinLauncherBootstrap.jar',
			icon: logoNinjin
		}
	];
</script>

<div class="mt-[5vh]">
	<footer
		class="bg-opacity-50 shadow fixed bottom-0 left-0 z-20 w-full p-2 bg-[#191e14] text-neutral-200 shadow md:flex md:items-center md:justify-between md:p-2"
	>
		<span class="text-sm sm:text-center">
			<small>
				{currentYears} ©
				<a
					href="https://github.com/nevcapy"
					title="Voir le Profil GitHub"
					target="_blank"
					rel="noopener"
					class="hover:underline"
				>
					Nevcapy
				</a>
				pour
				<a
					href="https://github.com/DBNinjin/Ninjin.Web.v2"
					title="Voir le Repo GitHub"
					target="_blank"
					rel="noopener"
					class="hover:underline"
				>
					Ninjin
				</a> - Tous les droits sont réservés à leurs détenteurs.
			</small>
		</span>

		<ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
			{#each iconLinks as iLink}
				<a
					href={iLink.url}
					title={iLink.name}
					rel="noopener"
					target="_self"
					class="border-b-2 border-transparent mx-1.5 sm:mx-2"
				>
					<div class="w-5 h-5 fill-current">
						<img src={iLink.icon} alt={iLink.name} draggable="false" />
					</div>
				</a>
			{/each}
		</ul>
	</footer>
</div>
