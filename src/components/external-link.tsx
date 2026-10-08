import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { openExternal } from '@/lib/external-link';

/**
 * An external link that always opens in a new browser tab.
 * Renders a real anchor (right-click, copy link, middle click all work) and
 * additionally asks the browser for a new tab on a plain click, so the target
 * page is never loaded inside this site.
 */
export function ExternalLink({
  href,
  children,
  onClick,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  const open = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (href) openExternal(href, event);
  };
  return (
    <a {...rest} href={href} target="_blank" rel="noopener noreferrer" onClick={open}>
      {children}
    </a>
  );
}
