import { createStitches } from '@stitches/react'

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
}  = createStitches({

    theme: {
        colors: {
            primary: 'hsl(206, 100%, 50%)',
        }
    }
})