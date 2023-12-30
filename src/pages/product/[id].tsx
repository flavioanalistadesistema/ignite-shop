import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/page/product'

export default function Product(){
    return (
        <ProductContainer>
            <ImageContainer>
            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>R$ 99,99</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error culpa obcaecati dignissimos distinctio, hic ex voluptatibus facilis ut velit architecto, aspernatur nesciunt perspiciatis accusantium nisi totam, quod iure! Accusantium!</p>
                <button>Finalizar Compra</button>
            </ProductDetails>
        </ProductContainer>
    )
}