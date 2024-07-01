import Container from "@/components/container";
import Card from "@/components/ui/product-card";
import MacBook from "@/assets/images/macbook-pro.png";
import ArrowIcon from "@/assets/icons/arrow_right.svg";
import Image from "next/image";

const Index = () => {
  return (
    <section className="py-[64px]">
      <Container>
        <div className="flex justify-between items-start">
          <p className="text-[32px] font-bold mb-6">Popular products</p>
          <button className="flex items-center gap-2 px-5 py-[13px] bg-white border border-green rounded-md">
            <span className="text-green">Show more</span>
            <span className="text-[18px] font-bold text-gray-400">
              <Image src={ArrowIcon} alt="arrow" />
            </span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
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
