<section class="projects">
	<h3>Community Projects</h3>
	<div class="grid">
		<article class="card project-1">
			<img
				src="/project-images/project-1.webp"
				alt="Project 1"
				loading="lazy"
				decoding="async"
				class="project-image"
				width="800"
				height="600"
			/>
			<div class="content">
				<h5>Project 1</h5>
				<p>Description of community project 1...</p>
			</div>
		</article>
		<article class="card project-2">
			<img
				src="/project-images/project-2.webp"
				alt="Project 2"
				loading="lazy"
				decoding="async"
				class="project-image"
				width="600"
				height="400"
			/>
			<div class="content">
				<h5>Project 2</h5>
				<p>Description of community project 2...</p>
			</div>
		</article>
		<article class="card project-3">
			<img
				src="/project-images/project-3.webp"
				alt="Project 3"
				loading="lazy"
				decoding="async"
				class="project-image"
				width="600"
				height="800"
			/>
			<div class="content">
				<h5>Project 3</h5>
				<p>Description of community project 3...</p>
			</div>
		</article>
		<article class="card about">
			<h4 class="about-projects-heading text-[#333] dark:text-white">About Projects</h4>
			<p class="about-projects-text text-[#666] dark:text-white">
				Our community projects are initiatives that extend beyond competition. We work with local
				schools, organize workshops, and create educational resources to inspire the next generation
				of engineers and innovators.
			</p>
		</article>
	</div>
	<div class="cta">
		<button>View All Projects</button>
	</div>
</section>

<style>
	.projects {
		padding: 4rem 2rem;
		background: #f8f8f8;
		width: 100%;
	}

	:global(.dark) .projects {
		background: #161618; /* Apple Dark Elevated 1 - Primary Surface */
	}

	.projects > h3 {
		font-size: 2.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0 0 3rem 0;
		color: #333;
	}

	:global(.dark) .projects > h3 {
		color: #ffffff; /* Apple Pure White - Primary Text */
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto 1fr 1fr; /* First row auto to allow expansion */
		gap: 1.5rem;
		max-width: 95%;
		width: 100%;
		margin: 0 auto 3rem;
		min-height: 700px; /* Changed from fixed height to min-height */
	}

	/* Card uses global .card class with component-specific overrides */
	.card {
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		padding: 0; /* Override global padding for image cards */
	}

	.card.about {
		background: white;
		padding: 2.5rem;
		grid-column: 1 / 3;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		min-height: fit-content; /* Allow content to determine minimum height */
		overflow: visible; /* Allow content to expand */
	}

	:global(.dark) .card.about {
		background: #161618 !important; /* Apple Dark Elevated 1 - Primary Surface */
	}

	.about-projects-heading {
		margin-top: 0;
		margin-bottom: 1.5rem;
		transition: color 0.3s ease;
		color: #333; /* Light mode default */
	}

	:global(.dark) .about-projects-heading {
		color: #ffffff !important; /* Apple Pure White - Primary Text */
	}

	.about-projects-text {
		margin: 0;
		line-height: 1.8;
		word-wrap: break-word;
		overflow-wrap: break-word;
		transition: color 0.3s ease;
		color: #666; /* Light mode default */
	}

	:global(.dark) .about-projects-text {
		color: #ffffff !important; /* Apple Pure White - Primary Text */
	}

	.card.project-1 {
		grid-column: 1 / 3;
		grid-row: 2 / 4;
		min-height: 0; /* Allow grid to shrink this when about expands */
	}

	.card.project-2 {
		grid-column: 3;
		grid-row: 3;
	}

	.card.project-3 {
		grid-column: 3;
		grid-row: 1 / 3;
	}

	.project-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		filter: brightness(0.85);
		z-index: 0;
		aspect-ratio: 16 / 9;
	}

	.card .content {
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
		padding: 2rem;
		color: white;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.card h4 {
		font-size: 1.75rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: #333;
	}

	:global(.dark) .card h4 {
		color: #ffffff; /* Apple Pure White - Primary Text */
	}

	/* Ensure about-projects-heading overrides general card h4 styles with higher specificity */
	.card.about h4.about-projects-heading {
		color: #333 !important;
	}

	:global(.dark) .card.about h4.about-projects-heading {
		color: #ffffff !important; /* Apple Pure White - Primary Text */
	}

	.card h5 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 0.75rem 0;
		color: white;
	}

	.card p {
		font-size: 1rem;
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	.card .content p {
		color: rgba(255, 255, 255, 0.95);
	}

	.cta {
		text-align: center;
	}

	.cta button {
		padding: 0.75rem 2rem;
		border: 2px solid #333;
		background: transparent;
		color: #333;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
	}

	.cta button:hover {
		background: #333;
		color: white;
	}

	@media (max-width: 968px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto 1fr;
			min-height: 600px;
		}

		.card.about {
			grid-column: 1 / -1; /* Span full width */
			grid-row: 1;
			padding: 2rem 1.5rem; /* Reduced padding for smaller screens */
		}

		.card.project-1 {
			grid-column: 1 / -1;
			grid-row: 2;
		}

		.card.project-2 {
			grid-column: 1;
			grid-row: 3;
		}

		.card.project-3 {
			grid-column: 2;
			grid-row: 3;
		}
	}

	@media (max-width: 768px) {
		.projects {
			padding: 3rem 1.5rem;
		}

		.projects > h3 {
			font-size: 2rem;
			margin-bottom: 2rem;
		}

		.grid {
			display: flex;
			flex-direction: column;
			height: auto;
			max-width: 100%;
			gap: 1rem;
			margin-bottom: 2rem;
			min-height: auto;
		}

		.card {
			min-height: 250px;
		}

		.card.about {
			order: -1; /* Make about card appear first on mobile */
			padding: 2rem 1.25rem; /* Adequate padding for mobile */
		}

		.card.project-1 {
			order: 0;
		}

		.card.project-2 {
			order: 1;
		}

		.card.project-3 {
			order: 2;
		}

		.card h4 {
			font-size: 1.5rem;
		}

		.card h5 {
			font-size: 1.25rem;
		}

		.card p {
			font-size: 0.9rem;
		}

		.card.about p {
			padding: 0; /* Ensure no extra padding on mobile */
		}

		.cta button {
			font-size: 0.9rem;
			padding: 0.65rem 1.5rem;
		}
	}
</style>
