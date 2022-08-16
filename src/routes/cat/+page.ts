import type { LoadEvent, LoadOutput } from '@sveltejs/kit';

export async function load({ fetch }: LoadEvent): PageLoadOutput {
	const response = await fetch('https://cats.daichendt.one/list');
	const asJson = await response.json();
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		status: response.status,
		props: {
			cats: response.ok && asJson,
		},
	};
}
