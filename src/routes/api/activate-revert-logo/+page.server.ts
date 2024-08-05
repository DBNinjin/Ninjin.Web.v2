export function load({ cookies }) {
	const revertNinjinLogo = cookies.get('ninjin_af#eg@api/activate-revert-logo');

	if (!revertNinjinLogo || revertNinjinLogo === 'false') {
		cookies.set('ninjin_af#eg@api/activate-revert-logo', 'true', {
			path: '/',
			httpOnly: false,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30
		});
	}

	return {
		revertNinjinLogo: revertNinjinLogo
	};
}
