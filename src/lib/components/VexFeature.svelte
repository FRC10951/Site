<script>
	import { onMount } from 'svelte';
	import { lazyLoadImage } from '$lib/utils/imageLoader';

	/** @type {HTMLElement | null} */
	let imageElement;

	onMount(() => {
		if (!imageElement) return;
		return lazyLoadImage('/vex.webp', imageElement);
	});
</script>

<section class="vex-feature">
	<div class="vex-feature-bg" bind:this={imageElement}></div>
	<div class="vex-feature-overlay"></div>
	<div class="vex-feature-content">
		<div class="vex-feature-header">
			<h4 class="vex-feature-title">1599W</h4>
			<p class="vex-feature-description">cycles between all the teams</p>
		</div>
		<div class="vex-feature-subtitle">VEX V5</div>
		<div class="vex-feature-buttons">
			<a href="/vex/1599w" class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark">
				Learn More
			</a>
			<a href="/vex" class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark">
				VEX Overview
			</a>
		</div>
	</div>
</section>

<style>
	.vex-feature {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 400px;
		padding: 2rem 1.5rem;
		overflow: hidden;
		margin: 0;
		height: 100%;
		width: 100%;
	}

	.vex-feature-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
		transition: opacity 0.3s ease;
	}

	.vex-feature-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}

	.vex-feature-content {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 500px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.vex-feature-header {
		margin-bottom: 1rem;
		margin-top: auto;
	}

	.vex-feature-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: white;
		line-height: 1.2;
	}

	.vex-feature-description {
		font-size: 1.1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1rem 0;
	}

	.vex-feature-subtitle {
		font-size: 1.75rem;
		font-weight: 600;
		color: white;
		margin: 0 0 1.5rem 0;
	}

	.vex-feature-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.vex-feature-buttons .btn {
		flex: 1 1 auto;
		min-width: 140px;
	}

	@media (max-width: 968px) {
		.vex-feature {
			min-height: 350px;
			padding: 1.5rem;
		}

		.vex-feature-title {
			font-size: 2rem;
		}

		.vex-feature-description {
			font-size: 1rem;
		}

		.vex-feature-subtitle {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.vex-feature {
			min-height: 300px;
			padding: 1.5rem 1rem;
		}

		.vex-feature-title {
			font-size: 1.75rem;
		}

		.vex-feature-description {
			font-size: 0.95rem;
		}

		.vex-feature-subtitle {
			font-size: 1.25rem;
			margin-bottom: 1rem;
		}

		.vex-feature-buttons {
			flex-direction: column;
		}

		.vex-feature-buttons .btn {
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		.vex-feature {
			min-height: 280px;
			padding: 1rem;
		}

		.vex-feature-title {
			font-size: 1.5rem;
		}

		.vex-feature-description {
			font-size: 0.9rem;
		}

		.vex-feature-subtitle {
			font-size: 1.1rem;
		}
	}
</style>
