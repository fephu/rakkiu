import { z } from "zod";

export const FilterValidator = z.object({
  color: z.string().array(),
});

export type TFilterValidator = z.infer<typeof FilterValidator>;
