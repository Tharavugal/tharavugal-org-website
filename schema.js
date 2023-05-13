import { z } from 'zod';

export const eventCategoriesSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, '*Required'),
});

export const eventLocationsSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, '*Required'),
});

export const entitiesSchema = z.object({
  id: z.string().uuid(),
  type: z.string().min(1, '*Required'),
  data: z
    .string()
    .min(1, '*Required')
    .transform((val) => JSON.parse(val)),
});

export const entityTypesSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, '*Required'),
});

export const eventsSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, '*Required'),
  slug: z.string().min(1, '*Required'),
  startDate: z.string().min(1, '*Required'),
  startTime: z.string().min(1, '*Required'),
  startUTCOffset: z.string().min(1, '*Required'),
  endDate: z.string().min(1, '*Required'),
  endTime: z.string().min(1, '*Required'),
  endUTCOffset: z.string().min(1, '*Required'),
  categories: z.array(z.string()),
  locations: z.array(z.string()),
});
