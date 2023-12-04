import { HomeContainer, Product } from "../styles/page/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Image from 'next/image'

import productImg1 from '../assets/camisetas/1.png'
import productImg2 from '../assets/camisetas/2.png'
import productImg3 from '../assets/camisetas/3.png'
import productImg4 from '../assets/camisetas/4.png'
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { GetServerSideProps } from "next";

interface HomeProps {
  products: {
    id: string
    title: string
    image: string
    price: number
  }[]
}

export default function Home({products}: HomeProps) {

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.image} alt="Camiseta 1" width={520} height={480} />
              <footer>
                <strong>{product.title}</strong>
                <span>{product.price}</span>
              </footer>
          </Product>
          )
        })}
      </HomeContainer>
  )
}

  export const getServerSideProps: GetServerSideProps = async () => {
    const response = await stripe.products.list({
      expand: ['data.default_price']
    })

    const products = response.data.map(product => {
      const price = product.default_price as Stripe.Price

      return {
        id: product.id,
        title: product.name,
        image: product.images[0],
        price: price.unit_amount / 100,
      }
    })

    return {
      props: {
        products
      }
    }
  }
