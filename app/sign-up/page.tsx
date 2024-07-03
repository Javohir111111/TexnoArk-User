"use client";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Typography, message } from 'antd';
import { Register } from "@/service/auth.service";

const { Title } = Typography;

const Index = () => {
  const router = useRouter();

  const loginPage = () => {
    router.push("/login");
  };

  const handleSubmit = async (values: any) => {
    const { first_name, last_name, phone_number, password, email } = values;

    const data = { first_name, last_name, phone_number, password, email };

    try {
      const res = await Register(data);
      if (res.status === 200) {
        router.push("/"); // Redirect to dashboard or any other page on successful login
      } else {
        message.error('Login failed');
      }
    } catch (err) {
      console.log('Login error', err);
      message.error('Login error');
    }
  };

  return (
    <section className="py-10">
      <div className="w-[800px] bg-white mx-auto rounded-[10px] px-[50px] py-[30px]">
        <Title level={1} className="text-center mb-6">Sign Up</Title>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4 pb-5">
            <Form.Item
              name="first_name"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input
                placeholder="First Name"
                className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
              />
            </Form.Item>
            <Form.Item
              name="last_name"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input
                placeholder="Last Name"
                className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
              className="col-span-2"
            >
              <Input
                placeholder="Email"
                type="email"
                className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
              />
            </Form.Item>
            <Form.Item
              name="phone_number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input
                placeholder="Phone number"
                type="tel"
                className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                placeholder="Password"
                className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
              />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mb-[14px] py-6"
            >
              Sign Up
            </Button>
            <Button
              type="default"
              onClick={loginPage}
              className="w-full py-6"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Index;
