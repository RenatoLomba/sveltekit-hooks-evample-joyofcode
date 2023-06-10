import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const locale = event.cookies.get('locale') ?? 'en';

	event.locals.user = {
		name: 'Renato',
		email: 'rntlomba@gmail.com',
	};
	event.locals.locale = locale;

	const route = event.url;

	const start = performance.now();
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale),
	});
	const end = performance.now();

	const responseTime = end - start;

	if (responseTime > 2000) {
		console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`);
	}
	if (responseTime < 1000) {
		console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`);
	}

	return response;
};
