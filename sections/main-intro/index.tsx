import Container from "@/components/container";
import IphoneImage from "@/assets/images/iphone.png";
import Image from "next/image";
const Index = () => {
  return (
    <section className="pt-6">
      <Container>
        <div className="bg-white pt-[92px] pl-[80px] pb-[128px] rounded-[10px] relative overflow-hidden">
          <h1 className="text-text text-[44px] font-black max-w-[631px] leading-[48px] mb-5">
            <span className="text-green">Apple</span> olish uchun pul yig’ishga
            hojat yo’q{" "}
            <span className="text-[#fff] bg-[#FF6F14] text-[36px] rounded-[10px] px-3">
              12 oyda to’lang
            </span>
          </h1>
          <p className="text-[18px] max-w-[473px]">
            Boshlang’ich to’lovsiz pasport evaziga halol muddatli to’lovga xarid
            qiling
          </p>
          <Image
            className="absolute right-[111px] top-[48px]"
            src={IphoneImage}
            alt="iphone"
          />
        </div>
      </Container>
    </section>
  );
};

export default Index;
