/* eslint-disable @typescript-eslint/no-explicit-any */
import { OfferedCourseClassSchedule, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { offeredCourseSearchableFields } from '../offeredCourse/offeredCourse.constant';
import { IOfferedCourseFilterRequest } from '../offeredCourse/offeredCourse.interface';
import {
  offeredCourseClassScheduleRelationalFields,
  offeredCourseClassScheduleRelationalFieldsMapper,
} from './offeredCourseClassSchedule.constant';
import { OfferedCourseClassScheduleUtils } from './offeredCourseClassSchedule.utils';

const insertIntoDB = async (
  data: OfferedCourseClassSchedule
): Promise<OfferedCourseClassSchedule> => {
  await OfferedCourseClassScheduleUtils.checkRoomAvailability(data);
  await OfferedCourseClassScheduleUtils.checkFacultyAvailability(data);

  const result = await prisma.offeredCourseClassSchedule.create({
    data,
    include: {
      semesterRegistration: true,
      offeredCourseSection: true,
      room: true,
      faculty: true,
    },
  });

  return result;
};

const getAllFromDB = async (
  filters: IOfferedCourseFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<OfferedCourseClassSchedule[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: offeredCourseSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (offeredCourseClassScheduleRelationalFields.includes(key)) {
          return {
            [offeredCourseClassScheduleRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
              mode: 'insensitive',
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.OfferedCourseClassScheduleWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.offeredCourseClassSchedule.findMany({
    where: whereConditions,
    include: {
      offeredCourseSection: true,
      semesterRegistration: true,
      room: true,
      faculty: true,
    },
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });

  const total = await prisma.offeredCourseClassSchedule.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (
  id: string
): Promise<OfferedCourseClassSchedule | null> => {
  const result = await prisma.offeredCourseClassSchedule.findUnique({
    where: {
      id,
    },
    include: {
      offeredCourseSection: true,
      semesterRegistration: true,
      room: true,
      faculty: true,
    },
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<OfferedCourseClassSchedule>
): Promise<OfferedCourseClassSchedule | null> => {
  const result = await prisma.offeredCourseClassSchedule.update({
    where: {
      id,
    },
    include: {
      offeredCourseSection: true,
      semesterRegistration: true,
      room: true,
      faculty: true,
    },
    data: payload,
  });

  return result;
};

const deleteFromDB = async (
  id: string
): Promise<OfferedCourseClassSchedule> => {
  const result = await prisma.offeredCourseClassSchedule.delete({
    where: {
      id,
    },
    include: {
      offeredCourseSection: true,
      semesterRegistration: true,
      room: true,
      faculty: true,
    },
  });

  return result;
};

export const OfferedCourseClassScheduleService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteFromDB,
};
