import { z } from 'zod';
export const submissionSchema=z.object({name:z.string().trim().min(1,'Please enter your name.').max(100,'Keep your name under 100 characters.'),email:z.string().trim().email('Please enter a valid email address.').max(255),favorite:z.string().trim().min(1,'Tell us your favorite video.').max(200,'Keep the video title under 200 characters.'),message:z.string().trim().min(1,'Please write a message.').max(1000,'Keep your message under 1,000 characters.')});
export type Submission=z.infer<typeof submissionSchema>;
