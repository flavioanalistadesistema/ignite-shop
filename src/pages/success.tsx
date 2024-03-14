import Link from "next/link";
import { ContainerSuccess, ImageSuccess } from "../styles/page/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface SuccessProps {
    customerName: string;
    product: {
        name: string;
        image: string;
    }

}

export default function Success({customerName, product}: SuccessProps){
    return (
        <ContainerSuccess>
            <h1>Compra efetuada!</h1>
            <ImageSuccess>
                <img src={product.image} alt={product.name} width={150} height={140} />
            </ImageSuccess>
            <p>
                Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
            </p>
            <Link href={'/'}>
                Voltar ao catálogo
            </Link>
        </ContainerSuccess>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if(!query.session_id){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    console.log(session.line_items.data)
    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product as Stripe.Product;

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                image: product.images[0],
            }

        }
    }
}