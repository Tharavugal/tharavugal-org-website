import { z } from 'zod';

export const eventCategoriesSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, '*Required'),
});

export const eventLocationsSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, '*Required'),
});
export const entityTypesSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, '*Required'),
});

