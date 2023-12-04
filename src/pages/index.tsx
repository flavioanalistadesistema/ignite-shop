import { HomeContainer, Product } from "../styles/page/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Image from 'next/image'

import productImg1 from '../assets/camisetas/1.png'
import productImg2 from '../assets/camisetas/2.png'
import productImg3 from '../assets/camisetas/3.png'
import productImg4 from '../assets/camisetas/4.png'
import { use, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

export default function Home(props) {

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
      <HomeContainer ref={sliderRef} className="keen-slider">
        <pre>{JSON.stringify(props.list)}</pre>
        <Product className="keen-slider__slide">
          <Image src={productImg1} alt="Camiseta 1" width={520} height={480} />
          <footer>
            <strong>Camiseta Digital X</strong>
            <span>R$ 79.90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={productImg2} alt="Camiseta 2" width={520} height={480} />
          <footer>
            <strong>Camiseta Digital X</strong>
            <span>R$ 79.90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={productImg3} alt="Camiseta 3" width={520} height={480} />
          <footer>
            <strong>Camiseta Digital X</strong>
            <span>R$ 79.90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={productImg4} alt="Camiseta 4" width={520} height={480} />
          <footer>
            <strong>Camiseta Digital X</strong>
            <span>R$ 79.90</span>
          </footer>
        </Product>
      </HomeContainer>
  )
}

  export const getServerSideProps = async () => {
    await new Promise(resolver => setTimeout(resolver, 2000))
    return {
      props: {
        list: [1,2,3,4]
      }
    }
  }
