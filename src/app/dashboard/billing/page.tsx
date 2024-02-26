import BillingForm from "@/components/BillingForm";
import { getUserSubscriptionPlan } from "@/lib/stripe";

type Billing = {
};

export default async function Billing({}: Billing) {
  const subscriptionPlan = await getUserSubscriptionPlan();
  
  return (
    <BillingForm subscriptionPlan={subscriptionPlan} />
  );
};
