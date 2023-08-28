import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const postId = params.postId;

	const post = await prisma.post.findFirst({
		where: {
			id: postId
		},
		include: {
			votes: true,
			author: true,
			Subreddit: true
		}
	});

	if (!post) redirect(308, '/communities');

	return {
		post
	};
};
