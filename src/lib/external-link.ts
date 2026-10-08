import type { MouseEvent } from 'react';

/** Real YouTube watch URL for one of the archived videos. */
export function videoUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

/**
 * Opens an external page in a new browser tab.
 *
 * The anchor keeps its normal href/target="_blank" behaviour, so this is a
 * belt-and-braces guarantee that a plain click always leaves the current page
 * alone: we only suppress the default navigation once a new tab is actually
 * open. If the popup is blocked we let the browser follow the link itself
 * rather than leaving a dead click.
 */
export function openExternal(url: string, event: MouseEvent<HTMLAnchorElement>) {
  if (event.defaultPrevented) return;
  // Cmd / Ctrl / Shift / Alt and middle clicks are the browser's own new-tab gestures.
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const tab = window.open(url, '_blank');
  if (tab) {
    tab.opener = null; // same protection as rel="noopener"
    event.preventDefault(); // new tab is open: skip same-frame navigation
  }
}
