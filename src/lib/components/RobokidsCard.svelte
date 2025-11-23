<script>
	import { onMount } from 'svelte';
	import { lazyLoadImage } from '$lib/utils/imageLoader';

	/** @type {HTMLElement | null} */
	let imageElement;

	onMount(() => {
		if (!imageElement) return;
		return lazyLoadImage('/STEM-community-images/robokids.webp', imageElement);
	});
</script>

<section class="robokids-card">
	<div class="robokids-bg" bind:this={imageElement}></div>
	<div class="robokids-overlay"></div>
	<div class="robokids-content">
		<div class="robokids-text">
			<h5 class="robokids-title">Robokids</h5>
			<p class="robokids-description">
				Inspiring the next generation of robotics enthusiasts through hands-on learning.
			</p>
		</div>
		<a
			href="/projects/robokids"
			class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark"
		>
			Learn More
		</a>
	</div>
</section>

<style>
	.robokids-card {
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

	.robokids-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
		transition: transform 0.3s ease;
	}

	.robokids-card:hover .robokids-bg {
		transform: scale(1.02);
	}

	.robokids-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.robokids-content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: flex-end;
	}

	.robokids-text {
		margin-top: auto;
		margin-bottom: 1rem;
	}

	.robokids-title {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: white;
	}

	.robokids-description {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1rem 0;
	}

	@media (max-width: 968px) {
		.robokids-card {
			padding: 1rem;
			min-height: 280px;
		}

		.robokids-title {
			font-size: 1.25rem;
		}

		.robokids-description {
			font-size: 0.875rem;
		}
	}
</style>
