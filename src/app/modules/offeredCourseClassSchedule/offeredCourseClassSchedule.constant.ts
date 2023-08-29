export const offeredCourseClassScheduleFilterableFields: string[] = [
  'searchTerm',
  'startTime',
  'endTime',
  'daysInWeek',
  'offeredCourseSectionId',
  'semesterRegistrationId',
  'roomId',
  'facultyId',
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
