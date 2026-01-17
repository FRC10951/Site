<script lang="ts">
	import type { Snippet } from "svelte";

	export type HeroButtonVariants = "white" | "primary" | "secondary" | "minimal";

	const VARIANT_CLASSES: Record<HeroButtonVariants, string> = {
		white: "px-4 bg-ssis-white hover:bg-ssis-blue text-dark hover:text-ssis-white transition-colors",
		primary: "px-4 bg-ssis-blue/75 hover:bg-ssis-blue text-ssis-white transition-colors",
		secondary: "px-4 bg-ssis-blue/50 hover:bg-ssis-blue/75 text-ssis-bluetransition-colors",
		minimal: "opacity-100 hover:opacity-50 transition-opacity",
	};

	interface Props {
		href?: string;
		variant?: HeroButtonVariants;
		class?: string;
		children?: Snippet;
	}

	let { href = "", variant = "primary", class: extraClasses = "", children }: Props = $props();
	let variantClasses = $derived(VARIANT_CLASSES[variant]);
</script>

<a {href} class={`rounded-lg py-3 font-semibold ${variantClasses} ${extraClasses}`}>
	{@render children?.()}
</a>
