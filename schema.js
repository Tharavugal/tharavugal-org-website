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
  startDate: z.date(),
  startTime: z.date(),
  startTz: z.string().min(1, '*Required'),
  endDate: z.date(),
  endTime: z.date(),
  endTz: z.string().min(1, '*Required'),
  categories: z.array(z.string()).min(1, '*Required'),
  locations: z.array(z.string()).min(1, '*Required'),
  data: z
    .string()
    .min(1, '*Required')
    .transform((val) => JSON.parse(val)),
});

const IngredientsSchema = z
  .object({
    label: z.string().min(1, '*Required'),
    name: z.string().min(1, '*Required'),
  })
  .passthrough();

export const foodIngredientsSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, '*Required'),
  manufacturer: z.string().min(1, '*Required'),
  foodType: z.string().min(1, '*Required'),
  slug: z.string().min(1, '*Required'),
  categories: z.array(z.string()).nonempty(),
  originCountry: z.string().min(1, '*Required'),
  pkg: z.object({
    materials: z.array(z.string().min(1, '*Required')).nonempty(),
    bioDegradeable: z.boolean(),
  }),
  items: z.array(
    z.object({
      name: z.string().min(1, '*Required'),
      ingredients: z.array(IngredientsSchema).nonempty(),
    })
  ),
  traces: z.array(IngredientsSchema),
  image: z.string().min(1, '*Required'),
  data: z
    .string()
    .min(1, '*Required')
    .transform((val) => JSON.parse(val)),
});
