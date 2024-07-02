'use client'
// components/DeliveryForm.js
import React from 'react';
import Link from 'next/link';
import { Form, Input, Select, Radio, DatePicker } from 'antd';
import Geolocation from '@/components/geolocation';
import Container from '@/components/container';
import SliderProducts from '@/components/single-product/slider-products';
import './style.scss'

const { Option } = Select;

const DeliveryForm = () => {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row'>
                <Form layout="vertical">
                    <div style={formStyle}>
                        <Form.Item label="Telefon raqam" name="phone" style={formItemStyle}>
                            <Input addonBefore="+998" />
                        </Form.Item>
                        <Form.Item label="Ism/Familiya" name="name" style={formItemStyle}>
                            <Input />
                        </Form.Item>
                    </div>
                    <Form.Item name="delivery" style={fullWidthStyle}>
                        <Radio.Group>
                            <Radio value="store">Do'kondan olib ketish</Radio>
                            <Radio value="home">Xaridingizni uyingizga yetkazib berish</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <div className='flex justify-between mb-[16px]'>
                        <Form.Item label="Viloyat" name="region" style={formItemHalfStyle}>
                            <Select placeholder="Surxondaryo viloyati">
                                <Option value="surxondaryo">Surxondaryo viloyati</Option>
                                {/* Add other options here */}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Tuman" name="district" style={formItemHalfStyle}>
                            <Select placeholder="Denov tumani">
                                <Option value="denov">Denov tumani</Option>
                                {/* Add other options here */}
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='flex justify-between gap-5 mb-[16px] '>
                        <Form.Item label="Aniq manzil" name="address" className='w-[560px]'>
                            <Input placeholder="Tinchlik mahallasi Yoshlik-1 ko'chasi 12-uy" />
                        </Form.Item>
                        <Form.Item label="Yetkazib berish vaqti" name="deliveryDate" style={formItemHalfStyle}>
                            <DatePicker placeholder="01/24" />
                        </Form.Item>
                    </div>
                    <Form.Item name="" className='' >
                        <Radio.Group>
                            <Radio value="cash">Naqd yetkazgandan so'ng to'lash</Radio>
                            <Radio value="card">Karta oraqli (Humo/Uzcard/Visa/)</Radio>
                            <Radio value="installments">Muddatli to'lov (4/6/12/24 oyga)</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
                <Geolocation />
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

                    <Link href="/">
                        <div>
                            <button className="legitimation">Xaridni rasmiylashtirish</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className=' mb-[60px]'>
            <SliderProducts/>
            </div>
        </Container>
    );
};

// Styles
const formStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

const formItemStyle = {
    flex: 1,
    marginRight: '8px',
};

const formItemHalfStyle = {
    flex: 1,
    marginRight: '8px',
    marginBottom: '16px',
};

const fullWidthStyle = {
    width: '100%',
    marginBottom: '16px',
};

export default DeliveryForm;
