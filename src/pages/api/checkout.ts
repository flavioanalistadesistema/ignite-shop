import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

const successUrl = `${process.env.NEXT_PUBLIC_API_URL}/success`;
const cancelUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  const { priceId } = req.body;

  const session = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({ 
    checkoutUrl: session.url
   });
}