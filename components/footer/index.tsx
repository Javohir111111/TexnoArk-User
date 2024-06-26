import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import Logo from "../../assets/icons/logo.svg";
import InstagramIcon from "@/assets/icons/bi_instagram.svg";
import TelegramIcon from "@/assets/icons/bi_telegram.svg";
import FacebookIcon from "@/assets/icons/bi_facebook.svg";
import TwitterIcon from "@/assets/icons/bi_twitter.svg";
const Index = () => {
  return (
    <footer>
      <Container>
        <div className="bg-white py-[60px] px-20 rounded-[10px] flex justify-between">
          <div>
            <Link href="/" className="flex items-center gap-1 mb-8">
              <Image src={Logo} alt="logo" />
              <span className="text-orange text-[18.6px] font-black">
                ECHNOARK
              </span>
            </Link>
            <p className="text-[18px] font-bold text-[#240E00CC] mb-4">
              Our social networks
            </p>
            <div className="flex gap-3">
              <div className="py-[12px] px-[15px] rounded-md bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={InstagramIcon} alt="like icon" />
              </div>
              <div className="py-[12px] px-[15px] rounded-md bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={TelegramIcon} alt="like icon" />
              </div>
              <div className="py-[12px] px-[15px] rounded-md bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={FacebookIcon} alt="like icon" />
              </div>
              <div className="py-[12px] px-[15px] rounded-md bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={TwitterIcon} alt="like icon" />
              </div>
            </div>
          </div>
          <div className="flex gap-[100px]">
            <div>
              <h3 className="text-[18px] font-bold text-[#240E00CC] mb-5 cursor-pointer">
                About the organization
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  About Technoark
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Term payment
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Help
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Product warranty
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Payment methods
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#240E00CC] mb-5 cursor-pointer">
                Category
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Televisions
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Laptops and Computers
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Smartphones
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Washing machine
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Refrigerators
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Kondetsioners
                </p>
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  Oven and Gazpilita
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#240E00CC] mb-5 cursor-pointer">
                Contact us
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                  About Technoark
                </p>
                <p className="w-[270px] text-[14px] text-[#240E0099]">
                  <span className="text-[#240E00CC]">Our address:</span> 100052,
                  Republic of Uzbekistan, Tashkent city, Bodomzor road, 1-tor
                  street, 72
                </p>
                <p className="text-[14px] text-[#240E0099] cursor-pointer">
                  <span className="text-[#240E00CC]">Phone number:</span> +998
                  71 300 30 30
                </p>
                <p className="text-[14px] text-[#240E0099] cursor-pointer">
                  <span className="text-[#240E00CC]">Electron address:</span> texnoarko@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#240E0066] text-[12px] mt-2 mb-[17px]">
          © 2022 Technoart is a licensed brand.
        </p>
      </Container>
    </footer>
  );
};

export default Index;
