/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts,svx,md}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': 'theme(colors.slate.700)',
						'--tw-prose-headings': 'theme(colors.slate.900)',
						'--tw-prose-links': 'theme(colors.sky.500)',
						'--tw-prose-links-hover': 'theme(colors.sky.600)',
						'--tw-prose-code': 'theme(colors.slate.900)',
						'--tw-prose-pre-code': 'theme(colors.slate.200)',
						'--tw-prose-pre-bg': 'theme(colors.slate.800)',
						'--tw-prose-quotes': 'theme(colors.slate.900)',
						'--tw-prose-counters': 'theme(colors.slate.900)',
						'--tw-prose-bullets': 'theme(colors.slate.900)',
						'--tw-prose-hr': 'theme(colors.slate.200)',
						'--tw-prose-th-borders': 'theme(colors.slate.300)',
						'--tw-prose-td-borders': 'theme(colors.slate.200)',

						// Dark mode
						'--tw-prose-invert-body': 'theme(colors.slate.300)',
						'--tw-prose-invert-headings': 'theme(colors.white)',
						'--tw-prose-invert-links': 'theme(colors.sky.400)',
						'--tw-prose-invert-links-hover': 'theme(colors.sky.400)',
						'--tw-prose-invert-code': 'theme(colors.white)',
						'--tw-prose-invert-pre-code': 'theme(colors.slate.200)',
						'--tw-prose-invert-pre-bg': 'theme(colors.slate.800)',
						'--tw-prose-invert-quotes': 'theme(colors.slate.100)',
						'--tw-prose-invert-counters': 'theme(colors.slate.100)',
						'--tw-prose-invert-bullets': 'theme(colors.slate.100)',
						'--tw-prose-invert-hr': 'theme(colors.slate.700)',
						'--tw-prose-invert-th-borders': 'theme(colors.slate.700)',
						'--tw-prose-invert-td-borders': 'theme(colors.slate.800)'
					}
				}
			},
			fontFamily: {
				display: ['Inter var', 'system-ui', 'sans-serif']
			},
			colors: {
				background: 'var(--background)',
				primary: 'var(--primary)',
				'primary-hover': 'var(--primary-hover)',
				text: 'var(--text)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
