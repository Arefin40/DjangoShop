/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "../../templates/**/*.html", // global templates
      "../../apps/**/*.html", // app templates
   ],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
            sm: "1.5rem",
            lg: "2rem",
         },
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         fontFamily: { sans: ["Mulish", "sans-serif"] },
         colors: {
            surface: "hsl(var(--surface))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
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
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
      },
   },
   plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
   ],
};
