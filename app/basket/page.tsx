"use client"
import Image from "next/image"
import Iphone from "@/assets/images/iphone.png"
import Container from "@/components/container"
// import Like from "../../assets/like.svg"
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons"
import { useState } from "react"
import "./style.scss"
import Link from "next/link"


const page = () => {
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)
    const [count3, setCount3] = useState(1)
    const [count4, setCount4] = useState(1)
    const [count5, setCount5] = useState(1)
    const [count6, setCount6] = useState(1)

    return (
        <Container>
            <div className="flex gap-[35px]">
                <div className="pt-[24px] pb-[60px]">
                    <div className="basket_card flex items-center gap-[40px]">
                        <div>
                            <Image
                                src={Iphone}
                                width={128}
                                height={146}
                                alt="Picture of the author"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="korzina_title"> Apple iPhone 13  Pro  8/128 GB Moviy</h2>
                                <div className=" flex items-center max-w-[8rem] mt-[38px] gap-[10px]">
                                    <button onClick={() => setCount1(count1 > 0 ? count1 - 1 : count1)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="decrement">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <button>{count1}</button>
                                    {/* <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required /> */}
                                    <button onClick={() => setCount1(count1 + 1)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="increment">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="ml-[120px]">
                                <p className="basket_cost">{14699999 * count1} сум</p>
                                <div className="flex items-center gap-[16px] mt-[29px] ml-[40px]">
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

                    <div className="basket_card flex items-center gap-[40px] mt-[12px]">
                        <div>
                            <Image
                                src={Iphone}
                                width={128}
                                height={146}
                                alt="Picture of the author"
                            />
                        </div>


                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="korzina_title"> Apple iPhone 13  Pro  8/128 GB Moviy</h2>
                                <div className=" flex items-center max-w-[8rem] mt-[38px] gap-[10px]">
                                    <button onClick={() => setCount2(count2 > 0 ? count2 - 1 : count2)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="decrement">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <button>{count2}</button>
                                    {/* <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required /> */}
                                    <button onClick={() => setCount2(count2 + 1)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="increment">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="ml-[120px]">
                                <p className="basket_cost">{14699999 * count2} сум</p>
                                <div className="flex items-center gap-[16px] mt-[29px] ml-[40px]">
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
                    <div className="basket_card flex items-center gap-[40px] mt-[12px]">
                        <div>
                            <Image
                                src={Iphone}
                                width={128}
                                height={146}
                                alt="Picture of the author"
                            />
                        </div>


                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="korzina_title"> Apple iPhone 13  Pro  8/128 GB Moviy</h2>
                                <div className=" flex items-center max-w-[8rem] mt-[38px] gap-[10px]">
                                    <button onClick={() => setCount3(count3 > 0 ? count3 - 1 : count3)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="decrement">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <button>{count3}</button>
                                    {/* <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required /> */}
                                    <button onClick={() => setCount3(count3 + 1)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="increment">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="ml-[120px]">
                                <p className="basket_cost">{14699999 * count3} сум</p>
                                <div className="flex items-center gap-[16px] mt-[29px] ml-[40px]">
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

                    <div className="basket_card flex items-center gap-[40px] mt-[12px]">
                        <div>
                            <Image
                                src={Iphone}
                                width={128}
                                height={146}
                                alt="Picture of the author"
                            />
                        </div>


                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="korzina_title"> Apple iPhone 13  Pro  8/128 GB Moviy</h2>
                                <div className=" flex items-center max-w-[8rem] mt-[38px] gap-[10px]">
                                    <button onClick={() => setCount4(count4 > 0 ? count4 - 1 : count4)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="decrement">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <button>{count4}</button>
                                    {/* <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required /> */}
                                    <button onClick={() => setCount4(count4 + 1)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="increment">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="ml-[120px]">
                                <p className="basket_cost">{14699999 * count4} сум</p>
                                <div className="flex items-center gap-[16px] mt-[29px] ml-[40px]">
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

                    <div className="basket_card flex items-center gap-[40px] mt-[12px]">
                        <div>
                            <Image
                                src={Iphone}
                                width={128}
                                height={146}
                                alt="Picture of the author"
                            />
                        </div>


                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="korzina_title"> Apple iPhone 13  Pro  8/128 GB Moviy</h2>
                                <div className=" flex items-center max-w-[8rem] mt-[38px] gap-[10px]">
                                    <button onClick={() => setCount4(count4 > 0 ? count4 - 1 : count4)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="decrement">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <button>{count4}</button>
                                    {/* <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required /> */}
                                    <button onClick={() => setCount4(count4 + 1)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="increment">
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="ml-[120px]">
                                <p className="basket_cost">{14699999 * count4} сум</p>
                                <div className="flex items-center gap-[16px] mt-[29px] ml-[40px]">
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
                </div>

                <div className="access_card">
                    <h2 className="buy">Sizni haridlaringiz</h2>

                    <div className="flex items-center gap-[13px] pt-[17px]">
                        <h2 className="prod_title">Mahsulotlar;</h2>
                        <span className="quantity">6 ta</span>
                    </div>

                    <div className="flex items-center gap-[8px] pt-[16px]">
                        <h2 className="all_cost">Jami summa;</h2>
                        <span className="all_quantity">56 778 678 so‘m</span>
                    </div>

                    <Link href="/legitimation">
                        <div>
                            <button className="legitimation">Xaridni rasmiylashtirish</button>
                        </div>
                    </Link>

                </div>
            </div>
        </Container>
    )
}

export default page
