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
                        <div className='flex items-center gap-5'>
                            <div>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div>
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
                        <div className='flex items-center gap-5'>
                            <div>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div>
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
                        <div className='flex items-center gap-5'>
                            <div>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div>
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
                        <div className='flex items-center gap-5'>
                            <div>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div>
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
                        <div className='flex items-center justify-between'>
                            <div className='w-[560px]'>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div className='w-[560px]'>
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
            <div className="mt-[50px]">
                <div className="tabs">
                    <button
                        className={`tab-button ${activeTab === 'texnoark' ? 'active' : ''}`}
                        onClick={() => setActiveTab('texnoark')}
                    >
                        Texnoark haqida
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'muddatli' ? 'active' : ''}`}
                        onClick={() => setActiveTab('muddatli')}
                    >
                        Muddatli to'lov
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'yordam' ? 'active' : ''}`}
                        onClick={() => setActiveTab('yordam')}
                    >
                        Yordam
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'kafolatlar' ? 'active' : ''}`}
                        onClick={() => setActiveTab('kafolatlar')}
                    >
                        Tovarlarga kafolatlar
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tolov' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tolov')}
                    >
                        To'lov usullari
                    </button>
                </div>
                <div className="content">
                    {renderContent()}
                </div>
            </div>
            <h1 className='text-[24px] font-semibold mt-5 mb-6'>Aksiyadagi mahsulotlar</h1>
            <SliderProducts/>
        </Container>
    );
};

export default TabComponent;
