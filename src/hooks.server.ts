import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const locale = event.cookies.get('locale') ?? 'en';

	event.locals.user = {
		name: 'Renato',
		email: 'rntlomba@gmail.com',
	};
	event.locals.locale = locale;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale),
	});
};
