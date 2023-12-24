import './style.css';
import {Style} from "./style.js";
import {Pak1,Pak3,Pak2,BgHeader} from "./public/assets/images";
import { setupCounter } from './counter.js'
import {Logo, searchIcon, cartShop, menuIcon, LogoSm, truckFast, safeHome, coin} from "./public/assets/icons/index.js";

document.querySelector('#app').innerHTML = `
  <body class="h-full ${Style.maximumSize}">
     <!--Header-->
     <div class="flex justify-center items-center bg-[#05422C] py-2 gap-4">
            <span class="text-white lg:text-[14px] text-[10px] ">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</span>
            <span class="text-white font-bold lg:text-[14px] text-[10px]">23 : 15 : 00</span>
     </div>
     
      <header class="flex flex-col ${Style.maximumSize}">

        <nav class="flex  flex-col py-[14px] ${Style.paddingX}">
            <div class="w-full flex justify-between items-center">
                  <!-- Logo-->
                 <div class="flex flex-row gap-x-3">
                     <img class="lg:hidden flex " src="${menuIcon}" alt="menuIcon">
                     <img class="lg:flex hidden" src="${Logo}" alt="Logo">
                     <img class="lg:hidden flex w-[100px]" src="${LogoSm}" alt="Logo">
                 </div>
                  <!-- Search Input-->
                 <div class=" lg:flex hidden flex-row items-center justify-center">
                     <input placeholder="Search" type="text" class=" outline-none p-4">
                     <div class="p-4 rounded-full bg-[#17AF26] w-fit">
                         <img src="${searchIcon}" alt="searchIcon">
                     </div>
                 </div>
                  <!-- Login & cart Shop-->
                 <div class=" flex flex-row">
                <div class=" lg:pr-6 pr-3 ">
                    <span class="font-bold lg:text-[14px] text-[9px]">Your Account</span>
                </div>
                <div class="flex  border-l-[1px] border-[#C8C9CB] lg:pl-6 pl-3">
                    <img src="${cartShop}" alt="cartShop">
                    <span class="-mb-[30px]  -ml-2 text-white text-[10px] bg-red-600 w-fit h-fit rounded-full px-[4px]">0</span>
                </div>
            </div>
            </div>
            <!-- Sm Input-->
            <div class=" lg:hidden flex flex-row items-center justify-center mt-3 ">
                <input placeholder="Search" type="text" class=" placeholder:text-sm outline-none p-2">
                <div class="p-3 rounded-full bg-[#17AF26] w-fit">
                    <img src="${searchIcon} " alt="searchIcon">
                </div>
            </div>
        </nav>
        <!--Links Nav-->
        <div class=" lg:flex hidden items-center   justify-center ${Style.paddingX} py-[16px] ">
            <ul class="flex gap-x-9">
                <li class="text-[#46494F] font-normal cursor-pointer">Shop All</li>
                <li class="text-[#46494F] font-normal cursor-pointer">Flower</li>
                <li class="text-[#46494F] font-normal cursor-pointer">Edibles</li>
                <li class="text-[#46494F] font-normal cursor-pointer">Concentrates</li>
                <li class="text-[#46494F] font-normal cursor-pointer">Mushrooms</li>
                <li class="text-[#46494F] font-normal cursor-pointer">Promotions/Bundles</li>
                <li class="text-[#46494F] font-normal cursor-pointer">Support</li>
                <li class="text-[#46494F] font-normal cursor-pointer">Rewards</li>
                <li class="text-[#46494F] font-normal cursor-pointer">Blog</li>
            </ul>
        </div>
        <!-- Hero -->
        <div class="md:bg-[url('./public/assets/images/bg-header.png')] bg-[url('./public/assets/images/bg-header-mobile.png')]  h-full max-md:h-[694px] w-full lg:bg-cover  md:bg-cover   max-sm:bg-cover sm:bg-cover bg-no-repeat ${Style.paddingX}">
            <!--Grid Hero-->
            <div class="md:grid grid-cols-2 flex flex-col lg:pt-[120px] pt-[56px]">
                <!-- Col Left -->
                <div class="col-span-1 flex flex-col ">
                    <div class=" flex flex-col justify-start">
                        <span class="font-normal lg:text-[16px] text-[14px] text-[#F2BC1B] uppercase mb-4">BEST SELLER</span>
                        <h1 class="lg:text-[64px] text-[32px] max-[320px]:text-[24px] text-white font-[600] uppercase lg:-tracking-[5px] -tracking-[1px] lg:leading-[70px] leading-[40px]">
                            BEST DISPENSARY TO <br> BUY WEED ONLINE
                        </h1>
                        <span class="lg:text-[24px] text-[16px] text-[#F4F4F4] font-normal lg:mb-[102px] mb-10">
                        Vitamins & Supplements
                    </span>
                    </div>
                    <div class="flex flex-row lg:mb-10 mb-6">
                        <span class="text-white border-r-[1px] border-[#9D9EA2] pr-8">Get 25% off</span>
                        <span class="text-white pl-8">Free Shipping</span>
                    </div>
                    <button class="rounded-full px-[56px] py-2 bg-[#17AF26] text-white font-bold w-fit  lg:mb-[118px] mb-8">Shop
                        All
                    </button>
                </div>  
                <!-- Col Right-->
                <div class="col-span-1   relative w-5/5 h-[350px]  ">
                    
                        <img class="absolute w-[88px]  h-[88px]  lg:w-[172px] lg:h-[172px]  top-2/4    right-[66%] 
                        max-[768px]:top-[52%] max-[768px]:right-[68%] max-[425px]:top-[50%] max-[425px]:right-[70%] " src="${Pak1}" alt="">
                        
                        <img class="absolute w-[108px] h-[108px] lg:w-[211px] lg:h-[211px]  top-[10%]  right-[29%] 
                        max-[768px]:top-[10%] max-[768px]:right-[33%] max-[425px]:top-[12%] max-[425px]:right-[33%] " src="${Pak2}" alt="">
                        
                        <img class="absolute w-[90px]  h-[90px]  lg:w-[180px] lg:h-[180px]  top-[41%]  right-[1%]  
                        max-[768px]:top-[50%] max-[768px]:right-[8%]  max-[425px]:top-[48%] max-[425px]:right-[2%] " src="${Pak3}" alt="">
                    
                </div>
            </div>
        </div>
        <!--Services-->
        <div class="${Style.paddingX} ${Style.paddingY}">
              <div class="flex md:flex-row flex-col lg:gap-x-8 gap-y-8">
              
                  <div class="flex flex-row gap-x-6">
                       <img src="${truckFast}"  class="h-fit max-sm:w-[32px] max-sm:h-[32px]" alt="truckFast">
                      <div class="flex flex-col ">
                         <span class="text-2xl text-[#1A1E26] font-medium mb-4 text-left">Reliable Shipping</span>
                         <p class="text-[#717378] text-base font-normal leading-6">
                             Green Society provides Canada Post Xpress Shipping right to your doorstep! 
                             You can also opt in for shipping insurance. For orders over $149, shipping is free!
                         </p>
                      </div>
                  </div>
                  
                  <div class="flex flex-row gap-x-6">
                       <img src="${safeHome}" class="h-fit max-sm:w-[36px] max-sm:h-[36px]" width="56" height="56" alt="truckFast">
                      <div class="flex flex-col ">
                         <span class="text-2xl text-[#1A1E26] font-medium mb-4 text-left">Reliable Shipping</span>
                         <p class="text-[#717378] text-base font-normal leading-6">
                             Our secure payment system accepts the most common forms of payments making the checkout process quicker! 
                             The payments we accept are debit, all major credit cards, and cryptocurrency.
                         </p>
                      </div>
                  </div>
                  
                  <div class="flex flex-row gap-x-6">
                       <img src="${coin}" class="h-fit max-sm:w-[36px] max-sm:h-[36px]" alt="truckFast">
                      <div class="flex flex-col ">
                         <span class="text-2xl text-[#1A1E26] font-medium mb-4 text-left">Reliable Shipping</span>
                         <p class="text-[#717378] text-base font-normal leading-6">
                             Here at Green Society, we take pride in the quality of our products and service. 
                             Our prices are set to ensure you receive your medication at a reasonable price and safely
                         </p>
                      </div>
                  </div>
                  
              </div>
        </div>
    </header>
    
    
    
  </body>
`;
//initial
setupCounter(document.querySelector('#counter'));
