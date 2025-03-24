import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 p-4">
        <div>
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
          <div>
            <p>
              We aim to restore faith in people by offering a platform with
              high-quality products that provide greater value than their price
            </p>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  );
};

export default Footer;
