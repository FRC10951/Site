<script lang="ts">
	import type { Snippet } from "svelte";

	export interface Props {
		class?: string;
		layoutClasses?: string;
		children?: Snippet;
	}

	const { class: extraClasses = "", layoutClasses = "", children }: Props = $props();
</script>

<section class={extraClasses}>
	<div class={`flex flex-col max-w-content mx-auto px-8 py-32 gap-8 ${layoutClasses}`}>
		{@render children?.()}
	</div>
</section>
