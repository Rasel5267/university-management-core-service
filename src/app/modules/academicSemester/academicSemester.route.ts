import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDB
);

router.delete('/:id', AcademicSemesterController.deleteByIdFromDB);

router.get('/:id', AcademicSemesterController.getDataById);

router.get('/', AcademicSemesterController.getAllFromDB);

export const AcademicSemesterRoute = router;
