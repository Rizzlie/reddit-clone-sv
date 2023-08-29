<script lang="ts">
	import { timeAgo } from '$lib/utils/time-ago';
	import type { Post, Subreddit, User } from '@prisma/client';

	export let post: Post & { Subreddit: Subreddit; author: User; _count: { comments: number } };
	export let interactive = false;
	export let showSubreddit = true;

	const date = timeAgo(post.updatedAt);
</script>

<p class="text-sm">
	{#if showSubreddit}
		{#if interactive}
			<a href="/r/{post.Subreddit.name}">
				r/{post.Subreddit.name}
			</a>
		{:else}
			r/{post.Subreddit.name}
		{/if}
	{/if}
	<small>
		Posted by r/{post.author.name} on {date}
	</small>
</p>
<div
	class="border-input border-l border-r border-t bg-white p-2 dark:border-slate-800 dark:bg-slate-900"
>
	{#if interactive}
		<a href="/r/{post.Subreddit.name}/post/{post.id}" class="text-xl font-semibold">
			{post.title}
		</a>
	{:else}
		<h1 class="text-xl font-semibold">
			{post.title}
		</h1>
	{/if}
	<div class="mt-4">
		{post.content?.text}
	</div>
</div>
<div
	class="border-input border-b border-l border-r bg-slate-50 p-2 text-sm dark:border-slate-800 dark:bg-slate-800"
>
	{post._count.comments} Comments
</div>
