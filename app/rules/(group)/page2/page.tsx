"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manWIthRobot from "@/public/images/man-with-robot.png";
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
              02
            </span>
            
            <p className="pb-6 font-medium"><Balancer>
            "If I don't have to do it, I won't; if I have to do it, I will make it as quickly as possible."
            </Balancer>
            </p>
          
        
          </div>
        </Wrapper>
      </section>

      {/* second half */}

  
    </section>
  );
}
