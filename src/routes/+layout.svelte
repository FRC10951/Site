<script lang="ts">
	import { page } from "$app/state";
	import "../app.css";
	import Header from "$lib/components/layout/Header.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";
	import type { Snippet } from "svelte";

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	const siteName = $derived(page.data.meta?.siteName ?? "FRC10951 | Saigon South Dragons");
	const title = $derived(page.data.meta?.title);
	const description = $derived(page.data.meta?.description ?? "TBA");
</script>

<svelte:head>
	<title>{title ? `${title} - ${siteName}` : siteName}</title>
	<meta name="description" content={description} />

	<meta property="og:site_name" content={siteName} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title ?? "FRC10951 | Saigon South Dragons"} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />

	<meta name="apple-mobile-web-app-title" content="FRC10951 | Saigon South Dragons" />
</svelte:head>

<Header />

<main>
	{@render children?.()}
</main>

<Footer />
