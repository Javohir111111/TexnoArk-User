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
    <div className="flex flex-wrap gap-4">
      {data.map((product: Product) => (
        <div key={product?.id} className="relative w-[305px] h-[460px] bg-white rounded-[10px] cursor-pointer">
          <div className="flex items-center justify-center h-[55%]">
            <Image className="max-w-[230px]" src={PhoneImg} alt={product.name} width={200} height={200} />
          </div>
          <div className="px-[28px] h-[45%]">
            <h3 className="text-text mb-4">{product?.name}</h3>
            <div>
              <p className="text-[18px] font-bold text-gray-400 line-through">${product?.price}</p>
              <p className="text-[18px] font-bold text-orange">${(product?.price)}</p>
            </div>
          </div>
          <Link
            onClick={() => Cookie.set("product_id", product.id)}
            href={`/${product.id}`}
            className="bg-orange absolute bottom-[30px] left-[28px] w-[250px] py-[10px] flex items-center justify-center gap-3 rounded-md z-10"
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
