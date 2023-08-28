import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = await prisma.subreddit.findMany();

	return { subreddits: response };
}) satisfies PageServerLoad;
