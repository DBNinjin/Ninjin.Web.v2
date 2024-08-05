// utils/cookies.js
// @ts-ignore
export function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	// @ts-ignore
	if (parts.length === 2) return parts.pop().split(';').shift();
	return undefined;
}

// @ts-ignore
export function setCookie(name, value, days) {
	let expires = '';
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = `; expires=${date.toUTCString()}`;
	}
	document.cookie = `${name}=${value || ''}${expires}; path=/; SameSite=Strict`;
}

// @ts-ignore
export function checkURL(url) {
	return window.location.href.includes(url);
}
