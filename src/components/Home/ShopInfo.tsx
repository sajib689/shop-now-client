import Image from "next/image";

const ShopInfo = () => {
  return (
    <div>
      <div>
        <Image src="/shop.jpg" width={140} height={140} alt="Shop" />
        <div>
          <h1>Home Delivery</h1>
          <p>Whole Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
