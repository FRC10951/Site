<script lang="ts">
	import type { Snippet } from "svelte";

	export interface Props {
		children?: Snippet;
	}

	const { children }: Props = $props();
</script>

<div class="bg-ssis-blue">
	<p class="max-w-[1200px] mx-auto px-8 py-2 text-4xl font-bold">{@render children?.()}</p>
</div>
