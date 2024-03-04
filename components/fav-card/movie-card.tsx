"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { StaticImageData } from 'next/image';


interface Movie {
  name: string;
  rating: number;
  description: string;
  imagePath:StaticImageData;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const {name, rating, description,imagePath } = movie;

  // Map the rating SVGs
  const ratingStars = Array.from({ length: rating }).map((_, index) => (
    <svg
    className="fill-yellow-500 stroke-gray-950"
      key={index}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ));
  

  return (
    <>
<section className="w-full py-12 ">
      <div className="flex flex-col">
        <Image
          alt="Movie image"
          className="aspect-[1/1] object-cover object-center"
          height={500}
          src={imagePath}
          width={800}
          priority={false}
          placeholder = 'empty'
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">{name}</h1>
          <div className="flex space-x-1">{ratingStars}</div>
         
          <p className="text-base text-zinc-500 dark:text-zinc-400">{description}</p>
          <div className=" flex justify-center">
          <Button variant={"outline"}
          className="cursor-default inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 font-medium text-neutral-400 transition-colors">
            Enjoy
          </Button>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Highly recommended</p>
        </div>
      </div>
    </section>
    </>
  );
};
export default MovieCard;