import { HomeContainer, Product } from "../styles/page/home";

import Image from 'next/image'

import productImg1 from '../assets/camisetas/1.png'
import productImg2 from '../assets/camisetas/2.png'
import productImg3 from '../assets/camisetas/3.png'

export default function Home() {
  return (
      <HomeContainer>
        <Product>
          <Image src={productImg1} alt="Camiseta 1" width={520} height={480} />
          <footer>
            <strong>Camiseta Digital X</strong>
            <span>R$ 79.90</span>
          </footer>
        </Product>
        <Product>
          <Image src={productImg1} alt="Camiseta 1" width={520} height={480} />
          <footer>
            <strong>Camiseta Digital X</strong>
            <span>R$ 79.90</span>
          </footer>
        </Product>
      </HomeContainer>
  )
}
