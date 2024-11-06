/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-fira-sans-condensed)", ...fontFamily.sans],
  			fira: ["var(--font-fira-sans-condensed)"]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		textShadow: {
  			default: '2px 2px 0 rgba(0, 0, 0, 0.5)',
  			md: '3px 3px 0 rgba(0, 0, 0, 0.5)',
  			lg: '4px 4px 0 rgba(0, 0, 0, 0.5)'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			floatDelayed: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-16px)'
  				}
  			},
  			'card-hover': {
  				'0%': {
  					transform: 'translateY(0) scale(1)'
  				},
  				'100%': {
  					transform: 'translateY(-10px) scale(1.02)'
  				}
  			},
  			'card-hover-subtle': {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'100%': {
  					transform: 'translateY(-8px)'
  				}
  			},
  			'pulse-soft': {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.01)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			'float-delayed': 'floatDelayed 6s ease-in-out infinite 2s',
  			'card-hover': 'card-hover 0.3s ease-out forwards',
  			'card-hover-subtle': 'card-hover-subtle 0.3s ease-out forwards',
  			'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },

  variants: {
    extend: {
      textShadow: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const textShadowUtilities = {
        ".text-shadow-default": {
          textShadow: "1px 3px 4px rgba(0, 0, 0, 0.2)",
        },

        ".text-shadow-md": {
          textShadow: "3px 3px 0 rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 0 rgba(0, 0, 0, 0.5)",
        },
      };
      addUtilities(textShadowUtilities, ["responsive", "hover", "focus"]);
    },
      require("tailwindcss-animate")
],
};
