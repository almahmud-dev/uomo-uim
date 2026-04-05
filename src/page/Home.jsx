import dynamic from "next/dynamic";
import Banner from "@/component/layouts/home/Banner";
import ClientProviders from "@/component/layouts/home/ClientProviders";

const Collection = dynamic(() => import("@/component/layouts/home/Collection"));
const Products = dynamic(() => import("@/component/layouts/home/Products"));
const Countdown = dynamic(() => import("@/component/layouts/home/Countdown"));
const Feature = dynamic(() => import("@/component/layouts/home/Feature"));
const LimitedEdition = dynamic(() => import("@/component/layouts/home/LimitedEdition"));
const Uomo = dynamic(() => import("@/component/layouts/home/Uomo"));
const Support = dynamic(() => import("@/component/layouts/home/Support"));

const Home = () => {
  return (
    <>
      <ClientProviders />  {/* Newsletter + Cookie এখানে */}
      <Banner />
      <Collection />
      <Products />
      <Countdown />
      <Feature />
      <LimitedEdition />
      <Uomo />
      <Support />
    </>
  );
};

export default Home;