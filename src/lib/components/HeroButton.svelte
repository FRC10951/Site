<script lang="ts">
	type HeroButtonVariants = 'primary' | 'minimal';

	const VARIANT_CLASSES: Record<HeroButtonVariants, string> = {
		primary: 'bg-gray-50 hover:bg-gray-300 text-dark transition-colors',
		minimal: 'hover:opacity-75 transition-opacity',
	};

	export let href = '';
	export let variant = 'inverted' as HeroButtonVariants;

	$: variantClasses = VARIANT_CLASSES[variant];
</script>

<a {href} class={`rounded-lg px-4 py-3 font-semibold ${variantClasses}`}>
	<slot />
</a>
