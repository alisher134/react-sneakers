import type { z } from 'zod';

import type { LoginSchema } from './loginSchema';

export type LoginFormValues = z.infer<typeof LoginSchema>;
