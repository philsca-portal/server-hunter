import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  nameAndProvider: z.object({
    name: z.string(),
    rating: z.number(),
    review: z.number(),
    provider: z.string()
  }),
  processor: z.object({
    name: z.string(),
    description: z.string()
  }),
  product: z.string(),
  memory: z.string(),
  storage: z.string(),
  stock: z.string(),
  price: z.string(),
})

export type Task = z.infer<typeof taskSchema>
