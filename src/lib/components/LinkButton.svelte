<script lang="ts">
	type LinkButtonVariants = 'inverted';

	const VARIANT_CLASSES: Record<LinkButtonVariants, string> = {
		inverted: 'bg-gray-50 hover:bg-gray-300',
	};

	export let href = '';
	export let variant = 'inverted' as LinkButtonVariants;

	$: variantClasses = VARIANT_CLASSES[variant];
</script>

<a {href} class={`rounded-lg px-4 py-3 text-dark font-semibold transition-colors ${variantClasses}`}
	><slot /></a
>
