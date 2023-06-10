import '@sveltejs/kit';

declare module '@sveltejs/kit' {
	namespace App {
		export interface Locals {
			user?: {
				name: string;
				email: string;
			};
		}
	}
}
