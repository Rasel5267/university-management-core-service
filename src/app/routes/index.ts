import express from 'express';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { BuildingRoute } from '../modules/building/building.route';
import { CourseRoute } from '../modules/course/course.route';
import { FacultyRoute } from '../modules/faculty/faculty.route';
import { OfferedCourseRoute } from '../modules/offeredCourse/offeredCourse.route';
import { OfferedCourseClassScheduleRoute } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { OfferedCourseSectionRoute } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { RoomRoute } from '../modules/room/room.route';
import { SemesterRegistrationRoute } from '../modules/semesterRegistration/semesterRegistration.route';
import { StudentRoute } from '../modules/student/student.route';
import { studentEnrolledCourseRoute } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { StudentEnrolledCourseMarkRoute } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.route';
import { studentSemesterPaymentRoute } from '../modules/studentSemesterPayment/studentSemesterPayment.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoute,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoute,
  },
  {
    path: '/students',
    route: StudentRoute,
  },
  {
    path: '/faculties',
    route: FacultyRoute,
  },
  {
    path: '/buildings',
    route: BuildingRoute,
  },
  {
    path: '/rooms',
    route: RoomRoute,
  },
  {
    path: '/courses',
    route: CourseRoute,
  },
  {
    path: '/semester-registrations',
    route: SemesterRegistrationRoute,
  },
  {
    path: '/offered-courses',
    route: OfferedCourseRoute,
  },
  {
    path: '/offered-course-sections',
    route: OfferedCourseSectionRoute,
  },
  {
    path: '/offered-course-class-schedules',
    route: OfferedCourseClassScheduleRoute,
  },
  {
    path: '/student-enrolled-course-marks',
    route: StudentEnrolledCourseMarkRoute,
  },
  {
    path: '/student-enrolled-courses',
    route: studentEnrolledCourseRoute,
  },
  {
    path: '/student-semester-payments',
    route: studentSemesterPaymentRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
