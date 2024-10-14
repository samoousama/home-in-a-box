import Image from "next/image";
import Link from "next/link";
import Logo from "../app/img/logo.svg"
import IconProduct from "../app/img/great-product-icon.png"
import DeliveryIcon from "../app/img/delivery-icon.png"
import RefundIcon from "../app/img/refund-icon.png"
import CardImage from "../app/img/card-img.png"
import ArrowLeft from "../app/img/arrowimg-left.png"
import ArrowRight from "../app/img/arrowimg-right.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8ffe5]">
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

    <div className="relative">

      <div className="absolute top-[40px] sm:hidden md:hidden">
        <Image
            src={ArrowLeft}
            alt=""
            className=""
        /> 
      </div>  

      <div className="py-[50px] text-center flex flex-col gap-[30px] sm:px-[15px] md:px-[15px]">
        <h3 className="font-[family-name:var(--font-Fredoka-bold)] text-[60px] text-[#3E3636] sm:text-[30px] sm:leading-[40px] leading-[65px] md:text-p[35px]">
          Your Favorite Snacks From Home 
          <strong className="text-[#71A62F] block">Delivered Straight To Your Door</strong>
        </h3>
        <div className="max-w-[650px] m-auto">
          <p className="text-[16px] sm:text-[14px] sm:leading-[20px] leading-[24px] text-[#3E3636]">Living abroad means leving the food, snacks, and memories we loved so much. Now, you can get a care package of goodies delivered to your every month so you can always have a taste of home no mattetr what</p>
        </div>
      </div>

      <div className="py-[20px] pb-[80px]">
        <div className="max-w-[1100px] m-auto">
          <div className="flex gap-[20px] justify-center">
            <form action="opps" className="flex gap-[20px] justify-center sm:flex-col sm:px-[15px] md:flex-col sm-px-[15px]">
            <div className="flex items-center gap-[20px] sm:flex-col">
              <strong className="text-[#3E3636] text-[16px] font-[family-name:var(--font-popin-bold)]">Email me when box from</strong>
              <form className="max-w-sm mx-auto sm:max-w-[100%]">
                <select id="countries" className="bg-[#FFFFFF] shadow-lg border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[237px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[60px] sm:max-w-[100%]">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>              
            </div>
            <div className="flex items-center gap-[20px] sm:flex-col md:justify-center">
              <strong className="text-[#3E3636] text-[16px] font-[family-name:var(--font-popin-bold)]">are available</strong>
              <form>
                <input type="email" className="bg-[#fff] px-[20px] h-[60px] shadow-lg rounded-[12px]" placeholder="user@mail.here" />
              </form>
            </div>
            <div>
            <button className="bg-gradient-to-t from-[#FDE705] hover:to-[#d9c608] to-[#FDE705] transition-all hover:transition-all text-[#201B1B] font-bold py-2 px-6 rounded-[10px] h-[60px] font-[family-name:var(--font-popin-bold)] text-[20px] m-auto block">
              Notify Me
            </button>
            </div>
            </form>
          </div>  
        </div>
      </div>

      <div className="absolute right-0 bottom-[10px] md:hidden">
        <Image
            src={ArrowRight}
            alt=""
            className="max-w-[250px]"
        /> 
      </div>  

      </div>

      <div className="grid grid-cols-3 max-w-[1200px] m-auto sm:grid-cols-1 px-[15px] sm:gap-[40px]">
        <div className="text-left flex gap-[20px] items-center sm:justify-center">
          <Image
            src={IconProduct}
            alt=""
            className="w-[49px] h-[49px]"
          />
          <div>
            <strong className="block text-[#3E3636] text-[20px] font-bold">Great Product</strong>
            <p className="text-[16px] text-[#3E3636] italic">Guaranteed Great Quality Products</p>
          </div>
        </div>
        <div className="text-left flex gap-[20px] items-center justify-center">
          <Image
            src={DeliveryIcon}
            alt=""
            className="w-[49px] h-[49px]"
          />
          <div>
            <strong className="block text-[#3E3636] text-[20px] font-bold">Express Delivery</strong>
            <p className="text-[16px] text-[#3E3636] italic">Monthly Delivery for Your Convenience</p>
          </div>
        </div>
        <div className="text-left flex gap-[20px] items-center justify-center sm:justify-start">
          <Image
            src={RefundIcon}
            alt=""
            className="w-[49px] h-[49px]"
          />
          <div>
            <strong className="block text-[#3E3636] text-[20px] font-bold">Refund Available</strong>
            <p className="text-[16px] text-[#3E3636] italic">Satisfaction Guaranteed </p>
          </div>
        </div>
      </div>

      <div className="py-[80px] sm:py-[50px] sm:px-[15px]">
         <h3 className="font-[family-name:var(--font-Fredoka-bold)] text-[36px] text-[#3E3636] leading-[52px] text-center">Featured Packages</h3>
         <div className="grid grid-cols-3 max-w-[1180px] m-auto mt-[40px] gap-[30px] sm:grid-cols-1">
          <div className="bg-[#FFFAC5] py-[30px] px-[30px] shadow shadow-[#ADA8A840] rounded-[24px] hover:translate-y-[-5px] transition-all hover:transition-all">
            <Image
               src={CardImage}
               alt=""
               className="text-center m-auto block pb-[20px]"
            />
            <h3 className="text-[24px] text-center text-[#3E3636] py-[5px] font-bold  font-[family-name:var(--font-popin-bold)]">American Pack</h3>
            <strong className="text-[18px] block text-center text-[#71A62F] py-[10px] font-bold  font-[family-name:var(--font-popin-bold)]">What’s Inside?</strong>
            <p className="text-center text-[16px] text-[#3E3636] leading-[24px] font-[family-name:var(--font-popin-regular)]">Enjoy a monthly box of authentic snacks from American! Relish the flavors of home and satisfy your cravings with a delightful assortment of treats!</p>
            <button className="bg-gradient-to-t from-[#FDE705] to-[#FDE705] text-[#201B1B] font-bold py-2 px-6 rounded-[10px] h-[53px] font-[family-name:var(--font-popin-bold)] text-[20px] m-auto block mt-[30px] shadow-lg hover:shadow-[#ccc]">
              Buy Now
            </button>
          </div>
          <div className="bg-[#FFFAC5] py-[30px] px-[30px] shadow shadow-[#ADA8A840] rounded-[24px] hover:translate-y-[-5px] transition-all hover:transition-all">
            <Image
               src={CardImage}
               alt=""
               className="text-center m-auto block pb-[20px]"
            />
            <h3 className="text-[24px] text-center text-[#3E3636] py-[5px] font-bold  font-[family-name:var(--font-popin-bold)]">Turkish Treats</h3>
            <strong className="text-[18px] block text-center text-[#71A62F] py-[10px] font-bold  font-[family-name:var(--font-popin-bold)]">What’s Inside?</strong>
            <p className="text-center text-[16px] text-[#3E3636] leading-[24px] font-[family-name:var(--font-popin-regular)]">Enjoy a monthly box of authentic snacks from American! Relish the flavors of home and satisfy your cravings with a delightful assortment of treats!</p>
            <button className="bg-gradient-to-t from-[#C3C3C3] to-[#C3C3C3] text-[#717171] font-[500] py-2 px-6 rounded-[10px] h-[53px] font-[family-name:var(--font-popin-bold)] text-[20px] m-auto block mt-[30px] shadow-lg hover:shadow-[#ccc]">
              Sold Out
            </button>
          </div>
          <div className="bg-[#FFFAC5] py-[30px] px-[30px] shadow shadow-[#ADA8A840] rounded-[24px] hover:translate-y-[-5px] transition-all hover:transition-all">
            <Image
               src={CardImage}
               alt=""
               className="text-center m-auto block pb-[20px]"
            />
            <h3 className="text-[24px] text-center text-[#3E3636] py-[5px] font-bold  font-[family-name:var(--font-popin-bold)]">Danish Choco</h3>
            <strong className="text-[18px] block text-center text-[#71A62F] py-[10px] font-bold  font-[family-name:var(--font-popin-bold)]">What’s Inside?</strong>
            <p className="text-center text-[16px] text-[#3E3636] leading-[24px] font-[family-name:var(--font-popin-regular)]">Enjoy a monthly box of authentic snacks from American! Relish the flavors of home and satisfy your cravings with a delightful assortment of treats!</p>
            <button className="bg-gradient-to-t from-[#C3C3C3] to-[#C3C3C3] text-[#717171] font-[500] py-2 px-6 rounded-[10px] h-[53px] font-[family-name:var(--font-popin-bold)] text-[20px] m-auto block mt-[30px] shadow-lg hover:shadow-[#ccc]">
              Sold Out
            </button>
          </div>  
          <div className="bg-[#FFFAC5] py-[30px] px-[30px] shadow shadow-[#ADA8A840] rounded-[24px] hover:translate-y-[-5px] transition-all hover:transition-all">
            <Image
               src={CardImage}
               alt=""
               className="text-center m-auto block pb-[20px]"
            />
            <h3 className="text-[24px] text-center text-[#3E3636] py-[5px] font-bold  font-[family-name:var(--font-popin-bold)]">American Pack</h3>
            <strong className="text-[18px] block text-center text-[#71A62F] py-[10px] font-bold  font-[family-name:var(--font-popin-bold)]">What’s Inside?</strong>
            <p className="text-center text-[16px] text-[#3E3636] leading-[24px] font-[family-name:var(--font-popin-regular)]">Enjoy a monthly box of authentic snacks from American! Relish the flavors of home and satisfy your cravings with a delightful assortment of treats!</p>
            <button className="bg-gradient-to-t from-[#C3C3C3] to-[#C3C3C3] text-[#717171] font-[500] py-2 px-6 rounded-[10px] h-[53px] font-[family-name:var(--font-popin-bold)] text-[20px] m-auto block mt-[30px] shadow-lg hover:shadow-[#ccc]">
              Sold Out
            </button>
          </div>
          <div className="bg-[#FFFAC5] py-[30px] px-[30px] shadow shadow-[#ADA8A840] rounded-[24px] hover:translate-y-[-5px] transition-all hover:transition-all">
            <Image
               src={CardImage}
               alt=""
               className="text-center m-auto block pb-[20px]"
            />
            <h3 className="text-[24px] text-center text-[#3E3636] py-[5px] font-bold  font-[family-name:var(--font-popin-bold)]">Turkish Treats</h3>
            <strong className="text-[18px] block text-center text-[#71A62F] py-[10px] font-bold  font-[family-name:var(--font-popin-bold)]">What’s Inside?</strong>
            <p className="text-center text-[16px] text-[#3E3636] leading-[24px] font-[family-name:var(--font-popin-regular)]">Enjoy a monthly box of authentic snacks from American! Relish the flavors of home and satisfy your cravings with a delightful assortment of treats!</p>
            <button className="bg-gradient-to-t from-[#C3C3C3] to-[#C3C3C3] text-[#717171] font-[500] py-2 px-6 rounded-[10px] h-[53px] font-[family-name:var(--font-popin-bold)] text-[20px] m-auto block mt-[30px] shadow-lg hover:shadow-[#ccc]">
              Sold Out
            </button>
          </div>
          <div className="bg-[#FFFAC5] py-[30px] px-[30px] shadow shadow-[#ADA8A840] rounded-[24px] hover:translate-y-[-5px] transition-all hover:transition-all">
            <Image
               src={CardImage}
               alt=""
               className="text-center m-auto block pb-[20px]"
            />
            <h3 className="text-[24px] text-center text-[#3E3636] py-[5px] font-bold  font-[family-name:var(--font-popin-bold)]">Danish Choco</h3>
            <strong className="text-[18px] block text-center text-[#71A62F] py-[10px] font-bold  font-[family-name:var(--font-popin-bold)]">What’s Inside?</strong>
            <p className="text-center text-[16px] text-[#3E3636] leading-[24px] font-[family-name:var(--font-popin-regular)]">Enjoy a monthly box of authentic snacks from American! Relish the flavors of home and satisfy your cravings with a delightful assortment of treats!</p>
            <button className="bg-gradient-to-t from-[#C3C3C3] to-[#C3C3C3] text-[#717171] font-[500] py-2 px-6 rounded-[10px] h-[53px] font-[family-name:var(--font-popin-bold)] text-[20px] m-auto block mt-[30px] shadow-lg hover:shadow-[#ccc]">
              Sold Out
            </button>
          </div>                              
         </div>
      </div>  

    </div>
  );
}
