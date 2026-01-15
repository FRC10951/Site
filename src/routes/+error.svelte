<script>
	import { page } from "$app/state";
</script>

<div class="mx-auto max-w-screen-xl px-4 py-64 text-center">
	<h1 class="text-heading mb-1 text-4xl font-bold">{page.status}</h1>
	<p class="text-lg">{page.error?.message}</p>
</div>
