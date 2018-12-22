import Typography from 'typography'

const sansSerif = 'PT Sans'

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.6,
  headerFontFamily: [sansSerif, 'sans-serif'],
  bodyFontFamily: ['Lora', 'serif'],
  googleFonts: [
    {
      name: sansSerif,
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Lora',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['600'],
    },
  ],
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
