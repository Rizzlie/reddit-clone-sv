<script>
	import Button from '$lib/components/ui/Button/Button.svelte';
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import Textarea from '$lib/components/ui/Textarea/Textarea.svelte';

	const dispatch = createEventDispatcher();

	let creating = false;
</script>

<form
	method="POST"
	class="my-6 flex flex-col"
	use:enhance={() => {
		creating = true;

		return async ({ update, formData }) => {
			await update();
			creating = false;
			dispatch('postCreated', formData);
		};
	}}
>
	<label for="comment" class="mb-2 block text-xs">
		Comment as {$page.data.session?.user?.name}
	</label>

	<Textarea
		id="comment"
		name="post"
		placeholder="What are you thoughts?"
		required={true}
		disabled={creating}
		rows={8}
	/>

	<div class="mt-4 text-end">
		<Button disabled={creating}>Post</Button>
	</div>
</form>
