import hyouka from '/public/anime-images/hyouka.jpg';
import attack from '/public/anime-images/attack.jpg';
import death from '/public/anime-images/death.jpg';
import honey from '/public/anime-images/honey.jpg';
import five from '/public/anime-images/5sec.jpg';

import dark from '/public/anime-images/Dark-knight.jpg';
import inception from '/public/anime-images/inception.jpg';
import shawshank from '/public/anime-images/the-shawshank-redemption.jpg';

import classroom from '/public/anime-images/classroom-of-the-elite.jpg';
import vagabond from '/public/anime-images/vagabond.jpg';



export const animeConstants = [
    {
        name: "Hyouka",
        rating: 5, // Please provide the rating for Hyouka
        episodes: 23, // Please provide the number of episodes for Hyouka
        description: "A reserved high schooler reluctantly delves into mysteries surrounding his school's Classics Club, uncovering hidden secrets and solving enigmatic cases alongside his curious peers. Their journey intertwines with personal histories and the discovery of unexpected truths, showcasing the intrigue found in everyday life.",
        imagePath: hyouka// Example image path for Hyouka
    },
    {
        name: "Attack on Titan",
        rating: 5,
        episodes: 94,
        description: "Humanity fights for survival against gigantic humanoid creatures known as Titans, uncovering dark truths about their world and the origin of the Titans as they struggle for freedom within massive walled cities.",
        imagePath:attack// Example image path for Attack on Titan
    },
    {
        name: "5 Centimeters Per Second",
        rating: 5, // Please provide the rating for 5 Centimeters Per Second
        episodes: 3, // Please provide the number of episodes for 5 Centimeters Per Second
        description: "Two childhood friends, separated by circumstances, struggle to maintain their bond as time and distance test their love. Trapped in memories of the past, they grapple with the harsh reality of a long-distance relationship, impacting not only themselves but those around them.",
        imagePath:five// Example image path for 5 Centimeters Per Second
    },
  
    {
        name: "Honey and Clover",
        rating: 5, // Please provide the rating for Honey and Clover
        episodes: 36, // Please provide the number of episodes for Honey and Clover
        description: "A group of art college friends navigate love, friendship, and personal growth while facing the challenges of youth and uncertain futures.",
        imagePath:honey // Example image path for Honey and Clover
    },


    {
        name: "Death Note",
        rating: 5,
        episodes: 37,
        description: "A high school student discovers a supernatural notebook that allows him to kill anyone whose name he writes in it.",
        imagePath:death
      },
    // Add more anime objects as needed...
];


export const MovieConstants = [
    {
        id : 1,
        name: "Dark Knight",
        rating: 5, // Please provide the rating for Hyouka
        description: "Batman faces his ultimate challenge as he confronts the Joker's reign of chaos, testing his resolve and abilities to combat injustice in Gotham City.",
        imagePath:dark
    
    },

    {
        id:2,
        name: "Inception",
        rating: 5, // Please provide the rating for Hyouka
        description: "A skilled thief enters the subconscious of targets to steal secrets but is tasked with planting an idea into the mind of a CEO, leading to a high-stakes journey through layered dreams where reality becomes increasingly blurred.",
        imagePath:inception
    
    },

    {
        id:3,
        name: "The Shawshank Redemption",
        rating: 5, // Please provide the rating for Hyouka
        description: "A man wrongly convicted of murder befriends fellow inmates while serving a life sentence, using his intelligence and resourcefulness to seek redemption and escape from Shawshank State Prison. With perseverance and hope, he embarks on a daring plan to secure his freedom and reunite with his friend in a distant paradise.",
        imagePath:shawshank
    
    },
]


export const MangaConstants = [
    {
        id:1,
        name: "Classroom of Elite (Light novel)",
        rating: 5, // Please provide the rating for Hyouka
        description: "In a prestigious high school divided by class rankings, students in the lowest tier aim to climb to the top, employing any means necessary to overcome the harsh system and societal pressures. Amidst intense competition and personal ambitions, alliances are forged and tested as they strive to defy the odds and achieve success..",
        imagePath:classroom
    
    },

    {
        id:2,
        name: "Vagabond",
        rating: 5, // Please provide the rating for Hyouka
        description: "Set in 17th-century Japan, two young warriors, Takezō and Matahachi, embark on separate paths of redemption and self-discovery amidst a backdrop of samurai battles, personal trials, and the pursuit of martial mastery. Their journeys intertwine with the lives of legendary figures like Musashi Miyamoto and Kojirō Sasaki, shaping their destinies in a tumultuous era of honor, conflict, and transcendence.",
        imagePath:vagabond
    
    },
]