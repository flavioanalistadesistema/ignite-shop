import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 658,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '2rem',
        color: '$gray300',
    },

    span: {
        display: 'block',
        marginTop: '1rem',
        fontSize: '2rem',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '1.125rem',
        lineHeight: 1.6,
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        width: '100%',
        padding: '1.25rem',
        border: 'none',
        borderRadius: 8,
        background: '$green500',
        color: '$white',
        fontSize: '1.125rem',
        fontWeight: 'bold',
        cursor: 'pointer',

        '&:hover': {
            background: '$green300',
        }
    }
})