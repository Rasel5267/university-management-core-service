import { OfferedCourseSection } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  payload: OfferedCourseSection
): Promise<OfferedCourseSection> => {
  const isExistOfferedCourse = await prisma.offeredCourse.findFirst({
    where: {
      id: payload.offeredCourseId,
    },
  });

  if (!isExistOfferedCourse) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Offered Course does not exist!'
    );
  }

  payload.semesterRegistrationId = isExistOfferedCourse.semesterRegistrationId;

  const result = await prisma.offeredCourseSection.create({
    data: payload,
  });

  return result;
};

export const OfferedCourseSectionService = {
  insertIntoDB,
};
