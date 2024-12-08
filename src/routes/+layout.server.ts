export const prerender = true;

export function load({ cookies }) {
	return {
		revertNinjinLogo: cookies.get('ninjin#eg@api/activate-revert-logo') || 'false'
	};
}
