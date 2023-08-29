export const offeredCourseClassScheduleFilterableFields: string[] = [
  'daysOfWeek',
];

export const offeredCourseClassScheduleSearchableFields: string[] = [
  'startTime',
  'endTime',
  'dayOfWeek',
];

export const offeredCourseClassScheduleRelationalFields: string[] = [
  'offeredCourseSectionId',
  'semesterRegistrationId',
  'roomId',
  'facultyId',
];
export const offeredCourseClassScheduleRelationalFieldsMapper: {
  [key: string]: string;
} = {
  offeredCourseSectionId: 'offeredCourse',
  semesterRegistrationId: 'semesterRegistration',
  roomId: 'room',
  facultyId: 'faculty',
};

export const daysInWeek = [
  'SATURDAY',
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
];
