import './style.css';
import {Style} from "./style.js";
import {Pak1, Pak3, Pak2, BgHeader} from "./public/assets/images";
import {setupCounter} from './counter.js'
import {
   Logo,
   searchIcon,
   cartShop,
   menuIcon,
   LogoSm,
   truckFast,
   safeHome,
   coin,
   star,
   arrowRight,
   arrowLeft,
   google,
   avatar_1,
   register,
   shop,
   make_payment,
   relax,
   customer_service,
   carbon_security,
   best_value, truck_bag, high_quality, trust
} from "./public/assets/icons/index.js";

document.querySelector('#app').innerHTML = `
  <body class="h-full ${Style.maximumSize}">
        <!--Green offer-->
        <section class="flex justify-center items-center bg-[#05422C] py-2 gap-4">
            <span class="text-white lg:text-[14px] text-[10px] ">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</span>
            <span class="text-white font-bold lg:text-[14px] text-[10px]">23 : 15 : 00</span>
        </section>
        <!-- Header-->
        <section class="flex flex-col ${Style.maximumSize}">
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
      </section>
        <!--Services-->
        <section class="${Style.paddingX} ${Style.paddingY} ${Style.maximumSize}">
              <div class="flex md:flex-row flex-col lg:gap-x-6 gap-y-8">
              
                  <div class="flex flex-row  gap-x-6">
                       <img src="${truckFast}"  class="lg:w-[54px] lg:h-[54px]  w-[32px] h-[32px] self-start" alt="truckFast">
                      <div class="flex flex-col ">
                         <span class="lg:text-2xl max-md:text-xl max-[1024px]:text-[16px] text-[#1A1E26] font-medium mb-4 text-left -tracking-[0.5px]">Reliable Shipping</span>
                         <p class="text-[#717378] lg:text-base text-sm font-normal leading-6">
                             Green Society provides Canada Post Xpress Shipping right to your doorstep! 
                             You can also opt in for shipping insurance. For orders over $149, shipping is free!
                         </p>
                      </div>
                  </div>
                  
                  <div class="flex flex-row gap-x-6">
                       <img src="${safeHome}" class="lg:w-[54px] lg:h-[54px]  w-[36px] h-[36px] self-start"  alt="truckFast">
                      <div class="flex flex-col ">
                         <span class="lg:text-2xl max-md:text-xl text-[#1A1E26] font-medium mb-4 text-left ">You’re Safe With Us</span>
                         <p class="text-[#717378] lg:text-base text-sm font-normal leading-6">
                             Our secure payment system accepts the most common forms of payments making the checkout process quicker! 
                             The payments we accept are debit, all major credit cards, and cryptocurrency.
                         </p>
                      </div>
                  </div>
                  
                  <div class="flex flex-row gap-x-6 ">
                       <img src="${coin}" class="lg:w-[54px] lg:h-[54px]  w-[36px] h-[36px] self-start" alt="truckFast">
                      <div class="flex flex-col ">
                         <span class="lg:text-2xl max-md:text-xl  text-[#1A1E26] font-medium mb-4 text-left ">Best Quality & Pricing</span>
                         <p class="text-[#717378] lg:text-base text-sm font-normal leading-6">
                             Here at Green Society, we take pride in the quality of our products and service. 
                             Our prices are set to ensure you receive your medication at a reasonable price and safely
                         </p>
                      </div>
                  </div>
                  
              </div>
        </section>
        <!-- Slogan-->
        <section class=" ${Style.paddingX} ${Style.maximumSize}">
            <h3 class="lg:text-[64px] text-[32px] max-[320px]:text-[24px] m-auto text-center lg:mt-[120px] mt-[64px] lg:mb-16 mb-8 text-[#1A1E26] font-bold
               max-w-[839px] lg:leading-[70px] leading-[38.4px] lg:-tracking-[4px] -tracking-[1.5px]">
               BEST DISPENSARY TO BUY WEED ONLINE IN CANADA
            </h3>
        </section>
        <!-- Product -->
        <section class=" ${Style.maximumSize} flex flex-col">
           <!-- slider-->
           <div class="slider flex items-center gap-x-8  flex-row ${Style.paddingX2}">
               <div class="w-full py-4 px-5 text-base text-[#05422C] text-center bg-[#F2F6F4]
                font-bold border-[1px] border-[#05422C] rounded-full whitespace-nowrap cursor-pointer"
                >Best Sellers</div>
               <div class="w-full py-4 px-5 text-base text-center font-normal whitespace-nowrap cursor-pointer"
               >Bundles & Promotions</div>
               <div class="w-full py-4 px-5 text-base text-center font-normal whitespace-nowrap cursor-pointer"
               >On Sale</div>
           </div>
           <!-- product container-->
           <div class="lg:grid grid-cols-4 flex flex-col mt-16">
               <div class="col-span-1  w-full h-full z-40 ${Style.paddingX2}">
                   <div class="lg:w-[379px] h-[556px] w-full  relative rounded-2xl bg-[#05422C] flex flex-col justify-center   ">
                       <img class="z-10 top-0 right-0 absolute" src="public/assets/images/vector.png" alt="">
                       <img class="z-20 mb-5 w-[213px] h-[213px] self-center" src="public/assets/images/image-13.png" alt="">
                       <div class="flex-col flex justify-center">
                           <span class="mb-2 self-center text-xl text-white font-bold">Shop our Best Sellers</span>
                               <div class="w-full ">
                                   <p class="mb-5 text-center text-[#FFFFFF99] text-sm font-normal max-w-[216px] m-auto">
                                     Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis
                                     feugiat.
                                   </p>
                              </div> 
                           <a class="text-center text-[#17AF26] font-medium underline text-sm" href="#">View All</a>
                       </div>
                   </div>
               </div>
               <div class="col-span-3 relative">
                   <button class="nxt-btn  p-2  right-[2%] bg-[#FFFFFF] hover:bg-green-200 shadow-lg shadow-gray-500  top-[40%] rounded-full absolute lg:block hidden z-20"><img src="${arrowRight}" alt=""></button>
                     <div class="product-container flex flex-row items-center w-full overflow-x-scroll gap-x-6">
                        <!-- card  -->
                           <div class="rounded-lg w-[291px] h-[568] lg:ml-32 ml-0">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                           </div>
                        <!--End Card-->
                        <!-- card -->
                            <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                           </div>
                        <!--End Card-->
                        <!-- card -->
                           <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                           </div>
                        <!--End Card-->
                        <!-- card -->
                         <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                         </div>
                        <!--End Card-->
                        <!-- card -->
                           <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                           </div>
                        <!--End Card-->
                        <!-- card -->
                          <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                          </div>
                        <!--End Card-->
                        <!-- card -->
                          <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                          </div>
                        <!--End Card-->
                        <!-- card -->
                          <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                          </div>
                        <!--End Card-->
                        <!-- card -->
                          <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                          </div>
                        <!--End Card-->
                        <!-- card -->
                          <div class="rounded-lg w-[291px] h-[568]">
                               <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px] ">
                                   <img src="public/assets/images/image-14.png" alt="">
                               </div>
                               <div class="flex flex-col  w-[291px]">
                                   <div class="flex flex-col">
                                       <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                                       <span class="text-[#1A1E26] text-lg text-center font-normal leading-[27px]">
                                          2 Oz Deal Watermelon Zkittles + Purple Gushers
                                      </span>
                                       <div class="flex flex-row gap-x-3 my-2 mx-auto">
                                           <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                               <img class="mr-[6px]" src="${star}" alt="star">
                                               <span>4.6/5</span>
                                           </div>
                                           <div class="flex flex-row items-center">
                                               <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                               <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                           </div>
                                       </div>
                                       <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                                           <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                                       </div>
                                   </div>
                               </div>
                               <div class="flex flex-col justify-center gap-y-5">
                                   <div class="flex flex-row gap-x-1 justify-center items-center">
                                       <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                                       <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                                   </div>
                                   <div class="flex flex-row items-center text-[#1A1E26]">
                                       <span class="text-xs font-normal py-1 px-[10] text-center">28g</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/2lb</span>
                                       <span class="text-xs font-normal py-1 px-[10] text-center">1/4lb</span>
                                   </div>
                                   <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                               </div>
                          </div>
                        <!--End Card-->
                     </div>
                   <button class="pre-btn p-2 bg-[#FFFFFF] hover:bg-green-200 shadow-lg shadow-gray-500 left-[15%] top-[40%] rounded-full absolute lg:block hidden z-20"><img src="${arrowLeft}" alt=""></button>
               </div>
           </div>
        </section>
        <!-- Comments  -->
        <section class=" ${Style.maximumSize} ">
              <!--Comment Header-->
              <div class="lg:mt-[136px] mt-16 lg:mb-16 mb-8 ${Style.paddingX2}">
                 <h4 class="text-[#1A1E26] lg:text-[64px] text-[32px] font-bold 
                 lg:-tracking-[4px] -tracking-[1.5px] lg:leading-[70px] leading-[38.4px]">
                 CUSTOMER TESTIMONIALS</h4>
              </div>
              <!--Comment section-->
              <div class="lg:grid grid-cols-4 flex flex-col">
                  <!--  Green Card  -->
                  <div class="col-span-1 z-40 w-full h-full lg:mb-0 mb-8  ${Style.paddingX2}">
                    <div class="bg-[#05422C] max-w-[379px] lg:p-10 p-6 flex flex-col justify-start rounded-2xl">
                       <div class="border-b-[1px] border-[#346654] pb-8">
                        <h5 class="lg:text-[32px] text-[24px] text-white lg:font-[600] font-bold self-start lg:-tracking-[1.5px] -tracking-[0.5px] 
                        lg:leading-[38px] leading-[36px]">VOTED BEST ONLINE DISPENSARY IN CANADA</h5>
                    </div>
                       <div class="pt-8">
                        <div class="flex justify-start w-full mb-8">
                            <img src="${google}" alt="google">
                        </div>
                        <div class=" flex flex-col justify-start w-full">
                            <span class="uppercase text-base font-normal mb-4">EXELLENCET</span>
                            <div class="flex flex-row">
                                <div class="flex flex-row items-center gap-x-1 pr-6 border-r-[1px] border-[#648A7C]">
                                    <img src="${star}" alt="star">
                                    <img src="${star}" alt="star">
                                    <img src="${star}" alt="star">
                                    <img src="${star}" alt="star">
                                    <img src="${star}" alt="star">
                                </div>
                                <div class="pl-6 flex flex-row items-center gap-x-1 ">
                                    <span class="text-base text-white">on 135</span>
                                    <span class="text-[#648A7C]">Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     </div>
                  </div>
                  <!--Sliders-->            
                 <div class="col-span-3 relative ">
                   <button class="com-nxt-btn  p-2  right-[0%] bg-[#FFFFFF] hover:bg-green-200 shadow-lg shadow-gray-500  top-[50%] rounded-full absolute lg:block hidden z-20"><img src="${arrowRight}" alt=""></button>
                      <div class="comment-container flex flex-row items-center w-full overflow-x-scroll   gap-x-8">
                         <!--Start Comment-->
                         <div class="flex flex-col p-10 w-[379px] h-[424px] bg-[#eae9e9] rounded-lg md:ml-36 ml-0">
                             <div class=" flex flex-row items-center border-b-[1px] border-[#C8C9CB] pb-8">
                               <img class="mr-8" src="${avatar_1}" alt="">
                               <span class="text-base font-normal">Vikki Starr</span>
                             </div>
                             <div class="pt-8 flex flex-col justify-start">
                            <div class="mb-4 gap-x-1 flex flex-row">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                            </div>
                            <div class="flex-col flex ">
                                <div class="w-[299px]">
                                   <p class="text-[#1A1E26] text-base mb-20 ">
                                      Absolutely love TopShelfBC; affordable on any budget and such fast delivery,
                                      straight to my door! I recommend them to all my friends and family for their 420
                                      needs.
                                    </p>
                                </div>
                                <span class=" text-[#9D9EA2] text-sm font-light">January 15, 2023</span>
                            </div>
                        </div>
                         </div>
                         <!--End Comment-->
                         <!--Start Comment-->
                         <div class="flex flex-col p-10 w-[379px] h-[424px] bg-[#eae9e9] rounded-lg">
                             <div class=" flex flex-row items-center border-b-[1px] border-[#C8C9CB] pb-8">
                               <img class="mr-8" src="${avatar_1}" alt="">
                               <span class="text-base font-normal">Vikki Starr</span>
                             </div>
                             <div class="pt-8 flex flex-col justify-start">
                            <div class="mb-4 gap-x-1 flex flex-row">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                            </div>
                            <div class="flex-col flex ">
                                <div class="w-[299px]">
                                   <p class="text-[#1A1E26] text-base mb-20 ">
                                      Absolutely love TopShelfBC; affordable on any budget and such fast delivery,
                                      straight to my door! I recommend them to all my friends and family for their 420
                                      needs.
                                    </p>
                                </div>
                                <span class=" text-[#9D9EA2] text-sm font-light">January 15, 2023</span>
                            </div>
                        </div>
                         </div>
                         <!--End Comment-->
                         <!--Start Comment-->
                         <div class="flex flex-col p-10 w-[379px] h-[424px] bg-[#eae9e9] rounded-lg">
                             <div class=" flex flex-row items-center border-b-[1px] border-[#C8C9CB] pb-8">
                               <img class="mr-8" src="${avatar_1}" alt="">
                               <span class="text-base font-normal">Vikki Starr</span>
                             </div>
                             <div class="pt-8 flex flex-col justify-start">
                            <div class="mb-4 gap-x-1 flex flex-row">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                            </div>
                            <div class="flex-col flex ">
                                <div class="w-[299px]">
                                   <p class="text-[#1A1E26] text-base mb-20 ">
                                      Absolutely love TopShelfBC; affordable on any budget and such fast delivery,
                                      straight to my door! I recommend them to all my friends and family for their 420
                                      needs.
                                    </p>
                                </div>
                                <span class=" text-[#9D9EA2] text-sm font-light">January 15, 2023</span>
                            </div>
                        </div>
                         </div>
                         <!--End Comment-->
                         <!--Start Comment-->
                         <div class="flex flex-col p-10 w-[379px] h-[424px] bg-[#eae9e9] rounded-lg">
                             <div class=" flex flex-row items-center border-b-[1px] border-[#C8C9CB] pb-8">
                               <img class="mr-8" src="${avatar_1}" alt="">
                               <span class="text-base font-normal">Vikki Starr</span>
                             </div>
                             <div class="pt-8 flex flex-col justify-start">
                            <div class="mb-4 gap-x-1 flex flex-row">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                            </div>
                            <div class="flex-col flex ">
                                <div class="w-[299px]">
                                   <p class="text-[#1A1E26] text-base mb-20 ">
                                      Absolutely love TopShelfBC; affordable on any budget and such fast delivery,
                                      straight to my door! I recommend them to all my friends and family for their 420
                                      needs.
                                    </p>
                                </div>
                                <span class=" text-[#9D9EA2] text-sm font-light">January 15, 2023</span>
                            </div>
                        </div>
                         </div>
                         <!--End Comment-->
                         <!--Start Comment-->
                         <div class="flex flex-col p-10 w-[379px] h-[424px] bg-[#eae9e9] rounded-lg">
                             <div class=" flex flex-row items-center border-b-[1px] border-[#C8C9CB] pb-8">
                               <img class="mr-8" src="${avatar_1}" alt="">
                               <span class="text-base font-normal">Vikki Starr</span>
                             </div>
                             <div class="pt-8 flex flex-col justify-start">
                            <div class="mb-4 gap-x-1 flex flex-row">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                            </div>
                            <div class="flex-col flex ">
                                <div class="w-[299px]">
                                   <p class="text-[#1A1E26] text-base mb-20 ">
                                      Absolutely love TopShelfBC; affordable on any budget and such fast delivery,
                                      straight to my door! I recommend them to all my friends and family for their 420
                                      needs.
                                    </p>
                                </div>
                                <span class=" text-[#9D9EA2] text-sm font-light">January 15, 2023</span>
                            </div>
                        </div>
                         </div>
                         <!--End Comment-->
                         <!--Start Comment-->
                         <div class="flex flex-col p-10 w-[379px] h-[424px] bg-[#eae9e9] rounded-lg">
                             <div class=" flex flex-row items-center border-b-[1px] border-[#C8C9CB] pb-8">
                               <img class="mr-8" src="${avatar_1}" alt="">
                               <span class="text-base font-normal">Vikki Starr</span>
                             </div>
                             <div class="pt-8 flex flex-col justify-start">
                            <div class="mb-4 gap-x-1 flex flex-row">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                                <img src="${star}" alt="star">
                            </div>
                            <div class="flex-col flex ">
                                <div class="w-[299px]">
                                   <p class="text-[#1A1E26] text-base mb-20 ">
                                      Absolutely love TopShelfBC; affordable on any budget and such fast delivery,
                                      straight to my door! I recommend them to all my friends and family for their 420
                                      needs.
                                    </p>
                                </div>
                                <span class=" text-[#9D9EA2] text-sm font-light">January 15, 2023</span>
                            </div>
                        </div>
                         </div>
                         <!--End Comment-->
                      </div>
                   <button class="com-pre-btn p-2 bg-[#FFFFFF] hover:bg-green-200 shadow-lg shadow-gray-500 left-[13%] top-[50%] rounded-full absolute lg:block hidden z-20"><img src="${arrowLeft}" alt=""></button>                
                 </div>
              </div>
        </section>
        <!-- Weed Shop-->
        <section class="${Style.maximumSize}  flex flex-col">
              <div class="lg:mt-[160px] mt-16 lg:mb-16 mb-6 ${Style.paddingMain}">
                 <h4 class="text-[#1A1E26] lg:text-[64px] text-[32px] font-bold uppercase
                 lg:-tracking-[4px] -tracking-[1.5px] lg:leading-[70px] leading-[38.4px]">
                 CHOOSE YOUR WEED</h4>
              </div>
              <div class="mr-10 lg:mb-0 mb-6  flex justify-start ${Style.paddingMain}">
                   <span class="text-2xl font-normal">Filter by Interest</span>
              </div>
              <div class="flex lg:flex-row flex-col items-center ${Style.paddingX2}">
                  <div class="slider flex flex-row slider  gap-x-16 w-full py-4">
                    <div class="text-base font-normal text-[#05422C] px-5 rounded-full bg-[#F2F6F4] border-[1px] border-[#05422C]">Flowers</div>
                    <div class="text-base font-normal text-[#1A1E26]">Mushrooms</div>
                    <div class="text-base font-normal text-[#1A1E26]">Concentrate</div>
                    <div class="text-base font-normal text-[#1A1E26]">Edibles</div>
                    <div class="text-base font-normal text-[#1A1E26] whitespace-nowrap">Shop All Weed</div>
                  </div>
             </div>
              <!-- Weed Cards-->
              <div class=" max-lg:hidden flex flex-row w-full  ${Style.paddingMain}      ">
                <!-- card -->
                  <div class="rounded-lg md:w-[276px]  md:h-[568px] w-[159px] h-[491px]">
                    <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px]  ">
                          <img class=" max-md:size-[120px]" src="public/assets/images/image-14.png" alt="">
                    </div>
                    <div class="flex flex-col  w-[291px]">
                       <div class="flex flex-col">
                            <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                            <span class="text-[#1A1E26] md:text-lg text-base  text-center whitespace-pre-wrap font-normal md:leading-[27px] leading-[24px]">
                                  2 Oz Deal Watermelon Zkittles + Purple Gushers
                            </span>
                            <div class="flex flex-row gap-x-3 my-2 mx-auto"            >    
                                <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                    <img class="mr-[6px]" src="${star}" alt="star">
                                    <span>4.6/5</span>
                                </div>
                                <div class="flex flex-row items-center">
                                    <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                    <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                </div>
                           </div>
                            <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                             <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                           </div>
                       </div>
                    </div>
                    <div class="flex flex-col justify-center gap-y-5">
                       <div class="flex flex-row gap-x-1 justify-center items-center">
                           <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                           <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                       </div>
                       <div class="flex justify-center flex-row items-center text-center text-[#1A1E26]">
                           <div class="text-xs font-normal py-1  text-center">28g</div>
                           <div class="text-xs font-normal py-1  px-[10px] text-center ">1/2lb</div>
                           <div class="text-xs font-normal py-1  text-center">1/4lb</div>
                       </div>
                      <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                    </div>
                 </div>
                <!--End Card-->
                <!-- card -->
                  <div class="rounded-lg md:w-[276px]  md:h-[568px] w-[159px] h-[491px]">
                    <div class="bg-[#F4F4F4] w-full flex justify-center items-center h-[240px]  ">
                          <img class=" max-md:size-[120px]" src="public/assets/images/image-14.png" alt="">
                    </div>
                    <div class="flex flex-col  w-[291px]">
                       <div class="flex flex-col">
                            <span class="uppercase text-[#9D9EA2] text-sm text-center font-light mt-6 mb-2">FLOWER</span>
                            <span class="text-[#1A1E26] md:text-lg text-base  text-center whitespace-pre-wrap font-normal md:leading-[27px] leading-[24px]">
                                  2 Oz Deal Watermelon Zkittles + Purple Gushers
                            </span>
                            <div class="flex flex-row gap-x-3 my-2 mx-auto"            >    
                                <div class="flex flex-row items-center border-r-[1px] border-[#C8C9CB]">
                                    <img class="mr-[6px]" src="${star}" alt="star">
                                    <span>4.6/5</span>
                                </div>
                                <div class="flex flex-row items-center">
                                    <span class="mr-[6px] text-[#060709] text-sm">135</span>
                                    <span class="text-[#C8C9CB] text-sm font-normal">Reviews</span>
                                </div>
                           </div>
                            <div class="py-1 px-[10px] mx-auto bg-[#F2F6F4]">
                             <span class="text-center text-[#05422C] text-xs ">Sativa 100%</span>
                           </div>
                       </div>
                    </div>
                    <div class="flex flex-col justify-center gap-y-5">
                       <div class="flex flex-row gap-x-1 justify-center items-center">
                           <span class="text-[#EB2606]  text-base font-normal leading-5">$80.00</span>
                           <span class="text-[#C8C9CB] font-light text-sm">/ gram</span>
                       </div>
                       <div class="flex justify-center flex-row items-center text-center text-[#1A1E26]">
                           <div class="text-xs font-normal py-1  text-center">28g</div>
                           <div class="text-xs font-normal py-1  px-[10px] text-center ">1/2lb</div>
                           <div class="text-xs font-normal py-1  text-center">1/4lb</div>
                       </div>
                      <button class="px-6 py-2 text-white rounded-full text-center bg-[#17AF26] self-center">Add to Cart</button>
                    </div>
                 </div>
                <!--End Card-->
              </div>
        </section>     
         <!-- REFER A FRIENDS-->   
        <section class="${Style.maximumSize}  ">
          <div class="flex flex-col relative size-full">
           <div class="${Style.paddingMain}">
               <div class="z-10 rounded-3xl bg-friends bg-cover  relative lg:px-[120px] px-6 lg:py-24 py-10 lg:-mb-36 -mb-28">
               <img class="z-30 absolute bottom-0 right-0 rounded-lg h-full" src="public/assets/images/friends-bg-2.svg" alt="">
               <img class="z-30 size-full absolute top-0 left-0" src="public/assets/images/friends-bg.svg" alt="">
               <div class=" z-50 w-full">
                   <div class="z-[31]">
                      <h6 class="z-[31] mb-8 lg:text-[64px] text-[32px] text-white lg:-tracking-[4px] -tracking-[1.5px] font-bold leading-[70px]">REFER A FRIENDS</h6>
                   </div>
                   <div class="z-[54] flex flex-row items-center w-full">
                       <span class="pr-6 lg:text-[32px] text-[20px] font-normal text-white">And get</span>
                       <span class="text-[#F2BC1B] lg:text-[32px] text-[20px]">$30!</span>
                   </div>
               </div>
                <div class="w-full flex lg:justify-end justify-start ">
                    <button class="rounded-full px-14 py-4 bg-[#17AF26] z-50 lg:-mt-24 mt-5 h-fit">Refer Here</button>
                </div>
            </div>
           </div>
            <!---->
             <div class="bg-[#01100B] size-full ${Style.paddingMain}">
               <!--start-->
               <div class="flex flex-col justify-center ">
                   <div class="flex flex-col justify-center self-center mb-[73px] max-w-[948px]">
                       <div class=" lg:text-[64px] text-[32px] text-white mb-6 lg:leading-[70px] leading-[38px] lg:-tracking-[4px] -tracking-[1.5px] text-center lg:mt-56 mt-[183px] self-center">
                           HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER
                           MARIJUANA
                       </div>
                       <p class="lg:mx-[79px] px-6 text-center text-[#9D9EA2] lg:text-base text-sm font-normal ">
                           Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across
                           multiple platforms and simple to understand, meaning that more people can come to us to buy their
                           cannabis products online.
                       </p>
                   </div>
                   <div class="flex flex-col justify-center mx-auto w-full gap-y-8  ">
                       <div class="flex flex-row  items-center justify-center max-sm:flex-col w-full">
                          <div class="flex flex-col justify-center  relative">
                              <div class=" top-0 left-0 absolute px-2 rounded-full bg-[#F2BC1B] text-[#05422C] text-center"
                              >1
                              </div>
                              <img class="md:size-[144px] size-[100px] self-center" src="${register}" alt="">
                              <div class="flex flex-col justify-center">
                                  <span class="text-center lg:text-[24px] text-[18px] text-white uppercase font-medium my-6">REGISTER</span>
                                  <p class=" max-w-[548px] text-center text-[#9D9EA2] lg:text-base text-sm font-normal text-wrap">
                                      Sign up for an account with us. This is quick and simple. We don’t require any more details
                                      from you than the bare minimum needed for you to place an order and get your product
                                      delivered.
                                  </p>
                              </div>
                          </div>
                          <div class="flex flex-col justify-center relative">
                                 <div class=" top-0 left-0 absolute px-2 rounded-full bg-[#F2BC1B] text-[#05422C] text-center"
                                 >2
                                 </div>
                                 <img class="md:size-[144px] size-[100px] self-center" src="${shop}" alt="">
                                 <div class="flex flex-col justify-center">
                                     <span class="text-center lg:text-[24px] text-[18px] text-white uppercase font-medium my-6">SHOP</span>
                                     <p class="max-w-[548px] text-center text-[#9D9EA2] lg:text-base text-sm font-normal text-wrap">
                                         Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates
                                         and mushrooms there is bound to be something for everyone.
                                     </p>
                                 </div>
                          </div>
                       </div>
                       <div class="flex flex-row items-center justify-center max-sm:flex-col w-full">
                           <div class="flex flex-col  justify-center relative">
                               <div class=" top-0 left-0 absolute px-2 rounded-full bg-[#F2BC1B] text-[#05422C] text-center"
                               >3
                               </div>
                               <img class="md:size-[144px] size-[100px] self-center" src="${make_payment}" alt="">
                               <div class="flex flex-col justify-center">
                                   <span class="text-center lg:text-[24px] text-[18px] text-white uppercase font-medium my-6">MAKE PAYMENT</span>
                                   <p class="max-w-[548px] text-center text-[#9D9EA2] lg:text-base text-sm font-normal text-wrap">
                                       Pay securely. Our site boasts sturdy protection certificates to keep your card details and
                                       related data safe.
                                   </p>
                               </div>
                           </div>
                           <div class="flex flex-col  justify-center relative">
                               <div class=" top-0 left-0 absolute px-2 rounded-full bg-[#F2BC1B] text-[#05422C] text-center"
                               >4
                               </div>
                               <img class="md:size-[144px] size-[100px] self-center" src="${relax}" alt="">
                               <div class="flex flex-col justify-center">
                                   <span class="text-center lg:text-[24px] text-[18px] text-white uppercase font-medium my-6">RELAX</span>
                                   <p class="max-w-[548px] text-center text-[#9D9EA2] lg:text-base text-sm font-normal text-wrap">
                                       Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will
                                       provide you with a tracking number so then you can follow your mail order marijuana every
                                       step of the way.
                                   </p>
                               </div>
                           </div>
                       </div>
                       <button class="lg:my-[100px] my-[50px] bg-[#17AF26] px-[56px] py-4 text-white text-[18px] text-center self-center rounded-full">
                          Choose your Weed 
                        </button>
                   </div>
                </div>
               <!--End-->
             </div>
          </div>
        </section>
        <!-- About us-->
        <section class="${Style.maximumSize} ${Style.paddingMain}">
           <div class="mt-[120px]">
              <div>
                 <h6 class="flex flex-col justify-start lg:text-[64px] text-[32px] text-[#1A1E26] lg:-tracking-[4px] -tracking-[1.5px] font-bold lg:leading-[70px] leading-[38px]">
                     <span>WHAT MAKES US THE <span class="text-[#F2BC1B]">#1</span>
                     </span>
                     ONLINE MARIJUANA<br/>
                     DISPENSARY IN CANADA?
                 </h6>
                 <div class="max-w-[789px] lg:mt-6 mt-4">
                    <p class="text-[#717378] lg:text-base text-xs">
                       When it comes to what makes us the foremost<span class="underline">online marijuana dispensary in Canada</span>, 
                       we could wax lyrical about our positive qualities.
                        Instead, to make this information clearer, 
                        we've highlighted the six prioritized features that we feel makes us a cut above the rest.
                    </p>
                 </div>
              </div>
              <div class="grid lg:grid-cols-3 grid-cols-2 max-sm:grid-cols-1  gap-8">
                <!-- Box Start-->
                <div class="max-w-[379px] flex flex-col lg:p-8 p-4">
                    <img class="self-start mb-8" src="${customer_service}" alt="">
                    <div class="flex flex-col justify-start ">
                        <span class="lg:text-[24px] text-[18px] text-[#1A1E26] mb-4">
                            CUSTOMER SERVICE
                        </span>
                        <p class="lg:text-sm text-xs text-[#717378] font-normal leading-[21px]">
                            If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a
                            replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120
                        </p>
                    </div>
                </div>
                <!-- Box End-->
                <!-- Box Start-->
                <div class="max-w-[379px] flex flex-col lg:p-8 p-4">
                    <img class="self-start mb-8" src="${carbon_security}" alt="">
                    <div class="flex flex-col justify-start ">
                        <span class="lg:text-[24px] text-[18px] text-[#1A1E26] mb-4">
                            SECURITY
                        </span>
                        <p class="lg:text-sm text-xs text-[#717378] font-normal leading-[21px]">
                            When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. 
                            When it comes to shipping your mail order marijuana out, 
                            we use only tamper-proof and discrete packaging so then what you’ve purchased is your business only.
                        </p>
                    </div>
                </div>
                <!-- Box End-->
                <!-- Box Start-->
                <div class="max-w-[379px] flex flex-col lg:p-8 p-4">
                    <img class="self-start mb-8" src="${best_value}" alt="">
                    <div class="flex flex-col justify-start ">
                        <span class="lg:text-[24px] text-[18px] text-[#1A1E26] mb-4">
                            BEST VALUE
                        </span>
                        <p class="lg:text-sm text-xs text-[#717378] font-normal leading-[21px]">
                           We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. 
                           We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products.
                        </p>
                    </div>
                </div>
                <!-- Box End-->
                <!-- Box Start-->
                <div class="max-w-[379px] flex flex-col lg:p-8 p-4">
                    <img class="self-start mb-8" src="${truck_bag}" alt="">
                    <div class="flex flex-col justify-start ">
                        <span class="lg:text-[24px] text-[18px] text-[#1A1E26] mb-4">
                            DELIVERY INSURANCE
                        </span>
                        <p class="lg:text-sm text-xs text-[#717378] font-normal leading-[21px]">
                            If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. 
                            Free Canada Post Xpress shipping on all orders over $120
                        </p>
                    </div>
                </div>
                <!-- Box End-->
                <!-- Box Start-->
                <div class="max-w-[379px] flex flex-col lg:p-8 p-4">
                    <img class="self-start mb-8" src="${high_quality}" alt="">
                    <div class="flex flex-col justify-start ">
                        <span class="lg:text-[24px] text-[18px] text-[#1A1E26] mb-4">
                            HIGHEST QUALITY
                        </span>
                        <p class="lg:text-sm text-xs text-[#717378] font-normal leading-[21px]">
                            All of our cannabis products are tested to ensure that they are the highest quality possible. 
                            We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available.
                        </p>
                    </div>
                </div>
                <!-- Box End-->
                <!-- Box Start-->
                <div class="max-w-[379px] flex flex-col lg:p-8 p-4">
                    <img class="self-start mb-8" src="${trust}" alt="">
                    <div class="flex flex-col justify-start ">
                        <span class="lg:text-[24px] text-[18px] text-[#1A1E26] mb-4">
                            TRUST
                        </span>
                        <p class="lg:text-sm text-xs text-[#717378] font-normal leading-[21px]">
                            With over 15 years in the weed business, you can rest assured that you will be taken care of.
                             You can guarantee that we have your best interests in mind. Feel free to check out our reviews.
                        </p>
                    </div>
                </div>
                <!-- Box End-->
              </div>
                
           </div>
        </section>
        <!--Weed Types-->
        <section class="${Style.maximumSize} ${Style.paddingMain}">
           <div class="grid-cols-3 grid border-t-[2px] border-[#717378] mt-32">
              <div class="w-full p-8">
                   <div class="w-[240px] mb-8">
                           <img src="public/assets/images/types-1.svg" alt="">
                   </div>
                   <div>
                       <span class="text-[#1A1E26] text-[32px] mb-4 self-start">Indica</span>
                       <p class="text-[#717378] lg:text-sm text-xs mb-8">
                           This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in
                           every limb. This reduces stress overall and can take your worries and fatigue away. Because of its
                           relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended
                           for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.
                       </p>
                       <a class="underline text-base text-[#17AF26] self-start" href="#">Shop Indica</a>
                   </div>
              </div>
              <div class="w-full p-8">
                   <div class="w-[240px] mb-8">
                           <img src="public/assets/images/types-2.svg" alt="">
                   </div>
                   <div>
                       <span class="text-[#1A1E26] text-[32px] mb-4 self-start">Sativa</span>
                       <p class="text-[#717378] lg:text-sm text-xs mb-8">
                           This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in
                           every limb. This reduces stress overall and can take your worries and fatigue away. Because of its
                           relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended
                           for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.
                       </p>
                       <a class="underline text-base text-[#17AF26] self-start" href="#">Shop Sativa</a>
                   </div>
              </div>
              <div class="w-full p-8">
                   <div class="w-[240px] mb-8">
                           <img src="public/assets/images/types-3.svg" alt="">
                   </div>
                   <div>
                       <span class="text-[#1A1E26] text-[32px] mb-4 self-start">Hybrids</span>
                       <p class="text-[#717378] lg:text-sm text-xs mb-8">
                           This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in
                           every limb. This reduces stress overall and can take your worries and fatigue away. Because of its
                           relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended
                           for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues.
                       </p>
                       <a class="underline text-base text-[#17AF26] self-start" href="#">Shop Hybrids</a>
                   </div>
              </div>
           </div>
        </section>
  </body>
`;
//initial
// setupCounter(document.querySelector('#counter'));

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
productContainers.forEach((item, i) => {
   console.log(11)
   const containerDimensions = item.getBoundingClientRect();
   console.log(`con ${ containerDimensions}`)
   const containerWidth = containerDimensions.width *.5;

   nxtBtn[i].addEventListener('click', () => {
      console.log(item)
      console.log(12)
      item.scrollLeft += containerWidth;
   })

   preBtn[i].addEventListener('click', () => {
      console.log(item)
      console.log(13)
      item.scrollLeft -= containerWidth;
   })
})



//comment slider 🔻
const commentContainers = [...document.querySelectorAll('.comment-container')];
const comNxtBtn = [...document.querySelectorAll('.com-nxt-btn')];
const comPreBtn = [...document.querySelectorAll('.com-pre-btn')];
console.log(`per btn ${comPreBtn}`)
commentContainers.forEach((item, i) => {

   const containerDimensions = item.getBoundingClientRect();

   const containerWidth = containerDimensions.width *.5;

   comNxtBtn[i].addEventListener('click', () => {

      console.log(23)
      item.scrollLeft += containerWidth;
   })

   comPreBtn[i].addEventListener('click', () => {

      console.log(24)
      item.scrollLeft -= containerWidth;
   })
})