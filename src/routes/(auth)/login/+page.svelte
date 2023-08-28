<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';

	let classes = 'w-full rounded bg-blue-600 py-4 text-slate-100 hover:bg-blue-500';
</script>

<div class="m-auto my-24 flex w-96 flex-col items-center justify-center gap-2">
	<button class={classes} on:click={() => signIn('github')}> Sign in with Github </button>
</div>
