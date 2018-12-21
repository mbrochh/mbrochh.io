import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Lora', 'serif'],
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Lora',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
})

export default typography
