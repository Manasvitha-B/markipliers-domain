export const categories=['All videos','Horror','Comedy','Challenges','Series'] as const;
export type Category=typeof categories[number];
export const videos=[
 {id:'j64oZLF443g',title:'In Space with Markiplier: Part 1',category:'Series',image:'https://i.ytimg.com/vi/j64oZLF443g/hqdefault.jpg',duration:'31:22',caption:'A universe of possibilities. One very questionable captain.'},
 {id:'VU4cugs5EFo',title:'3 SCARY GAMES',category:'Horror',image:'https://i.ytimg.com/vi/VU4cugs5EFo/hqdefault.jpg',duration:'36:14',caption:'Three games. Endless jump scares and laughs.'},
 {id:'BQw3v31s-Y8',title:'Try Not To Laugh Challenge',category:'Challenges',image:'https://i.ytimg.com/vi/BQw3v31s-Y8/hqdefault.jpg',duration:'12:09',caption:'The challenge nobody stood a chance against.'},
 {id:'iOztnsBPrAA',title:"Five Nights at Freddy’s — Part 1",category:'Horror',image:'https://i.ytimg.com/vi/iOztnsBPrAA/hqdefault.jpg',duration:'17:44',caption:'The classic that started it all.'},
 {id:'BB_4BnQe-qc',title:"Five Nights at Freddy’s 3 — Part 1",category:'Horror',image:'https://i.ytimg.com/vi/BB_4BnQe-qc/hqdefault.jpg',duration:'22:41',caption:'Another night. Another unforgettable adventure.'},
 {id:'xAOv_zvXBQk',title:'In Space with Markiplier: Part 2',category:'Series',image:'https://i.ytimg.com/vi/xAOv_zvXBQk/hqdefault.jpg',duration:'27:15',caption:'The adventure is far from over.'},
 {id:'Kah-vLR82kk',title:'Prop Hunt #1',category:'Comedy',image:'https://i.ytimg.com/vi/Kah-vLR82kk/hqdefault.jpg',duration:'16:20',caption:'Hide. Seek. Become a very sneaky piece of fruit.'},
 {id:'06o2Sazc7cM',title:'Unfair Mario',category:'Comedy',image:'https://i.ytimg.com/vi/06o2Sazc7cM/hqdefault.jpg',duration:'13:26',caption:'The most unfair platformer ever. Pure comedy gold.'},
];
export type Video=typeof videos[number];
export function filterVideos(category:Category){return category==='All videos'?videos:videos.filter(video=>video.category===category);}
