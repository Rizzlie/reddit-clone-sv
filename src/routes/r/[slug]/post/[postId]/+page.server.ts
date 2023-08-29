import prisma from '$lib/prisma';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const postId = params.postId;

	const post = await prisma.post.findFirst({
		where: {
			id: postId
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

	if (!post) redirect(308, '/communities');

	return {
		post
	};
};

export const actions: Actions = {
	default: async ({ request, locals, params }) => {
		const session = await locals.getSession();

		if (!session || !session?.user) {
			throw error(401, 'Unauthorized');
		}

		const data = await request.formData();

		const postContent = data.get('post') as string;

		const user = await prisma.user.findFirst({
			where: {
				email: session.user.email
			}
		});

		if (!user) {
			throw error(404, 'User not found');
		}

		const comment = await prisma.comment.create({
			data: {
				text: postContent,
				authorId: user.id,
				postId: params.postId
			}
		});

		return { comment };
	}
};
