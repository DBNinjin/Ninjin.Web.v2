<script>
	import { Tooltip } from 'flowbite-svelte';
	import FeaturesText from '$lib/components/Pages/FeaturesText.svelte';

	const mods = [
		{
			id: 0,
			name: 'Dragon Block C',
			description:
				'Un super mod très complet de Dragon Ball créé par Jinryuu, maintenant décédé, qui a été repris par son frère Benjamìn.',
			link: 'https://main.jingames.net/minecraft-mods/dragon-block-c/',
			valid: true
		},
		{
			id: 1,
			name: 'JyearsC',
			description:
				'Un mod qui permet au joueur de vieillir, ainsi que de pouvoir jouer un enfant. Aussi créé par JinRyuu.',
			link: 'https://main.jingames.net/jinryuus-years-c/',
			valid: true
		},
		{
			id: 2,
			name: 'Custom NPC',
			description:
				'Un mod qui permet de créer des PNJs avec aussi un système de quêtes et un système de script. Créé par Noppes.',
			link: 'https://www.kodevelopment.nl/minecraft/customnpcs',
			valid: true
		},
		{
			id: 3,
			name: 'Dragon Block V',
			description:
				'Malheureusement non... Même si plus complet que Dragon Block C, il est en développement depuis +4 ans...',
			link: 'https://dragonblockv.wiki.gg/wiki/Dragon_Block_V_Wiki',
			valid: false
		},
		{
			id: 4,
			name: 'Hytale',
			description:
				"Malheureusement non... Même si c'est potentiellement un Minecraft 2.0 ou en mieux, cela fait +5 ans qu'on l'attend aussi...",
			link: 'https://hytale.com/',
			valid: false
		}
	];
</script>

<h1 class="text-5xl font-extrabold mb-5">
	<small class="ms-2 font-semibold">Les</small> Features<small class="ms-2 font-semibold"
		>de DB Ninjin ?</small
	>
</h1>

<p class="text-lg mt-4">
	Pour fonctionner le serveur utilise des mods basés sur Forge, <br /> un framework permettant de créer
	et d'utiliser des mods sur Minecraft.
</p>

<h2 class="mb-2 mt-5 text-xl font-semibold">Parmis ces mods nous utilisons</h2>
<div class="flex justify-center">
	<ul class="max-w-md space-y-1 list-inside">
		{#each mods as mod}
			<li class="flex items-center">
				{#if mod.valid === true}
					<svg
						class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
						/>
					</svg>
				{:else if mod.valid === false}
					<svg
						class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
						/>
					</svg>
				{/if}
				<a
					href={mod.link}
					title={`Voir plus sur ${mod.name}`}
					id={`tooltip-mod-${mod.id}`}
					rel="noopener"
					target="_blank"
				>
					{mod.name}
				</a>
				<Tooltip type="dark" triggeredBy={`#tooltip-mod-${mod.id}`} placement="right">
					{mod.description}
				</Tooltip>
			</li>
		{/each}
	</ul>
</div>

<h2 class="mb-2 mt-5 text-xl font-semibold">
	Les fonctionnalitées du serveur en plus de ceux de Dragon Block C
</h2>

<FeaturesText
	title="La Map"
	description="Une map essayant de respecter l'univers du manga, voire section <a href='/map' title='Voir la map' rel='noopener' target='_self'>map</a>. <br />
    Si vous essayez de sortir de la map, le jeu vous téléportera de l'autre côté de la map, comme s'il s'agissait d'une planète !"
/>

<FeaturesText
	title="Chat Vocal"
	description="Fonctionnant avec le mod GlibysVC permet de discuter vocalement avec les joueurs proches."
/>

<FeaturesText
	title="Saga améliorée"
	description="Puissance des pnj a été modifié pour être <i>(subjectivement)</i> fidèle au manga. <br />
    Certaines parties de la saga ont aussi été améliorées avec de nouveaux PNJs. <br />
    De plus leur IA utilsent le même système que DBC de base <i>(pouvoir voler et envoyer des Kikohas.)</i>"
/>

<FeaturesText
	title="Saga étendue"
	description="De Goku Enfant à Broly Super, la saga a été étendue pour pouvoir parcourir tout l'univers de Dragon Ball ! <br />
    De plus vous ne combatterez pas uniquement les méchants, mais vous pourrez aussi vous entraîner avec les gentils !"
/>

<FeaturesText
	title="Saga secondaire"
	description="Saga secondaire contient tout les ennemis des film DBZ !"
/>

<FeaturesText
	title="Knockback améliorée"
	description="Proportionellement à votre puissance, vous enverrez baladez les flaibards, <br />
    mais vous ne pourrez même pas égratigner quelqu'un de bien plus fort que vous."
/>

<FeaturesText
	title="BloodBath"
	description="Quand vous serez blessé, des plaies ouvertes apparaîtront sur votre corps, à partir de ses plaies du sang commencera à couler. <br />
    Vous soigner enlèvera les plaies, mais le sang restera tant que vous n'aurez pas pris un bain."
/>

<FeaturesText
	title="Musique"
	description="Des musiques personalisées venant des jeux, anime ou films, changeant en fonction de l'environement."
/>

<FeaturesText
	title="Economie"
	description="Rajout d'une monnaie dans le jeu: le Zeni ainsi que des marchands afin d'acheter vêtements, armes, équipement etc..."
/>

<FeaturesText
	title="Système de quêtes dynamiques"
	description="Ajout d'un système de géolocalisation activable en appuyant sur <b>P</b> <i>(touche par défaut)</i>. <br />
    Ce système permet aux joueurs de proposer des quêtes ou d'appeler à l'aide, en pouvant donner leur position et pourquoi pas une récompense."
/>

<FeaturesText
	title="Amélioration de l'entraînement"
	description="Les poids, la gravité, la salle du temps tout cela vous permettra de vous entraîner de façon bien plus efficace qu'avant ! <br />
    De plus s'entraîner avec des joueurs fort vous entraînera encore plus vite ! <br />
    Par contre si vous vous entrainez toujours avec le même mob/joueur votre entraînement sera moins efficace, grâce à un nouveau système d'habitude !"
/>

<FeaturesText
	title="Meilleure Namekien et Humain"
	description="Les namekien ont la possibilité de fusionner avec Kami et Nail durant l'histoire les rendant bien plus fort, les humains ont la possibilité de devenir Cyborg !"
/>

<h2 class="mb-2 mt-5 text-xl font-semibold">
	Les fonctionalités qui seront constamment travailées
</h2>

<FeaturesText
	title="Amélioration de la saga"
	description="De nouveaux ennemies pour la saga (Canon et non Canon). <br />
	Différentes branches de l'histoire qu'on pourrait prendre..."
/>

<FeaturesText
	title="Nouveaux PNJs, batiments, skills"
	description="Pourquoi pas dans le futur rajouter de nouveau PNJs et batiments afin de rendre l'univers plus
	intéressant."
/>

<FeaturesText
	title="Réalisme"
	description="Eau réaliste, inventaire réaliste, arbres réalistes etc... <br />
	Tout pour améliorer l'immersion."
/>
