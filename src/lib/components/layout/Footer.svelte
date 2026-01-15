<!--
	Are u like serious zakhar
	"vibe coding is good" NO IT ISNT bro???
	gng im not touching this
-->

<script lang="ts">
	import { onMount } from "svelte";
	import { browser } from "$app/environment";

	let isDark = $state(false);

	// Reactive FIRST logo path based on theme
	let firstLogoSrc = $derived(
		isDark ? "/FIRST-logos/FIRST-dark-mode-horizontal-logo.webp" : "/FIRST-logos/FIRST-light-mode-horizontal-logo.webp"
	);

	// Initialize dark mode from localStorage (default to light mode)
	onMount(() => {
		if (browser) {
			const stored = localStorage.getItem("theme");
			// Default to light mode if no preference is stored
			isDark = stored === "dark";
			updateTheme();

			// Listen for theme changes from other components
			window.addEventListener("storage", handleStorageChange);
			window.addEventListener("themechange", handleThemeChange);
			window.addEventListener("themeChange", handleThemeChange); // Also listen for capital C version

			// Also listen for DOM mutations to catch class changes
			const observer = new MutationObserver(() => {
				const hasDarkClass = document.documentElement.classList.contains("dark");
				if (hasDarkClass !== isDark) {
					isDark = hasDarkClass;
				}
			});
			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ["class"],
			});

			return () => {
				window.removeEventListener("storage", handleStorageChange);
				window.removeEventListener("themechange", handleThemeChange);
				window.removeEventListener("themeChange", handleThemeChange);
				observer.disconnect();
			};
		}
	});

	function handleStorageChange(e: StorageEvent) {
		if (e.key === "theme") {
			isDark = e.newValue === "dark";
			updateTheme();
		}
	}

	function handleThemeChange(e?: Event) {
		if (browser) {
			// Check the actual state of the document
			const hasDarkClass = document.documentElement.classList.contains("dark");
			isDark = hasDarkClass;
			// Also check localStorage as backup
			const stored = localStorage.getItem("theme");
			if (stored) {
				isDark = stored === "dark";
			}
			// Ensure the class is applied
			updateTheme();
		}
	}

	function toggleTheme() {
		isDark = !isDark;
		updateTheme();
		if (browser) {
			localStorage.setItem("theme", isDark ? "dark" : "light");
			// Dispatch custom event to sync other components (both lowercase and uppercase for compatibility)
			window.dispatchEvent(new CustomEvent("themechange"));
			window.dispatchEvent(new CustomEvent("themeChange"));
		}
	}

	function updateTheme() {
		if (browser) {
			if (isDark) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}
</script>

<footer
	class="footer bg-gradient-to-b from-[#fafafa] to-white dark:!bg-[#161618] dark:from-[#161618] dark:to-[#161618]"
>
	<div class="footer-content">
		<div class="brand">
			<div class="footer-logo-wrapper">
				<img src={firstLogoSrc} alt="FRC 10951 - Saigon South Dragons" class="footer-logo" />
			</div>
			<h6 class="text-[#1a1a1a] dark:text-white">SSIS Dragons</h6>
			<p class="text-[#666] dark:text-white">Team 10951<br />Saigon South International School<br />Saigon, Vietnam</p>
		</div>
		<div class="links">
			<h6 class="text-[#1a1a1a] dark:text-white">Robotics</h6>
			<ul class="text-black dark:text-white">
				<li class="text-black dark:text-white">
					<a href="/frc" aria-label="FRC" class="text-[#666] dark:text-white">FRC</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/vex" aria-label="VEX" class="text-[#666] dark:text-white">VEX</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/stem-community" aria-label="STEM Community" class="text-[#666] dark:text-white">STEM Community</a>
				</li>
			</ul>
		</div>
		<div class="links">
			<h6 class="text-[#1a1a1a] dark:text-white">Team 10951</h6>
			<ul class="text-black dark:text-white">
				<li class="text-black dark:text-white">
					<a href="/about" aria-label="About" class="text-[#666] dark:text-white">About</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/media" aria-label="Media" class="text-[#666] dark:text-white">Media</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/contact" aria-label="Contact" class="text-[#666] dark:text-white">Contact</a>
				</li>
			</ul>
		</div>
		<div class="links">
			<h6 class="text-[#1a1a1a] dark:text-white">VEX Teams</h6>
			<ul class="text-black dark:text-white">
				<li class="text-black dark:text-white">
					<a href="/vex/1599v" aria-label="1599V" class="text-[#666] dark:text-white">1599V</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/vex/1599w" aria-label="1599W" class="text-[#666] dark:text-white">1599W</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/vex/1599x" aria-label="1599X" class="text-[#666] dark:text-white">1599X</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/vex/1599y" aria-label="1599Y" class="text-[#666] dark:text-white">1599Y</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/vex/1599z" aria-label="1599Z" class="text-[#666] dark:text-white">1599Z</a>
				</li>
			</ul>
		</div>
		<div class="links">
			<h6 class="text-[#1a1a1a] dark:text-white">Projects</h6>
			<ul class="text-black dark:text-white">
				<li class="text-black dark:text-white">
					<a href="/projects/empowertech" aria-label="EmpowerTech" class="text-[#666] dark:text-white">EmpowerTech</a>
				</li>
				<li class="text-black dark:text-white">
					<a href="/projects/robokids" aria-label="RoboKids" class="text-[#666] dark:text-white">RoboKids</a>
				</li>
			</ul>
		</div>
		<div class="social">
			<h6 class="text-[#1a1a1a] dark:text-white">Follow Us</h6>
			<div class="social-icons">
				<a
					href="https://instagram.com"
					class="btn-icon"
					aria-label="Instagram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
					</svg>
				</a>
				<a href="https://youtube.com" class="btn-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<path
							d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
						/>
						<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
					</svg>
				</a>
			</div>
		</div>
		<div class="theme-section">
			<h6 class="text-[#1a1a1a] dark:text-white">Theme</h6>
			<button
				class="footer-theme-toggle bg-white dark:bg-[#212124] border-[#e5e5e5] dark:border-[#818181] text-[#666] dark:text-white"
				onclick={toggleTheme}
				aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
				title={isDark ? "Switch to light mode" : "Switch to dark mode"}
			>
				{#if isDark}
					<!-- Sun icon for light mode -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<circle cx="12" cy="12" r="5" />
						<line x1="12" y1="1" x2="12" y2="3" />
						<line x1="12" y1="21" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="3" y2="12" />
						<line x1="21" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					</svg>
					<span>Light Mode</span>
				{:else}
					<!-- Moon icon for dark mode -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
					<span>Dark Mode</span>
				{/if}
			</button>
		</div>
	</div>
	<div class="footer-bottom border-t border-[#e5e5e5] dark:border-[#333333]">
		<p class="text-[#999] dark:text-white">
			&copy; {new Date().getFullYear()} Team 10951 - Saigon South Dragons. All rights reserved.
		</p>
	</div>
</footer>

<style>
	.footer {
		padding: 4rem 2rem 2rem;
		border-top: none;
		margin: 0;
		/* Background handled by Tailwind classes */
		/* Force dark mode background - override any conflicting styles */
	}

	:global(.dark) .footer {
		background: #161618 !important; /* Apple Dark Elevated 1 - Primary Surface */
		background-image: none !important; /* Remove gradient in dark mode */
	}

	.footer-content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 2.5rem;
		max-width: 1200px;
		margin: 0 auto 2rem;
	}

	.footer-logo-wrapper {
		margin-bottom: 1.5rem;
		/* Clear space: minimum 1x logo height on all sides */
		padding: 0.5rem 0;
	}

	.footer-logo {
		height: 3rem;
		width: auto;
		display: block;
		object-fit: contain;
		filter: none; /* Logo displays in original colors in footer */
		transition: opacity 0.3s ease;
	}

	.brand h6 {
		font-size: 1.2rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		letter-spacing: -0.02em;
	}

	.brand p {
		font-size: 0.9rem;
		line-height: 1.7;
		margin: 0;
	}

	.links h6 {
		font-size: 0.85rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.links ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.links li {
		margin-bottom: 0.65rem;
	}

	.links a {
		font-size: 0.9rem;
		text-decoration: none;
		transition: all 0.2s ease;
		display: inline-block;
		position: relative;
	}

	.links a:hover {
		color: #1a1a1a;
		transform: translateX(4px);
	}

	.links a:hover.dark\:text-white {
		opacity: 0.8;
	}

	.links a::after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 1px;
		background-color: #1a1a1a;
		transition: width 0.2s ease;
	}

	:global(.dark) .links a::after {
		background-color: #ffffff;
	}

	.links a:hover::after {
		width: 100%;
	}

	.social {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.social h6 {
		font-size: 0.85rem;
		font-weight: 700;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.social-icons {
		display: flex;
		gap: 0.75rem;
		align-items: center;
	}

	.btn-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 10px;
		color: #666;
		background-color: #ffffff;
		border: 1.5px solid #e5e5e5;
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		position: relative;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
	}

	.btn-icon:hover {
		color: #1a1a1a;
		background-color: #f5f5f5;
		border-color: #d0d0d0;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.btn-icon:active {
		transform: translateY(0);
	}

	.btn-icon:focus-visible {
		outline: 2px solid #1a1a1a;
		outline-offset: 2px;
	}

	.btn-icon .icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}

	.footer-bottom {
		max-width: 1200px;
		margin: 0 auto;
		padding-top: 2rem;
		text-align: center;
	}

	.footer-bottom p {
		font-size: 0.85rem;
		margin: 0;
	}

	/* Footer Theme Toggle */
	.theme-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.theme-section h6 {
		font-size: 0.85rem;
		font-weight: 700;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.footer-theme-toggle {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		border: 1.5px solid;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 500;
		width: 100%;
		text-align: left;
	}

	.footer-theme-toggle:hover {
		background-color: #f5f5f5;
		border-color: #d0d0d0;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	:global(.dark) .footer-theme-toggle:hover {
		background-color: #212124; /* Apple Dark Elevated 2 */
		border-color: #ffffff;
	}

	.footer-theme-toggle:active {
		transform: translateY(0);
	}

	.footer-theme-toggle:focus-visible {
		outline: 2px solid #1a1a1a;
		outline-offset: 2px;
	}

	:global(.dark) .footer-theme-toggle:focus-visible {
		outline-color: #ffffff;
	}

	.footer-theme-toggle .icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}

	.footer-theme-toggle span {
		flex: 1;
	}

	@media (max-width: 768px) {
		.footer {
			padding: 3rem 1.5rem 1.5rem;
		}

		.footer-content {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		.brand {
			grid-column: 1 / -1;
		}

		.social {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 480px) {
		.footer-content {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.brand,
		.social {
			grid-column: 1;
		}
	}
</style>
