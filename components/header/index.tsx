"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/components/container";
import Logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import Select from "@/components/category-select/select";
import SearchIcon from "@/assets/icons/search.svg";
import Like from "@/assets/icons/like.svg";
import Cart from "@/assets/icons/cart.svg";
import User from "@/assets/icons/user.svg";
import Analytics from "@/assets/icons/analytics.svg";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import './style.scss'

const Index = () => {
  const [number] = useState(0);
  const [category, setCategory] = useState(false);
  const router = useRouter();

  const loginPage = () => {
    router.push("/login");
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link href="/basket">
          <div className="flex items-center gap-1">
            <Image src={Cart} alt="cart icon" />
            {number > 0 && (
              <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center text-white text-[10px]">
                <span>{number}</span>
              </div>
            )}
            Basket
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <div className="flex items-center gap-1">
          <Image src={Like} alt="like icon" />
          {number > 0 && (
            <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center text-white text-[10px]">
              <span>{number}</span>
            </div>
          )}
          Likes
        </div>
      </Menu.Item>
      <Menu.Item key="3">
        <div className="flex items-center gap-1">
          <Image src={Analytics} alt="analytics icon" />
          {number > 0 && (
            <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center text-white text-[10px]">
              <span>{number}</span>
            </div>
          )}
          Analytics
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <header className="relative">
        <Container>
          <div className="py-[9px] flex justify-between items-center">
            <div className="flex gap-5">
              <Link href="/about" className="flex items-center gap-1">
                <span className="text-[14px] text-[#240E00CC] cursor-pointer">
                  About us
                </span>
              </Link>
              <p className="text-[14px] text-[#240E00CC] cursor-pointer">
                Delivery
              </p>
              <p className="text-[14px] unused text-[#240E00CC] cursor-pointer">
                Terms of contract
              </p>
              <p className="text-[14px] unused text-[#240E00CC] cursor-pointer">
                Our guarantees
              </p>
            </div>
            <div className="flex items-center gap-7">
              <p className="text-[14px] phone text-[#240E00CC] cursor-pointer">
                <a href="tel:+998713003030">+998 71 300 30 30</a>
              </p>
              <div className="language flex items-center gap-2">
                <div className="text-[#240E0066] rus py-1 px-[10px] rounded-[5px] bg-white cursor-pointer">
                  Rus
                </div>
                <div className="text-[#240E0066] uzb py-1 px-[10px] rounded-[5px] bg-white cursor-pointer">
                  Uzb
                </div>
                <div className="text-[#240E0066] eng py-1 px-[10px] rounded-[5px] bg-white cursor-pointer">
                  Eng
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <header className="sticky top-0 z-50">
        <Container>
          <div className="bg-[#fff] px-[60px] h-20 flex items-center rounded-[10px] justify-between">
            <Link href="/" className="flex items-center gap-1">
              <Image src={Logo} alt="logo" />
              <span className="text-orange brand-name text-[18.6px] font-black">
                ECHNOARK
              </span>
            </Link>
            <div className="flex items-center gap-4 rounded-[6px]">
              <div className="select">
                <Select />
              </div>
              <div className=" md:w-[300px] lg:w-[400px] h-[46px] relative">
                <input
                  className="w-[200px] md:w-[300px] lg:w-[400px] header-input h-full bg-[#F0F0F0] rounded-md px-[30px] ring-green focus:ring-2 outline-none duration-200"
                  type="text"
                  placeholder="Search products..."
                />
                <Image
                  className="absolute right-[13px] top-[15px]"
                  src={SearchIcon}
                  alt="search icon"
                />
              </div>
            </div>
            <div className="flex gap-3 before-md">
              <div className="py-[13px] px-[14px] bg-[#F0F0F0] rounded-md cursor-pointer flex items-center gap-1">
                <Image src={Like} alt="like icon" />
                {number > 0 && (
                  <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center text-white text-[10px]">
                    <span>{number}</span>
                  </div>
                )}
              </div>
              <div className="py-[13px] analytic-icon px-[14px] bg-[#F0F0F0] rounded-md cursor-pointer flex items-center gap-1">
                <Image src={Analytics} alt="like icon" />
                {number > 0 && (
                  <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center text-white text-[10px]">
                    <span>{number}</span>
                  </div>
                )}
              </div>
              <Link href={"/basket"} className="py-[13px] px-[14px] bg-[#F0F0F0] rounded-md cursor-pointer flex items-center gap-1">
                <Image src={Cart} alt="like icon" />
                {number > 0 && (
                  <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center text-white text-[10px]">
                    <span>{number}</span>
                  </div>
                )}
              </Link>
              <div onClick={loginPage} className="py-[13px] px-[14px] rounded-full bg-[#F0F0F0] cursor-pointer flex items-center gap-1">
                <Image src={User} alt="like icon" />
              </div>
            </div>
            <div className="md:hidden">
              <Dropdown overlay={menu} trigger={['click']}>
                <div className="py-[13px] px-[14px] bg-[#F0F0F0] rounded-md cursor-pointer flex items-center gap-1">
                  <Image src={Like} alt="like icon" />
                  <DownOutlined />
                </div>
              </Dropdown>
            </div>
          </div>
          {category && (
            <div className="w-full bg-white h-[600px] py-10 px-[60px]">category</div>
          )}
        </Container>
      </header>
    </>
  );
};

export default Index;
