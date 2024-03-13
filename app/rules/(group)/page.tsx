

import Wrapper from "@/components/wrapper";

import Balancer from "react-wrap-balancer";
export const metadata = {
  title: 'Rule-1',
  description: 'Checkout my rule-1',
};

export default function Rules() {
  return (
    <section className="flex flex-col ">
      <section className="flex w-full flex-col justify-between p-9">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-yellow-300`}
            >
              01
            </span>
            <div className="pb-6">
             
            <p className=" font-medium">
            <Balancer>
            "Life is a game with different levels, as we all know. Difficulty increases 
            level by level, but we often forget that we are all playing different games,
             so it's better to tweak the strategy."
             </Balancer>
             </p>
             <p className="mt-2 font-medium">
             <Balancer>
             I want to say this: It's always
              fun to play the game, I mean to live
              </Balancer>
             
             </p>
             

            
            </div>
          </div>
        </Wrapper>
      </section>



   
    </section>
  );
}
