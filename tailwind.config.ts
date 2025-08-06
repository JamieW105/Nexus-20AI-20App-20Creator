import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Cosmic/Neon Color Scheme
        cosmic: {
          purple: "#7B2CBF",
          "dark-blue": "#3C096C",
          navy: "#1A1A2E",
          slate: "#21213A",
          white: "#EDEDED",
          cyan: "#00FFFF",
          lavender: "#E6E6FA",
        },
        glass: {
          "purple-light": "rgba(123, 44, 191, 0.1)",
          "purple-medium": "rgba(123, 44, 191, 0.2)",
          "blue-light": "rgba(60, 9, 108, 0.1)",
          "blue-medium": "rgba(60, 9, 108, 0.2)",
          dark: "rgba(26, 26, 46, 0.8)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(123, 44, 191, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(123, 44, 191, 0.8)",
          },
        },
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.8",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(123, 44, 191, 0.5)",
        "glow-lg": "0 0 40px rgba(123, 44, 191, 0.7)",
        "glow-cyan": "0 0 20px rgba(0, 255, 255, 0.5)",
        "glow-lavender": "0 0 20px rgba(230, 230, 250, 0.5)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".glass": {
          background: "rgba(33, 33, 58, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(123, 44, 191, 0.2)",
        },
        ".glass-purple": {
          background: "rgba(123, 44, 191, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(123, 44, 191, 0.3)",
        },
        ".glass-blue": {
          background: "rgba(60, 9, 108, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(60, 9, 108, 0.3)",
        },
        ".text-glow": {
          textShadow: "0 0 10px rgba(123, 44, 191, 0.8)",
        },
        ".text-glow-cyan": {
          textShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
        },
        ".gradient-cosmic": {
          background: "linear-gradient(135deg, #7B2CBF 0%, #3C096C 100%)",
        },
        ".gradient-cosmic-hover": {
          background: "linear-gradient(135deg, #9D4EDD 0%, #5A189A 100%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
