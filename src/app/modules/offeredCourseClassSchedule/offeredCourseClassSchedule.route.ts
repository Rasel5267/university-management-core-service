import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';
import { OfferedCourseClassScheduleValidations } from './offeredCourseClassSchedule.validation';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllFromDB);

router.get('/:id', OfferedCourseClassScheduleController.getDataById);

router.post(
  '/',
  validateRequest(OfferedCourseClassScheduleValidations.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseClassScheduleValidations.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.deleteFromDB
);

export const OfferedCourseClassScheduleRoute = router;
