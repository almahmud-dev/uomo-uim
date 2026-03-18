import LandingClient from "@/components/landing-client";

export default function Home() {
  return (
    <LandingClient
      siteName="SWE.BD"
      heroTitle={"Claim Your\nProfessional Identity"}
      heroSubtitle="Register your unique .swe.bd domain in seconds. Built for software engineers and tech professionals in Bangladesh."
      buyPriceMonthly="99"
      buyPriceYearly="600"
      renewPriceMonthly="99"
      renewPriceYearly="600"
      discountEnabled="false"
      discountPercent="0"
      discountLabel="Limited Offer!"
      whoisEnabled={true}
    />
  );
}
