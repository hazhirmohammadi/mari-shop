import './style.css';
import {Style} from "./style.js";
import {Pak1,Pak3,Pak2,BgHeader} from "./public/assets/images";
import { setupCounter } from './counter.js'
import {Logo,searchIcon,cartShop} from "./public/assets/icons/index.js";

document.querySelector('#app').innerHTML = `
  <body class="h-full">
     <!--Header-->
     <div class="flex justify-center items-center bg-[#05422C] py-2 gap-4">
            <span class="text-white">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</span>
            <span class="text-white font-bold">23 : 15 : 00</span>
     </div>
     <header class="flex flex-col">
     
        <nav class="flex justify-between items-center py-[14px] ${Style.paddingX}">
            <div>
                <img src="${Logo}" alt="Logo">
            </div>
            
            <div class=" flex flex-row items-center justify-center">
                 <input placeholder="Search" type="text" class=" outline-none p-4">
                <div class="p-4 rounded-full bg-[#17AF26] w-fit">
                    <img src="${searchIcon}" alt="searchIcon">
                </div>
            </div>
            <div class=" flex flex-row">
                 <div class=" pr-6">
                    <span class="font-bold">Your Account</span>
                </div>
                 <div class="flex  border-l-[1px] border-[#C8C9CB] pl-6">
                    <img src="${cartShop}" alt="cartShop">
                    <span class="-mb-[30px]  -ml-2 text-white text-[10px] bg-red-600 w-fit h-fit rounded-full px-[4px]">0</span>
                </div>
            </div>
        </nav>
        <div class=" flex items-center  justify-center ${Style.paddingX} py-[16px]">
            <ul class="flex gap-x-10">
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
        <div class="bg  bg-cover bg-no-repeat ${Style.paddingX}">
          <div class="grid grid-cols-2 pt-[120px]">
              <div class="col-span-1 flex flex-col">
                <div class=" flex flex-col justify-start">
                    <span class="font-normal text-[#F2BC1B] uppercase mb-4">BEST SELLER</span>
                    <h1 class="text-[64px] text-white font-[600] uppercase -tracking-[4px]">
                        BEST DISPENSARY TO <br> BUY WEED ONLINE
                    </h1>
                    <span class="text-[24px] text-[#F4F4F4] font-normal mb-[102px]">
                        Vitamins & Supplements
                    </span>
                </div>
                <div class="flex flex-row mb-10">
                    <span class="text-white border-r-[1px] border-[#9D9EA2] pr-8">Get 25% off</span>
                    <span class="text-white pl-8">Free Shipping</span>
                </div>
                <button class="rounded-full px-[56px] py-2 bg-[#17AF26] text-white font-bold w-fit  mb-[118px]">Shop All</button>
            </div>
              </div>
              <div class="col-span-1"></div>
          </div>
        </div>
       
    </header>
    
    
    
  </body>
`;
//initial
setupCounter(document.querySelector('#counter'));
