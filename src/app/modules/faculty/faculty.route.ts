import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(FacultyValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FacultyController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FacultyController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FacultyController.deleteFromDB
);

router.get('/:id', FacultyController.getDataById);

router.get('/', FacultyController.getAllFromDB);

export const FacultyRoute = router;
