module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    container: {
      padding: '1rem'
    },
    colors: {
      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      green: {
        100: 'hsl(var(--green-HS), 95%)',
        200: 'hsl(var(--green-HS), 90%)',
        300: 'hsl(var(--green-HS), 80%)',
        400: 'hsl(var(--green-HS), 70%)',
        500: 'hsl(var(--green-HS), 60%)',
        600: 'hsl(var(--green-HS), 50%)',
        700: 'hsl(var(--green-HS), 40%)',
        800: 'hsl(var(--green-HS), 30%)',
        900: 'hsl(var(--green-HS), 20%)'
      },
      gray: {
        900: 'hsl(var(--gray-HS), 10%)',
        800: 'hsl(var(--gray-HS), 20%)',
        700: 'hsl(var(--gray-HS), 30%)',
        600: 'hsl(var(--gray-HS), 40%)',
        500: 'hsl(var(--gray-HS), 50%)',
        400: 'hsl(var(--gray-HS), 60%)',
        300: 'hsl(var(--gray-HS), 70%)',
        200: 'hsl(var(--gray-HS), 80%)',
        100: 'hsl(var(--gray-HS), 90%)'
      },
    },
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}
