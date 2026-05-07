/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink:    'var(--ink)',
        muted:  'var(--muted)',
        rule:   'var(--rule)',
        accent: 'var(--accent)',
        paper:  'var(--paper)',
        ms:     'var(--bg)',
      },
      fontFamily: {
        serif: ["'Crimson Pro'", 'Georgia', 'serif'],
        mono:  ["'IBM Plex Mono'", 'monospace'],
      },
      typography: ({ theme }) => ({
        manuscript: {
          css: {
            '--tw-prose-body':     'var(--ink)',
            '--tw-prose-headings': 'var(--ink)',
            '--tw-prose-links':    'var(--accent)',
            '--tw-prose-code':     'var(--ink)',
            '--tw-prose-pre-bg':   'var(--paper)',
            '--tw-prose-hr':       'var(--rule)',
            '--tw-prose-quotes':   'var(--muted)',
            '--tw-prose-counters': 'var(--muted)',
            '--tw-prose-bullets':  'var(--muted)',
            fontFamily: "'Crimson Pro', Georgia, serif",
            fontSize: '1.0625rem',
            lineHeight: '1.6',
            maxWidth: 'none',
            a: {
              textDecorationStyle: 'dotted',
              textUnderlineOffset: '4px',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
