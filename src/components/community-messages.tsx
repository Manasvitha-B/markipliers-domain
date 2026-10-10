import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { formatMessageDate, messageInitial, type FanMessage } from '@/lib/messages';

type SubmissionRow = {
  id: string;
  name: string;
  favorite_video: string;
  message: string;
  created_at: string;
};

export function CommunityMessages() {
  const [messages, setMessages] = useState<FanMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadMessages() {
      const { data, error } = await supabase
        .from('submissions')
        .select('id, name, favorite_video, message, created_at')
        .order('created_at', { ascending: false })
        .limit(50);

      if (!active) return;

      if (error) {
        console.error('Unable to load community messages:', error);
        setLoadError(error.code === '42501'
          ? 'Supabase is blocking access to community messages. Apply or re-run supabase/migrations/20261010000000_create_submissions.sql in your Supabase SQL Editor.'
          : 'Community messages could not be loaded. Please try again later.');
        setLoading(false);
        return;
      }

      setMessages((data as SubmissionRow[]).map(row => ({
        id: row.id,
        name: row.name,
        favorite: row.favorite_video,
        message: row.message,
        date: row.created_at,
        display: formatMessageDate(row.created_at),
      })));
      setLoading(false);
    }

    void loadMessages();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="messages-section" aria-labelledby="messages-heading">
      <div className="site-width">
        <div className="messages-head">
          <p className="eyebrow text-muted-foreground">FROM THE FAN TABLE</p>
          <h2 className="section-title mt-4" id="messages-heading">
            COMMUNITY <span className="text-primary">MESSAGES</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
            Messages shared by fans in the community.
          </p>
        </div>
        {loading ? (
          <p className="text-sm text-muted-foreground" role="status">Loading community messages…</p>
        ) : loadError ? (
          <p className="text-sm text-muted-foreground" role="alert">{loadError}</p>
        ) : messages.length === 0 ? (
          <p className="text-sm text-muted-foreground">No messages yet. Be the first to leave one.</p>
        ) : (
          <ul className="message-grid">
            {messages.map(message => (
              <li className="message-card" key={message.id}>
                <div className="message-author-row">
                  <span aria-hidden="true" className="message-initial">{messageInitial(message.name)}</span>
                  <p className="message-author">{message.name}</p>
                </div>
                <p className="message-favorite">Favorite: {message.favorite}</p>
                <p className="message-text">“{message.message}”</p>
                <p className="message-meta">
                  <time className="message-time" dateTime={message.date}>{message.display}</time>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
