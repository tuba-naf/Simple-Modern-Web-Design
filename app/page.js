'use client'

import Topheader  from "./Components/Header/page";
import Bodysection2 from "./Components/Herosection/Bodysection2";
import Bodysection3 from "./Components/Herosection/Bodysection3";
import Hero from "./Components/Herosection/page";
import Casecarddata from "./Components/casepage";
import CustomerSection from "./Components/customerpage";
import ContactUsPage from "./Components/secondlastsection";
import Footer1 from "./Components/Footer/page";


export default function Home() {
  return (
    <div>
      <Topheader/>
      <Hero/>
      <Bodysection2/>
      <Bodysection3/>
      <Casecarddata/>
      <CustomerSection/>
      <ContactUsPage/>
      <Footer1/>
    </div>
  );
}
