import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('https://cats.daichendt.one/list');
	const asJson = await response.json();
	return {
		cats: response.ok && asJson,
	};
};
