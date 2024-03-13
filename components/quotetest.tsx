"use client"
import React, { useState } from 'react';
import QuoteButton from './ui/quotebutton';
import { fetchRandomQuote } from '@/lib/action';
import { Card } from "@/components/ui/card"
import Logo from './Logo';
import Balancer from 'react-wrap-balancer';
import Skeleton from './skeleton';


interface Quote {
  content: string;
  author: string;
  tags: { _id: string; name: string }[];
}

const RandomQuotes: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRandomQuote = async () => {
    try {
      setIsLoading(true);
      const quote = await fetchRandomQuote();
      setQuote(quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=''>
      <div className='flex flex-col justify-center'>
        <h1>Random Quote</h1>
        <QuoteButton onClick={getRandomQuote} />
        {isLoading ? (
          <Skeleton />
        ) : quote ? (
          <Card
            key="1"
            className="w-[350px] sm:w-[500px] mx-auto mt-8 bg-gray-800 rounded-xl shadow-md"
          >
            <div className="">
              <div className="">
                <span className="object-cover  rounded-md bg-muted " />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Logo />
                    <div className="ml-4">
                      <div className="uppercase tracking-wide text-sm text-white font-semibold">
                        Muscial_Cyberpunk
                      </div>
                      <div className="text-gray-300">@sangeeth_rch</div>
                    </div>
                  </div>
                  <TwitterIcon className="h-6 w-6 text-blue-500 fill-current" />
                </div>
                <p className="mt-4 text-gray-300 line-clamp-3">
                  <Balancer>
                    {quote.content}
                  </Balancer>
                </p>
                <div className="flex mt-6 justify-between items-center">
                  Tags: {quote.tags.map((tag) => tag.name).join(', ')}
                </div>
                <div className="text-gray-300">Author: {quote.author}</div>
              </div>
            </div>
          </Card>
        ) : null}
      </div>
    </div>
  );
};

export default RandomQuotes;

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
