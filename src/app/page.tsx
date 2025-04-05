import ShopInfo from "@/components/Home/ShopInfo";
import DhamakaOffer from "@/components/Home/DhamakaOffer";
import NewPoloTShirt from "@/components/Home/NewPoloTShirt";
import Shoes from "@/components/Home/Shoes";
import Bannar from "@/components/Home/Bannar";


export default function Home() {
  return (
   <div>
    <Bannar/>
    <NewPoloTShirt/>
    <DhamakaOffer/>
    <Shoes/>
    <ShopInfo/>
    
   </div>
  );
}
