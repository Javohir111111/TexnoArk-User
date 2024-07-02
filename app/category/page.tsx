'use client';
import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@/components/sidebar';
import Container from "@/components/container";
import Card from "@/components/ui/category-card";
const { Content } = Layout;

const Home = () => {
  return (
    <Container>
      <Layout style={{ minHeight: '100vh', backgroundColor: "#F0F0F0"}}>
        <Sidebar />
        <Layout>
          <Content style={{ padding: '24px', background: '#F0F0F0' }}>
          <div className="flex items-center gap-5 justify-between mb-6  ">
          <Card/>
          {/* <Card
            image={MacBook}
            text="Noutbuk Apple MacBook Pro 14 M1 MKGP3RU/A"
            price={1500}
          /> */}
        </div>
          <div className="flex items-center gap-5 justify-between">
          <Card/>
          {/* <Card
            image={MacBook}
            text="Noutbuk Apple MacBook Pro 14 M1 MKGP3RU/A"
            price={1500}
          /> */}
        </div>
          </Content>
        </Layout>
      </Layout>
    </Container>
  );
};

export default Home;
