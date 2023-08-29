import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await prisma.post.findMany({
		take: 20,
		orderBy: {
			comments: {
				_count: 'desc'
			}
		},
		include: {
			votes: true,
			author: true,
			Subreddit: true,
			comments: {
				include: {
					author: true
				}
			},
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
