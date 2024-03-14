import { GetStaticProps } from 'next'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/page/product'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import { priceFormatter } from '../../lib/intl'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface ProductProps {
    product: {
        id: string
        name: string
        description: string
        price: number
        image: string
        priceId: string
    }
}

export default function Product({product}: Readonly<ProductProps>) {
    const { isFallback } = useRouter()
    if (isFallback) {
        return <h1>Carregando...</h1>
    }

    function handleByProduct() {
        console.log(product.priceId);
    }

    return (
        <ProductContainer>
            <ImageContainer>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={520}
                    height={400}
                />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button onClick={handleByProduct}>Comprar Agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_Oys8gXyoEYxoHq' } },
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
    const { id } = params
    const response = await stripe.products.retrieve(id, {
        expand: ['default_price']
    })
    const price = response.default_price as Stripe.Price
    return {
        props: {
            product: {
                id: response.id,
                name: response.name,
                description: response.description,
                price: priceFormatter.format(price.unit_amount / 100),
                image: response.images[0],
                priceId: price.id
            }
        },
        revalidate: 60 * 60 * 24 // 24 hours
    }
}