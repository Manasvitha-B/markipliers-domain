import {describe,it,expect,vi} from 'vitest';
import type {MouseEvent} from 'react';
import {openExternal,videoUrl} from './external-link';

const click=(overrides:Partial<MouseEvent<HTMLAnchorElement>>={})=>({
  button:0,defaultPrevented:false,metaKey:false,ctrlKey:false,shiftKey:false,altKey:false,preventDefault:vi.fn(),...overrides,
}) as unknown as MouseEvent<HTMLAnchorElement>;

const URL='https://www.youtube.com/watch?v=j64oZLF443g';

describe('videoUrl',()=>{
  it('builds a real YouTube watch URL from a video id',()=>{
    expect(videoUrl('j64oZLF443g')).toBe('https://www.youtube.com/watch?v=j64oZLF443g');
  });
});

describe('openExternal',()=>{
  it('opens a new browser tab and skips the same-frame navigation',()=>{
    const open=vi.spyOn(window,'open').mockReturnValue({} as Window);
    const event=click();
    openExternal(URL,event);
    expect(open).toHaveBeenCalledWith(URL,'_blank');
    expect(event.preventDefault).toHaveBeenCalled();
    open.mockRestore();
  });
  it('lets the browser follow the link when the new tab is blocked',()=>{
    const open=vi.spyOn(window,'open').mockReturnValue(null);
    const event=click();
    openExternal(URL,event);
    expect(event.preventDefault).not.toHaveBeenCalled();
    open.mockRestore();
  });
  it('leaves cmd / ctrl / shift clicks to the browser',()=>{
    const open=vi.spyOn(window,'open').mockReturnValue({} as Window);
    const event=click({metaKey:true});
    openExternal(URL,event);
    expect(open).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
    open.mockRestore();
  });
});
