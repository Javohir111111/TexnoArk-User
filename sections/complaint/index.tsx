import Container from "@/components/container";
import Mingcute from "@/assets/icons/mingcute_safety-certificate-fill.svg";
import Image from "next/image";
const Index = () => {
  return (
    <section className="pb-[60px]">
      <Container>
        <div className="bg-[#F7F041] py-10 px-20 rounded-[10px] flex items-center gap-[50px]">
          <div>
            <p className="text-[18px] mb-[6px] text-[#265AD9]">
              We do not like the product - we will return the money
            </p>
            <h2 className="max-w-[844px] text-[#265AD9] text-[36px] font-black leading-[43px]">
              Is there a defect or did not like the product on delivery?
            </h2>
          </div>
          <div>
            <Image src={Mingcute} alt="mingcute" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
