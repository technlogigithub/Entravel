import { text } from 'stream/consumers';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))',
				light: 'hsl(var(--primary-light))',
				extraLight: 'hsl(var(--primary-extraLight))',
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
				extraLight: 'hsl(var(--secondary-extraLight))',
  			},
			  popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			placeholder: {
				DEFAULT: 'hsl(var(--placeholder))',
			},
			border: {
				DEFAULT: 'hsl(var(--border))',
			},
			blue: {
				DEFAULT: 'hsl(var(--blue))',
				'50': 'hsl(var(--blue-50))',
			},
			green: {
				DEFAULT: 'hsl(var(--green))',
			},
			yellow: {
				DEFAULT: 'hsl(var(--yellow))',
			},
			red: {
				DEFAULT: 'hsl(var(--red))',
			},
			headerBorder: {
				DEFAULT: 'hsl(var(--gray-light))',
			},
			lightBorder: {
				DEFAULT: 'hsl(var(--light-border))',
			},
			gray:{
				DEFAULT: 'hsl(var(--gray))',
				light: 'hsl(var(--gray-light))',
				dark: 'hsl(var(--gray-dark))',
			},
  			text: {
  				DEFAULT: 'hsl(var(--text-color))',
  				light: 'hsl(var(--text-light))',
  			},
			bgOne:{
				DEFAULT: 'hsl(var(--bg-one))',
			},
			input: {
				DEFAULT: 'hsl(var(--input))',
			},
			black: {
				DEFAULT: 'hsl(var(--black))',
				dark: 'hsl(var(--black-dark))',
				light: 'hsl(var(--black-light))',
			}
  		},
		  fontFamily: {
			dmsans: ['DM Sans', 'sans-serif'], 
			display: 'Inter',
		  },
		  backgroundImage: {
			'hero-pattern': "url('/hero_img.jpg')",
			'disocunt-bg': "url('/discount.jpg')",
			'disocunt-mobile-bg': "url('/mobile_saving.jpg')",
		  },
		  screens:{
			"3xl":"1920px"
		  },
		  boxShadow: {
			'sm': '0 -3px 57px 0 rgba(0, 0, 0, 0.1)',
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}