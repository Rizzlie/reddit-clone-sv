<script lang="ts">
	import { getClasses } from '$lib/utils/css-classes';
	const classes = getClasses('controls');
</script>

<input {...$$restProps} class={classes} />
