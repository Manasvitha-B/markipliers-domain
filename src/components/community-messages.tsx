import { messageInitial, sampleMessages } from '@/lib/messages';

/** Placeholder fan submissions shown under the demo form. Nothing is saved or sent. */
export function CommunityMessages() {
  return (
    <section className="messages-section" aria-labelledby="messages-heading">
      <div className="site-width">
        <div className="messages-head">
          <p className="eyebrow text-muted-foreground">FROM THE FAN TABLE</p>
          <h2 className="section-title mt-4" id="messages-heading">
            COMMUNITY <span className="text-primary">MESSAGES</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
            A few notes fans left behind. These are example posts for now — nothing here is saved or sent.
          </p>
        </div>
        <ul className="message-grid">
          {sampleMessages.map(message => (
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
      </div>
    </section>
  );
}
