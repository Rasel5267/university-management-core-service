import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Course Title is required',
    }),
    code: z.string({
      required_error: 'Course id is required',
    }),
    credits: z.number({
      required_error: 'Credits is required',
    }),
    prerequisite: z.string().optional(),
    prerequisiteFor: z.string().optional(),
  }),
});

const update = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string().optional(),
    credits: z.string().optional(),
    prerequisite: z.string().optional(),
    prerequisiteFor: z.string().optional(),
  }),
});

export const CourseValidation = {
  create,
  update,
};
