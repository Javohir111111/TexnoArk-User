"use client"
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { getProduct } from "@/service/product.service";
import http from "@/api";
import Link from "next/link";
import Image from "next/image";
import Cookie from "js-cookie";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";
import PhoneImg from '@/assets/images/single-page-img.png'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Card from '@/components/ui/slider-cards';
import './style.scss';

// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  images: string[];
  liked: boolean;
}

export default function App() {
  const [data, setData] = useState<Product[]>([]);
  const getData = async () => {
    try {
      const response = await getProduct(4, 1);
      console.log('response:', response)
      if (response.status === 200) {
        const productsWithLikeState = response.data.data.products.map((product: any) => ({
          ...product,
          liked: false,
          // console.log(first)

        }));
        setData(productsWithLikeState);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLikeClick = async (productId: number) => {
    setData(prevData =>
      prevData.map((product: Product) =>
        product.id === productId ? { ...product, liked: !product.liked } : product
      )
    );

    try {
      const response = await http.post(`/likes/create`, { product_id: productId });
      if (!response?.status == 200) {
        console.error(`Failed to like product with id ${productId}`);
      }
    } catch (error) {
      console.error(`Error liking product with id ${productId}:`, error);
    }
  };
  return (
    <div className='swiper-container'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          720: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1250: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {data.map((product: Product) => (
          <>
            <SwiperSlide key={product.id}>
              <div className="relative w-[200px] h-[300px] sm:w-[240px] sm:h-[360px] md:w-[280px] md:h-[420px] lg:w-[305px] lg:h-[465px] bg-white rounded-[10px] cursor-pointer">
                <div className="flex items-center justify-center h-[55%]">
                  <img className='max-w-[140px] max-h-[140px] sm:max-w-[170px] sm:max-h-[170px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[230px] lg:max-h-[230px]' src={product.images[0]} alt="" />
                  {/* <Image className="max-w-[140px] max-h-[140px] sm:max-w-[170px] sm:max-h-[170px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[230px] lg:max-h-[230px]" width={200} height={200} src={product?.images[0]} alt={product.name} /> */}
                </div>
                <div className="px-[28px] h-[45%]">
                  <h3 className="text-text mb-4">{product?.name}</h3>
                  <div>
                    <p className="text-xs sm: text-[14px] md:text-[16px] lg:text-[18px]  text-gray-400 line-through">${product?.price}</p>
                    <p className="text-xs sm: text-[14px] md:text-[16px] lg:text-[18px] font-bold text-orange">${(product?.price)}</p>
                  </div>
                </div>
                <Link
                  onClick={() => Cookie.set("product_id", product.id)}
                  href={`/${product.id}`}
                  className="bg-orange absolute bottom-[30px] left-[28px] w-[160px] sm:w-[190px] md:w-[210px] lg:w-[240px] py-1 sm:py-2 md:py-3 lg:py-[11px] flex items-center justify-center gap-3 rounded-md z-10"
                >
                  <span className="text-white"> <ShoppingCartOutlined /> Корзина</span>
                </Link>
                <div className="absolute top-5 right-6 cursor-pointer" onClick={() => handleLikeClick(product.id)}>
                  {product.liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide key={product.id}>
              <div className="relative w-[200px] h-[300px] sm:w-[240px] sm:h-[360px] md:w-[280px] md:h-[420px] lg:w-[305px] lg:h-[465px] bg-white rounded-[10px] cursor-pointer">
                <div className="flex items-center justify-center h-[55%]">
                  <Image className="max-w-[140px] max-h-[140px] sm:max-w-[170px] sm:max-h-[170px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[230px] lg:max-h-[230px]" src={PhoneImg} alt={product.name} />
                </div>
                <div className="px-[28px] h-[45%]">
                  <h3 className="text-text mb-4">{product?.name}</h3>
                  <div>
                    <p className="text-xs sm: text-[14px] md:text-[16px] lg:text-[18px]  text-gray-400 line-through">${product?.price}</p>
                    <p className="text-xs sm: text-[14px] md:text-[16px] lg:text-[18px] font-bold text-orange">${(product?.price)}</p>
                  </div>
                </div>
                <Link
                  onClick={() => Cookie.set("product_id", product.id)}
                  href={`/${product.id}`}
                  className="bg-orange absolute bottom-[30px] left-[28px] w-[160px] sm:w-[190px] md:w-[210px] lg:w-[240px] py-1 sm:py-2 md:py-3 lg:py-[11px] flex items-center justify-center gap-3 rounded-md z-10"
                >
                  <span className="text-white"> <ShoppingCartOutlined /> Корзина</span>
                </Link>
                <div className="absolute top-5 right-6 cursor-pointer" onClick={() => handleLikeClick(product.id)}>
                  {product.liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide key={product.id}>
              <div className="relative w-[200px] h-[300px] sm:w-[240px] sm:h-[360px] md:w-[280px] md:h-[420px] lg:w-[305px] lg:h-[465px] bg-white rounded-[10px] cursor-pointer">
                <div className="flex items-center justify-center h-[55%]">
                  <Image className="max-w-[140px] max-h-[140px] sm:max-w-[170px] sm:max-h-[170px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[230px] lg:max-h-[230px]" src={PhoneImg} alt={product.name} />
                </div>
                <div className="px-[28px] h-[45%]">
                  <h3 className="text-text mb-4">{product?.name}</h3>
                  <div>
                    <p className="text-xs sm: text-[14px] md:text-[16px] lg:text-[18px]  text-gray-400 line-through">${product?.price}</p>
                    <p className="text-xs sm: text-[14px] md:text-[16px] lg:text-[18px] font-bold text-orange">${(product?.price)}</p>
                  </div>
                </div>
                <Link
                  onClick={() => Cookie.set("product_id", product.id)}
                  href={`/${product.id}`}
                  className="bg-orange absolute bottom-[30px] left-[28px] w-[160px] sm:w-[190px] md:w-[210px] lg:w-[240px] py-1 sm:py-2 md:py-3 lg:py-[11px] flex items-center justify-center gap-3 rounded-md z-10"
                >
                  <span className="text-white"> <ShoppingCartOutlined /> Корзина</span>
                </Link>
                <div className="absolute top-5 right-6 cursor-pointer" onClick={() => handleLikeClick(product.id)}>
                  {product.liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                </div>
              </div>

            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
//Mahmudov Muhammadayubxon





