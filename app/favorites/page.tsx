"use client"
import AnimeCard from '@/components/fav-card/anime-card'; // Import the AnimeCard component
import MangaCard from '@/components/fav-card/manga-card';
import MovieCard from '@/components/fav-card/movie-card';


import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { animeConstants ,MangaConstants, MovieConstants} from '@/constants/anime'; // Import animeConstants


const Favorites = () => {
return (
    <>
    <div className='flex items-center justify-center'>
       <Tabs defaultValue="Anime" className="w-[650px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Anime" className='text-yellow-500'>Anime</TabsTrigger>
        <TabsTrigger value="Manga" className='text-yellow-500'>Manga</TabsTrigger>
        <TabsTrigger value="Movie" className='text-yellow-500'>Movies</TabsTrigger>
      </TabsList>
      <TabsContent value="Anime">
        <Card>

          <CardContent className="space-y-2">
        <div>
            <h1  className="text-6xl font-bold tracking-tighter mb-2">My favorite Anime</h1>

        </div>
        <div className=''>
            {animeConstants.map((anime) => (
                <AnimeCard key={anime.name} anime={anime} />
            ))}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          </CardContent>
          </Card>
          </TabsContent>

                   {/* Manga  */}
          <TabsContent value='Manga'>
          <Card>

<CardContent className="space-y-2">
<div>
  <h1  className="text-6xl font-bold tracking-tighter mb-2">My favorite Manga</h1>

</div>
<div className=''>
  {MangaConstants.map((manga) => (
      <MangaCard key={manga.name} manga={manga} />
  ))}
</div>
<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

</CardContent>
</Card>

            </TabsContent>

            {/* Movies */}

            <TabsContent value='Movie'>
          <Card>

<CardContent className="space-y-2">
<div>
    <h1  className="text-6xl font-bold tracking-tighter mb-2">My favorite Movies</h1>

</div>
<div className=''>
    {MovieConstants.map((movie) => (
            <MovieCard key={movie.name} movie={movie} /> // Updated prop name from 'movie' to 'manga'
    ))}
</div>
<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

</CardContent>
</Card>

            </TabsContent>
            </Tabs>
   
        
          </div>

        
    </>
);
};

export default Favorites;
