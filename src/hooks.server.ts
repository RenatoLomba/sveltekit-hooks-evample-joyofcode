import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = {
		name: 'Renato',
		email: 'rntlomba@gmail.com',
	};

	return resolve(event);
};
