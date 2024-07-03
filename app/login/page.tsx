"use client";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Typography, message } from 'antd';
import http from '@/api'; // Ensure you import your HTTP client
import { saveToken } from '@/helper/auth-helper'; // Ensure you import your token save function
import { Login } from '@/service/auth.service';
import styles from './Login.module.scss'; // Ensure you create and import a CSS module for additional styles

const { Title } = Typography;

const Index = () => {
  const router = useRouter();

  const signUpPage = () => {
    router.push("/sign-up");
  };

  const handleSubmit = async (values: any) => {
    const { phone_number, password } = values;

    const data = { phone_number, password };

    try {
      const res = await Login(data);
      if (res.status === 201) {
        router.push("/"); // Redirect to dashboard or any other page on successful login
        // saveToken(res.data.da.tokens.access_token);
      } else {
        message.error('Login failed');
      }
    } catch (err) {
      console.log('Login error', err);
      message.error('Login error');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <Title level={1} className="text-center mb-6">Login</Title> */}
        <h1 className="text-center mb-6 font-semibold text-[28px]">Login</h1>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="phone_number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input
              placeholder="Phone number"
              type="tel"
              className="mb-[20px] px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              className="mb-[48px] px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full mb-[14px] py-6"
            >
              Login
            </Button>
            <Button
              type="default"
              onClick={signUpPage}
              className="w-full py-6"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Index;

// export const Login = async (data: any) => {
//   try {
//     const res = await http.post("/login", data);
//     if (res.status === 200) {
//       saveToken(res.data.access_token);
//     }
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const Register = async (data: any) => {
//   try {
//     const res = await http.post("/register", data);
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };
