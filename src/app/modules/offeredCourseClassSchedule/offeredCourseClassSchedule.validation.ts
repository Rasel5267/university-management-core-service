import { WeekDays } from '@prisma/client';
import { z } from 'zod';

const create = z.object({
  body: z.object({
    startTime: z.string({
      required_error: 'Start time is required',
    }),
    endTime: z.string({
      required_error: 'End time is required',
    }),
    dayOfWeek: z
      .enum([...Object.values(WeekDays)] as [string, ...string[]], {})
      .optional(),
    offeredCourseSectionId: z.string({
      required_error: 'Offered Course Section Id is required',
    }),
    semesterRegistrationId: z.string({
      required_error: 'Semester Registration Id is required',
    }),
    roomId: z.string({
      required_error: 'Room Id is required',
    }),
    facultyId: z.string({
      required_error: 'Faculty Id is required',
    }),
  }),
});

export const OfferedCourseClassScheduleValidations = {
  create,
};
