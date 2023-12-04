import Stripe from 'stripe'

export const stripe = new Stripe(process.env.KEY_SECRET_STRIPE, {
    apiVersion: '2023-10-16',
    appInfo: {
        name: 'Shopp Ignite',
        version: '0.1.0',
    },
})