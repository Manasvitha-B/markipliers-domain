import {describe,it,expect} from 'vitest';
import {filterVideos,videos} from './videos';
describe('Archive filters',()=>{it('shows all eight sample videos',()=>{expect(filterVideos('All videos')).toHaveLength(8);});for(const category of ['Horror','Comedy','Challenges','Series'] as const){it(`shows only ${category} videos`,()=>{const expected=videos.filter(video=>video.category===category);expect(expected.length).toBeGreaterThan(0);expect(filterVideos(category)).toEqual(expected);});}});
