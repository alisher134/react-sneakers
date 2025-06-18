import type { z } from 'zod';

import type { RegisterSchema } from './registerSchema';

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
