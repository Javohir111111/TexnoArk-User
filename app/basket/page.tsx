"use client"
import Image from "next/image"
import Iphone from "@/assets/images/iphone.png"
import Container from "@/components/container"
import Card from "@/sections/popular-products"
// import Like from "../../assets/like.svg"
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons"
import { useState } from "react"
import "./style.scss"
import Link from "next/link"

const Page = () => {
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)
    const [count3, setCount3] = useState(1)
    const [count4, setCount4] = useState(1)
    const [count5, setCount5] = useState(1)
    const [count6, setCount6] = useState(1)

    return (
        <Container>
            <div className="flex flex-col xl:flex-row gap-8">
                <div className="pt-6 pb-16 mx-auto w-full xl:w-2/3">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className="basket_card flex flex-col md:flex-row items-center gap-8 mt-4">
                            <div>
                                <Image
                                    src={Iphone}
                                    width={128}
                                    height={146}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                                <div>
                                    <h2 className="korzina_title"> Apple iPhone 13 Pro 8/128 GB Moviy</h2>
                                    <div className="flex items-center max-w-32 mt-8 gap-2">
                                        <button onClick={() => setCount1(count1 > 0 ? count1 - 1 : count1)} type="button" id="decrement-button" className="decrement">
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <span>{count1}</span>
                                        <button onClick={() => setCount1(count1 + 1)} type="button" id="increment-button" className="increment">
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="ml-0 md:ml-32 mt-4 md:mt-0">
                                    <p className="basket_cost">{14699999 * count1} сум</p>
                                    <div className="flex items-center gap-4 mt-8 ml-10 md:ml-0">
                                        <button className="delete_btn">
                                            <DeleteOutlined />
                                        </button>
                                        <button className="like_btn">
                                            <HeartOutlined />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="access_card w-full xl:w-1/3">
                    <h2 className="buy">Sizni haridlaringiz</h2>
                    <div className="flex items-center gap-3 pt-4">
                        <h2 className="prod_title">Mahsulotlar:</h2>
                        <span className="quantity">6 ta</span>
                    </div>
                    <div className="flex items-center gap-2 pt-4">
                        <h2 className="all_cost">Jami summa:</h2>
                        <span className="all_quantity">56 778 678 so‘m</span>
                    </div>
                    <Link href="/legitimation">
                        <div>
                            <button className="legitimation">Xaridni rasmiylashtirish</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <h3>Aksiyadagi mahsulotlar</h3>
                <Card/>
            </div>
        </Container>
    )
}

export default Page
