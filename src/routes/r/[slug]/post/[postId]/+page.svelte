<script lang="ts">
	import { page } from '$app/stores';

	let date: string;
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;
	const dateTimeFormat1 = new Intl.DateTimeFormat('en-GB', options);

	$: {
		const d1 = new Date($page.data.post.updatedAt);
		date = dateTimeFormat1.format(d1);
	}
</script>

<div>
	<a href="/r/{$page.data.post.Subreddit.name}">
		r/{$page.data.post.Subreddit.name}
	</a>
	<small>
		Posted by r/{$page.data.post.author.name} on {date}
	</small>
</div>
<h1>
	{$page.data.post.title}
</h1>
<p>
	{$page.data.post.content.text}
</p>
