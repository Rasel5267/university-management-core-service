import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.create),
  AcademicDepartmentController.insertIntoDB
);

router.delete('/:id', AcademicDepartmentController.deleteByIdFromDB);

router.get('/:id', AcademicDepartmentController.getDataById);

router.get('/', AcademicDepartmentController.getAllFromDB);

export const AcademicDepartmentRoute = router;
