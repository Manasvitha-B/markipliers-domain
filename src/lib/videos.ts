import space from '@/assets/space.jpg.asset.json';
import fnaf from '@/assets/fnaf.jpg.asset.json';
import scary from '@/assets/scary.jpg.asset.json';
import laugh from '@/assets/laugh.jpg.asset.json';
import fnaf3 from '@/assets/fnaf3.jpg.asset.json';
import space2 from '@/assets/space2.jpg.asset.json';
import prop from '@/assets/prop.jpg.asset.json';
import wheels from '@/assets/wheels.jpg.asset.json';
export const categories=['All videos','Horror','Comedy','Challenges','Series'] as const;
export type Category=typeof categories[number];
export const videos=[
 {id:'j64oZLF443g',title:'In Space with Markiplier: Part 1',category:'Series',image:space.url,duration:'31:22',caption:'A universe of possibilities. One very questionable captain.'},
 {id:'VU4cugs5EFo',title:'3 SCARY GAMES #1',category:'Horror',image:scary.url,duration:'36:14',caption:'Three games. Endless jump scares and laughs.'},
 {id:'07-peTQJBTs',title:'TRY NOT TO LAUGH CHALLENGE! #1',category:'Challenges',image:laugh.url,duration:'12:09',caption:'The challenge nobody stood a chance against.'},
 {id:'iOztnsBPrAA',title:"Five Nights at Freddy’s — Part 1",category:'Horror',image:fnaf.url,duration:'17:44',caption:'The classic that started it all.'},
 {id:'BB_4BnQe-qc',title:"Five Nights at Freddy’s 3 — Part 1",category:'Horror',image:fnaf3.url,duration:'22:41',caption:'Another night. Another unforgettable adventure.'},
 {id:'xAOv_zvXBQk',title:'In Space with Markiplier: Part 2',category:'Series',image:space2.url,duration:'27:15',caption:'The adventure is far from over.'},
 {id:'Kah-vLR82kk',title:'FRUIT OF DOOM | Prop Hunt #1',category:'Comedy',image:prop.url,duration:'16:20',caption:'Hide. Seek. Become a suspicious piece of fruit.'},
 {id:'aEgf69r4E8E',title:'UNFAIR MARIO | Part 1',category:'Comedy',image:wheels.url,duration:'13:26',caption:'The most unfair platformer ever. Pure comedy gold.'},
];
export type Video=typeof videos[number];
export function filterVideos(category:Category){return category==='All videos'?videos:videos.filter(video=>video.category===category);}
