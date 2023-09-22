import { z } from "zod";

export const BeersSchema = z.object({
    name: z.string(),
    image_url: z.string(),
}) 

export const BeersArraySchema = z.array(z.object({
    name: z.string(),
    image_url: z.string(),
}) )
export type Beers = z.infer<typeof BeersSchema>;

export type BeersArray = z.infer<typeof BeersArraySchema>;