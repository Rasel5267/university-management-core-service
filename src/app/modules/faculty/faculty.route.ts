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

router.delete('/:id', FacultyController.deleteByIdFromDB);

router.get('/:id', FacultyController.getDataById);

router.get('/', FacultyController.getAllFromDB);

export const FacultyRoute = router;
