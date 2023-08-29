<script lang="ts">
	import { page } from '$app/stores';

	$: posts = $page.data.posts;
</script>

{#each posts as post}
	<div>
		<p>
			r/{post.Subreddit.name}

			<small>
				Posted by r/{post.Subreddit.name}
			</small>
		</p>
		<h2>{post.title}</h2>
		<p>
			{post.content.text}
		</p>
		<div>
			<span>
				{post._count.comments} Comments
			</span>
			<span>
				{post._count.votes} Votes
			</span>
		</div>
	</div>
{/each}
