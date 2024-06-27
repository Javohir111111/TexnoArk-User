"use client"
// import { useParams } from "next/navigation"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PhoneImg from '@/assets/images/single-page-img.png'

const images = [
    {
        original: PhoneImg.src,
        thumbnail: PhoneImg.src,
    },
    {
        original: PhoneImg.src,
        thumbnail: PhoneImg.src,
    },
    {
        original: PhoneImg.src,
        thumbnail: PhoneImg.src,
    },
    {
        original: PhoneImg.src,
        thumbnail: PhoneImg.src,
    },
];



function page() {
    // const {id}  = useParams();
    return (
        <>
            <div className="container">
                {/* <ImageGallery items={imges ? imges : "https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/bright-and-beautiful-dramatic-super-moon-over-the-ocean-with-small-boat-and-reflection-of.jpg_s1024x1024wisk20cvyzno6cygej5tvtkwghz2ekoajmc_msoxkzh5bgkuek.jpg?itok=NC5FBTP2"} thumbnailPosition="left" additionalClass="w-[600px] h-[600px]" />; */}
                <div className="flex items-center justify-between mt-[40px]">
                    <div className="w-[600px] bg-white rounded-md  h-[554px] ml-12">
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


                    {/* <div className="second">
                        <h2 className="title"> Apple iPhone 13 128Gb Moviy</h2>
                        <div className="all_color">
                            <h2>Rang ;</h2>
                            <div className="colors">
                                <Image
                                    src={Color}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={Color2}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={Color3}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={Color4}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={Color5}
                                    width={24}
                                    height={24}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>

                        <div className="costs">
                            <h2 className="cost">Narx;</h2>
                            <p className="dis_cost">14 699 999  so‘m</p>
                        </div>

                        <div>
                            <button className="btn">Oyiga 1 334 999 so‘mdan 12/oyga muddatli to ‘lov</button>
                        </div>

                        <div className="all_btns">
                            <div>
                                <button className="korzina">Savatga qo ‘shish</button>
                            </div>
                            <div>
                                <button className="purchase">Xarid qilish</button>
                            </div>
                        </div>

                        <div className="driwer">
                            <Image
                                src={Driwer}
                                width={24}
                                height={24}
                                alt="Picture of the author"
                            />
                            <h2 className="driwer_title">Yetkazib berish O’zbekiston bo’ylab</h2>
                        </div>

                        <div className="shop">
                            <Image
                                src={Shop}
                                width={24}
                                height={24}
                                alt="Picture of the author"
                            />
                            <h2 className="shop_title">Do’kondi o’zidan olib ketishingiz mumkin</h2>
                        </div>

                        <div className="time">
                            <Image
                                src={Time}
                                width={24}
                                height={24}
                                alt="Picture of the author"
                            />
                            <h2 className="time_title">Tahminiy yetkazib berish  1 kundan 3 kungacha</h2>
                        </div>
                    </div> */}
                </div>


                {/* <div className="flex items-center gap=[16px] mt-[100px]">
                    <div>
                        <button className="property">Telfon xususiyatlari</button>
                    </div>
                    <div>
                        <button className="comment">Telfon xususiyatlari</button>
                    </div>
                </div>

                <div className="flex items-center gap-[20px]">
                    <div className="all_products">
                        <div className="flex items-center gap-[357px]">
                            <h2 className="brand">Brend</h2>
                            <p className="sub_brand">Vivo</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">CIM kartalar soni</h2>
                            <p className="sub_brand">2</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">O’lchamlari</h2>
                            <p className="sub_brand">75,09х155,11х8,28</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Modeli</h2>
                            <p className="sub_brand">Redmi T12</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Brend</h2>
                            <p className="sub_brand">Vivo</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Akumulyator hajmi</h2>
                            <p className="sub_brand">4000 amp</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Yadrolar soni</h2>
                            <p className="sub_brand">8</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Tezkor xotira RAM</h2>
                            <p className="sub_brand">6 GB</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Ichki xotira ROM</h2>
                            <p className="sub_brand">128 GB</p>
                        </div>
                        <div className="flex items-center gap-[357px] mt-[11px]">
                            <h2 className="brand">Protsessori</h2>
                            <p className="sub_brand">MediaTek Helio P35 (MT6765)</p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={Group}
                            width={520}
                            height={542}
                            alt="Picture of the author"
                        />
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default page
