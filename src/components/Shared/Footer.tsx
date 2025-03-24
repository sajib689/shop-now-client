import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 p-4">
        <div>
          <Image src="/logo.png" width={130} height={130} alt="Logo" />
          <div className='mt-5'>
            <p>
              We aim to restore faith in people by offering a platform with
              high-quality products that provide greater value than their price
            </p>
            <div className="flex items-center space-x-2 mt-3">
              <FaTelegramPlane />
              <p>Dhaka Bangladesh</p>
            </div>
            <div className="flex items-center space-x-2">
              <CiMobile4 />
              <p>+8801234567890</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail />
              <p>shopnowbd@outlook.com</p>
            </div>
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
