import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await prisma.post.findMany({
		take: 5,
		orderBy: {
			comments: {
				_count: 'desc'
			}
		},
		include: {
			Subreddit: true,
			_count: {
				select: {
					comments: true,
					votes: true
				}
			}
		}
	});

	return {
		posts
	};
};
