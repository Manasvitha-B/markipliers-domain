import { Play, ArrowUpRight } from 'lucide-react';
import type { MouseEvent } from 'react';
import type { Video } from '@/lib/videos';
import { openExternal, videoUrl } from '@/lib/external-link';

export function VideoCard({ video }: { video: Video }) {
  const url = videoUrl(video.id);
  const open = (event: MouseEvent<HTMLAnchorElement>) => openExternal(url, event);
  return (
    <a
      className="video-card group"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={open}
      aria-label={`Watch ${video.title} on YouTube (opens in a new tab)`}
    >
      <div className="video-visual">
        <img src={video.image} alt={video.title} loading="lazy" />
        <span className="video-play">
          <Play size={20} fill="currentColor" />
        </span>
        <span className="video-duration">{video.duration}</span>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="video-category">{video.category}</span>
        <ArrowUpRight size={14} className="text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <h3 className="video-heading">{video.title}</h3>
      <p className="text-xs leading-relaxed text-muted-foreground">{video.caption}</p>
    </a>
  );
}
