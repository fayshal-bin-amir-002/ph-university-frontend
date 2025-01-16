import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Name field is required." }),
  year: z.string({ required_error: "Year field is required." }),
  startMonth: z.string({ required_error: "Start Month field is required." }),
  endMonth: z.string({ required_error: "End Month field is required." }),
});
