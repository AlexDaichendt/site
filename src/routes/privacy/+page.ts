export async function load() {
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
	return {
		stuff: {
			title: 'Privacy',
			description:
				'The privacy policy I have to include even though I don"t collect any data or use shady services.',
		},
	};
}
