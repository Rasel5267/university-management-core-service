import { Course, CourseFaculty } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { courseFilterableFields } from './course.constant';
import { CourseService } from './course.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.insertIntoDB(req.body);

  sendResponse<Course>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course Created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, courseFilterableFields);
  const options = pick(req.query, paginationFields);

  const result = await CourseService.getAllFromDB(filters, options);
  sendResponse<Course[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CourseService.getDataById(id);
  sendResponse<Course>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CourseService.updateOneInDB(id, req.body);
  sendResponse<Course>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CourseService.deleteFromDB(id);

  sendResponse<Course>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully',
    data: result,
  });
});

const assignFaculties = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CourseService.assignFaculties(id, req.body.faculties);

  sendResponse<CourseFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Assign Faculties successfully',
    data: result,
  });
});

const removeFaculties = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CourseService.removeFaculties(id, req.body.faculties);

  sendResponse<CourseFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Remove Faculties successfully',
    data: result,
  });
});

export const CourseController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteFromDB,
  assignFaculties,
  removeFaculties,
};
