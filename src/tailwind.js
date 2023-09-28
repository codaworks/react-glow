const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant }) => {
    addVariant('glow', '.glow-capture [glow] &')
}, {
    theme: {
        extend: {
            colors: {
                glow: 'color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)'
            }
        }
    }
})

