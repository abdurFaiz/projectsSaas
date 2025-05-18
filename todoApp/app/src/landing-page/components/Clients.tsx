import React from "react";
import GoogleLogo from "../logos/GoogleLogo";
import NodeJsLogo from "../logos/NodeJsLogo";
import OpenAILogo from "../logos/OpenAILogo";
import PostgreesLogo from "../logos/PostgreesLogo";
import PrismaLogo from "../logos/PrismaLogo";
import ReactJsLogo from "../logos/ReactJsLogo";
import StripeLogo from "../logos/StripeLogo";
import { TailwindCssLogo } from "../logos/TailwindCssLogo";

export default function Clients() {
  const topLogos = [<PostgreesLogo />, <NodeJsLogo />, <PrismaLogo />, <OpenAILogo />];
  const bottomLogos = [<ReactJsLogo />, <TailwindCssLogo />, <StripeLogo />, ];

  return (
    <div className='mt-12 mx-auto max-w-7xl items-center justify-center px-6 lg:px-8 flex flex-col items-between gap-y-6'>
      <h2 className='mb-6 text-2xl text-center font-semibold tracking-wide text-gray-500 dark:text-white'>
        Made with love & code using</h2>

      <div className='flex flex-col gap-16'>
        <div className='flex justify-center gap-12'>
          {topLogos.map((logo, index) => (
            <div key={index} className='flex justify-center items-center max-h-12 w-[120px] object-contain dark:opacity-80'>
              {logo}
            </div>
          ))}
        </div>
        <div className='flex justify-center gap-12'>
          {bottomLogos.map((logo, index) => (
            <div key={index} className='flex justify-center items-center max-h-12 w-[120px] object-contain dark:opacity-80'>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
