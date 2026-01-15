<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	const navItems = [
		{ label: 'SSIS', href: '/' },
		{ label: 'Team', href: '/about' },
		{ label: 'Media', href: '/' },
		{ label: 'Outreach', href: '/' },
		{ label: 'Our Projects', href: '/' },
		{ label: 'Contact', href: '/contact' },
	];
	let mobileMenuOpen = false;
	let isDark = false;

	// Initialize dark mode from localStorage (default to light mode)
	onMount(() => {
		if (browser) {
			const stored = localStorage.getItem('theme');
			// Default to light mode if no preference is stored
			isDark = stored === 'dark';
			updateTheme();

			// Listen for theme changes from other components
			window.addEventListener('storage', handleStorageChange);
			window.addEventListener('themechange', handleThemeChange);
		}
	});

	function handleStorageChange(e: StorageEvent) {
		if (e.key === 'theme') {
			isDark = e.newValue === 'dark';
			updateTheme();
		}
	}

	function handleThemeChange() {
		if (browser) {
			const stored = localStorage.getItem('theme');
			isDark = stored === 'dark';
			updateTheme();
		}
	}

	function toggleTheme() {
		isDark = !isDark;
		updateTheme();
		if (browser) {
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
			// Dispatch custom event to sync other components (both lowercase and uppercase for compatibility)
			window.dispatchEvent(new CustomEvent('themechange'));
			window.dispatchEvent(new CustomEvent('themeChange'));
		}
	}

	function updateTheme() {
		if (browser) {
			if (isDark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}

	// Manage body scroll state reactively
	$: if (browser) {
		document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Cleanup: restore body scroll on component destroy
	onDestroy(() => {
		if (browser) {
			document.body.style.overflow = '';
		}
	});
</script>

<header class="site-header" class:menu-open={mobileMenuOpen}>
	<div class="logo-wrapper" class:menu-open={mobileMenuOpen}>
		<img src="/branding/wordmark-color.png" alt="Saigon South Dragons" class="logo" />
	</div>
	<nav class="desktop-nav">
		{#each navItems as item}
			<a href={item.href} class="nav-link">{item.label}</a>
		{/each}
		<button
			class="theme-toggle"
			on:click={toggleTheme}
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
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
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			{/if}
		</button>
	</nav>
	<button
		class="mobile-menu-toggle"
		class:open={mobileMenuOpen}
		on:click={toggleMobileMenu}
		aria-label={mobileMenuOpen ? 'Close menu' : 'Toggle menu'}
		aria-expanded={mobileMenuOpen}
	>
		<span class="hamburger-icon">
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
		</span>
		<span class="close-icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		</span>
	</button>
	{#if mobileMenuOpen}
		<nav class="mobile-nav" role="dialog" aria-modal="true" aria-label="Navigation menu">
			<div class="mobile-nav-content">
				{#each navItems as item}
					<a href={item.href} class="mobile-nav-link" on:click={closeMobileMenu}>{item.label}</a>
				{/each}
				<button
					class="mobile-theme-toggle"
					on:click={toggleTheme}
					aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
					title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{#if isDark}
						<!-- Sun icon for light mode -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
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
					{:else}
						<!-- Moon icon for dark mode -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
						</svg>
					{/if}
					<span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
				</button>
			</div>
		</nav>
	{/if}
</header>

<style>
	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 2rem;
		background: transparent;
		position: absolute;
		inset: 0 0 auto;
		z-index: 100;
	}

	.site-header.menu-open {
		position: fixed;
		z-index: 1000;
	}

	.logo-wrapper {
		position: relative;
		z-index: 1001;
		flex-shrink: 0;
		/* Clear space: minimum 1x logo height on all sides */
		padding: 0.5rem;
	}

	.logo-wrapper.menu-open {
		position: fixed;
		left: 2rem;
		top: 1.5rem;
	}

	.logo {
		height: 5rem;
		width: auto;
		display: block;
		object-fit: contain;
	}

	.desktop-nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.mobile-menu-toggle {
		display: none;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 5px;
		width: 35px;
		height: 35px;
		z-index: 1001;
		position: relative;
	}

	/* Store original position for overlay */
	.mobile-menu-toggle:not(.open) {
		position: relative;
	}

	/* When menu is open, X button overlays the hamburger position */
	.site-header.menu-open .mobile-menu-toggle {
		position: fixed;
		right: 2rem;
		top: 1.5rem;
		/* Ensure it stays in the exact same position */
		width: 35px;
		height: 35px;
	}

	.hamburger-icon,
	.close-icon {
		position: absolute;
		inset: 50% auto auto 50%;
		transform: translate(-50%, -50%);
		width: 25px;
		height: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			opacity 0s,
			visibility 0s;
	}

	.hamburger-icon {
		flex-direction: column;
		gap: 5px;
		opacity: 1;
		visibility: visible;
	}

	.close-icon {
		opacity: 0;
		visibility: hidden;
		color: white;
	}

	.close-icon svg {
		width: 25px;
		height: 25px;
	}

	.mobile-menu-toggle.open .hamburger-icon {
		opacity: 0;
		visibility: hidden;
	}

	.mobile-menu-toggle.open .close-icon {
		opacity: 1;
		visibility: visible;
	}

	.hamburger-line {
		width: 25px;
		height: 2px;
		background: white;
	}

	.mobile-nav {
		position: fixed;
		inset: 0;
		width: 100vw;
		min-width: 100vw;
		height: 100dvh;
		background: #000000; /* Apple Pure Black - Deepest layers, full-screen overlays */
		z-index: 998;
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
		overflow: hidden;
		box-sizing: border-box;
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.mobile-nav-content {
		display: flex;
		flex-direction: column;
		padding: 5rem 2rem 2rem;
		gap: 0;
		height: 100%;
		overflow-y: auto;
		margin-top: 1rem;
	}

	.mobile-nav-link {
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 500;
		padding: 1.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		transition:
			opacity 0.3s ease,
			padding-left 0.3s ease;
		display: block;
	}

	.mobile-nav-link:hover {
		opacity: 0.7;
		padding-left: 1rem;
	}

	.mobile-nav-link:last-child {
		border-bottom: none;
	}

	.nav-link {
		color: white;
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		position: relative;
		transition: opacity 0.3s ease;
	}

	.nav-link:hover {
		opacity: 0.8;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		inset: auto 0 -4px;
		height: 2px;
		background: currentColor;
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.nav-link:hover::after {
		transform: scaleX(1);
	}

	/* Theme Toggle Button */
	.theme-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 4px;
		cursor: pointer;
		padding: 0.5rem;
		width: 40px;
		height: 40px;
		color: white;
		transition: all var(--transition-base) var(--transition-easing);
		margin-left: 1rem;
	}

	.theme-toggle:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.5);
		transform: translateY(-2px);
	}

	.theme-toggle:active {
		transform: translateY(0);
	}

	.theme-toggle svg {
		width: 20px;
		height: 20px;
	}

	/* Mobile Theme Toggle */
	.mobile-theme-toggle {
		display: flex;
		align-items: center;
		gap: 1rem;
		width: 100%;
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 500;
		padding: 1.5rem 0;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		background: transparent;
		border-left: none;
		border-right: none;
		cursor: pointer;
		transition:
			opacity 0.3s ease,
			padding-left 0.3s ease;
		text-align: left;
		margin-top: 1rem;
	}

	.mobile-theme-toggle:hover {
		opacity: 0.7;
		padding-left: 1rem;
	}

	.mobile-theme-toggle svg {
		width: 24px;
		height: 24px;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.desktop-nav {
			display: none;
		}

		.mobile-menu-toggle {
			display: flex;
		}

		.site-header.menu-open {
			position: fixed;
		}

		.logo-wrapper.menu-open {
			position: fixed;
			left: 2rem;
			top: 1.5rem;
		}

		.site-header.menu-open .mobile-menu-toggle {
			position: fixed;
			right: 2rem;
			top: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.site-header {
			padding: 1rem;
		}

		.site-header.menu-open {
			padding: 1rem;
		}

		.logo-wrapper.menu-open {
			left: 1rem;
			top: 1rem;
		}

		.logo {
			height: 2rem;
		}

		.site-header.menu-open .mobile-menu-toggle {
			right: 1rem;
			top: 1rem;
			width: 35px;
			height: 35px;
		}
	}
</style>
