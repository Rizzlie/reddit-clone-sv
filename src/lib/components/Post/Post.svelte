<script lang="ts">
	import { timeAgo } from '$lib/utils/time-ago';
	import type { Post, Subreddit, User } from '@prisma/client';

	export let post: Post & { Subreddit: Subreddit; author: User; _count: { comments: number } };

	const date = timeAgo(post.updatedAt);
</script>

<p class="text-sm">
	<a href="/r/{post.Subreddit.name}">
		r/{post.Subreddit.name}
	</a>
	<small>
		Posted by r/{post.author.name} on {date}
	</small>
</p>
<div class="border-input border-l border-r border-t bg-white p-2">
	<h1 class="text-xl font-semibold">
		{post.title}
	</h1>
	<div class="mt-4">
		{post.content?.text}
	</div>
</div>
<div class="border-input border-b border-l border-r bg-slate-50 p-2 text-sm">
	{post._count.comments} Comments
</div>
