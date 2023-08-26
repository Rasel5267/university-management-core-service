import { SemesterRegistration } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { semesterRegistrationFilterableFields } from './semesterRegistration.constant';
import { SemesterRegistrationService } from './semesterRegistration.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.insertIntoDB(req.body);

  sendResponse<SemesterRegistration>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Semester Registration created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, semesterRegistrationFilterableFields);
  const options = pick(req.query, paginationFields);
  const result = await SemesterRegistrationService.getAllFromDB(
    filters,
    options
  );

  sendResponse<SemesterRegistration[]>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Semester Registration retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await SemesterRegistrationService.getDataById(id);

  sendResponse<SemesterRegistration>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Semester Registration retrieved successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await SemesterRegistrationService.deleteFromDB(id);

  sendResponse<SemesterRegistration>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Semester Registration deleted successfully',
    data: result,
  });
});

export const SemesterRegistrationController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  deleteFromDB,
};
