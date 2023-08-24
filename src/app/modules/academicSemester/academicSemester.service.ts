import { AcademicSemester } from '@prisma/client';
import prisma from '../../../shared/prisma';

const CreateSemester = async (
  academicSemesterData: AcademicSemester
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.create({
    data: academicSemesterData,
  });

  return result;
};

export const AcademicSemesterService = {
  CreateSemester,
};
