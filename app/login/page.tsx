"use client";
import { useRouter } from "next/navigation";
const Index = () => {
  const router = useRouter();
  const signUpPage = () => {
    router.push("/sign-up");
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <section className="py-10">
      <div className="w-[500px] bg-white mx-auto rounded-[10px] px-[50px] py-[30px]">
        <p className="text-center text-[36px] font-black mb-6">Login</p>
        <form onSubmit={handleSubmit}>
          <input
            name="phone_number"
            id="phone_number"
            type="tel"
            placeholder="Phone number"
            className="w-full mb-[20px] px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
          />
          <input
            name="password"
            id="password"
            placeholder="Password"
            type="password"
            className="w-full mb-[48px] px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
          />
          <div>
            <button
              type="submit"
              className="w-full py-[15px] rounded-md text-white bg-orange mb-[14px]"
            >
              Login
            </button>
            <button
              type="button"
              onClick={signUpPage}
              className="w-full py-[15px] rounded-md text-[#240E00CC] bg-[#F0F0F0]"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Index;
