import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacultyValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyController.deleteFromDB
);

router.get('/:id', AcademicFacultyController.getDataById);

router.get('/', AcademicFacultyController.getAllFromDB);

export const AcademicFacultyRoute = router;
