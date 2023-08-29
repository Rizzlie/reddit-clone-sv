<script lang="ts">
	import { page } from '$app/stores';
	import { getClasses } from '$lib/utils/css-classes';
	import Comment from '$lib/components/Comment/Comment.svelte';
	import CommentForm from '$lib/components/CommentForm/CommentForm.svelte';
	import Post from '$lib/components/Post/Post.svelte';

	const isLoggedIn = $page.data.session && $page.data.session?.user !== null;

	getClasses('controls');
</script>

<div class="mb-6">
	<Post post={$page.data.post} />
</div>

{#if isLoggedIn}
	<CommentForm />
{/if}

{#each $page.data.post.comments as comment}
	<Comment {comment} />
{/each}
