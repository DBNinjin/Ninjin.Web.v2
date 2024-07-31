import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	let title = url.searchParams.get('title') || 'Undefined';
	let pathName = url.searchParams.get('path') || '/';

	var ogImage = 'https://dynamic-og-image-generator.vercel.app/api/generate';
	var avatar = 'https://ninjin.eu.org/assets/images/ninjin_avatar.png';
	redirect(
		302,
		`${ogImage}?title=${title}&author=Dragon+Ball+Ninjin&avatar=${avatar}&websiteUrl=${pathName}&theme=Default`
	);
}
