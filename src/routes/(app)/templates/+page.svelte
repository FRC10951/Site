<main class="templates-page">
	<div class="page-header">
		<div class="container">
			<h1>Templates</h1>
			<p>
				This page previously showcased reusable layout templates which have since been removed from the
				current version of the site.
			</p>
			<p>We&apos;re working on a refreshed templates experience – stay tuned!</p>
		</div>
	</div>
</main>

<style>
	.templates-page {
		background: #f8f8f8;
		min-height: 100vh;
	}

	.page-header {
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		color: white;
		padding: 4rem 2rem;
		text-align: center;
	}

	.page-header h1 {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
	}

	.page-header p {
		font-size: 1.2rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.navigation-bar {
		background: white;
		padding: 1.5rem 2rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.navigation-bar .container {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.nav-button {
		padding: 0.75rem 1.5rem;
		background: #f8f8f8;
		border: 2px solid transparent;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.95rem;
		font-weight: 500;
		color: #666;
		transition: all 0.3s ease;
	}

	.nav-button:hover {
		background: #e5e5e5;
		color: #333;
	}

	.nav-button.active {
		background: #333;
		color: white;
		border-color: #333;
	}

	.templates-container {
		padding: 2rem 0;
	}

	.template-section {
		margin-bottom: 4rem;
		background: white;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		margin-left: 2rem;
		margin-right: 2rem;
	}

	.section-label {
		background: #f8f8f8;
		padding: 1.5rem 2rem;
		border-bottom: 1px solid #e5e5e5;
	}

	.section-label h2 {
		font-size: 1.5rem;
		font-weight: 300;
		margin: 0 0 0.5rem 0;
		color: #333;
	}

	.section-label p {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
		font-family: "Courier New", monospace;
	}

	.info-section {
		background: white;
		padding: 4rem 2rem;
		margin-top: 4rem;
	}

	.info-section h2 {
		font-size: 2.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0 0 3rem 0;
		color: #333;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.info-card {
		background: #f8f8f8;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
	}

	.info-card h3 {
		font-size: 1.3rem;
		font-weight: 300;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.info-card p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #555;
		margin: 0;
	}

	.info-card code {
		background: #e5e5e5;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-family: "Courier New", monospace;
		color: #333;
	}

	@media (max-width: 968px) {
		.page-header {
			padding: 3rem 1.5rem;
		}

		.page-header h1 {
			font-size: 2rem;
		}

		.page-header p {
			font-size: 1rem;
		}

		.info-section h2 {
			font-size: 2rem;
		}
	}

	@media (max-width: 768px) {
		.navigation-bar {
			padding: 1rem;
		}

		.nav-button {
			padding: 0.5rem 1rem;
			font-size: 0.85rem;
		}

		.template-section {
			margin-left: 1rem;
			margin-right: 1rem;
		}

		.info-section {
			padding: 3rem 1.5rem;
		}
	}
</style>
