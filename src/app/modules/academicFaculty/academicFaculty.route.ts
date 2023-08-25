import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacultyValidation.create),
  AcademicFacultyController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.update),
  AcademicFacultyController.updateOneInDB
);

router.delete('/:id', AcademicFacultyController.deleteFromDB);

router.get('/:id', AcademicFacultyController.getDataById);

router.get('/', AcademicFacultyController.getAllFromDB);

export const AcademicFacultyRoute = router;
