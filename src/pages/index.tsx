import { HomeContainer, Product } from '../styles/page/home'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Link from 'next/link'

import Image from 'next/image'

import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import { priceFormatter } from "../lib/intl";

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
            <Link href={'product/' + product.id} key={product.id}>
              <Product className="keen-slider__slide">
                <Image src={product.image} alt="Camiseta 1" width={520} height={480} />
                <footer>
                  <strong>{product.title}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
  )
}

  export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
      expand: ['data.default_price']
    })

    const products = response.data.map(product => {
      const price = product.default_price as Stripe.Price

      return {
        id: product.id,
        title: product.name,
        image: product.images[0],
        price: priceFormatter.format(price.unit_amount / 100)
      }
    })

    return {
      props: {
        products
      },
      revalidate: 60 * 60 * 24 // 24 hours
    }
  }
