import Image from "next/image";
import Logo from "../../app/img/logo.svg"
import Link from "next/link";


export default function Opps() {
  return (
    <div className="min-h-screen bg-[url(img/bg-image.png)] bg-no-repeat bg-cover">
      <div className="px-[50px] border border-[#D1D1D1] border-b-1 flex justify-between items-center sm:px-[15px] sm:py-[12px] border-t-[0px] border-l-[0px] border-r-[0px] md:px-[20px]">
        <Link href="/">
            <Image
                src={Logo}
                alt=""
                className="sm:h-[50px] sm:w-[100px]"
            />  
        </Link>
        <button className="bg-gradient-to-t from-[#FDE705] hover:to-[#d9c608] to-[#FDE705] transition-all hover:transition-all text-[#201B1B] font-bold py-2 px-6 rounded-[10px] h-[53px] font-[family-name:var(--font-popin-bold)] text-[20px] sm:text-[14px] sm:h-[43px]">
          Get Notification
        </button>
      </div>
      <div className="py-[40px] text-center flex flex-col gap-[30px] sm:px-[15px] sm:gap-[10px]">
        <h3 className="font-[family-name:var(--font-Fredoka-bold)] text-[60px] text-[#3E3636] leading-[65px] sm:text-[30px] sm:leading-[30px]">
        Oops! <strong className="text-[#71A62F]">We are sold out...</strong>
        </h3>
        <div className="max-w-[650px] m-auto">
          <p className="text-[16px] leading-[24px] sm:text-[14px] sm:leading-[20px] text-[#3E3636]">Enter your email and we will notify you as soon as we restock.. with a discount for the inconvenience!</p>
        </div>
      </div>

      <div className="sm:px-[15px] md:px-[15px]">
      <div className="max-w-[785px] sm:w-full m-auto rounded-[10px] overflow-hidden mt-[50px] shadow-2xl shadow-[#5C94FF45] bg-gradient-to-t from-[#FFFAC5] to-[#FFFAC5] p-[2px] rounded-[12px] sm:px-[15px]">
        <div className="py-[30px] px-[50px] sm:px-[15px] rounded-[12px]">
          <div className="text-center text-black text-[20px] font-bold font-[family-name:var(--font-popin-bold)]">Write your email</div>        
            <form className="max-w-full mx-auto mt-[20px]" action="/opps">   
                <div className="relative">
                    <input type="search" id="default-search" className="block w-full h-[70px] sm:h-[55px] p-5 sm:text-[14px] text-[16px] italic text-[#474747] placeholder-[#474747] border border-[#ffffff45] rounded-lg bg-[#fff] focus:border-none" placeholder="Enter Email Address" />
                    <button type="submit" className="bg-gradient-to-t from-[#FDE705] hover:to-[#d9c608] to-[#FDE705] transition-all hover:transition-all transition-all text-black font-[family-name:var(--font-popin-bold)] sm:relative sm:right-[0px] sm:m-auto sm:block sm:w-full sm:mt-[20px] absolute right-[10px] top-0 bottom-0 m-auto h-[48px] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[20px] sm:text-[14px] px-[50px] sm:px-[12px]">Notify Me</button>
                </div>
            </form>
        </div>
      </div>  
      </div>
     
    </div>
  );
}
