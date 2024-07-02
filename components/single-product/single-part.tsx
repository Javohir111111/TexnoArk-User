'use client';
import SliderProducts from "./slider-products";
import { TruckOutlined, ShopOutlined, FieldTimeOutlined } from "@ant-design/icons";
import Container from "@/components/container";
import { getSingleProduct } from "@/service/product.service";
import Layout from "@/components/single-product/slider/about-part";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SinglePart() {
    const [product, setProduct] = useState<any>({});
    console.log(product);

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: "400px",
        color: "#1F1D14",
        textAlign: "center",
        background: "#fff",
    };

    const getData = async () => {
        const res: any = await getSingleProduct();
        if (res && res.data) {
            setProduct(res.data.data.product);
        }
        console.log(res)
    };

    useEffect(() => {
        getData();
    }, []);



    return (
        <Container>
            <div className="flex justify-between flex-wrap sm:ml-[40px]  items-center">
                <div className="xl:max-w-[800px] mb-[50px]  sm:max-w-[500px] sm:h-[auto] xl:h-[auto] xl:mb-[50px]">
                <Layout/>
                </div>
                <div className="w-[520px] h-[auto] gap-5 bg-white p-7 sm:mb-9 border rounded-lg">
                    <h1 className="text-[24px] font-medium mb-4">
                        {product.name}
                    </h1>
                    <p className="flex items-center mb-4 gap-2">
                        Rang:
                        <span className="bg-violet-800 p-2 border rounded-full"></span>
                        <span className="bg-sky-600 p-2 border rounded-full"></span>
                        <span className="bg-amber-700 p-2 border rounded-full"></span>
                        <span className="bg-gray-200 p-2 border rounded-full"></span>
                    </p>
                    <p className="text-[28px] font-semibold mb-4">
                        Narx:  {product.price} so‘m
                    </p>
                    <button className="bg-[#efefef] text-black py-2 px-4 rounded mb-4 w-full">
                        Oyiga 1 334 999 so‘mdan 12/oyga muddatli to ‘lov
                    </button>
                    <div className="flex gap-3 mb-4">
                        {/* <button className="bg-[#F57C00] text-white py-2 px-4 rounded w-full">Savtaga qo'shish</button> */}
                        <Link href={"/basket"} className="bg-[#F57C00] text-white py-2 px-4 text-center rounded w-full">Savatga qo'shish</Link>
                        <button className="bg-[#4CAF50] text-white py-2 px-4 rounded w-full">Xarid qilish</button>
                    </div>
                    <p className="mb-2">
                        <span className=""><TruckOutlined className="mr-1" /> Yetkazib berish O‘zbekiston bo‘ylab</span>
                    </p>
                    <p className="mb-2">
                        <span className=""><ShopOutlined className="mr-1" /> Do'kondan olib ketishingiz mumkin</span>
                    </p>
                    <p>
                        <span className=""><FieldTimeOutlined className="mr-1" /> Tahminiy yetkazib berish 1 kundan 3 kungacha</span>
                    </p>
                </div>
            </div>
            <div className="flex gap-3 mb-4 mt-[40px]">
                <button className="bg-[#F57C00] text-white py-4 px-8 rounded ">Telfon xususiyatlari</button>
                <button className="bg-[#ffffff] text-black py-4 px-8 rounded">Mijozlarni fikri</button>
            </div>
            <SliderProducts/>
        </Container>
    );
}
