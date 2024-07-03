import { z } from "zod";

export const jobDetailsSchema = z.object({
  jobNumber: z.string().min(1, "Fill up this field"),
  recruitmentCode: z.string().min(1, "Fill up this field"),
  projectHeading: z.string().min(1, "Fill up this field"),
  companyNumber: z.string().min(1, "Fill up this field"),
  companyName: z.string().min(1, "Fill up this field"),
  specialConditions: z.any(),
  employmentStatus: z.string().min(1, "Fill up this field"),
  industry: z.string().min(1, "Fill up this field"),
  occupationClassification: z.string().min(1, "Fill up this field"),
  jobType: z.string().min(1, "Fill up this field"),
  salaryRange: z.string().min(1, "Fill up this field"),
  salaryDetails: z.string().min(1, "Fill up this field"),
  benefitsDetails: z.any(),
  point: z.any(),
  jobDescription: z.string().min(1, "Fill up this field"),
  qualificationName: z.string().min(1, "Fill up this field"),
  workLocation: z.string().min(1, "Fill up this field"),
  municipalityHokkaido: z.any(),
  municipalityAomori: z.any(),
  municipalityIwate: z.any(),
  municipalityAkita: z.any(),
  municipalityMiyagi: z.any(),
  municipalityFukushima: z.any(),
  municipalityYamagata: z.any(),
  municipalityTochigi: z.any(),
  municipalityNagano: z.any(),
  transportationAccessInformation: z.string().min(1, "Fill up this field"),
  workingDays: z.string().min(1, "Fill up this field"),
  earlyWorkingHours: z.any(),
  dayWorkingHours: z.any(),
  lateworkingHours: z.any(),
  nightworkingHours: z.any(),
  firstOtherWorkingHours: z.any(),
  secondOtherWorkingHours: z.any(),
  holidaysOrVacations: z.any(),
  personInCharge: z.string().min(1, "Fill up this field"),
  hpUpdateDate: z.string().min(1, "Fill up this field"),
  webListing: z.any(),
  jobRegistrationDate: z.string().min(1, "Fill up this field"),
  registeredDate: z.string().min(1, "Fill up this field"),
  updateDateAndTime: z.string().min(1, "Fill up this field"),
  inCharge: z.any(),
  recruitmentCaseManager: z.string().min(1, "Fill up this field"),
  directlyPostedOnIndeed: z.any(),
  recruitmentBoxDirectPosting: z.any(),
  talentClipPublicOrPrivate: z.any(),
  nurseHpPublicOrPrivate: z.any(),
  status: z.string().min(1, "Fill up this field"),
  memo: z.any(),
  secondMemo: z.any(),
  webMediaDisclosureOrNonDisclosure: z.any(),
});

export const employerInfoSchema = z.object({
  imageUrl: z.string(),
  companyName: z.string().min(1, "Fill up this field"),
  companyLocation: z.string().min(1, "Fill up this field"),
  companyEmail: z.string().min(1, "Fill up this field"),
  companyNumber: z.string().min(1, "Fill up this field"),
  companyOverview: z.string().min(3, "Fill up this field"),
});

export const contactUsSenderSchema = z.object({
  name: z.string().min(1, "Fill up this field"),
  email: z.string().min(1, "Fill up this field"),
  subject: z.string().min(1, "Fill up this field"),
  contactNumber: z.string().min(1, "Fill up this field"),
  message: z.string().min(3, "Fill up this field"),
  isCheck: z.boolean(),
});

export const jobApplicationSenderInfoSchema = z.object({
  name: z.string().min(1, "Fill up this field"),
  email: z.string().min(1, "Fill up this field"),
  contactNumber: z.string().min(1, "Fill up this field"),
  applyFor: z.string().min(1, "Fill up this field"),
  message: z.string().min(3, "Fill up this field"),
  jobApplicationAttachment: z.string().min(3, "Fill up this field"),
  isCheck: z.boolean(),
});
