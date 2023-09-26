export type ISemesterRegistrationFilterRequest = {
  searchTerm?: string | undefined;
  academicSemesterId?: string | undefined;
};

export type IEnrollCourse = {
  offeredCourseId: string;
  offeredCourseSectionId: string;
};
