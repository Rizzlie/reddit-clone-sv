import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;

	const subreddit = await prisma.subreddit.findFirst({
		where: {
			name: slug
		},
		include: {
			posts: {
				include: {
					author: true,
					votes: true,
					comments: true,
					Subreddit: true,
					_count: {
						select: {
							comments: true,
							votes: true
						}
					}
				},
				orderBy: {
					createdAt: 'desc'
				}
			}
		}
	});

	if (!subreddit) redirect(308, '/communities');

	return {
		subreddit
	};
};
