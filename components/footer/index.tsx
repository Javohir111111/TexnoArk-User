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
    <footer className="bg-white py-10">
      <Container>
        <div className="bg-white py-10 px-5 md:px-20 rounded-2xl flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <Link href="/" className="flex items-center gap-1 mb-8">
              <Image src={Logo} alt="logo" />
              <span className="text-orange text-[18.6px] font-black">TECHNOARK</span>
            </Link>
            <p className="text-[18px] font-bold text-[#240E00CC] mb-4">Our social networks</p>
            <div className="flex gap-3">
              <div className="p-3 rounded-md bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={InstagramIcon} alt="Instagram" />
              </div>
              <div className="p-3 rounded-md bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={TelegramIcon} alt="Telegram" />
              </div>
              <div className="p-3 rounded-md bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={FacebookIcon} alt="Facebook" />
              </div>
              <div className="p-3 rounded-md bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={TwitterIcon} alt="Twitter" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div>
              <h3 className="text-[18px] font-bold text-[#240E00CC] mb-5">About the organization</h3>
              <div className="flex flex-col gap-4">
                <p className="text-[14px] text-[#240E00CC]">About Technoark</p>
                <p className="text-[14px] text-[#240E00CC]">Term payment</p>
                <p className="text-[14px] text-[#240E00CC]">Help</p>
                <p className="text-[14px] text-[#240E00CC]">Product warranty</p>
                <p className="text-[14px] text-[#240E00CC]">Payment methods</p>
              </div>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#240E00CC] mb-5">Category</h3>
              <div className="flex flex-col gap-4">
                <p className="text-[14px] text-[#240E00CC]">Televisions</p>
                <p className="text-[14px] text-[#240E00CC]">Laptops and Computers</p>
                <p className="text-[14px] text-[#240E00CC]">Smartphones</p>
                <p className="text-[14px] text-[#240E00CC]">Washing machines</p>
                <p className="text-[14px] text-[#240E00CC]">Refrigerators</p>
                <p className="text-[14px] text-[#240E00CC]">Air conditioners</p>
                <p className="text-[14px] text-[#240E00CC]">Ovens and Gas stoves</p>
              </div>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#240E00CC] mb-5">Contact us</h3>
              <div className="flex flex-col gap-4">
                <p className="text-[14px] text-[#240E00CC]">About Technoark</p>
                <p className="w-[270px] text-[14px] text-[#240E0099]">
                  <span className="text-[#240E00CC]">Our address:</span> 100052, Republic of Uzbekistan, Tashkent city, Bodomzor road, 1-tor street, 72
                </p>
                <p className="text-[14px] text-[#240E0099]">
                  <span className="text-[#240E00CC]">Phone number:</span> +998 71 300 30 30
                </p>
                <p className="text-[14px] text-[#240E0099]">
                  <span className="text-[#240E00CC]">Email address:</span> technoark@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#240E0066] text-[12px] mt-2 mb-5 text-center md:text-left">
          © 2022 Technoark is a licensed brand.
        </p>
      </Container>
    </footer>
  );
};

export default Index;
