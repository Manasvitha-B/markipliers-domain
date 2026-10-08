import {describe,it,expect} from 'vitest';
import {filterVideos,videos} from './videos';
import {videoUrl} from './external-link';

describe('Archive filters',()=>{
  it('shows all eight sample videos',()=>{
    expect(filterVideos('All videos')).toHaveLength(8);
  });
  for(const category of ['Horror','Comedy','Challenges','Series'] as const){
    it(`shows only ${category} videos`,()=>{
      const expected=videos.filter(video=>video.category===category);
      expect(expected.length).toBeGreaterThan(0);
      expect(filterVideos(category)).toEqual(expected);
    });
  }
});

describe('Video links',()=>{
  it('points every card at a real YouTube watch URL',()=>{
    for(const video of videos){
      expect(video.id).toMatch(/^[\w-]{11}$/);
      expect(videoUrl(video.id)).toBe(`https://www.youtube.com/watch?v=${video.id}`);
    }
  });
  it('keeps the videos whose links were verified and drops the broken ones',()=>{
    const ids=videos.map(video=>video.id);
    expect(ids).toContain('BQw3v31s-Y8');
    expect(ids).toContain('06o2Sazc7cM');
    expect(ids).not.toContain('aEgf69r4E8E');
    expect(ids).not.toContain('07-peTQJBTs');
  });
});
