import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.CreateSemester(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Created successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
};
