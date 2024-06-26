"use client";
import { useRouter } from "next/navigation";
const Index = () => {
  const router = useRouter();
  const signUpPage = () => {
    router.push("/login");
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <section className="py-10">
      <div className="w-[800px] bg-white mx-auto rounded-[10px] px-[50px] py-[30px]">
        <p className="text-center text-[36px] font-black mb-6">Sign Up</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 pb-5">
            <input
              name="first_name"
              type="text"
              placeholder="First Name"
              className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
            />
            <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
            />
            <input
              name="phone_number"
              id="phone_number"
              type="tel"
              placeholder="Phone number"
              className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
            />
            <input
              name="password"
              type="tel"
              placeholder="Password"
              className="w-full px-5 py-[18px] bg-[#F0F0F0] rounded-md outline-none ring-orange focus:ring-2 duration-200"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-[15px] rounded-md text-white bg-orange mb-[14px]"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={signUpPage}
              className="w-full py-[15px] rounded-md text-[#240E00CC] bg-[#F0F0F0]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Index;
