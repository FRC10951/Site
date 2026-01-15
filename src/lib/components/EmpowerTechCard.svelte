<script>
	import { onMount } from "svelte";
	import { lazyLoadImage } from "$lib/utils/imageLoader";

	/** @type {HTMLElement | null} */
	let imageElement = $state();

	onMount(() => {
		if (!imageElement) return;
		return lazyLoadImage("/STEM-community-images/empowertech.webp", imageElement);
	});
</script>

<section class="empowertech-card">
	<div class="empowertech-bg" bind:this={imageElement}></div>
	<div class="empowertech-overlay"></div>
	<div class="empowertech-content">
		<div class="empowertech-text">
			<h5 class="empowertech-title">Empower Tech</h5>
			<p class="empowertech-description">Empowering communities through technology education and innovation.</p>
		</div>
		<a href="/projects/empowertech" class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark">
			Learn More
		</a>
	</div>
</section>

<style>
	.empowertech-card {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		height: 100%;
		min-height: 380px;
		overflow: hidden;
		margin: 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.empowertech-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
		transition: transform 0.3s ease;
	}

	.empowertech-card:hover .empowertech-bg {
		transform: scale(1.02);
	}

	.empowertech-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.empowertech-content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: flex-end;
	}

	.empowertech-text {
		margin-top: auto;
		margin-bottom: 1rem;
	}

	.empowertech-title {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: white;
	}

	.empowertech-description {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1rem 0;
	}

	@media (max-width: 968px) {
		.empowertech-card {
			padding: 1rem;
			min-height: 280px;
		}

		.empowertech-title {
			font-size: 1.25rem;
		}

		.empowertech-description {
			font-size: 0.875rem;
		}
	}
</style>
