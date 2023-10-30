import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  oldPassword: z.string().min(5),
  newPassword: z.string().min(5),
});

export default schema;
