const config = useRuntimeConfig();

import Stripe from "stripe";
let STRIPE_API_KEY = config.public.STRIPE_API_KEY;
const stripe = new Stripe(STRIPE_API_KEY);

export default async function checkout(event: any) {
  try {
    const body = await readBody(event);
    console.log("inside api", body);

    const session = await stripe.checkout.sessions.create({
      line_items: body,
      // line_items: [
      //   {
      //     price: "price_1ORcbXARpcKSNICfEvAuId7D",
      //     quantity: 2,
      //   },
      // ],
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${process.env.DOMAIN}/booking?success=true`,
      cancel_url: `${process.env.DOMAIN}/booking?success=false`,
    });

    console.log("session ", session?.url ?? "");
    return session.url;
  } catch (error: any) {
    console.log("inside error in server folder stripe file ", error);
  }
}
