module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#000000",
                white: "#ffffff",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
