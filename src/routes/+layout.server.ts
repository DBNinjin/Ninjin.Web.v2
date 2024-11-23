export const prerender = true;

export function load({ cookies }) {
	return {
		revertNinjinLogo: cookies.get('ninjin_nuiqka#eg@api/activate-revert-logo') || 'false'
	};
}
