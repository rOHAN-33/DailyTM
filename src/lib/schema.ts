import {z} from "zod"

export const userSchema = z.object({
    name :z.string()
        .min(2, "Name is required")
        .max(100, "maximum is 100 characters"),

        about: z.string().optional(),
        country: z.string().min(1,"Country is required"),
        industryType : z.string().min(1,"industryType is required"),
        email:z.string().email("invalid email address"),
        roles:z.string().min(1, "role is required")
})