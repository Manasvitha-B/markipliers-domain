export type FanMessage = {
  id: string;
  name: string;
  favorite: string;
  message: string;
  date: string;
  display: string;
};

export function messageInitial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export function formatMessageDate(date: string) {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).toUpperCase();
}
