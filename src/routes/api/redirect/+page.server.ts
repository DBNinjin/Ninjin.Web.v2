import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params, url }) {
	let goTo = url.searchParams.get('to');
	let repository = url.searchParams.get('repo');

	switch (goTo) {
		case 'discord':
			redirect(302, `https://discord.gg/JcbAENk`);
		case 'youtube':
			redirect(302, `https://www.youtube.com/channel/UCRQcMWRLBLC-jj1XvyCv7yA`);
		case 'github-dev':
			redirect(302, `https://github.com/anotherfrench`);
		case 'github':
			switch (repository) {
				case 'web-v2':
					redirect(302, `https://github.com/NinjinMC/Ninjin.Web.v2`);
				default:
					redirect(302, `https://github.com/NinjinMC`);
			}
		case 'launcher-download':
			redirect(
				302,
				`https://github.com/NinjinMC/Ninjin/raw/master/download/NinjinLauncherBootstrap.jar`
			);
		default:
			redirect(302, `/`);
	}
}
