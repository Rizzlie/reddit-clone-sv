<script lang="ts">
	import { page } from '$app/stores';
</script>

<ol>
	{#each $page.data.subreddits as subreddit}
		<li>
			<a href="r/{subreddit.name}">
				r/{subreddit.name}
			</a>
		</li>
	{/each}
</ol>
