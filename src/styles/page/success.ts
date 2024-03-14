import { styled } from "..";

export const ContainerSuccess = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '2rem',
        color: '$gray300',
    },

    p: {
        fontSize: '1.25rem',
        color: '$gray300',
        textAlign: 'center',
        maxWidth: 560,
        marginTop: '2rem',
        lineHeight: 1.4,        
    },

    a: {
        display: 'block',        
        marginTop: '5rem',
        fontSize: '1.25rem',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }

})

export const ImageSuccess = styled('div', {
    width: '100%',
    maxWidth: 138,
    height: 145,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem',

    img: {
        objectFit: 'cover',
    }
})