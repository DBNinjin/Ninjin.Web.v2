import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params, url }) {
	let goTo = url.searchParams.get('to');
	let repository = url.searchParams.get('repo');
	let channelId = url.searchParams.get('channel_id');
	let guildId = url.searchParams.get('guild_id');

	switch (goTo) {
		case 'discord':
			if (!guildId || !channelId || (!guildId && !channelId)) {
				redirect(302, `https://discord.gg/JcbAENk`);
			}

			switch (guildId && channelId) {
				case guildId && channelId:
					redirect(302, `https://discord.com/channels/${guildId}/${channelId}`);
				default:
					redirect(302, `https://discord.gg/JcbAENk`);
			}
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
		case 'download/java':
			redirect(
				302,
				`https://javadl.oracle.com/webapps/download/AutoDL?BundleId=238729_478a62b7d4e34b78b671c754eaaf38ab`
			);
		case 'download/launcher':
			redirect(
				302,
				`https://github.com/NinjinMC/Ninjin/raw/master/download/NinjinLauncherBootstrap.jar`
			);
		default:
			redirect(302, `/`);
	}
}
