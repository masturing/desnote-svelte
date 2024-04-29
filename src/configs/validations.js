import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
})

const Validation = {
    email: (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    password: (password) => {
        return password.length >= 4;
    }
}

export { loginSchema, Validation };