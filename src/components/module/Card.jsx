import Link from "next/link";

function Card(props) {
  const { id, title, image, discription, price } = props;
  return (
    <Link href={`/tour/1`}>
    <div className="w-[278.4375px] h-[277px] border border-[#0000001F] rounded-xl mt-5">
      <div>
        <img src={image} className="w-[278.4375px] h-[159px]" />
        <div className=" border-b !border-[#0000001F]">
          <h4 className="font-light text-xl mt-2 mr-1">{title}</h4>
          <div className="text-sm mt-2.5 text-[#282828B3]">{discription}</div>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="w-[64px] h-[25px] border border-[#28A745] rounded-lg bg-[#28A745] text-[#FFFFFF] mt-3 mr-1">
          رزرو
        </button>
        <div className="mt-3 ml-2">
          <span className="text-[#28A745] ml-0.5">{price}</span> تومان
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Card;
