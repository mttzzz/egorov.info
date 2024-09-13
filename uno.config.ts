// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno({}),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Nunito',
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
      html, body {margin: 0; padding: 0;}`,
    },
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
