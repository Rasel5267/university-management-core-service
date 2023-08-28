import { OfferedCourse } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { offeredCourseFilterableFields } from './offeredCourse.constant';
import { OfferedCourseService } from './offeredCourse.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.insertIntoDB(req.body);

  sendResponse<OfferedCourse[]>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Offered Course created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, offeredCourseFilterableFields);
  const options = pick(req.query, paginationFields);

  const result = await OfferedCourseService.getAllFromDB(filters, options);
  sendResponse<OfferedCourse[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Courses retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await OfferedCourseService.getDataById(id);

  sendResponse<OfferedCourse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Courses retrieved successfully',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await OfferedCourseService.updateOneInDB(id, req.body);

  sendResponse<OfferedCourse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Courses updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await OfferedCourseService.deleteFromDB(id);

  sendResponse<OfferedCourse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Courses deleted successfully',
    data: result,
  });
});

export const OfferedCourseController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteFromDB,
};
