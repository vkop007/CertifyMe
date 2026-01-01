import {
  Checkpoint,
  DELLEMC,
  Fortinet,
  PEGA,
  ISACA,
  CompTIA,
  ORACLE,
  Juniper,
  KUBERNETES,
  AWS,
  VMWARE,
  Microsoft,
  SALESFORCE,
  ISTQB,
  SAS,
  SPLUNK,
  ECCouncil,
  Databricks,
  TOEFL,
  GRE,
} from "@/lib/index";

export const generateSlug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};

const ALL_COURSES = [
  ...(AWS || []),
  ...(Checkpoint || []),
  ...(CompTIA || []),
  ...(DELLEMC || []),
  ...(ECCouncil || []),
  ...(Fortinet || []),
  ...(ISACA || []),
  ...(ISTQB || []),
  ...(Juniper || []),
  ...(KUBERNETES || []),
  ...(Microsoft || []),
  ...(PEGA || []),
  ...(ORACLE || []),
  ...(SALESFORCE || []),
  ...(SAS || []),
  ...(SPLUNK || []),
  ...(VMWARE || []),
  ...(Databricks || []),  
  ...(TOEFL || []),
  ...(GRE || []),
];

export const getCourseBySlug = (slug: string) => {
  return ALL_COURSES.find((course) => generateSlug(course.name) === slug);
};
