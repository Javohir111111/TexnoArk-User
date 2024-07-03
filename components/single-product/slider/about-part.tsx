"use client"
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { getSingleProduct } from "@/service/product.service";

interface Image {
    original: string;
    thumbnail: string;
}

const DynamicGallery = () => {
    const [images, setImages] = useState<Image[]>([]);

    const fetchProductImages = async () => {
        try {
            const response = await getSingleProduct();
            console.log(response);
            if (response.status === 200) {
                const product = response.data.data.product;
                const productImages = product.images.map((image: string) => ({
                    original: image,
                    thumbnail: image,
                }));
                setImages(productImages);
            }
        } catch (error) {
            console.error('Error fetching product images:', error);
        }
    };

    useEffect(() => {
        fetchProductImages();
    }, []);

    return (
        <div className="container">
            <div className="flex items-center justify-between mt-[40px]">
                <div className="w-full md:w-[600px] bg-white rounded-md h-auto md:h-[554px] ml-0 md:ml-12">
                    <ImageGallery
                        items={images}
                        infinite={true}
                        thumbnailPosition="left"
                        showFullscreenButton={false}
                        showPlayButton={false}
                        autoPlay={true}
                        showNav={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default DynamicGallery;
