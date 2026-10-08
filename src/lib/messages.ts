export type FanMessage={id:string;name:string;favorite:string;message:string;date:string;display:string};
/**
 * Placeholder fan submissions so the Community page reads as a lived-in wall.
 * These are hand-written examples only: nothing is stored, sent, or loaded from
 * anywhere, and the real submissions arrive when a persistence service is added.
 */
export const sampleMessages:FanMessage[]=[
 {id:'msg-1',name:'Alex',favorite:'Who Killed Markiplier',message:'Been watching Mark for years. Absolute legend.',date:'2026-10-08T21:12',display:'OCT 8, 2026 · 9:12 PM'},
 {id:'msg-2',name:'Sarah',favorite:'Five Nights at Freddy’s',message:'This channel got me through college 😂',date:'2026-10-07T23:47',display:'OCT 7, 2026 · 11:47 PM'},
 {id:'msg-3',name:'Devan',favorite:'In Space with Markiplier: Part 1',message:'The space series is the coziest corner of the internet. I’ve watched it twice, start to finish.',date:'2026-10-06T16:05',display:'OCT 6, 2026 · 4:05 PM'},
 {id:'msg-4',name:'Priya',favorite:'Unfair Mario',message:'I have never laughed so hard at a man losing a video game. Pure chaos, perfectly paced.',date:'2026-10-05T20:38',display:'OCT 5, 2026 · 8:38 PM'},
 {id:'msg-5',name:'Marcus',favorite:'3 SCARY GAMES',message:'Turned the lights on, turned them back off, and watched it anyway. Never change.',date:'2026-10-03T01:26',display:'OCT 3, 2026 · 1:26 AM'},
 {id:'msg-6',name:'Jordan',favorite:'Prop Hunt #1',message:'My little brother and I now play prop hunt in every room of the house. Thanks for that.',date:'2026-10-01T18:14',display:'OCT 1, 2026 · 6:14 PM'},
];
export function messageInitial(name:string){return name.trim().charAt(0).toUpperCase();}
