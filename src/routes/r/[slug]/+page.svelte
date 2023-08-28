<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="h-14 text-3xl font-bold md:text-4xl">
	r/{$page.data.subreddit.name}
</h1>

{#each $page.data.subreddit.posts as post}
	<div>
		<p class="mt-1 max-h-40 truncate text-xs text-gray-500">Posted by {post.author.name}</p>
		<a
			href="/r/{$page.data.subreddit.name}/post/{post.id}/"
			class="py-2 text-xl font-semibold leading-6 text-gray-900"
		>
			{post.title}
		</a>

		<p>
			{post.content.text}
		</p>
	</div>
{/each}
