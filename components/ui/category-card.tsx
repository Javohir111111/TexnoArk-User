'use client';
import React, { useEffect, useState } from "react";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";
import PhoneImg from '@/assets/images/single-page-img.png'
import Cookie from "js-cookie";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { getProduct } from "@/service/product.service";
import http from "@/api";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  // image_url: string[];
  liked: boolean;
}

const Index: React.FC = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
      {data.map((product: Product) => (
        <div key={product?.id} className="relative w-[200px] h-[300px] sm:w-[240px] sm:h-[360px] md:w-[280px] md:h-[420px] lg:w-[305px] lg:h-[465px] bg-white rounded-[10px] cursor-pointer">
          <div className="flex items-center justify-center h-[55%]">
            <Image className="max-w-[140px] max-h-[140px] sm:max-w-[170px] sm:max-h-[170px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[230px] lg:max-h-[230px]" src={PhoneImg} alt={product.name}/>
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
      ))}
    </div>
  );
};

export default Index;
