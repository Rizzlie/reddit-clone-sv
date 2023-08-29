<script lang="ts">
	import { timeAgo } from '$lib/utils/time-ago';
	import type { Comment, User } from '@prisma/client';

	export let comment: Comment & { author: User };

	const user = comment.author;
	const date = timeAgo(comment.createdAt);
	const fullDate = new Date(comment.createdAt).toLocaleString();
</script>

<div class="mb-6 border bg-white p-4">
	<div class="flex items-center">
		<img class="mr-2 h-8 w-8 rounded-full" src={user.image} alt={user.name} />
		<p class="text-sm">
			{user.name} · <span title={fullDate}>{date}</span>
		</p>
	</div>
	<p class="my-2 pl-10 text-sm">
		{comment.text}
	</p>
</div>
