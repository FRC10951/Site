<!--
	ROOT LAYOUT
	This layout wraps all pages in the application.
	It includes:
	- Global CSS imports
	- Header component (shown on all pages)
	- Footer component (shown on all pages)
	- Page content is injected via <slot />
-->
<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />
{@render children?.()}
<Footer />
