import { z } from "zod";

export const jobDetailsSchema = z.object({
  jobNumber: z.string().min(1, "Fill up this field"),
  recruitmentCode: z.string().min(1, "Fill up this field"),
  projectHeading: z.string().min(1, "Fill up this field"),
  companyNumber: z.string().min(1, "Fill up this field"),
  companyName: z.string().min(1, "Fill up this field"),
  specialConditions: z.string().min(0).nullable(),
  employmentStatus: z.string().min(1, "Fill up this field"),
  industry: z.string().min(1, "Fill up this field"),
  occupationClassification: z.string().min(1, "Fill up this field"),
  jobType: z.string().min(1, "Fill up this field"),
  salaryRange: z.string().min(1, "Fill up this field"),
  salaryDetails: z.string().min(1, "Fill up this field"),
  benefitsDetails: z.string().min(0).nullable(),
  point: z.string().min(0).nullable(),
  jobDescription: z.string().min(1, "Fill up this field"),
  qualificationName: z.string().min(1, "Fill up this field"),
  workLocation: z.string().min(1, "Fill up this field"),
  municipalityHokkaido: z.string().min(0).nullable(),
  municipalityAomori: z.string().min(0).nullable(),
  municipalityIwate: z.string().min(0).nullable(),
  municipalityAkita: z.string().min(0).nullable(),
  municipalityMiyagi: z.string().min(0).nullable(),
  municipalityFukushima: z.string().min(0).nullable(),
  municipalityYamagata: z.string().min(0).nullable(),
  municipalityTochigi: z.string().min(0).nullable(),
  municipalityNagano: z.string().min(0).nullable(),
  transportationAccessInformation: z.string().min(1, "Fill up this field"),
  workingDays: z.string().min(1, "Fill up this field"),
  earlyWorkingHours: z.string().min(0).nullable(),
  dayWorkingHours: z.string().min(0).nullable(),
  lateworkingHours: z.string().min(0).nullable(),
  nightworkingHours: z.string().min(0).nullable(),
  firstOtherWorkingHours: z.string().min(0).nullable(),
  secondOtherWorkingHours: z.string().min(0).nullable(),
  holidaysOrVacations: z.string().min(0).nullable(),
  personInCharge: z.string().min(1, "Fill up this field"),
  hpUpdateDate: z.string().min(1, "Fill up this field"),
  webListing: z.string().min(0).nullable(),
  jobRegistrationDate: z.string().min(1, "Fill up this field"),
  registeredDate: z.string().min(1, "Fill up this field"),
  updateDateAndTime: z.string().min(1, "Fill up this field"),
  inCharge: z.string().min(0).nullable(),
  recruitmentCaseManager: z.string().min(1, "Fill up this field"),
  directlyPostedOnIndeed: z.string().min(0).nullable(),
  recruitmentBoxDirectPosting: z.string().min(0).nullable(),
  talentClipPublicOrPrivate: z.string().min(0).nullable(),
  nurseHpPublicOrPrivate: z.string().min(0).nullable(),
  status: z.string().min(1, "Fill up this field"),
  memo: z.string().min(0).nullable(),
  secondMemo: z.string().min(0).nullable(),
  webMediaDisclosureOrNonDisclosure: z.string().min(0).nullable(),
});
