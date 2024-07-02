'use client';
import React, { useState } from 'react';
import Container from "@/components/container";
import SliderProducts from "@/components/single-product/slider-products";
import './style.scss';

const TabComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState('texnoark');

    const renderContent = () => {
        switch (activeTab) {
            case 'texnoark':
                return (
                    <>
                        <h1 className='text-[32px] font-bold mb-6'>Texnoark haqida</h1>
                        <div className='flex flex-col lg:flex-row items-center gap-5'>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </>
                );
            case 'muddatli':
                return (
                    <>
                        <h2 className='text-[32px] font-bold mb-6'>Muddatli to'lov</h2>
                        <div className='flex flex-col lg:flex-row items-center gap-5'>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </>
                );
            case 'yordam':
                return (
                    <>
                        <h2 className='text-[32px] font-bold mb-6'>Yordam</h2>
                        <div className='flex flex-col lg:flex-row items-center gap-5'>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </>
                );
            case 'kafolatlar':
                return (
                    <>
                        <h2 className='text-[32px] font-bold mb-6'>Tovarlarga kafolatlar</h2>
                        <div className='flex flex-col lg:flex-row items-center gap-5'>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </>
                );
            case 'tolov':
                return (
                    <>
                        <h2 className='text-[32px] font-bold mb-6'>To'lov usullari</h2>
                        <div className='flex flex-col lg:flex-row items-center gap-5'>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div className='lg:w-1/2'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Container>
            <div className="tab-component bg-gray-100 p-8">
                <div className="tabs flex flex-wrap justify-start gap-2 mb-8">
                    <button
                        className={`tab-button ${activeTab === 'texnoark' ? 'bg-orange-500 text-white' : ''}`}
                        onClick={() => setActiveTab('texnoark')}
                    >
                        Texnoark haqida
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'muddatli' ? 'bg-orange-500 text-white' : ''}`}
                        onClick={() => setActiveTab('muddatli')}
                    >
                        Muddatli to'lov
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'yordam' ? 'bg-orange-500 text-white' : ''}`}
                        onClick={() => setActiveTab('yordam')}
                    >
                        Yordam
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'kafolatlar' ? 'bg-orange-500 text-white' : ''}`}
                        onClick={() => setActiveTab('kafolatlar')}
                    >
                        Tovarlarga kafolatlar
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tolov' ? 'bg-orange-500 text-white' : ''}`}
                        onClick={() => setActiveTab('tolov')}
                    >
                        To'lov usullari
                    </button>
                </div>
                <div className="tab-content">
                    {renderContent()}
                </div>
            </div>
            <div className=" mb-[60px]">
                <Container>
                    <h3 className="text-[20px] font-medium sm:text-[20px] sm:font-medium md:text-[24px] md:font-semibold lg:text-[28px] lg:font-bold mb-6">Aksiyadagi tovarlar</h3>
                </Container>
                <SliderProducts />
            </div>
        </Container>
    );
};

export default TabComponent;
