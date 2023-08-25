import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(FacultyValidation.create),
  FacultyController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.update),
  FacultyController.updateOneInDB
);

router.delete('/:id', FacultyController.deleteFromDB);

router.get('/:id', FacultyController.getDataById);

router.get('/', FacultyController.getAllFromDB);

export const FacultyRoute = router;
