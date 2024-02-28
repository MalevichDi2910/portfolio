import z from "zod";

const MIN_MESSAGE_LENGTH = 15

export const validationSchema = z.object({
    name: z.string({ required_error: 'Name is required'}),
    email: z
        .string({ required_error: 'Email is required'})
        .email({ message: 'Invalid email address' }),
    message: z
        .string({ required_error: 'Message is required'})
        .min(MIN_MESSAGE_LENGTH, `Message should be of minimum ${MIN_MESSAGE_LENGTH} characters length`)
});