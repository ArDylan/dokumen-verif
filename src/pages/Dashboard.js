import React from 'react'
import foregroundImage from '../img/foreground-image-light.png'
import dataImage from '../img/data.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faDiscord, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFileCircleCheck, faUser, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'



const HeroImage = () => {
  return (
    <div class="flex bg-[#FAFAFA]">
        <div class="w-6/12"> 
            <div class="p-28 pl-40 mt-3">
                <h1 class="text-[50px] font-semibold">Buy, trade, and <br/> hold 600+ cryptocurrencies on Binance</h1>
                <form class="mt-5">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Quick Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 " placeholder="Looking for NFT ?" required=""/>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Quick Search</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="p-20 w-6/12">
            <img src={foregroundImage} class="" alt=""/>
        </div>
    </div>
  );
};

const Content = () => {
    return (
        <div class="bg-white px-40 py-24 flex">
            <div class="flex-1">
                <h1 class="text-[50px] font-semibold">Keep your data save</h1>
                <h2 class="text-[25px] font-semibold">Build your own NFT</h2>
                <div class="flex mt-16">
                    <i class="fa-solid fa-user fa-9x"></i>
                    <FontAwesomeIcon icon={faUser} size="9x"  />
                    <div class="p-5 ml-20">
                        <h1 class="text-[25px] font-semibold">Register yourself</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita beatae repudiandae soluta exercitationem.</p>
                    </div> 
                </div>
                <div class="flex mt-16">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="9x"  />
                    <div class="p-5 ml-10">
                        <h1 class="text-[25px] font-semibold">Verified your data</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita beatae repudiandae soluta exercitationem.</p>
                    </div> 
                </div>
                <div class="flex mt-16">
                    <i class="fa-solid fa-cloud-arrow-up fa-9x"></i>
                    <FontAwesomeIcon icon={faCloudArrowUp} size="9x"  />
                    <div class="p-5 ml-5">
                        <h1 class="text-[25px] font-semibold">Upload your data</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita beatae repudiandae soluta exercitationem.</p>
                    </div> 
                </div>
                <button type="button" class="w-44 mt-20 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Get Started</button>

            </div>
            <div class="flex-1">
                <img src={dataImage} class="m-auto mt-40" alt=""/>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div class="bg-[#FAFAFA] py-24 text-center">
            <h1 class="text-[40px] font-semibold">Start securing your data</h1>
            <h2 class="font-semibold">by enter it into the BlockChain</h2>
            <button type="button" class="mt-10 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Sign Up Now</button>
        </div>
    );
};
class MarketPlace extends React.Component{
  render(){
    return (
      <div>
        <HeroImage/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

export default MarketPlace