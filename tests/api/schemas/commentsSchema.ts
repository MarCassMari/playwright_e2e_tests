import { z } from 'zod';

export const commentSchema = z.object({
  id: z.number(),
  post_id: z.number(),
  name: z.string(),
  email: z.string().email(),
  body: z.string(),
});

export const commentListSchema = z.array(commentSchema);
