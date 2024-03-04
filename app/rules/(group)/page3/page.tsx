"use client";

import Wrapper from "@/components/wrapper";
import Balancer from "react-wrap-balancer";


export default function Rules() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-yellow-300`}
            >
              03
            </span>
            
            <p className="pb-6 font-medium"><Balancer>
            "If you want to be a Chad, just act like one."
            </Balancer>
            </p>
            
          
          </div>
        </Wrapper>
      </section>

  
    </section>
  );
}
