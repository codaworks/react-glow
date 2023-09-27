const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant }) => {
    addVariant('glow', ':merge(.glow-capture .glow-mask) &')
}, {
    theme: {
        extend: {
            colors: {
                glow: 'color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)'
            }
        }
    }
})

