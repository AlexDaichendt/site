export async function load() {
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		stuff: {
			title: 'Impressum',
			description: 'The impressum I have to include for Germany.',
		},
	};
}
