import { z } from 'zod';

export const RegisterSchema = z.object({
	email: z.string().email(),
	firstName: z.string().min(3),
	lastName: z.string().min(3),
	password: z.string().min(8, { message: 'Password is too short' }),
});
