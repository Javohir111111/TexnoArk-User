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
          <div className="absolute right-[10%] top-[48px] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto">
            <Image
              src={IphoneImage}
              alt="iphone"
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
