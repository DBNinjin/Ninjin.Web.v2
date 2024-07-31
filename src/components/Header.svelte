<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import {
		Button,
		Dropdown,
		DropdownItem,
		Avatar,
		DropdownHeader,
		DropdownDivider
	} from 'flowbite-svelte';
	import logoNinjin from '$lib/assets/images/logo_ninjin.png';

	const links = [
		{
			name: 'Accueil',
			url: '/'
		},
		{
			name: 'Rejoindre',
			url: '/join'
		},
		{
			name: 'Features',
			url: '/features'
		},
		{
			name: 'Map',
			url: '/map'
		},
		{
			name: 'Règles',
			url: '/rules'
		}
	];
</script>

<header>
	<nav class="bg-[#191e14] shadow">
		<div class="container flex items-center justify-center p-3.5 mx-auto capitalize">
			<div class="large-screen hidden md:block">
				{#each links as link}
					<a
						href={link.url}
						title={link.name}
						rel="noopener"
						target="_self"
						class={`mx-1.5 sm:mx-6 ${
							link.url === $page.url.pathname
								? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-300 hover:to-yellow-200'
								: 'text-neutral-300 hover:text-neutral-100'
						}`}
					>
						{link.name}
					</a>
				{/each}
			</div>

			<div class="small-screen sm:block md:hidden">
				<Button pill color="#191e14" id="small_screen_navbar" class="!p-1">
					<Avatar src={logoNinjin} class="me-2" />
					Menu
				</Button>
				<Dropdown inline triggeredBy="#small_screen_navbar" class="bg-[#191e14]">
					{#each links as link}
						<DropdownItem
							href={link.url}
							title={link.name}
							rel="noopener"
							target="_self"
							class={`font-medium py-2 px-4 text-sm hover:bg-[#192809] ${
								link.url === $page.url.pathname
									? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-300 hover:to-yellow-200'
									: 'text-neutral-300 hover:text-neutral-100'
							}`}
						>
							{link.name}
						</DropdownItem>
					{/each}
				</Dropdown>
			</div>
		</div>
	</nav>
</header>
