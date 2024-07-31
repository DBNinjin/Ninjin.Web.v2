export function load({ cookies }) {
	return {
		revertNinjinLogo: cookies.get('ninjin_af#eg@api/activate-revert-logo') || 'false'
	};
}
