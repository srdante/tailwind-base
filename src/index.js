const plugin = require('tailwindcss/plugin')

const tailwindBase = plugin(function ({ addBase, theme }) {
  addBase({
    // h* in common
    'h1, h2, h3, h4, h5, h6': { color: theme('colors.gray.900'), leading: theme('leading.6') },
    '.dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6': { color: theme('colors.white') },

    // h*
    'h1': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.semibold') },
    'h2': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.semibold') },
    'h3': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.medium') },
    'h4': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.medium') },
    'h5': { fontSize: theme('fontSize.base'), fontWeight: theme('fontWeight.medium') },
    'h6': { fontSize: theme('fontSize.sm'), fontWeight: theme('fontWeight.medium') },

    // p, li
    'p, li': { fontSize: theme('fontSize.sm'), color: theme('colors.gray.500') },
    // dark p, dark li
    '.dark p, .dark li': { color: theme('colors.gray.300') },

    // body
    'body': { backgroundColor: theme('colors.gray.100') },
    // dark body
    '.dark body': { backgroundColor: theme('colors.gray.700') },

    // dark theme border
    '.dark *, .dark ::before, .dark ::after': { borderColor: theme('colors.gray.600', 'currentColor') },
  })
})

module.exports = tailwindBase
