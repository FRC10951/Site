/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			// Color Palette - Brand Colors
			colors: {
				primary: {
					DEFAULT: '#0640aa',
					dark: '#042d7a',
					light: '#0a5cd4',
				},
				secondary: {
					DEFAULT: '#00b1eb',
					dark: '#008bb8',
					light: '#33c1f0',
				},
				accent: {
					DEFAULT: '#f6c846',
					dark: '#d4a83a',
					light: '#f8d468',
				},
				success: {
					DEFAULT: '#51cf66',
					dark: '#40c057',
					light: '#69db7c',
				},
				warning: {
					DEFAULT: '#ffd43b',
					dark: '#fcc419',
					light: '#ffec8c',
				},
				error: {
					DEFAULT: '#ff6b6b',
					dark: '#ee5a5a',
					light: '#ff8787',
				},
			// Apple Dark Mode Palette
			apple: {
				black: '#000000', // Pure Black - Primary Background (OLED)
				elevated1: '#161618', // Dark Elevated 1 - Primary Surface/Standard Background
				elevated2: '#212124', // Dark Elevated 2 - Secondary Surface/Higher Elevation
				white: '#ffffff', // Pure White - Primary Text/Glyphs
				gray: '#818181', // Mid-Gray - Secondary/Tertiary Text, Disabled States
			},
			background: {
				DEFAULT: '#161618', // Apple Dark Elevated 1 - Primary Surface
				alt: '#212124', // Apple Dark Elevated 2 - Secondary Surface
				elevated: '#212124', // Apple Dark Elevated 2
				black: '#000000', // Apple Pure Black - Deepest layers
				light: '#ffffff',
				lightAlt: '#f8f8f8',
			},
			text: {
				DEFAULT: '#ffffff', // Apple Pure White - Primary Text
				light: '#818181', // Apple Mid-Gray - Secondary Text
				dark: '#000000', // Black for light mode
				muted: '#818181', // Apple Mid-Gray - Tertiary/Disabled Text
				white: '#ffffff',
				black: '#000000',
			},
			border: {
				DEFAULT: '#000000',
				light: '#000000',
				dark: '#ffffff',
			},
			},
			// Typography - Brand Font
			fontFamily: {
				sans: [
					'lulo-clean-w01-one-bold',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'sans-serif',
				],
			},
			fontSize: {
				'heading-1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
				'heading-2': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
				'heading-3': ['2rem', { lineHeight: '1.4', fontWeight: '700' }],
				'heading-4': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
				'heading-5': ['1.25rem', { lineHeight: '1.5', fontWeight: '700' }],
				'heading-6': ['1rem', { lineHeight: '1.5', fontWeight: '700' }],
				lead: ['1.25rem', { lineHeight: '1.75' }],
				body: ['1rem', { lineHeight: '1.75' }],
				small: ['0.875rem', { lineHeight: '1.5' }],
			},
			// Spacing Scale (extends default Tailwind scale)
			spacing: {
				section: '4rem',
				'section-sm': '2rem',
				'section-lg': '6rem',
				18: '4.5rem',
				88: '22rem',
				128: '32rem',
			},
			// Border Radius
			borderRadius: {
				card: '8px',
				button: '4px',
				input: '8px',
			},
			// Box Shadows
			boxShadow: {
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				card: '0 2px 8px rgba(0, 0, 0, 0.1)',
				'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
			},
			// Transitions
			transitionDuration: {
				DEFAULT: '300ms',
				fast: '150ms',
				slow: '500ms',
			},
			transitionTimingFunction: {
				'ease-in-out-cubic': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			// Breakpoints (matching existing site breakpoints)
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				tablet: '968px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};
