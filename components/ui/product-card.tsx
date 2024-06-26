import Image from "next/image";
import AddToCard from "@/assets/icons/add_to_card.svg";
import LikeIcon from "@/assets/icons/like.svg";
const Index = ({ image, text, price }: any) => {
  return (
    <div className="relative">
      <div className="w-[305px] h-[460px] bg-white rounded-[10px] cursor-pointer">
        <div className="flex items-center justify-center h-[55%]">
          <Image className="max-w-[230px]" src={image} alt="Mackbook Pro" />
        </div>
        <div className="px-[28px] h-[45%]">
          <h3 className="text-text mb-4">{text}</h3>
          <div>
            <div>
              <p className="text-[18px] font-bold text-gray-400 line-through">${price.toLocaleString()}</p>
              <p className="text-[18px] font-bold text-orange">${price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-orange absolute bottom-[30px] left-[28px] w-[250px] py-[10px] flex items-center justify-center gap-3 rounded-md z-10">
        <Image src={AddToCard} alt="add to card" />
        <span className="text-white">Cart</span>
      </button>
      <div className="absolute top-5 right-6 cursor-pointer">
        <Image className="w-[27px]" src={LikeIcon} alt="like" />
      </div>
    </div>
  );
};

export default Index;
