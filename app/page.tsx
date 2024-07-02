import Intro from '@/sections/main-intro'
import SliderProducts from '@/components/single-product/slider-products'
import Container from '@/components/container'
import Complaint from '@/sections/complaint'
export default function Home() {
  return (
    <>
      <Intro />
      <div className="mt-[60px] mb-[60px]">
        <Container>
          <h3 className="text-[20px] font-medium sm:text-[20px] sm:font-medium md:text-[24px] md:font-semibold lg:text-[28px] lg:font-bold mb-6">Ommabob mahsulotlar</h3>
        </Container>
        <SliderProducts />
      </div>
      <div className=" mb-[60px]">
        <Container>
          <h3 className="text-[20px] font-medium sm:text-[20px] sm:font-medium md:text-[24px] md:font-semibold lg:text-[28px] lg:font-bold mb-6">Populyarniy mahsulotlar</h3>
        </Container>
        <SliderProducts />
      </div>
      <div className=" mb-[60px]">
        <Container>
          <h3 className="text-[20px] font-medium sm:text-[20px] sm:font-medium md:text-[24px] md:font-semibold lg:text-[28px] lg:font-bold mb-6">Aksiyadagi mahsulotlar</h3>
        </Container>
        <SliderProducts />
      </div>
      <Complaint />
    </>
  );
}
