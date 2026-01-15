<script lang="ts">
	import type { Snippet } from "svelte";

	export type HeroButtonVariants = "primary" | "minimal";

	const VARIANT_CLASSES: Record<HeroButtonVariants, string> = {
		primary: "px-4 bg-ssis-white hover:bg-ssis-blue text-dark hover:text-ssis-white transition-colors",
		minimal: "hover:opacity-75 transition-opacity text-ssis-white",
	};

	interface Props {
		href?: string;
		variant?: HeroButtonVariants;
		children?: Snippet;
	}

	let { href = "", variant = "primary", children }: Props = $props();
	let variantClasses = $derived(VARIANT_CLASSES[variant]);
</script>

<a {href} class={`rounded-lg py-3 font-semibold ${variantClasses}`}>
	{@render children?.()}
</a>
