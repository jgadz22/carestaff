export const adminHeaderLinks = [
  {
    label: "User",
    route: "/adminops/user",
    image: "/assets/icons/staff.png",
  },
  {
    label: "Employer",
    route: "/adminops/employer",
    image: "/assets/icons/employer.png",
  },
  {
    label: "Jobs",
    route: "/adminops/joblist",
    image: "/assets/icons/list.png",
  },
];

export const staffHeaderLinks = [
  {
    label: "Employer",
    route: "/adminops/employer",
    image: "/assets/icons/employer.png",
  },
  {
    label: "Jobs",
    route: "/adminops/joblist",
    image: "/assets/icons/list.png",
  },
];

export const userHeaderLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "List of Jobs",
    route: "/listofjobs",
  },
  {
    label: "About Us",
    route: "/aboutus",
  },
  {
    label: "FAQS",
    route: "/faqs",
  },
  {
    label: "Contact Us",
    route: "/contactus",
  },
];

export const jobDetailsDefaultValues = {
  jobNumber: "",
  recruitmentCode: "",
  projectHeading: "",
  companyNumber: "",
  companyName: "",
  specialConditions: "",
  employmentStatus: "",
  industry: "",
  occupationClassification: "",
  jobType: "",
  salaryRange: "",
  salaryDetails: "",
  benefitsDetails: "",
  point: "",
  jobDescription: "",
  qualificationName: "",
  workLocation: "",
  municipalityHokkaido: "",
  municipalityAomori: "",
  municipalityIwate: "",
  municipalityAkita: "",
  municipalityMiyagi: "",
  municipalityFukushima: "",
  municipalityYamagata: "",
  municipalityTochigi: "",
  municipalityNagano: "",
  transportationAccessInformation: "",
  workingDays: "",
  earlyWorkingHours: "",
  dayWorkingHours: "",
  lateworkingHours: "",
  nightworkingHours: "",
  firstOtherWorkingHours: "",
  secondOtherWorkingHours: "",
  holidaysOrVacations: "",
  personInCharge: "",
  hpUpdateDate: "",
  webListing: "",
  jobRegistrationDate: "",
  registeredDate: "",
  updateDateAndTime: "",
  inCharge: "",
  recruitmentCaseManager: "",
  directlyPostedOnIndeed: "",
  recruitmentBoxDirectPosting: "",
  talentClipPublicOrPrivate: "",
  nurseHpPublicOrPrivate: "",
  status: "",
  memo: "",
  secondMemo: "",
  webMediaDisclosureOrNonDisclosure: "",
};

export const employerDefaultValues = {
  photo: "",
  companyName: "",
  companyLocation: "",
  email: "",
  contactNumber: "",
  companyOverview: "",
};

export const carouselSlide = [
  {
    key: "1",
    contentFirst:
      "Are you seeking  for job opportunities or qualifications in caregiving?",
    contentSecond: "We've got you covered!",
    buttonContent: "See List of Jobs",
    route: "/listofjobs",
    image: "/assets/images/banner-first.png",
  },
  {
    key: "2",
    contentFirst: "",
    contentSecond: "",
    buttonContent: "For Employers",
    route: "/employers",
    image: "/assets/images/banner-second.jpg",
  },
  {
    key: "3",
    contentFirst: "",
    contentSecond: "",
    buttonContent: "See List of Offices",
    route: "/listofjobs",
    image: "assets/images/banner-third.jpg",
  },
];

export const howToApply = [
  {
    key: "1",
    htanumber: "01",
    content: "Go to list of jobs",
  },
  {
    key: "2",
    htanumber: "02",
    content: "Search for the Job that you desire to apply for then click",
  },
  {
    key: "3",
    htanumber: "03",
    content:
      "Read the Job Details carefully, if you wish to apply fill out the necessary fields then press “submit”",
  },
  {
    key: "4",
    htanumber: "04",
    content: "Wait for an email confirmation",
  },
];
