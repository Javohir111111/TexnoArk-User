import Container from "@/components/container";
import Card from "@/components/ui/product-card";
import MacBook from "@/assets/images/macbook-pro.png";
import ArrowIcon from "@/assets/icons/arrow_right.svg";
import Image from "next/image";

const Index = () => {
  return (
    <section className="py-[64px]">
      <Container>
        <div className="flex justify-between items-center px-[15px] mb-5">
          <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-6">Popular products</p>
          <button className="flex items-center gap-2 py-2 px-3 sm:py-3 sm:px-[18px] md:py-4 md:px-6 lg:py-[16px] lg:px-6 bg-white border border-green rounded-md">
            <span className="text-green">Show more</span>
            <span className="text-[18px] font-bold text-gray-400">
              <Image src={ArrowIcon} alt="arrow" />
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </Container>
    </section>
  );
};

export default Index;
