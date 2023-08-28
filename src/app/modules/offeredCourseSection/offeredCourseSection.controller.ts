import { OfferedCourseSection } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { offeredCourseSectionFilterableFields } from './offeredCourseSection.constant';
import { OfferedCourseSectionService } from './offeredCourseSection.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.insertIntoDB(req.body);

  sendResponse<OfferedCourseSection>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Offered Course Section created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, offeredCourseSectionFilterableFields);
  const options = pick(req.query, paginationFields);

  const result = await OfferedCourseSectionService.getAllFromDB(
    filters,
    options
  );
  sendResponse<OfferedCourseSection[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Courses Sections retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await OfferedCourseSectionService.getDataById(id);

  sendResponse<OfferedCourseSection>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Courses Section retrieved successfully',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await OfferedCourseSectionService.updateOneInDB(id, req.body);

  sendResponse<OfferedCourseSection>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Courses Section updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await OfferedCourseSectionService.deleteFromDB(id);

  sendResponse<OfferedCourseSection>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Courses Sections deleted successfully',
    data: result,
  });
});

export const OfferedCourseSectionController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteFromDB,
};
