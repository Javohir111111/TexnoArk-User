import Intro from '@/sections/main-intro'
import PopularProducts from '@/sections/popular-products'
import Complaint from '@/sections/complaint'
export default function Home() {
  return (
    <>
      <Intro />
      <div className='justify-items-center mx-auto'>
        <PopularProducts />
      </div>
      <Complaint />
    </>
  );
}
