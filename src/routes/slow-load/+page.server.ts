import type { PageServerLoad } from './$types';

function sleep(ms: number): Promise<void> {
	return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export const load: PageServerLoad = async () => {
	await sleep(2000);
};
