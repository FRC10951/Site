<section class="section bg-white">
	<div class="container">
		<div class="about-grid">
			<div class="text">
				<h3 class="title">About the Team</h3>
				<p class="text-lead mb-4">
					Team 10951, the Saigon South Dragons, is a competitive robotics team representing Saigon South International
					School. We compete in FIRST Robotics Competition, bringing together students passionate about STEM,
					engineering, and innovation.
				</p>
				<div class="stats-grid">
					<div class="stat">
						<span class="number">67</span>
						<small>Engineers</small>
					</div>
					<div class="stat">
						<span class="number">5</span>
						<small>Coaches</small>
					</div>
					<div class="stat stat-last">
						<span class="number">3</span>
						<small>Sponsors</small>
					</div>
				</div>
			</div>
			<div class="photo">
				<img
					src="/homepage-images/team.webp"
					alt="Team 10951"
					loading="lazy"
					decoding="async"
					width="420"
					height="280"
					class="img-responsive img-rounded img-shadow-lg"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 420px;
		gap: 3rem;
		align-items: stretch;
	}

	/* Two-column layout for medium screens - progressively reduce image column */
	@media (max-width: 1024px) {
		.about-grid {
			grid-template-columns: 1fr 380px;
			gap: 2.5rem;
		}
	}

	@media (max-width: 900px) {
		.about-grid {
			grid-template-columns: 1fr 340px;
			gap: 2rem;
		}
	}

	/* Switch to single column at 800px to ensure image always fits the screen */
	@media (max-width: 800px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.photo {
			order: -1;
			justify-content: center;
		}

		.photo img {
			max-width: 100%;
			width: 100%;
			height: auto;
			max-height: 400px;
			object-fit: contain;
		}
	}

	.title {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		font-family: "Georgia", serif;
		font-style: italic;
		color: var(--color-text-dark);
	}

	:global(.dark) .title {
		color: #ffffff; /* Apple Pure White - Primary Text */
	}

	.text p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0 0 2rem 0;
	}

	:global(.dark) .text p {
		color: #ffffff; /* Apple Pure White - Primary Text */
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 2rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.stat .number {
		font-size: 4rem;
		font-weight: 700;
		display: block;
		color: var(--color-text-dark);
		line-height: 1;
	}

	:global(.dark) .stat .number {
		color: #ffffff; /* Apple Pure White - Primary Text */
	}

	.stat small {
		font-size: 1rem;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-top: 0.5rem;
	}

	:global(.dark) .stat small {
		color: #818181; /* Apple Mid-Gray - Secondary Text */
	}

	.photo {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.photo img {
		width: 100%;
		height: 100%;
		max-width: 420px;
		object-fit: cover;
		object-position: center;
		border-radius: 8px;
	}

	/* Ensure image fits in two-column layout - scales down progressively */
	@media (max-width: 1024px) {
		.photo img {
			max-width: 380px;
		}
	}

	@media (max-width: 900px) {
		.photo img {
			max-width: 340px;
		}
	}

	/* At 800px and below, image is in single column and uses full width */
	@media (max-width: 800px) {
		.photo img {
			max-width: 100%;
			width: 100%;
		}
	}

	/* Mobile optimizations - already in single column from 768px */
	@media (max-width: 640px) {
		.photo img {
			max-height: 350px;
		}

		.title {
			font-size: 2rem;
			text-align: center;
		}

		.text {
			text-align: center;
		}

		.text p {
			font-size: 1rem;
		}

		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}

		.stat-last {
			grid-column: 1 / -1;
		}

		.stat .number {
			font-size: 3rem;
		}
	}

	/* Extra small screens - single column stats */
	@media (max-width: 480px) {
		.about-grid {
			gap: 1.5rem;
		}

		.title {
			font-size: 1.75rem;
		}

		.photo img {
			max-height: 300px;
		}

		.stats-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.stat-last {
			grid-column: 1;
		}

		.stat .number {
			font-size: 2.5rem;
		}
	}
</style>
