/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateAppInput = {
  id?: string | null;
  appHID: string;
  appname: string;
  logoapp: string;
  splashscreen: string;
  created_at?: number | null;
  updated_at?: number | null;
  appLink?: string | null;
  defaultBranchId?: string | null;
  colors?: string | null;
  shopAppId?: string | null;
};

export type ModelAppConditionInput = {
  appHID?: ModelStringInput | null;
  appname?: ModelStringInput | null;
  logoapp?: ModelStringInput | null;
  splashscreen?: ModelStringInput | null;
  created_at?: ModelIntInput | null;
  updated_at?: ModelIntInput | null;
  appLink?: ModelStringInput | null;
  defaultBranchId?: ModelStringInput | null;
  colors?: ModelStringInput | null;
  and?: Array<ModelAppConditionInput | null> | null;
  or?: Array<ModelAppConditionInput | null> | null;
  not?: ModelAppConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateAppInput = {
  id: string;
  appHID?: string | null;
  appname?: string | null;
  logoapp?: string | null;
  splashscreen?: string | null;
  created_at?: number | null;
  updated_at?: number | null;
  appLink?: string | null;
  defaultBranchId?: string | null;
  colors?: string | null;
  shopAppId?: string | null;
};

export type DeleteAppInput = {
  id?: string | null;
};

export type CreateShopInput = {
  id?: string | null;
  appHID?: number | null;
};

export type ModelShopConditionInput = {
  appHID?: ModelIntInput | null;
  and?: Array<ModelShopConditionInput | null> | null;
  or?: Array<ModelShopConditionInput | null> | null;
  not?: ModelShopConditionInput | null;
};

export type UpdateShopInput = {
  id: string;
  appHID?: number | null;
};

export type DeleteShopInput = {
  id?: string | null;
};

export type CreateAppointmentInput = {
  id?: string | null;
  appId: string;
  bookedBy?: string | null;
  branchId: string;
  userId: string;
  end?: string | null;
  start: string;
  date: string;
  price?: number | null;
  cancelled?: boolean | null;
  serviceId: string;
  userName?: string | null;
  type?: AppointmentType | null;
  notificationId?: string | null;
  canncelledBy?: string | null;
  note?: string | null;
};

export enum AppointmentType {
  Appointment = "Appointment",
  Block = "Block"
}

export type ModelAppointmentConditionInput = {
  appId?: ModelIDInput | null;
  bookedBy?: ModelStringInput | null;
  branchId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  end?: ModelStringInput | null;
  start?: ModelStringInput | null;
  date?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  cancelled?: ModelBooleanInput | null;
  serviceId?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  type?: ModelAppointmentTypeInput | null;
  notificationId?: ModelStringInput | null;
  canncelledBy?: ModelIDInput | null;
  note?: ModelStringInput | null;
  and?: Array<ModelAppointmentConditionInput | null> | null;
  or?: Array<ModelAppointmentConditionInput | null> | null;
  not?: ModelAppointmentConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelAppointmentTypeInput = {
  eq?: AppointmentType | null;
  ne?: AppointmentType | null;
};

export enum Role {
  User = "User",
  Parruchiere = "Parruchiere",
  Admin = "Admin",
  None = "None"
}

export type UpdateAppointmentInput = {
  id: string;
  appId?: string | null;
  bookedBy?: string | null;
  branchId?: string | null;
  userId?: string | null;
  end?: string | null;
  start?: string | null;
  date?: string | null;
  price?: number | null;
  cancelled?: boolean | null;
  serviceId?: string | null;
  userName?: string | null;
  type?: AppointmentType | null;
  notificationId?: string | null;
  canncelledBy?: string | null;
  note?: string | null;
};

export type DeleteAppointmentInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  username?: string | null;
  branchID?: string | null;
  ShopID?: string | null;
  operateInBranchId?: string | null;
  role: Role;
  nome?: string | null;
  cognome?: string | null;
  fb?: string | null;
  birthDate?: string | null;
  email?: string | null;
  cell?: string | null;
  userName?: string | null;
  logo?: S3ObjectInput | null;
  device_id?: string | null;
  blocked?: boolean | null;
  serviceOperatorId?: string | null;
};

export type S3ObjectInput = {
  bucket?: string | null;
  region?: string | null;
  key?: string | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  branchID?: ModelIDInput | null;
  ShopID?: ModelIDInput | null;
  operateInBranchId?: ModelIDInput | null;
  role?: ModelRoleInput | null;
  nome?: ModelStringInput | null;
  cognome?: ModelStringInput | null;
  fb?: ModelStringInput | null;
  birthDate?: ModelStringInput | null;
  email?: ModelStringInput | null;
  cell?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  device_id?: ModelStringInput | null;
  blocked?: ModelBooleanInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelRoleInput = {
  eq?: Role | null;
  ne?: Role | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  branchID?: string | null;
  ShopID?: string | null;
  operateInBranchId?: string | null;
  role?: Role | null;
  nome?: string | null;
  cognome?: string | null;
  fb?: string | null;
  birthDate?: string | null;
  email?: string | null;
  cell?: string | null;
  userName?: string | null;
  logo?: S3ObjectInput | null;
  device_id?: string | null;
  blocked?: boolean | null;
  serviceOperatorId?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateBranchInput = {
  id?: string | null;
  name?: string | null;
  logo?: S3ObjectInput | null;
  shopId: string;
  cell?: string | null;
  linkFb?: string | null;
  linkIn?: string | null;
  linkTw?: string | null;
  address?: string | null;
  address_id?: string | null;
  phone?: string | null;
  active?: boolean | null;
  workCategory?: string | null;
  addressId?: string | null;
  regioneSociale?: string | null;
  pIva?: string | null;
  sedeLegale?: string | null;
  sedeLegale_id?: string | null;
  description?: string | null;
  sede23?: string | null;
  Nuovo?: number | null;
  site?: string | null;
  adminId: string;
};

export type ModelBranchConditionInput = {
  name?: ModelStringInput | null;
  shopId?: ModelIDInput | null;
  cell?: ModelStringInput | null;
  linkFb?: ModelStringInput | null;
  linkIn?: ModelStringInput | null;
  linkTw?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address_id?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  workCategory?: ModelStringInput | null;
  addressId?: ModelStringInput | null;
  regioneSociale?: ModelStringInput | null;
  pIva?: ModelStringInput | null;
  sedeLegale?: ModelStringInput | null;
  sedeLegale_id?: ModelStringInput | null;
  description?: ModelStringInput | null;
  sede23?: ModelStringInput | null;
  Nuovo?: ModelIntInput | null;
  site?: ModelStringInput | null;
  adminId?: ModelIDInput | null;
  and?: Array<ModelBranchConditionInput | null> | null;
  or?: Array<ModelBranchConditionInput | null> | null;
  not?: ModelBranchConditionInput | null;
};

export type UpdateBranchInput = {
  id: string;
  name?: string | null;
  logo?: S3ObjectInput | null;
  shopId?: string | null;
  cell?: string | null;
  linkFb?: string | null;
  linkIn?: string | null;
  linkTw?: string | null;
  address?: string | null;
  address_id?: string | null;
  phone?: string | null;
  active?: boolean | null;
  workCategory?: string | null;
  addressId?: string | null;
  regioneSociale?: string | null;
  pIva?: string | null;
  sedeLegale?: string | null;
  sedeLegale_id?: string | null;
  description?: string | null;
  sede23?: string | null;
  Nuovo?: number | null;
  site?: string | null;
  adminId?: string | null;
};

export type DeleteBranchInput = {
  id?: string | null;
};

export type CreateServiceInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  price?: number | null;
  image?: S3ObjectInput | null;
  duration: string;
  branchId: string;
  deleted?: boolean | null;
  deletedAt?: string | null;
};

export type ModelServiceConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  duration?: ModelStringInput | null;
  branchId?: ModelIDInput | null;
  deleted?: ModelBooleanInput | null;
  deletedAt?: ModelStringInput | null;
  and?: Array<ModelServiceConditionInput | null> | null;
  or?: Array<ModelServiceConditionInput | null> | null;
  not?: ModelServiceConditionInput | null;
};

export type UpdateServiceInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  price?: number | null;
  image?: S3ObjectInput | null;
  duration?: string | null;
  branchId?: string | null;
  deleted?: boolean | null;
  deletedAt?: string | null;
};

export type DeleteServiceInput = {
  id?: string | null;
};

export type CreateAppUsersInput = {
  id?: string | null;
  appId: string;
  userId: string;
};

export type ModelAppUsersConditionInput = {
  appId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  and?: Array<ModelAppUsersConditionInput | null> | null;
  or?: Array<ModelAppUsersConditionInput | null> | null;
  not?: ModelAppUsersConditionInput | null;
};

export type UpdateAppUsersInput = {
  id: string;
  appId?: string | null;
  userId?: string | null;
};

export type DeleteAppUsersInput = {
  id?: string | null;
};

export type CreateWorkTimeInput = {
  id?: string | null;
  start: string;
  end: string;
  offset: string;
  active?: boolean | null;
  dayWeek?: DayNumberOfWeek | null;
  default?: boolean | null;
  title?: string | null;
  branchId: string;
};

export enum DayNumberOfWeek {
  Lun = "Lun",
  Mar = "Mar",
  Mer = "Mer",
  Gio = "Gio",
  Ven = "Ven",
  Sab = "Sab",
  Dom = "Dom"
}

export type ModelWorkTimeConditionInput = {
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  offset?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  dayWeek?: ModelDayNumberOfWeekInput | null;
  default?: ModelBooleanInput | null;
  title?: ModelStringInput | null;
  branchId?: ModelIDInput | null;
  and?: Array<ModelWorkTimeConditionInput | null> | null;
  or?: Array<ModelWorkTimeConditionInput | null> | null;
  not?: ModelWorkTimeConditionInput | null;
};

export type ModelDayNumberOfWeekInput = {
  eq?: DayNumberOfWeek | null;
  ne?: DayNumberOfWeek | null;
};

export type UpdateWorkTimeInput = {
  id: string;
  start?: string | null;
  end?: string | null;
  offset?: string | null;
  active?: boolean | null;
  dayWeek?: DayNumberOfWeek | null;
  default?: boolean | null;
  title?: string | null;
  branchId?: string | null;
};

export type DeleteWorkTimeInput = {
  id?: string | null;
};

export type CreateContactsInput = {
  id?: string | null;
  subject?: string | null;
  message?: string | null;
  userId: string;
  img?: S3ObjectInput | null;
};

export type ModelcontactsConditionInput = {
  subject?: ModelStringInput | null;
  message?: ModelStringInput | null;
  userId?: ModelIDInput | null;
  and?: Array<ModelcontactsConditionInput | null> | null;
  or?: Array<ModelcontactsConditionInput | null> | null;
  not?: ModelcontactsConditionInput | null;
};

export type UpdateContactsInput = {
  id: string;
  subject?: string | null;
  message?: string | null;
  userId?: string | null;
  img?: S3ObjectInput | null;
};

export type DeleteContactsInput = {
  id?: string | null;
};

export type CreateFaqInput = {
  id?: string | null;
  subject?: string | null;
  description?: string | null;
  order?: number | null;
  type?: FaqType | null;
};

export enum FaqType {
  All = "All",
  Admin = "Admin",
  User = "User",
  Parruchiere = "Parruchiere"
}

export type ModelFaqConditionInput = {
  subject?: ModelStringInput | null;
  description?: ModelStringInput | null;
  order?: ModelIntInput | null;
  type?: ModelFaqTypeInput | null;
  and?: Array<ModelFaqConditionInput | null> | null;
  or?: Array<ModelFaqConditionInput | null> | null;
  not?: ModelFaqConditionInput | null;
};

export type ModelFaqTypeInput = {
  eq?: FaqType | null;
  ne?: FaqType | null;
};

export type UpdateFaqInput = {
  id: string;
  subject?: string | null;
  description?: string | null;
  order?: number | null;
  type?: FaqType | null;
};

export type DeleteFaqInput = {
  id?: string | null;
};

export type CreateBranchUsersInput = {
  id?: string | null;
  branchId: string;
  userId: string;
};

export type ModelBranchUsersConditionInput = {
  branchId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  and?: Array<ModelBranchUsersConditionInput | null> | null;
  or?: Array<ModelBranchUsersConditionInput | null> | null;
  not?: ModelBranchUsersConditionInput | null;
};

export type UpdateBranchUsersInput = {
  id: string;
  branchId?: string | null;
  userId?: string | null;
};

export type DeleteBranchUsersInput = {
  id?: string | null;
};

export type CreateUserNotesInput = {
  id?: string | null;
  desc?: string | null;
  userId: string;
};

export type ModelUserNotesConditionInput = {
  desc?: ModelStringInput | null;
  userId?: ModelIDInput | null;
  and?: Array<ModelUserNotesConditionInput | null> | null;
  or?: Array<ModelUserNotesConditionInput | null> | null;
  not?: ModelUserNotesConditionInput | null;
};

export type UpdateUserNotesInput = {
  id: string;
  desc?: string | null;
  userId?: string | null;
};

export type DeleteUserNotesInput = {
  id?: string | null;
};

export type CreateAppointmentNotesInput = {
  id?: string | null;
  desc?: string | null;
  appointmentId: string;
};

export type ModelAppointmentNotesConditionInput = {
  desc?: ModelStringInput | null;
  appointmentId?: ModelIDInput | null;
  and?: Array<ModelAppointmentNotesConditionInput | null> | null;
  or?: Array<ModelAppointmentNotesConditionInput | null> | null;
  not?: ModelAppointmentNotesConditionInput | null;
};

export type UpdateAppointmentNotesInput = {
  id: string;
  desc?: string | null;
  appointmentId?: string | null;
};

export type DeleteAppointmentNotesInput = {
  id?: string | null;
};

export type CreateCustomerProInput = {
  id?: string | null;
  username: string;
  nome: string;
  cognome: string;
  fb?: string | null;
  email: string;
  cell?: string | null;
  logo?: S3ObjectInput | null;
  blocked?: boolean | null;
};

export type ModelCustomerProConditionInput = {
  username?: ModelStringInput | null;
  nome?: ModelStringInput | null;
  cognome?: ModelStringInput | null;
  fb?: ModelStringInput | null;
  email?: ModelStringInput | null;
  cell?: ModelStringInput | null;
  blocked?: ModelBooleanInput | null;
  and?: Array<ModelCustomerProConditionInput | null> | null;
  or?: Array<ModelCustomerProConditionInput | null> | null;
  not?: ModelCustomerProConditionInput | null;
};

export type UpdateCustomerProInput = {
  id: string;
  username?: string | null;
  nome?: string | null;
  cognome?: string | null;
  fb?: string | null;
  email?: string | null;
  cell?: string | null;
  logo?: S3ObjectInput | null;
  blocked?: boolean | null;
};

export type DeleteCustomerProInput = {
  id?: string | null;
};

export type CreateOwnerProInput = {
  id?: string | null;
  username?: string | null;
  nome: string;
  cognome: string;
  fb?: string | null;
  email: string;
  cell?: string | null;
  blocked?: boolean | null;
  ownerProAppId?: string | null;
  ownerProShopId?: string | null;
};

export type ModelOwnerProConditionInput = {
  username?: ModelStringInput | null;
  nome?: ModelStringInput | null;
  cognome?: ModelStringInput | null;
  fb?: ModelStringInput | null;
  email?: ModelStringInput | null;
  cell?: ModelStringInput | null;
  blocked?: ModelBooleanInput | null;
  and?: Array<ModelOwnerProConditionInput | null> | null;
  or?: Array<ModelOwnerProConditionInput | null> | null;
  not?: ModelOwnerProConditionInput | null;
};

export enum AppType {
  PWA = "PWA",
  Native = "Native"
}

export type UpdateOwnerProInput = {
  id: string;
  username?: string | null;
  nome?: string | null;
  cognome?: string | null;
  fb?: string | null;
  email?: string | null;
  cell?: string | null;
  blocked?: boolean | null;
  ownerProAppId?: string | null;
  ownerProShopId?: string | null;
};

export type DeleteOwnerProInput = {
  id?: string | null;
};

export type CreateAppProInput = {
  id?: string | null;
  active?: boolean | null;
  logo?: S3ObjectInput | null;
  name?: string | null;
  description: string;
  SplashScreen?: Array<S3ObjectInput | null> | null;
  link?: string | null;
  CreatedAt?: string | null;
  UpdateAt?: string | null;
  type?: AppType | null;
  appProStyleId?: string | null;
  appProShopId?: string | null;
  appProOwnerId?: string | null;
};

export type ModelAppProConditionInput = {
  active?: ModelBooleanInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  link?: ModelStringInput | null;
  CreatedAt?: ModelStringInput | null;
  UpdateAt?: ModelStringInput | null;
  type?: ModelAppTypeInput | null;
  and?: Array<ModelAppProConditionInput | null> | null;
  or?: Array<ModelAppProConditionInput | null> | null;
  not?: ModelAppProConditionInput | null;
};

export type ModelAppTypeInput = {
  eq?: AppType | null;
  ne?: AppType | null;
};

export type UpdateAppProInput = {
  id: string;
  active?: boolean | null;
  logo?: S3ObjectInput | null;
  name?: string | null;
  description?: string | null;
  SplashScreen?: Array<S3ObjectInput | null> | null;
  link?: string | null;
  CreatedAt?: string | null;
  UpdateAt?: string | null;
  type?: AppType | null;
  appProStyleId?: string | null;
  appProShopId?: string | null;
  appProOwnerId?: string | null;
};

export type DeleteAppProInput = {
  id?: string | null;
};

export type CreateAppointmentProInput = {
  id?: string | null;
  customerId: string;
  date: string;
  start: string;
  end: string;
  confirmedData?: string | null;
  confirmed?: boolean | null;
  note?: string | null;
  appointmentProServicesId?: string | null;
  appointmentProBranchId?: string | null;
};

export type ModelAppointmentProConditionInput = {
  customerId?: ModelIDInput | null;
  date?: ModelStringInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  confirmedData?: ModelStringInput | null;
  confirmed?: ModelBooleanInput | null;
  note?: ModelStringInput | null;
  and?: Array<ModelAppointmentProConditionInput | null> | null;
  or?: Array<ModelAppointmentProConditionInput | null> | null;
  not?: ModelAppointmentProConditionInput | null;
};

export type UpdateAppointmentProInput = {
  id: string;
  customerId?: string | null;
  date?: string | null;
  start?: string | null;
  end?: string | null;
  confirmedData?: string | null;
  confirmed?: boolean | null;
  note?: string | null;
  appointmentProServicesId?: string | null;
  appointmentProBranchId?: string | null;
};

export type DeleteAppointmentProInput = {
  id?: string | null;
};

export type CreateServiceProInput = {
  id?: string | null;
  branch_id: string;
  title: string;
  Description?: string | null;
  Image?: string | null;
  Deleted?: boolean | null;
  Deleted_at?: string | null;
  duration?: number | null;
  price?: number | null;
  serviceProBranchId?: string | null;
};

export type ModelServiceProConditionInput = {
  branch_id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  Description?: ModelStringInput | null;
  Image?: ModelStringInput | null;
  Deleted?: ModelBooleanInput | null;
  Deleted_at?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  and?: Array<ModelServiceProConditionInput | null> | null;
  or?: Array<ModelServiceProConditionInput | null> | null;
  not?: ModelServiceProConditionInput | null;
};

export type UpdateServiceProInput = {
  id: string;
  branch_id?: string | null;
  title?: string | null;
  Description?: string | null;
  Image?: string | null;
  Deleted?: boolean | null;
  Deleted_at?: string | null;
  duration?: number | null;
  price?: number | null;
  serviceProBranchId?: string | null;
};

export type DeleteServiceProInput = {
  id?: string | null;
};

export type CreateBranchProInput = {
  id?: string | null;
  phone: string;
  Active?: boolean | null;
  linkFB?: string | null;
  linkIG?: string | null;
  linkTW?: string | null;
  workCategory?: string | null;
  address?: string | null;
  address_id?: string | null;
  branchProShopId?: string | null;
  branchProWorkTimeId?: string | null;
};

export type ModelBranchProConditionInput = {
  phone?: ModelStringInput | null;
  Active?: ModelBooleanInput | null;
  linkFB?: ModelStringInput | null;
  linkIG?: ModelStringInput | null;
  linkTW?: ModelStringInput | null;
  workCategory?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address_id?: ModelStringInput | null;
  and?: Array<ModelBranchProConditionInput | null> | null;
  or?: Array<ModelBranchProConditionInput | null> | null;
  not?: ModelBranchProConditionInput | null;
};

export type UpdateBranchProInput = {
  id: string;
  phone?: string | null;
  Active?: boolean | null;
  linkFB?: string | null;
  linkIG?: string | null;
  linkTW?: string | null;
  workCategory?: string | null;
  address?: string | null;
  address_id?: string | null;
  branchProShopId?: string | null;
  branchProWorkTimeId?: string | null;
};

export type DeleteBranchProInput = {
  id?: string | null;
};

export type CreateShopProInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  logo?: S3ObjectInput | null;
  pIva?: string | null;
  ragioneSociale?: string | null;
  sedeLegale?: string | null;
  sedeLegale_id?: string | null;
  website?: string | null;
  shopProOwnerId?: string | null;
  shopProAppId?: string | null;
};

export type ModelShopProConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  pIva?: ModelStringInput | null;
  ragioneSociale?: ModelStringInput | null;
  sedeLegale?: ModelStringInput | null;
  sedeLegale_id?: ModelStringInput | null;
  website?: ModelStringInput | null;
  and?: Array<ModelShopProConditionInput | null> | null;
  or?: Array<ModelShopProConditionInput | null> | null;
  not?: ModelShopProConditionInput | null;
};

export type UpdateShopProInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  logo?: S3ObjectInput | null;
  pIva?: string | null;
  ragioneSociale?: string | null;
  sedeLegale?: string | null;
  sedeLegale_id?: string | null;
  website?: string | null;
  shopProOwnerId?: string | null;
  shopProAppId?: string | null;
};

export type DeleteShopProInput = {
  id?: string | null;
};

export type CreateStyleInput = {
  id?: string | null;
  palette?: string | null;
  headers?: string | null;
  tab?: string | null;
  pages?: Array<string | null> | null;
  menu?: string | null;
  styleAppProId?: string | null;
};

export type ModelStyleConditionInput = {
  palette?: ModelStringInput | null;
  headers?: ModelStringInput | null;
  tab?: ModelStringInput | null;
  pages?: ModelStringInput | null;
  menu?: ModelStringInput | null;
  and?: Array<ModelStyleConditionInput | null> | null;
  or?: Array<ModelStyleConditionInput | null> | null;
  not?: ModelStyleConditionInput | null;
};

export type UpdateStyleInput = {
  id: string;
  palette?: string | null;
  headers?: string | null;
  tab?: string | null;
  pages?: Array<string | null> | null;
  menu?: string | null;
  styleAppProId?: string | null;
};

export type DeleteStyleInput = {
  id?: string | null;
};

export type ModelAppFilterInput = {
  id?: ModelIDInput | null;
  appHID?: ModelStringInput | null;
  appname?: ModelStringInput | null;
  logoapp?: ModelStringInput | null;
  splashscreen?: ModelStringInput | null;
  created_at?: ModelIntInput | null;
  updated_at?: ModelIntInput | null;
  appLink?: ModelStringInput | null;
  defaultBranchId?: ModelStringInput | null;
  colors?: ModelStringInput | null;
  and?: Array<ModelAppFilterInput | null> | null;
  or?: Array<ModelAppFilterInput | null> | null;
  not?: ModelAppFilterInput | null;
};

export type ModelShopFilterInput = {
  id?: ModelIDInput | null;
  appHID?: ModelIntInput | null;
  and?: Array<ModelShopFilterInput | null> | null;
  or?: Array<ModelShopFilterInput | null> | null;
  not?: ModelShopFilterInput | null;
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null;
  appId?: ModelIDInput | null;
  bookedBy?: ModelStringInput | null;
  branchId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  end?: ModelStringInput | null;
  start?: ModelStringInput | null;
  date?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  cancelled?: ModelBooleanInput | null;
  serviceId?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  type?: ModelAppointmentTypeInput | null;
  notificationId?: ModelStringInput | null;
  canncelledBy?: ModelIDInput | null;
  note?: ModelStringInput | null;
  and?: Array<ModelAppointmentFilterInput | null> | null;
  or?: Array<ModelAppointmentFilterInput | null> | null;
  not?: ModelAppointmentFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  branchID?: ModelIDInput | null;
  ShopID?: ModelIDInput | null;
  operateInBranchId?: ModelIDInput | null;
  role?: ModelRoleInput | null;
  nome?: ModelStringInput | null;
  cognome?: ModelStringInput | null;
  fb?: ModelStringInput | null;
  birthDate?: ModelStringInput | null;
  email?: ModelStringInput | null;
  cell?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  device_id?: ModelStringInput | null;
  blocked?: ModelBooleanInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelBranchFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  shopId?: ModelIDInput | null;
  cell?: ModelStringInput | null;
  linkFb?: ModelStringInput | null;
  linkIn?: ModelStringInput | null;
  linkTw?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address_id?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  workCategory?: ModelStringInput | null;
  addressId?: ModelStringInput | null;
  regioneSociale?: ModelStringInput | null;
  pIva?: ModelStringInput | null;
  sedeLegale?: ModelStringInput | null;
  sedeLegale_id?: ModelStringInput | null;
  description?: ModelStringInput | null;
  sede23?: ModelStringInput | null;
  Nuovo?: ModelIntInput | null;
  site?: ModelStringInput | null;
  adminId?: ModelIDInput | null;
  and?: Array<ModelBranchFilterInput | null> | null;
  or?: Array<ModelBranchFilterInput | null> | null;
  not?: ModelBranchFilterInput | null;
};

export type ModelServiceFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  duration?: ModelStringInput | null;
  branchId?: ModelIDInput | null;
  deleted?: ModelBooleanInput | null;
  deletedAt?: ModelStringInput | null;
  and?: Array<ModelServiceFilterInput | null> | null;
  or?: Array<ModelServiceFilterInput | null> | null;
  not?: ModelServiceFilterInput | null;
};

export type ModelWorkTimeFilterInput = {
  id?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  offset?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  dayWeek?: ModelDayNumberOfWeekInput | null;
  default?: ModelBooleanInput | null;
  title?: ModelStringInput | null;
  branchId?: ModelIDInput | null;
  and?: Array<ModelWorkTimeFilterInput | null> | null;
  or?: Array<ModelWorkTimeFilterInput | null> | null;
  not?: ModelWorkTimeFilterInput | null;
};

export type ModelcontactsFilterInput = {
  id?: ModelIDInput | null;
  subject?: ModelStringInput | null;
  message?: ModelStringInput | null;
  userId?: ModelIDInput | null;
  and?: Array<ModelcontactsFilterInput | null> | null;
  or?: Array<ModelcontactsFilterInput | null> | null;
  not?: ModelcontactsFilterInput | null;
};

export type ModelFaqFilterInput = {
  id?: ModelIDInput | null;
  subject?: ModelStringInput | null;
  description?: ModelStringInput | null;
  order?: ModelIntInput | null;
  type?: ModelFaqTypeInput | null;
  and?: Array<ModelFaqFilterInput | null> | null;
  or?: Array<ModelFaqFilterInput | null> | null;
  not?: ModelFaqFilterInput | null;
};

export type ModelUserNotesFilterInput = {
  id?: ModelIDInput | null;
  desc?: ModelStringInput | null;
  userId?: ModelIDInput | null;
  and?: Array<ModelUserNotesFilterInput | null> | null;
  or?: Array<ModelUserNotesFilterInput | null> | null;
  not?: ModelUserNotesFilterInput | null;
};

export type ModelAppointmentNotesFilterInput = {
  id?: ModelIDInput | null;
  desc?: ModelStringInput | null;
  appointmentId?: ModelIDInput | null;
  and?: Array<ModelAppointmentNotesFilterInput | null> | null;
  or?: Array<ModelAppointmentNotesFilterInput | null> | null;
  not?: ModelAppointmentNotesFilterInput | null;
};

export type ModelCustomerProFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  nome?: ModelStringInput | null;
  cognome?: ModelStringInput | null;
  fb?: ModelStringInput | null;
  email?: ModelStringInput | null;
  cell?: ModelStringInput | null;
  blocked?: ModelBooleanInput | null;
  and?: Array<ModelCustomerProFilterInput | null> | null;
  or?: Array<ModelCustomerProFilterInput | null> | null;
  not?: ModelCustomerProFilterInput | null;
};

export type ModelOwnerProFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  nome?: ModelStringInput | null;
  cognome?: ModelStringInput | null;
  fb?: ModelStringInput | null;
  email?: ModelStringInput | null;
  cell?: ModelStringInput | null;
  blocked?: ModelBooleanInput | null;
  and?: Array<ModelOwnerProFilterInput | null> | null;
  or?: Array<ModelOwnerProFilterInput | null> | null;
  not?: ModelOwnerProFilterInput | null;
};

export type ModelAppProFilterInput = {
  id?: ModelIDInput | null;
  active?: ModelBooleanInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  link?: ModelStringInput | null;
  CreatedAt?: ModelStringInput | null;
  UpdateAt?: ModelStringInput | null;
  type?: ModelAppTypeInput | null;
  and?: Array<ModelAppProFilterInput | null> | null;
  or?: Array<ModelAppProFilterInput | null> | null;
  not?: ModelAppProFilterInput | null;
};

export type ModelAppointmentProFilterInput = {
  id?: ModelIDInput | null;
  customerId?: ModelIDInput | null;
  date?: ModelStringInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  confirmedData?: ModelStringInput | null;
  confirmed?: ModelBooleanInput | null;
  note?: ModelStringInput | null;
  and?: Array<ModelAppointmentProFilterInput | null> | null;
  or?: Array<ModelAppointmentProFilterInput | null> | null;
  not?: ModelAppointmentProFilterInput | null;
};

export type ModelServiceProFilterInput = {
  id?: ModelIDInput | null;
  branch_id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  Description?: ModelStringInput | null;
  Image?: ModelStringInput | null;
  Deleted?: ModelBooleanInput | null;
  Deleted_at?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  and?: Array<ModelServiceProFilterInput | null> | null;
  or?: Array<ModelServiceProFilterInput | null> | null;
  not?: ModelServiceProFilterInput | null;
};

export type ModelBranchProFilterInput = {
  id?: ModelIDInput | null;
  phone?: ModelStringInput | null;
  Active?: ModelBooleanInput | null;
  linkFB?: ModelStringInput | null;
  linkIG?: ModelStringInput | null;
  linkTW?: ModelStringInput | null;
  workCategory?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address_id?: ModelStringInput | null;
  and?: Array<ModelBranchProFilterInput | null> | null;
  or?: Array<ModelBranchProFilterInput | null> | null;
  not?: ModelBranchProFilterInput | null;
};

export type ModelShopProFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  pIva?: ModelStringInput | null;
  ragioneSociale?: ModelStringInput | null;
  sedeLegale?: ModelStringInput | null;
  sedeLegale_id?: ModelStringInput | null;
  website?: ModelStringInput | null;
  and?: Array<ModelShopProFilterInput | null> | null;
  or?: Array<ModelShopProFilterInput | null> | null;
  not?: ModelShopProFilterInput | null;
};

export type ModelStyleFilterInput = {
  id?: ModelIDInput | null;
  palette?: ModelStringInput | null;
  headers?: ModelStringInput | null;
  tab?: ModelStringInput | null;
  pages?: ModelStringInput | null;
  menu?: ModelStringInput | null;
  and?: Array<ModelStyleFilterInput | null> | null;
  or?: Array<ModelStyleFilterInput | null> | null;
  not?: ModelStyleFilterInput | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelAppointmentByDateStartTimeCompositeKeyConditionInput = {
  eq?: ModelAppointmentByDateStartTimeCompositeKeyInput | null;
  le?: ModelAppointmentByDateStartTimeCompositeKeyInput | null;
  lt?: ModelAppointmentByDateStartTimeCompositeKeyInput | null;
  ge?: ModelAppointmentByDateStartTimeCompositeKeyInput | null;
  gt?: ModelAppointmentByDateStartTimeCompositeKeyInput | null;
  between?: Array<ModelAppointmentByDateStartTimeCompositeKeyInput | null> | null;
  beginsWith?: ModelAppointmentByDateStartTimeCompositeKeyInput | null;
};

export type ModelAppointmentByDateStartTimeCompositeKeyInput = {
  date?: string | null;
  start?: string | null;
};

export type CreateAppMutation = {
  __typename: "App";
  id: string;
  appHID: string;
  appname: string;
  logoapp: string;
  splashscreen: string;
  created_at: number | null;
  updated_at: number | null;
  shop: {
    __typename: "Shop";
    id: string;
    appHID: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  users: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  appLink: string | null;
  defaultBranchId: string | null;
  colors: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppMutation = {
  __typename: "App";
  id: string;
  appHID: string;
  appname: string;
  logoapp: string;
  splashscreen: string;
  created_at: number | null;
  updated_at: number | null;
  shop: {
    __typename: "Shop";
    id: string;
    appHID: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  users: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  appLink: string | null;
  defaultBranchId: string | null;
  colors: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppMutation = {
  __typename: "App";
  id: string;
  appHID: string;
  appname: string;
  logoapp: string;
  splashscreen: string;
  created_at: number | null;
  updated_at: number | null;
  shop: {
    __typename: "Shop";
    id: string;
    appHID: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  users: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  appLink: string | null;
  defaultBranchId: string | null;
  colors: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateShopMutation = {
  __typename: "Shop";
  id: string;
  appHID: number | null;
  app: {
    __typename: "ModelAppConnection";
    nextToken: string | null;
  } | null;
  branches: {
    __typename: "ModelBranchConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateShopMutation = {
  __typename: "Shop";
  id: string;
  appHID: number | null;
  app: {
    __typename: "ModelAppConnection";
    nextToken: string | null;
  } | null;
  branches: {
    __typename: "ModelBranchConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteShopMutation = {
  __typename: "Shop";
  id: string;
  appHID: number | null;
  app: {
    __typename: "ModelAppConnection";
    nextToken: string | null;
  } | null;
  branches: {
    __typename: "ModelBranchConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  appId: string;
  bookedBy: string | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  branchId: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  end: string | null;
  start: string;
  date: string;
  price: number | null;
  cancelled: boolean | null;
  serviceId: string;
  service: {
    __typename: "Service";
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    duration: string;
    branchId: string;
    deleted: boolean | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string | null;
  type: AppointmentType | null;
  notificationId: string | null;
  canncelledBy: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  appId: string;
  bookedBy: string | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  branchId: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  end: string | null;
  start: string;
  date: string;
  price: number | null;
  cancelled: boolean | null;
  serviceId: string;
  service: {
    __typename: "Service";
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    duration: string;
    branchId: string;
    deleted: boolean | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string | null;
  type: AppointmentType | null;
  notificationId: string | null;
  canncelledBy: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  appId: string;
  bookedBy: string | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  branchId: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  end: string | null;
  start: string;
  date: string;
  price: number | null;
  cancelled: boolean | null;
  serviceId: string;
  service: {
    __typename: "Service";
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    duration: string;
    branchId: string;
    deleted: boolean | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string | null;
  type: AppointmentType | null;
  notificationId: string | null;
  canncelledBy: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string | null;
  branchID: string | null;
  ShopID: string | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  Branchs: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  operateInBranchId: string | null;
  role: Role;
  app: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  nome: string | null;
  cognome: string | null;
  fb: string | null;
  birthDate: string | null;
  email: string | null;
  cell: string | null;
  userName: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  device_id: string | null;
  blocked: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string | null;
  branchID: string | null;
  ShopID: string | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  Branchs: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  operateInBranchId: string | null;
  role: Role;
  app: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  nome: string | null;
  cognome: string | null;
  fb: string | null;
  birthDate: string | null;
  email: string | null;
  cell: string | null;
  userName: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  device_id: string | null;
  blocked: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string | null;
  branchID: string | null;
  ShopID: string | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  Branchs: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  operateInBranchId: string | null;
  role: Role;
  app: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  nome: string | null;
  cognome: string | null;
  fb: string | null;
  birthDate: string | null;
  email: string | null;
  cell: string | null;
  userName: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  device_id: string | null;
  blocked: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBranchMutation = {
  __typename: "Branch";
  id: string;
  name: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  shopId: string;
  cell: string | null;
  linkFb: string | null;
  linkIn: string | null;
  linkTw: string | null;
  address: string | null;
  address_id: string | null;
  phone: string | null;
  services: {
    __typename: "ModelServiceConnection";
    nextToken: string | null;
  } | null;
  operators: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  admin: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  workTime: {
    __typename: "ModelWorkTimeConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  active: boolean | null;
  workCategory: string | null;
  addressId: string | null;
  regioneSociale: string | null;
  pIva: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  description: string | null;
  sede23: string | null;
  Nuovo: number | null;
  site: string | null;
  adminId: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBranchMutation = {
  __typename: "Branch";
  id: string;
  name: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  shopId: string;
  cell: string | null;
  linkFb: string | null;
  linkIn: string | null;
  linkTw: string | null;
  address: string | null;
  address_id: string | null;
  phone: string | null;
  services: {
    __typename: "ModelServiceConnection";
    nextToken: string | null;
  } | null;
  operators: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  admin: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  workTime: {
    __typename: "ModelWorkTimeConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  active: boolean | null;
  workCategory: string | null;
  addressId: string | null;
  regioneSociale: string | null;
  pIva: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  description: string | null;
  sede23: string | null;
  Nuovo: number | null;
  site: string | null;
  adminId: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBranchMutation = {
  __typename: "Branch";
  id: string;
  name: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  shopId: string;
  cell: string | null;
  linkFb: string | null;
  linkIn: string | null;
  linkTw: string | null;
  address: string | null;
  address_id: string | null;
  phone: string | null;
  services: {
    __typename: "ModelServiceConnection";
    nextToken: string | null;
  } | null;
  operators: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  admin: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  workTime: {
    __typename: "ModelWorkTimeConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  active: boolean | null;
  workCategory: string | null;
  addressId: string | null;
  regioneSociale: string | null;
  pIva: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  description: string | null;
  sede23: string | null;
  Nuovo: number | null;
  site: string | null;
  adminId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  description: string | null;
  price: number | null;
  image: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  operator: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  duration: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  deleted: boolean | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  description: string | null;
  price: number | null;
  image: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  operator: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  duration: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  deleted: boolean | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  description: string | null;
  price: number | null;
  image: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  operator: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  duration: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  deleted: boolean | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppUsersMutation = {
  __typename: "AppUsers";
  id: string;
  appId: string;
  app: {
    __typename: "App";
    id: string;
    appHID: string;
    appname: string;
    logoapp: string;
    splashscreen: string;
    created_at: number | null;
    updated_at: number | null;
    appLink: string | null;
    defaultBranchId: string | null;
    colors: string | null;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppUsersMutation = {
  __typename: "AppUsers";
  id: string;
  appId: string;
  app: {
    __typename: "App";
    id: string;
    appHID: string;
    appname: string;
    logoapp: string;
    splashscreen: string;
    created_at: number | null;
    updated_at: number | null;
    appLink: string | null;
    defaultBranchId: string | null;
    colors: string | null;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppUsersMutation = {
  __typename: "AppUsers";
  id: string;
  appId: string;
  app: {
    __typename: "App";
    id: string;
    appHID: string;
    appname: string;
    logoapp: string;
    splashscreen: string;
    created_at: number | null;
    updated_at: number | null;
    appLink: string | null;
    defaultBranchId: string | null;
    colors: string | null;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateWorkTimeMutation = {
  __typename: "WorkTime";
  id: string;
  start: string;
  end: string;
  offset: string;
  active: boolean | null;
  dayWeek: DayNumberOfWeek | null;
  default: boolean | null;
  title: string | null;
  branchId: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWorkTimeMutation = {
  __typename: "WorkTime";
  id: string;
  start: string;
  end: string;
  offset: string;
  active: boolean | null;
  dayWeek: DayNumberOfWeek | null;
  default: boolean | null;
  title: string | null;
  branchId: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWorkTimeMutation = {
  __typename: "WorkTime";
  id: string;
  start: string;
  end: string;
  offset: string;
  active: boolean | null;
  dayWeek: DayNumberOfWeek | null;
  default: boolean | null;
  title: string | null;
  branchId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateContactsMutation = {
  __typename: "contacts";
  id: string;
  subject: string | null;
  message: string | null;
  userId: string;
  img: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateContactsMutation = {
  __typename: "contacts";
  id: string;
  subject: string | null;
  message: string | null;
  userId: string;
  img: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteContactsMutation = {
  __typename: "contacts";
  id: string;
  subject: string | null;
  message: string | null;
  userId: string;
  img: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateFaqMutation = {
  __typename: "Faq";
  id: string;
  subject: string | null;
  description: string | null;
  order: number | null;
  type: FaqType | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFaqMutation = {
  __typename: "Faq";
  id: string;
  subject: string | null;
  description: string | null;
  order: number | null;
  type: FaqType | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFaqMutation = {
  __typename: "Faq";
  id: string;
  subject: string | null;
  description: string | null;
  order: number | null;
  type: FaqType | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBranchUsersMutation = {
  __typename: "BranchUsers";
  id: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateBranchUsersMutation = {
  __typename: "BranchUsers";
  id: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteBranchUsersMutation = {
  __typename: "BranchUsers";
  id: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateUserNotesMutation = {
  __typename: "UserNotes";
  id: string;
  desc: string | null;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserNotesMutation = {
  __typename: "UserNotes";
  id: string;
  desc: string | null;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserNotesMutation = {
  __typename: "UserNotes";
  id: string;
  desc: string | null;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppointmentNotesMutation = {
  __typename: "AppointmentNotes";
  id: string;
  desc: string | null;
  appointmentId: string;
  appointment: {
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppointmentNotesMutation = {
  __typename: "AppointmentNotes";
  id: string;
  desc: string | null;
  appointmentId: string;
  appointment: {
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppointmentNotesMutation = {
  __typename: "AppointmentNotes";
  id: string;
  desc: string | null;
  appointmentId: string;
  appointment: {
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCustomerProMutation = {
  __typename: "CustomerPro";
  id: string;
  username: string;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  blocked: boolean | null;
  appointments: {
    __typename: "ModelAppointmentProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCustomerProMutation = {
  __typename: "CustomerPro";
  id: string;
  username: string;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  blocked: boolean | null;
  appointments: {
    __typename: "ModelAppointmentProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCustomerProMutation = {
  __typename: "CustomerPro";
  id: string;
  username: string;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  blocked: boolean | null;
  appointments: {
    __typename: "ModelAppointmentProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOwnerProMutation = {
  __typename: "OwnerPro";
  id: string;
  username: string | null;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  blocked: boolean | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOwnerProMutation = {
  __typename: "OwnerPro";
  id: string;
  username: string | null;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  blocked: boolean | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOwnerProMutation = {
  __typename: "OwnerPro";
  id: string;
  username: string | null;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  blocked: boolean | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppProMutation = {
  __typename: "AppPro";
  id: string;
  active: boolean | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  name: string | null;
  description: string;
  SplashScreen: Array<{
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null> | null;
  link: string | null;
  CreatedAt: string | null;
  UpdateAt: string | null;
  type: AppType | null;
  style: {
    __typename: "Style";
    id: string;
    palette: string | null;
    headers: string | null;
    tab: string | null;
    pages: Array<string | null> | null;
    menu: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppProMutation = {
  __typename: "AppPro";
  id: string;
  active: boolean | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  name: string | null;
  description: string;
  SplashScreen: Array<{
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null> | null;
  link: string | null;
  CreatedAt: string | null;
  UpdateAt: string | null;
  type: AppType | null;
  style: {
    __typename: "Style";
    id: string;
    palette: string | null;
    headers: string | null;
    tab: string | null;
    pages: Array<string | null> | null;
    menu: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppProMutation = {
  __typename: "AppPro";
  id: string;
  active: boolean | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  name: string | null;
  description: string;
  SplashScreen: Array<{
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null> | null;
  link: string | null;
  CreatedAt: string | null;
  UpdateAt: string | null;
  type: AppType | null;
  style: {
    __typename: "Style";
    id: string;
    palette: string | null;
    headers: string | null;
    tab: string | null;
    pages: Array<string | null> | null;
    menu: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppointmentProMutation = {
  __typename: "AppointmentPro";
  id: string;
  customerId: string;
  date: string;
  start: string;
  end: string;
  confirmedData: string | null;
  confirmed: boolean | null;
  note: string | null;
  services: {
    __typename: "ServicePro";
    id: string;
    branch_id: string;
    title: string;
    Description: string | null;
    Image: string | null;
    Deleted: boolean | null;
    Deleted_at: string | null;
    duration: number | null;
    price: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppointmentProMutation = {
  __typename: "AppointmentPro";
  id: string;
  customerId: string;
  date: string;
  start: string;
  end: string;
  confirmedData: string | null;
  confirmed: boolean | null;
  note: string | null;
  services: {
    __typename: "ServicePro";
    id: string;
    branch_id: string;
    title: string;
    Description: string | null;
    Image: string | null;
    Deleted: boolean | null;
    Deleted_at: string | null;
    duration: number | null;
    price: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppointmentProMutation = {
  __typename: "AppointmentPro";
  id: string;
  customerId: string;
  date: string;
  start: string;
  end: string;
  confirmedData: string | null;
  confirmed: boolean | null;
  note: string | null;
  services: {
    __typename: "ServicePro";
    id: string;
    branch_id: string;
    title: string;
    Description: string | null;
    Image: string | null;
    Deleted: boolean | null;
    Deleted_at: string | null;
    duration: number | null;
    price: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateServiceProMutation = {
  __typename: "ServicePro";
  id: string;
  branch_id: string;
  branch: {
    __typename: "BranchPro";
    id: string;
    phone: string;
    Active: boolean | null;
    linkFB: string | null;
    linkIG: string | null;
    linkTW: string | null;
    workCategory: string | null;
    address: string | null;
    address_id: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title: string;
  Description: string | null;
  Image: string | null;
  Deleted: boolean | null;
  Deleted_at: string | null;
  duration: number | null;
  price: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateServiceProMutation = {
  __typename: "ServicePro";
  id: string;
  branch_id: string;
  branch: {
    __typename: "BranchPro";
    id: string;
    phone: string;
    Active: boolean | null;
    linkFB: string | null;
    linkIG: string | null;
    linkTW: string | null;
    workCategory: string | null;
    address: string | null;
    address_id: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title: string;
  Description: string | null;
  Image: string | null;
  Deleted: boolean | null;
  Deleted_at: string | null;
  duration: number | null;
  price: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteServiceProMutation = {
  __typename: "ServicePro";
  id: string;
  branch_id: string;
  branch: {
    __typename: "BranchPro";
    id: string;
    phone: string;
    Active: boolean | null;
    linkFB: string | null;
    linkIG: string | null;
    linkTW: string | null;
    workCategory: string | null;
    address: string | null;
    address_id: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title: string;
  Description: string | null;
  Image: string | null;
  Deleted: boolean | null;
  Deleted_at: string | null;
  duration: number | null;
  price: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBranchProMutation = {
  __typename: "BranchPro";
  id: string;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  phone: string;
  Active: boolean | null;
  linkFB: string | null;
  linkIG: string | null;
  linkTW: string | null;
  workTime: {
    __typename: "WorkTime";
    id: string;
    start: string;
    end: string;
    offset: string;
    active: boolean | null;
    dayWeek: DayNumberOfWeek | null;
    default: boolean | null;
    title: string | null;
    branchId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  workCategory: string | null;
  address: string | null;
  address_id: string | null;
  services: {
    __typename: "ModelServiceProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBranchProMutation = {
  __typename: "BranchPro";
  id: string;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  phone: string;
  Active: boolean | null;
  linkFB: string | null;
  linkIG: string | null;
  linkTW: string | null;
  workTime: {
    __typename: "WorkTime";
    id: string;
    start: string;
    end: string;
    offset: string;
    active: boolean | null;
    dayWeek: DayNumberOfWeek | null;
    default: boolean | null;
    title: string | null;
    branchId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  workCategory: string | null;
  address: string | null;
  address_id: string | null;
  services: {
    __typename: "ModelServiceProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBranchProMutation = {
  __typename: "BranchPro";
  id: string;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  phone: string;
  Active: boolean | null;
  linkFB: string | null;
  linkIG: string | null;
  linkTW: string | null;
  workTime: {
    __typename: "WorkTime";
    id: string;
    start: string;
    end: string;
    offset: string;
    active: boolean | null;
    dayWeek: DayNumberOfWeek | null;
    default: boolean | null;
    title: string | null;
    branchId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  workCategory: string | null;
  address: string | null;
  address_id: string | null;
  services: {
    __typename: "ModelServiceProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateShopProMutation = {
  __typename: "ShopPro";
  id: string;
  name: string;
  description: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  pIva: string | null;
  ragioneSociale: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  website: string | null;
  branchs: {
    __typename: "ModelBranchProConnection";
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateShopProMutation = {
  __typename: "ShopPro";
  id: string;
  name: string;
  description: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  pIva: string | null;
  ragioneSociale: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  website: string | null;
  branchs: {
    __typename: "ModelBranchProConnection";
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteShopProMutation = {
  __typename: "ShopPro";
  id: string;
  name: string;
  description: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  pIva: string | null;
  ragioneSociale: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  website: string | null;
  branchs: {
    __typename: "ModelBranchProConnection";
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateStyleMutation = {
  __typename: "Style";
  id: string;
  appPro: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  palette: string | null;
  headers: string | null;
  tab: string | null;
  pages: Array<string | null> | null;
  menu: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStyleMutation = {
  __typename: "Style";
  id: string;
  appPro: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  palette: string | null;
  headers: string | null;
  tab: string | null;
  pages: Array<string | null> | null;
  menu: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStyleMutation = {
  __typename: "Style";
  id: string;
  appPro: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  palette: string | null;
  headers: string | null;
  tab: string | null;
  pages: Array<string | null> | null;
  menu: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetAppQuery = {
  __typename: "App";
  id: string;
  appHID: string;
  appname: string;
  logoapp: string;
  splashscreen: string;
  created_at: number | null;
  updated_at: number | null;
  shop: {
    __typename: "Shop";
    id: string;
    appHID: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  users: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  appLink: string | null;
  defaultBranchId: string | null;
  colors: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAppsQuery = {
  __typename: "ModelAppConnection";
  items: Array<{
    __typename: "App";
    id: string;
    appHID: string;
    appname: string;
    logoapp: string;
    splashscreen: string;
    created_at: number | null;
    updated_at: number | null;
    appLink: string | null;
    defaultBranchId: string | null;
    colors: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetShopQuery = {
  __typename: "Shop";
  id: string;
  appHID: number | null;
  app: {
    __typename: "ModelAppConnection";
    nextToken: string | null;
  } | null;
  branches: {
    __typename: "ModelBranchConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListShopsQuery = {
  __typename: "ModelShopConnection";
  items: Array<{
    __typename: "Shop";
    id: string;
    appHID: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAppointmentQuery = {
  __typename: "Appointment";
  id: string;
  appId: string;
  bookedBy: string | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  branchId: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  end: string | null;
  start: string;
  date: string;
  price: number | null;
  cancelled: boolean | null;
  serviceId: string;
  service: {
    __typename: "Service";
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    duration: string;
    branchId: string;
    deleted: boolean | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string | null;
  type: AppointmentType | null;
  notificationId: string | null;
  canncelledBy: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAppointmentsQuery = {
  __typename: "ModelAppointmentConnection";
  items: Array<{
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string | null;
  branchID: string | null;
  ShopID: string | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  Branchs: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  operateInBranchId: string | null;
  role: Role;
  app: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  nome: string | null;
  cognome: string | null;
  fb: string | null;
  birthDate: string | null;
  email: string | null;
  cell: string | null;
  userName: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  device_id: string | null;
  blocked: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetBranchQuery = {
  __typename: "Branch";
  id: string;
  name: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  shopId: string;
  cell: string | null;
  linkFb: string | null;
  linkIn: string | null;
  linkTw: string | null;
  address: string | null;
  address_id: string | null;
  phone: string | null;
  services: {
    __typename: "ModelServiceConnection";
    nextToken: string | null;
  } | null;
  operators: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  admin: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  workTime: {
    __typename: "ModelWorkTimeConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  active: boolean | null;
  workCategory: string | null;
  addressId: string | null;
  regioneSociale: string | null;
  pIva: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  description: string | null;
  sede23: string | null;
  Nuovo: number | null;
  site: string | null;
  adminId: string;
  createdAt: string;
  updatedAt: string;
};

export type ListBranchsQuery = {
  __typename: "ModelBranchConnection";
  items: Array<{
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetServiceQuery = {
  __typename: "Service";
  id: string;
  title: string;
  description: string | null;
  price: number | null;
  image: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  operator: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  duration: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  deleted: boolean | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListServicesQuery = {
  __typename: "ModelServiceConnection";
  items: Array<{
    __typename: "Service";
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    duration: string;
    branchId: string;
    deleted: boolean | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetWorkTimeQuery = {
  __typename: "WorkTime";
  id: string;
  start: string;
  end: string;
  offset: string;
  active: boolean | null;
  dayWeek: DayNumberOfWeek | null;
  default: boolean | null;
  title: string | null;
  branchId: string;
  createdAt: string;
  updatedAt: string;
};

export type ListWorkTimesQuery = {
  __typename: "ModelWorkTimeConnection";
  items: Array<{
    __typename: "WorkTime";
    id: string;
    start: string;
    end: string;
    offset: string;
    active: boolean | null;
    dayWeek: DayNumberOfWeek | null;
    default: boolean | null;
    title: string | null;
    branchId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetContactsQuery = {
  __typename: "contacts";
  id: string;
  subject: string | null;
  message: string | null;
  userId: string;
  img: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListContactssQuery = {
  __typename: "ModelcontactsConnection";
  items: Array<{
    __typename: "contacts";
    id: string;
    subject: string | null;
    message: string | null;
    userId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetFaqQuery = {
  __typename: "Faq";
  id: string;
  subject: string | null;
  description: string | null;
  order: number | null;
  type: FaqType | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFaqsQuery = {
  __typename: "ModelFaqConnection";
  items: Array<{
    __typename: "Faq";
    id: string;
    subject: string | null;
    description: string | null;
    order: number | null;
    type: FaqType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserNotesQuery = {
  __typename: "UserNotes";
  id: string;
  desc: string | null;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUserNotessQuery = {
  __typename: "ModelUserNotesConnection";
  items: Array<{
    __typename: "UserNotes";
    id: string;
    desc: string | null;
    userId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAppointmentNotesQuery = {
  __typename: "AppointmentNotes";
  id: string;
  desc: string | null;
  appointmentId: string;
  appointment: {
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAppointmentNotessQuery = {
  __typename: "ModelAppointmentNotesConnection";
  items: Array<{
    __typename: "AppointmentNotes";
    id: string;
    desc: string | null;
    appointmentId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCustomerProQuery = {
  __typename: "CustomerPro";
  id: string;
  username: string;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  blocked: boolean | null;
  appointments: {
    __typename: "ModelAppointmentProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCustomerProsQuery = {
  __typename: "ModelCustomerProConnection";
  items: Array<{
    __typename: "CustomerPro";
    id: string;
    username: string;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOwnerProQuery = {
  __typename: "OwnerPro";
  id: string;
  username: string | null;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  blocked: boolean | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListOwnerProsQuery = {
  __typename: "ModelOwnerProConnection";
  items: Array<{
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAppProQuery = {
  __typename: "AppPro";
  id: string;
  active: boolean | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  name: string | null;
  description: string;
  SplashScreen: Array<{
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null> | null;
  link: string | null;
  CreatedAt: string | null;
  UpdateAt: string | null;
  type: AppType | null;
  style: {
    __typename: "Style";
    id: string;
    palette: string | null;
    headers: string | null;
    tab: string | null;
    pages: Array<string | null> | null;
    menu: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAppProsQuery = {
  __typename: "ModelAppProConnection";
  items: Array<{
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAppointmentProQuery = {
  __typename: "AppointmentPro";
  id: string;
  customerId: string;
  date: string;
  start: string;
  end: string;
  confirmedData: string | null;
  confirmed: boolean | null;
  note: string | null;
  services: {
    __typename: "ServicePro";
    id: string;
    branch_id: string;
    title: string;
    Description: string | null;
    Image: string | null;
    Deleted: boolean | null;
    Deleted_at: string | null;
    duration: number | null;
    price: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAppointmentProsQuery = {
  __typename: "ModelAppointmentProConnection";
  items: Array<{
    __typename: "AppointmentPro";
    id: string;
    customerId: string;
    date: string;
    start: string;
    end: string;
    confirmedData: string | null;
    confirmed: boolean | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetServiceProQuery = {
  __typename: "ServicePro";
  id: string;
  branch_id: string;
  branch: {
    __typename: "BranchPro";
    id: string;
    phone: string;
    Active: boolean | null;
    linkFB: string | null;
    linkIG: string | null;
    linkTW: string | null;
    workCategory: string | null;
    address: string | null;
    address_id: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title: string;
  Description: string | null;
  Image: string | null;
  Deleted: boolean | null;
  Deleted_at: string | null;
  duration: number | null;
  price: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListServiceProsQuery = {
  __typename: "ModelServiceProConnection";
  items: Array<{
    __typename: "ServicePro";
    id: string;
    branch_id: string;
    title: string;
    Description: string | null;
    Image: string | null;
    Deleted: boolean | null;
    Deleted_at: string | null;
    duration: number | null;
    price: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetBranchProQuery = {
  __typename: "BranchPro";
  id: string;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  phone: string;
  Active: boolean | null;
  linkFB: string | null;
  linkIG: string | null;
  linkTW: string | null;
  workTime: {
    __typename: "WorkTime";
    id: string;
    start: string;
    end: string;
    offset: string;
    active: boolean | null;
    dayWeek: DayNumberOfWeek | null;
    default: boolean | null;
    title: string | null;
    branchId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  workCategory: string | null;
  address: string | null;
  address_id: string | null;
  services: {
    __typename: "ModelServiceProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBranchProsQuery = {
  __typename: "ModelBranchProConnection";
  items: Array<{
    __typename: "BranchPro";
    id: string;
    phone: string;
    Active: boolean | null;
    linkFB: string | null;
    linkIG: string | null;
    linkTW: string | null;
    workCategory: string | null;
    address: string | null;
    address_id: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetShopProQuery = {
  __typename: "ShopPro";
  id: string;
  name: string;
  description: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  pIva: string | null;
  ragioneSociale: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  website: string | null;
  branchs: {
    __typename: "ModelBranchProConnection";
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListShopProsQuery = {
  __typename: "ModelShopProConnection";
  items: Array<{
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetStyleQuery = {
  __typename: "Style";
  id: string;
  appPro: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  palette: string | null;
  headers: string | null;
  tab: string | null;
  pages: Array<string | null> | null;
  menu: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListStylesQuery = {
  __typename: "ModelStyleConnection";
  items: Array<{
    __typename: "Style";
    id: string;
    palette: string | null;
    headers: string | null;
    tab: string | null;
    pages: Array<string | null> | null;
    menu: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetAppByHumanIdQuery = {
  __typename: "ModelAppConnection";
  items: Array<{
    __typename: "App";
    id: string;
    appHID: string;
    appname: string;
    logoapp: string;
    splashscreen: string;
    created_at: number | null;
    updated_at: number | null;
    appLink: string | null;
    defaultBranchId: string | null;
    colors: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type AppointmentByDateStartQuery = {
  __typename: "ModelAppointmentConnection";
  items: Array<{
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type AppointmentByBranchDateQuery = {
  __typename: "ModelAppointmentConnection";
  items: Array<{
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type AppointmentByStartQuery = {
  __typename: "ModelAppointmentConnection";
  items: Array<{
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateAppSubscription = {
  __typename: "App";
  id: string;
  appHID: string;
  appname: string;
  logoapp: string;
  splashscreen: string;
  created_at: number | null;
  updated_at: number | null;
  shop: {
    __typename: "Shop";
    id: string;
    appHID: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  users: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  appLink: string | null;
  defaultBranchId: string | null;
  colors: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppSubscription = {
  __typename: "App";
  id: string;
  appHID: string;
  appname: string;
  logoapp: string;
  splashscreen: string;
  created_at: number | null;
  updated_at: number | null;
  shop: {
    __typename: "Shop";
    id: string;
    appHID: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  users: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  appLink: string | null;
  defaultBranchId: string | null;
  colors: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppSubscription = {
  __typename: "App";
  id: string;
  appHID: string;
  appname: string;
  logoapp: string;
  splashscreen: string;
  created_at: number | null;
  updated_at: number | null;
  shop: {
    __typename: "Shop";
    id: string;
    appHID: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  users: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  appLink: string | null;
  defaultBranchId: string | null;
  colors: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateShopSubscription = {
  __typename: "Shop";
  id: string;
  appHID: number | null;
  app: {
    __typename: "ModelAppConnection";
    nextToken: string | null;
  } | null;
  branches: {
    __typename: "ModelBranchConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateShopSubscription = {
  __typename: "Shop";
  id: string;
  appHID: number | null;
  app: {
    __typename: "ModelAppConnection";
    nextToken: string | null;
  } | null;
  branches: {
    __typename: "ModelBranchConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteShopSubscription = {
  __typename: "Shop";
  id: string;
  appHID: number | null;
  app: {
    __typename: "ModelAppConnection";
    nextToken: string | null;
  } | null;
  branches: {
    __typename: "ModelBranchConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  appId: string;
  bookedBy: string | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  branchId: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  end: string | null;
  start: string;
  date: string;
  price: number | null;
  cancelled: boolean | null;
  serviceId: string;
  service: {
    __typename: "Service";
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    duration: string;
    branchId: string;
    deleted: boolean | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string | null;
  type: AppointmentType | null;
  notificationId: string | null;
  canncelledBy: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  appId: string;
  bookedBy: string | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  branchId: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  end: string | null;
  start: string;
  date: string;
  price: number | null;
  cancelled: boolean | null;
  serviceId: string;
  service: {
    __typename: "Service";
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    duration: string;
    branchId: string;
    deleted: boolean | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string | null;
  type: AppointmentType | null;
  notificationId: string | null;
  canncelledBy: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  appId: string;
  bookedBy: string | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  branchId: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  end: string | null;
  start: string;
  date: string;
  price: number | null;
  cancelled: boolean | null;
  serviceId: string;
  service: {
    __typename: "Service";
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    duration: string;
    branchId: string;
    deleted: boolean | null;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  userName: string | null;
  type: AppointmentType | null;
  notificationId: string | null;
  canncelledBy: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string | null;
  branchID: string | null;
  ShopID: string | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  Branchs: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  operateInBranchId: string | null;
  role: Role;
  app: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  nome: string | null;
  cognome: string | null;
  fb: string | null;
  birthDate: string | null;
  email: string | null;
  cell: string | null;
  userName: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  device_id: string | null;
  blocked: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string | null;
  branchID: string | null;
  ShopID: string | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  Branchs: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  operateInBranchId: string | null;
  role: Role;
  app: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  nome: string | null;
  cognome: string | null;
  fb: string | null;
  birthDate: string | null;
  email: string | null;
  cell: string | null;
  userName: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  device_id: string | null;
  blocked: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string | null;
  branchID: string | null;
  ShopID: string | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  Branchs: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  operateInBranchId: string | null;
  role: Role;
  app: {
    __typename: "ModelAppUsersConnection";
    nextToken: string | null;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  nome: string | null;
  cognome: string | null;
  fb: string | null;
  birthDate: string | null;
  email: string | null;
  cell: string | null;
  userName: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  device_id: string | null;
  blocked: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBranchSubscription = {
  __typename: "Branch";
  id: string;
  name: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  shopId: string;
  cell: string | null;
  linkFb: string | null;
  linkIn: string | null;
  linkTw: string | null;
  address: string | null;
  address_id: string | null;
  phone: string | null;
  services: {
    __typename: "ModelServiceConnection";
    nextToken: string | null;
  } | null;
  operators: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  admin: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  workTime: {
    __typename: "ModelWorkTimeConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  active: boolean | null;
  workCategory: string | null;
  addressId: string | null;
  regioneSociale: string | null;
  pIva: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  description: string | null;
  sede23: string | null;
  Nuovo: number | null;
  site: string | null;
  adminId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBranchSubscription = {
  __typename: "Branch";
  id: string;
  name: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  shopId: string;
  cell: string | null;
  linkFb: string | null;
  linkIn: string | null;
  linkTw: string | null;
  address: string | null;
  address_id: string | null;
  phone: string | null;
  services: {
    __typename: "ModelServiceConnection";
    nextToken: string | null;
  } | null;
  operators: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  admin: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  workTime: {
    __typename: "ModelWorkTimeConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  active: boolean | null;
  workCategory: string | null;
  addressId: string | null;
  regioneSociale: string | null;
  pIva: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  description: string | null;
  sede23: string | null;
  Nuovo: number | null;
  site: string | null;
  adminId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBranchSubscription = {
  __typename: "Branch";
  id: string;
  name: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  shopId: string;
  cell: string | null;
  linkFb: string | null;
  linkIn: string | null;
  linkTw: string | null;
  address: string | null;
  address_id: string | null;
  phone: string | null;
  services: {
    __typename: "ModelServiceConnection";
    nextToken: string | null;
  } | null;
  operators: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  users: {
    __typename: "ModelBranchUsersConnection";
    nextToken: string | null;
  } | null;
  admin: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  workTime: {
    __typename: "ModelWorkTimeConnection";
    nextToken: string | null;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  active: boolean | null;
  workCategory: string | null;
  addressId: string | null;
  regioneSociale: string | null;
  pIva: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  description: string | null;
  sede23: string | null;
  Nuovo: number | null;
  site: string | null;
  adminId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  description: string | null;
  price: number | null;
  image: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  operator: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  duration: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  deleted: boolean | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  description: string | null;
  price: number | null;
  image: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  operator: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  duration: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  deleted: boolean | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  description: string | null;
  price: number | null;
  image: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  operator: {
    __typename: "ModelUserConnection";
    nextToken: string | null;
  } | null;
  duration: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  appointments: {
    __typename: "ModelAppointmentConnection";
    nextToken: string | null;
  } | null;
  deleted: boolean | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppUsersSubscription = {
  __typename: "AppUsers";
  id: string;
  appId: string;
  app: {
    __typename: "App";
    id: string;
    appHID: string;
    appname: string;
    logoapp: string;
    splashscreen: string;
    created_at: number | null;
    updated_at: number | null;
    appLink: string | null;
    defaultBranchId: string | null;
    colors: string | null;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppUsersSubscription = {
  __typename: "AppUsers";
  id: string;
  appId: string;
  app: {
    __typename: "App";
    id: string;
    appHID: string;
    appname: string;
    logoapp: string;
    splashscreen: string;
    created_at: number | null;
    updated_at: number | null;
    appLink: string | null;
    defaultBranchId: string | null;
    colors: string | null;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppUsersSubscription = {
  __typename: "AppUsers";
  id: string;
  appId: string;
  app: {
    __typename: "App";
    id: string;
    appHID: string;
    appname: string;
    logoapp: string;
    splashscreen: string;
    created_at: number | null;
    updated_at: number | null;
    appLink: string | null;
    defaultBranchId: string | null;
    colors: string | null;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateWorkTimeSubscription = {
  __typename: "WorkTime";
  id: string;
  start: string;
  end: string;
  offset: string;
  active: boolean | null;
  dayWeek: DayNumberOfWeek | null;
  default: boolean | null;
  title: string | null;
  branchId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWorkTimeSubscription = {
  __typename: "WorkTime";
  id: string;
  start: string;
  end: string;
  offset: string;
  active: boolean | null;
  dayWeek: DayNumberOfWeek | null;
  default: boolean | null;
  title: string | null;
  branchId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWorkTimeSubscription = {
  __typename: "WorkTime";
  id: string;
  start: string;
  end: string;
  offset: string;
  active: boolean | null;
  dayWeek: DayNumberOfWeek | null;
  default: boolean | null;
  title: string | null;
  branchId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateContactsSubscription = {
  __typename: "contacts";
  id: string;
  subject: string | null;
  message: string | null;
  userId: string;
  img: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateContactsSubscription = {
  __typename: "contacts";
  id: string;
  subject: string | null;
  message: string | null;
  userId: string;
  img: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteContactsSubscription = {
  __typename: "contacts";
  id: string;
  subject: string | null;
  message: string | null;
  userId: string;
  img: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFaqSubscription = {
  __typename: "Faq";
  id: string;
  subject: string | null;
  description: string | null;
  order: number | null;
  type: FaqType | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFaqSubscription = {
  __typename: "Faq";
  id: string;
  subject: string | null;
  description: string | null;
  order: number | null;
  type: FaqType | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFaqSubscription = {
  __typename: "Faq";
  id: string;
  subject: string | null;
  description: string | null;
  order: number | null;
  type: FaqType | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBranchUsersSubscription = {
  __typename: "BranchUsers";
  id: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBranchUsersSubscription = {
  __typename: "BranchUsers";
  id: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBranchUsersSubscription = {
  __typename: "BranchUsers";
  id: string;
  branchId: string;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserNotesSubscription = {
  __typename: "UserNotes";
  id: string;
  desc: string | null;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserNotesSubscription = {
  __typename: "UserNotes";
  id: string;
  desc: string | null;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserNotesSubscription = {
  __typename: "UserNotes";
  id: string;
  desc: string | null;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    username: string | null;
    branchID: string | null;
    ShopID: string | null;
    operateInBranchId: string | null;
    role: Role;
    nome: string | null;
    cognome: string | null;
    fb: string | null;
    birthDate: string | null;
    email: string | null;
    cell: string | null;
    userName: string | null;
    device_id: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppointmentNotesSubscription = {
  __typename: "AppointmentNotes";
  id: string;
  desc: string | null;
  appointmentId: string;
  appointment: {
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppointmentNotesSubscription = {
  __typename: "AppointmentNotes";
  id: string;
  desc: string | null;
  appointmentId: string;
  appointment: {
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppointmentNotesSubscription = {
  __typename: "AppointmentNotes";
  id: string;
  desc: string | null;
  appointmentId: string;
  appointment: {
    __typename: "Appointment";
    id: string;
    appId: string;
    bookedBy: string | null;
    branchId: string;
    userId: string;
    end: string | null;
    start: string;
    date: string;
    price: number | null;
    cancelled: boolean | null;
    serviceId: string;
    userName: string | null;
    type: AppointmentType | null;
    notificationId: string | null;
    canncelledBy: string | null;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCustomerProSubscription = {
  __typename: "CustomerPro";
  id: string;
  username: string;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  blocked: boolean | null;
  appointments: {
    __typename: "ModelAppointmentProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCustomerProSubscription = {
  __typename: "CustomerPro";
  id: string;
  username: string;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  blocked: boolean | null;
  appointments: {
    __typename: "ModelAppointmentProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCustomerProSubscription = {
  __typename: "CustomerPro";
  id: string;
  username: string;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  blocked: boolean | null;
  appointments: {
    __typename: "ModelAppointmentProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOwnerProSubscription = {
  __typename: "OwnerPro";
  id: string;
  username: string | null;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  blocked: boolean | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOwnerProSubscription = {
  __typename: "OwnerPro";
  id: string;
  username: string | null;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  blocked: boolean | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOwnerProSubscription = {
  __typename: "OwnerPro";
  id: string;
  username: string | null;
  nome: string;
  cognome: string;
  fb: string | null;
  email: string;
  cell: string | null;
  blocked: boolean | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppProSubscription = {
  __typename: "AppPro";
  id: string;
  active: boolean | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  name: string | null;
  description: string;
  SplashScreen: Array<{
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null> | null;
  link: string | null;
  CreatedAt: string | null;
  UpdateAt: string | null;
  type: AppType | null;
  style: {
    __typename: "Style";
    id: string;
    palette: string | null;
    headers: string | null;
    tab: string | null;
    pages: Array<string | null> | null;
    menu: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppProSubscription = {
  __typename: "AppPro";
  id: string;
  active: boolean | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  name: string | null;
  description: string;
  SplashScreen: Array<{
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null> | null;
  link: string | null;
  CreatedAt: string | null;
  UpdateAt: string | null;
  type: AppType | null;
  style: {
    __typename: "Style";
    id: string;
    palette: string | null;
    headers: string | null;
    tab: string | null;
    pages: Array<string | null> | null;
    menu: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppProSubscription = {
  __typename: "AppPro";
  id: string;
  active: boolean | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  name: string | null;
  description: string;
  SplashScreen: Array<{
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null> | null;
  link: string | null;
  CreatedAt: string | null;
  UpdateAt: string | null;
  type: AppType | null;
  style: {
    __typename: "Style";
    id: string;
    palette: string | null;
    headers: string | null;
    tab: string | null;
    pages: Array<string | null> | null;
    menu: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppointmentProSubscription = {
  __typename: "AppointmentPro";
  id: string;
  customerId: string;
  date: string;
  start: string;
  end: string;
  confirmedData: string | null;
  confirmed: boolean | null;
  note: string | null;
  services: {
    __typename: "ServicePro";
    id: string;
    branch_id: string;
    title: string;
    Description: string | null;
    Image: string | null;
    Deleted: boolean | null;
    Deleted_at: string | null;
    duration: number | null;
    price: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppointmentProSubscription = {
  __typename: "AppointmentPro";
  id: string;
  customerId: string;
  date: string;
  start: string;
  end: string;
  confirmedData: string | null;
  confirmed: boolean | null;
  note: string | null;
  services: {
    __typename: "ServicePro";
    id: string;
    branch_id: string;
    title: string;
    Description: string | null;
    Image: string | null;
    Deleted: boolean | null;
    Deleted_at: string | null;
    duration: number | null;
    price: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppointmentProSubscription = {
  __typename: "AppointmentPro";
  id: string;
  customerId: string;
  date: string;
  start: string;
  end: string;
  confirmedData: string | null;
  confirmed: boolean | null;
  note: string | null;
  services: {
    __typename: "ServicePro";
    id: string;
    branch_id: string;
    title: string;
    Description: string | null;
    Image: string | null;
    Deleted: boolean | null;
    Deleted_at: string | null;
    duration: number | null;
    price: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  branch: {
    __typename: "Branch";
    id: string;
    name: string | null;
    shopId: string;
    cell: string | null;
    linkFb: string | null;
    linkIn: string | null;
    linkTw: string | null;
    address: string | null;
    address_id: string | null;
    phone: string | null;
    active: boolean | null;
    workCategory: string | null;
    addressId: string | null;
    regioneSociale: string | null;
    pIva: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    description: string | null;
    sede23: string | null;
    Nuovo: number | null;
    site: string | null;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateServiceProSubscription = {
  __typename: "ServicePro";
  id: string;
  branch_id: string;
  branch: {
    __typename: "BranchPro";
    id: string;
    phone: string;
    Active: boolean | null;
    linkFB: string | null;
    linkIG: string | null;
    linkTW: string | null;
    workCategory: string | null;
    address: string | null;
    address_id: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title: string;
  Description: string | null;
  Image: string | null;
  Deleted: boolean | null;
  Deleted_at: string | null;
  duration: number | null;
  price: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateServiceProSubscription = {
  __typename: "ServicePro";
  id: string;
  branch_id: string;
  branch: {
    __typename: "BranchPro";
    id: string;
    phone: string;
    Active: boolean | null;
    linkFB: string | null;
    linkIG: string | null;
    linkTW: string | null;
    workCategory: string | null;
    address: string | null;
    address_id: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title: string;
  Description: string | null;
  Image: string | null;
  Deleted: boolean | null;
  Deleted_at: string | null;
  duration: number | null;
  price: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteServiceProSubscription = {
  __typename: "ServicePro";
  id: string;
  branch_id: string;
  branch: {
    __typename: "BranchPro";
    id: string;
    phone: string;
    Active: boolean | null;
    linkFB: string | null;
    linkIG: string | null;
    linkTW: string | null;
    workCategory: string | null;
    address: string | null;
    address_id: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  title: string;
  Description: string | null;
  Image: string | null;
  Deleted: boolean | null;
  Deleted_at: string | null;
  duration: number | null;
  price: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBranchProSubscription = {
  __typename: "BranchPro";
  id: string;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  phone: string;
  Active: boolean | null;
  linkFB: string | null;
  linkIG: string | null;
  linkTW: string | null;
  workTime: {
    __typename: "WorkTime";
    id: string;
    start: string;
    end: string;
    offset: string;
    active: boolean | null;
    dayWeek: DayNumberOfWeek | null;
    default: boolean | null;
    title: string | null;
    branchId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  workCategory: string | null;
  address: string | null;
  address_id: string | null;
  services: {
    __typename: "ModelServiceProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBranchProSubscription = {
  __typename: "BranchPro";
  id: string;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  phone: string;
  Active: boolean | null;
  linkFB: string | null;
  linkIG: string | null;
  linkTW: string | null;
  workTime: {
    __typename: "WorkTime";
    id: string;
    start: string;
    end: string;
    offset: string;
    active: boolean | null;
    dayWeek: DayNumberOfWeek | null;
    default: boolean | null;
    title: string | null;
    branchId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  workCategory: string | null;
  address: string | null;
  address_id: string | null;
  services: {
    __typename: "ModelServiceProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBranchProSubscription = {
  __typename: "BranchPro";
  id: string;
  shop: {
    __typename: "ShopPro";
    id: string;
    name: string;
    description: string | null;
    pIva: string | null;
    ragioneSociale: string | null;
    sedeLegale: string | null;
    sedeLegale_id: string | null;
    website: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  phone: string;
  Active: boolean | null;
  linkFB: string | null;
  linkIG: string | null;
  linkTW: string | null;
  workTime: {
    __typename: "WorkTime";
    id: string;
    start: string;
    end: string;
    offset: string;
    active: boolean | null;
    dayWeek: DayNumberOfWeek | null;
    default: boolean | null;
    title: string | null;
    branchId: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  workCategory: string | null;
  address: string | null;
  address_id: string | null;
  services: {
    __typename: "ModelServiceProConnection";
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateShopProSubscription = {
  __typename: "ShopPro";
  id: string;
  name: string;
  description: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  pIva: string | null;
  ragioneSociale: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  website: string | null;
  branchs: {
    __typename: "ModelBranchProConnection";
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateShopProSubscription = {
  __typename: "ShopPro";
  id: string;
  name: string;
  description: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  pIva: string | null;
  ragioneSociale: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  website: string | null;
  branchs: {
    __typename: "ModelBranchProConnection";
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteShopProSubscription = {
  __typename: "ShopPro";
  id: string;
  name: string;
  description: string | null;
  logo: {
    __typename: "S3Object";
    bucket: string | null;
    region: string | null;
    key: string | null;
  } | null;
  pIva: string | null;
  ragioneSociale: string | null;
  sedeLegale: string | null;
  sedeLegale_id: string | null;
  website: string | null;
  branchs: {
    __typename: "ModelBranchProConnection";
    nextToken: string | null;
  } | null;
  owner: {
    __typename: "OwnerPro";
    id: string;
    username: string | null;
    nome: string;
    cognome: string;
    fb: string | null;
    email: string;
    cell: string | null;
    blocked: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  app: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateStyleSubscription = {
  __typename: "Style";
  id: string;
  appPro: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  palette: string | null;
  headers: string | null;
  tab: string | null;
  pages: Array<string | null> | null;
  menu: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStyleSubscription = {
  __typename: "Style";
  id: string;
  appPro: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  palette: string | null;
  headers: string | null;
  tab: string | null;
  pages: Array<string | null> | null;
  menu: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStyleSubscription = {
  __typename: "Style";
  id: string;
  appPro: {
    __typename: "AppPro";
    id: string;
    active: boolean | null;
    name: string | null;
    description: string;
    link: string | null;
    CreatedAt: string | null;
    UpdateAt: string | null;
    type: AppType | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  palette: string | null;
  headers: string | null;
  tab: string | null;
  pages: Array<string | null> | null;
  menu: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateApp(
    input: CreateAppInput,
    condition?: ModelAppConditionInput
  ): Promise<CreateAppMutation> {
    const statement = `mutation CreateApp($input: CreateAppInput!, $condition: ModelAppConditionInput) {
        createApp(input: $input, condition: $condition) {
          __typename
          id
          appHID
          appname
          logoapp
          splashscreen
          created_at
          updated_at
          shop {
            __typename
            id
            appHID
            createdAt
            updatedAt
          }
          users {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          appLink
          defaultBranchId
          colors
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppMutation>response.data.createApp;
  }
  async UpdateApp(
    input: UpdateAppInput,
    condition?: ModelAppConditionInput
  ): Promise<UpdateAppMutation> {
    const statement = `mutation UpdateApp($input: UpdateAppInput!, $condition: ModelAppConditionInput) {
        updateApp(input: $input, condition: $condition) {
          __typename
          id
          appHID
          appname
          logoapp
          splashscreen
          created_at
          updated_at
          shop {
            __typename
            id
            appHID
            createdAt
            updatedAt
          }
          users {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          appLink
          defaultBranchId
          colors
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppMutation>response.data.updateApp;
  }
  async DeleteApp(
    input: DeleteAppInput,
    condition?: ModelAppConditionInput
  ): Promise<DeleteAppMutation> {
    const statement = `mutation DeleteApp($input: DeleteAppInput!, $condition: ModelAppConditionInput) {
        deleteApp(input: $input, condition: $condition) {
          __typename
          id
          appHID
          appname
          logoapp
          splashscreen
          created_at
          updated_at
          shop {
            __typename
            id
            appHID
            createdAt
            updatedAt
          }
          users {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          appLink
          defaultBranchId
          colors
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppMutation>response.data.deleteApp;
  }
  async CreateShop(
    input: CreateShopInput,
    condition?: ModelShopConditionInput
  ): Promise<CreateShopMutation> {
    const statement = `mutation CreateShop($input: CreateShopInput!, $condition: ModelShopConditionInput) {
        createShop(input: $input, condition: $condition) {
          __typename
          id
          appHID
          app {
            __typename
            nextToken
          }
          branches {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateShopMutation>response.data.createShop;
  }
  async UpdateShop(
    input: UpdateShopInput,
    condition?: ModelShopConditionInput
  ): Promise<UpdateShopMutation> {
    const statement = `mutation UpdateShop($input: UpdateShopInput!, $condition: ModelShopConditionInput) {
        updateShop(input: $input, condition: $condition) {
          __typename
          id
          appHID
          app {
            __typename
            nextToken
          }
          branches {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateShopMutation>response.data.updateShop;
  }
  async DeleteShop(
    input: DeleteShopInput,
    condition?: ModelShopConditionInput
  ): Promise<DeleteShopMutation> {
    const statement = `mutation DeleteShop($input: DeleteShopInput!, $condition: ModelShopConditionInput) {
        deleteShop(input: $input, condition: $condition) {
          __typename
          id
          appHID
          app {
            __typename
            nextToken
          }
          branches {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteShopMutation>response.data.deleteShop;
  }
  async CreateAppointment(
    input: CreateAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<CreateAppointmentMutation> {
    const statement = `mutation CreateAppointment($input: CreateAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        createAppointment(input: $input, condition: $condition) {
          __typename
          id
          appId
          bookedBy
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          branchId
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          end
          start
          date
          price
          cancelled
          serviceId
          service {
            __typename
            id
            title
            description
            price
            duration
            branchId
            deleted
            deletedAt
            createdAt
            updatedAt
          }
          userName
          type
          notificationId
          canncelledBy
          note
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppointmentMutation>response.data.createAppointment;
  }
  async UpdateAppointment(
    input: UpdateAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<UpdateAppointmentMutation> {
    const statement = `mutation UpdateAppointment($input: UpdateAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        updateAppointment(input: $input, condition: $condition) {
          __typename
          id
          appId
          bookedBy
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          branchId
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          end
          start
          date
          price
          cancelled
          serviceId
          service {
            __typename
            id
            title
            description
            price
            duration
            branchId
            deleted
            deletedAt
            createdAt
            updatedAt
          }
          userName
          type
          notificationId
          canncelledBy
          note
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppointmentMutation>response.data.updateAppointment;
  }
  async DeleteAppointment(
    input: DeleteAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<DeleteAppointmentMutation> {
    const statement = `mutation DeleteAppointment($input: DeleteAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        deleteAppointment(input: $input, condition: $condition) {
          __typename
          id
          appId
          bookedBy
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          branchId
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          end
          start
          date
          price
          cancelled
          serviceId
          service {
            __typename
            id
            title
            description
            price
            duration
            branchId
            deleted
            deletedAt
            createdAt
            updatedAt
          }
          userName
          type
          notificationId
          canncelledBy
          note
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppointmentMutation>response.data.deleteAppointment;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          branchID
          ShopID
          appointments {
            __typename
            nextToken
          }
          Branchs {
            __typename
            nextToken
          }
          operateInBranchId
          role
          app {
            __typename
            nextToken
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          nome
          cognome
          fb
          birthDate
          email
          cell
          userName
          logo {
            __typename
            bucket
            region
            key
          }
          device_id
          blocked
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          branchID
          ShopID
          appointments {
            __typename
            nextToken
          }
          Branchs {
            __typename
            nextToken
          }
          operateInBranchId
          role
          app {
            __typename
            nextToken
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          nome
          cognome
          fb
          birthDate
          email
          cell
          userName
          logo {
            __typename
            bucket
            region
            key
          }
          device_id
          blocked
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          branchID
          ShopID
          appointments {
            __typename
            nextToken
          }
          Branchs {
            __typename
            nextToken
          }
          operateInBranchId
          role
          app {
            __typename
            nextToken
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          nome
          cognome
          fb
          birthDate
          email
          cell
          userName
          logo {
            __typename
            bucket
            region
            key
          }
          device_id
          blocked
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateBranch(
    input: CreateBranchInput,
    condition?: ModelBranchConditionInput
  ): Promise<CreateBranchMutation> {
    const statement = `mutation CreateBranch($input: CreateBranchInput!, $condition: ModelBranchConditionInput) {
        createBranch(input: $input, condition: $condition) {
          __typename
          id
          name
          logo {
            __typename
            bucket
            region
            key
          }
          shopId
          cell
          linkFb
          linkIn
          linkTw
          address
          address_id
          phone
          services {
            __typename
            nextToken
          }
          operators {
            __typename
            nextToken
          }
          users {
            __typename
            nextToken
          }
          admin {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          workTime {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          active
          workCategory
          addressId
          regioneSociale
          pIva
          sedeLegale
          sedeLegale_id
          description
          sede23
          Nuovo
          site
          adminId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBranchMutation>response.data.createBranch;
  }
  async UpdateBranch(
    input: UpdateBranchInput,
    condition?: ModelBranchConditionInput
  ): Promise<UpdateBranchMutation> {
    const statement = `mutation UpdateBranch($input: UpdateBranchInput!, $condition: ModelBranchConditionInput) {
        updateBranch(input: $input, condition: $condition) {
          __typename
          id
          name
          logo {
            __typename
            bucket
            region
            key
          }
          shopId
          cell
          linkFb
          linkIn
          linkTw
          address
          address_id
          phone
          services {
            __typename
            nextToken
          }
          operators {
            __typename
            nextToken
          }
          users {
            __typename
            nextToken
          }
          admin {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          workTime {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          active
          workCategory
          addressId
          regioneSociale
          pIva
          sedeLegale
          sedeLegale_id
          description
          sede23
          Nuovo
          site
          adminId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBranchMutation>response.data.updateBranch;
  }
  async DeleteBranch(
    input: DeleteBranchInput,
    condition?: ModelBranchConditionInput
  ): Promise<DeleteBranchMutation> {
    const statement = `mutation DeleteBranch($input: DeleteBranchInput!, $condition: ModelBranchConditionInput) {
        deleteBranch(input: $input, condition: $condition) {
          __typename
          id
          name
          logo {
            __typename
            bucket
            region
            key
          }
          shopId
          cell
          linkFb
          linkIn
          linkTw
          address
          address_id
          phone
          services {
            __typename
            nextToken
          }
          operators {
            __typename
            nextToken
          }
          users {
            __typename
            nextToken
          }
          admin {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          workTime {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          active
          workCategory
          addressId
          regioneSociale
          pIva
          sedeLegale
          sedeLegale_id
          description
          sede23
          Nuovo
          site
          adminId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBranchMutation>response.data.deleteBranch;
  }
  async CreateService(
    input: CreateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<CreateServiceMutation> {
    const statement = `mutation CreateService($input: CreateServiceInput!, $condition: ModelServiceConditionInput) {
        createService(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          price
          image {
            __typename
            bucket
            region
            key
          }
          operator {
            __typename
            nextToken
          }
          duration
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          appointments {
            __typename
            nextToken
          }
          deleted
          deletedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateServiceMutation>response.data.createService;
  }
  async UpdateService(
    input: UpdateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<UpdateServiceMutation> {
    const statement = `mutation UpdateService($input: UpdateServiceInput!, $condition: ModelServiceConditionInput) {
        updateService(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          price
          image {
            __typename
            bucket
            region
            key
          }
          operator {
            __typename
            nextToken
          }
          duration
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          appointments {
            __typename
            nextToken
          }
          deleted
          deletedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateServiceMutation>response.data.updateService;
  }
  async DeleteService(
    input: DeleteServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<DeleteServiceMutation> {
    const statement = `mutation DeleteService($input: DeleteServiceInput!, $condition: ModelServiceConditionInput) {
        deleteService(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          price
          image {
            __typename
            bucket
            region
            key
          }
          operator {
            __typename
            nextToken
          }
          duration
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          appointments {
            __typename
            nextToken
          }
          deleted
          deletedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteServiceMutation>response.data.deleteService;
  }
  async CreateAppUsers(
    input: CreateAppUsersInput,
    condition?: ModelAppUsersConditionInput
  ): Promise<CreateAppUsersMutation> {
    const statement = `mutation CreateAppUsers($input: CreateAppUsersInput!, $condition: ModelAppUsersConditionInput) {
        createAppUsers(input: $input, condition: $condition) {
          __typename
          id
          appId
          app {
            __typename
            id
            appHID
            appname
            logoapp
            splashscreen
            created_at
            updated_at
            appLink
            defaultBranchId
            colors
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppUsersMutation>response.data.createAppUsers;
  }
  async UpdateAppUsers(
    input: UpdateAppUsersInput,
    condition?: ModelAppUsersConditionInput
  ): Promise<UpdateAppUsersMutation> {
    const statement = `mutation UpdateAppUsers($input: UpdateAppUsersInput!, $condition: ModelAppUsersConditionInput) {
        updateAppUsers(input: $input, condition: $condition) {
          __typename
          id
          appId
          app {
            __typename
            id
            appHID
            appname
            logoapp
            splashscreen
            created_at
            updated_at
            appLink
            defaultBranchId
            colors
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppUsersMutation>response.data.updateAppUsers;
  }
  async DeleteAppUsers(
    input: DeleteAppUsersInput,
    condition?: ModelAppUsersConditionInput
  ): Promise<DeleteAppUsersMutation> {
    const statement = `mutation DeleteAppUsers($input: DeleteAppUsersInput!, $condition: ModelAppUsersConditionInput) {
        deleteAppUsers(input: $input, condition: $condition) {
          __typename
          id
          appId
          app {
            __typename
            id
            appHID
            appname
            logoapp
            splashscreen
            created_at
            updated_at
            appLink
            defaultBranchId
            colors
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppUsersMutation>response.data.deleteAppUsers;
  }
  async CreateWorkTime(
    input: CreateWorkTimeInput,
    condition?: ModelWorkTimeConditionInput
  ): Promise<CreateWorkTimeMutation> {
    const statement = `mutation CreateWorkTime($input: CreateWorkTimeInput!, $condition: ModelWorkTimeConditionInput) {
        createWorkTime(input: $input, condition: $condition) {
          __typename
          id
          start
          end
          offset
          active
          dayWeek
          default
          title
          branchId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWorkTimeMutation>response.data.createWorkTime;
  }
  async UpdateWorkTime(
    input: UpdateWorkTimeInput,
    condition?: ModelWorkTimeConditionInput
  ): Promise<UpdateWorkTimeMutation> {
    const statement = `mutation UpdateWorkTime($input: UpdateWorkTimeInput!, $condition: ModelWorkTimeConditionInput) {
        updateWorkTime(input: $input, condition: $condition) {
          __typename
          id
          start
          end
          offset
          active
          dayWeek
          default
          title
          branchId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWorkTimeMutation>response.data.updateWorkTime;
  }
  async DeleteWorkTime(
    input: DeleteWorkTimeInput,
    condition?: ModelWorkTimeConditionInput
  ): Promise<DeleteWorkTimeMutation> {
    const statement = `mutation DeleteWorkTime($input: DeleteWorkTimeInput!, $condition: ModelWorkTimeConditionInput) {
        deleteWorkTime(input: $input, condition: $condition) {
          __typename
          id
          start
          end
          offset
          active
          dayWeek
          default
          title
          branchId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWorkTimeMutation>response.data.deleteWorkTime;
  }
  async CreateContacts(
    input: CreateContactsInput,
    condition?: ModelcontactsConditionInput
  ): Promise<CreateContactsMutation> {
    const statement = `mutation CreateContacts($input: CreateContactsInput!, $condition: ModelcontactsConditionInput) {
        createContacts(input: $input, condition: $condition) {
          __typename
          id
          subject
          message
          userId
          img {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateContactsMutation>response.data.createContacts;
  }
  async UpdateContacts(
    input: UpdateContactsInput,
    condition?: ModelcontactsConditionInput
  ): Promise<UpdateContactsMutation> {
    const statement = `mutation UpdateContacts($input: UpdateContactsInput!, $condition: ModelcontactsConditionInput) {
        updateContacts(input: $input, condition: $condition) {
          __typename
          id
          subject
          message
          userId
          img {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateContactsMutation>response.data.updateContacts;
  }
  async DeleteContacts(
    input: DeleteContactsInput,
    condition?: ModelcontactsConditionInput
  ): Promise<DeleteContactsMutation> {
    const statement = `mutation DeleteContacts($input: DeleteContactsInput!, $condition: ModelcontactsConditionInput) {
        deleteContacts(input: $input, condition: $condition) {
          __typename
          id
          subject
          message
          userId
          img {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteContactsMutation>response.data.deleteContacts;
  }
  async CreateFaq(
    input: CreateFaqInput,
    condition?: ModelFaqConditionInput
  ): Promise<CreateFaqMutation> {
    const statement = `mutation CreateFaq($input: CreateFaqInput!, $condition: ModelFaqConditionInput) {
        createFaq(input: $input, condition: $condition) {
          __typename
          id
          subject
          description
          order
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFaqMutation>response.data.createFaq;
  }
  async UpdateFaq(
    input: UpdateFaqInput,
    condition?: ModelFaqConditionInput
  ): Promise<UpdateFaqMutation> {
    const statement = `mutation UpdateFaq($input: UpdateFaqInput!, $condition: ModelFaqConditionInput) {
        updateFaq(input: $input, condition: $condition) {
          __typename
          id
          subject
          description
          order
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFaqMutation>response.data.updateFaq;
  }
  async DeleteFaq(
    input: DeleteFaqInput,
    condition?: ModelFaqConditionInput
  ): Promise<DeleteFaqMutation> {
    const statement = `mutation DeleteFaq($input: DeleteFaqInput!, $condition: ModelFaqConditionInput) {
        deleteFaq(input: $input, condition: $condition) {
          __typename
          id
          subject
          description
          order
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFaqMutation>response.data.deleteFaq;
  }
  async CreateBranchUsers(
    input: CreateBranchUsersInput,
    condition?: ModelBranchUsersConditionInput
  ): Promise<CreateBranchUsersMutation> {
    const statement = `mutation CreateBranchUsers($input: CreateBranchUsersInput!, $condition: ModelBranchUsersConditionInput) {
        createBranchUsers(input: $input, condition: $condition) {
          __typename
          id
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBranchUsersMutation>response.data.createBranchUsers;
  }
  async UpdateBranchUsers(
    input: UpdateBranchUsersInput,
    condition?: ModelBranchUsersConditionInput
  ): Promise<UpdateBranchUsersMutation> {
    const statement = `mutation UpdateBranchUsers($input: UpdateBranchUsersInput!, $condition: ModelBranchUsersConditionInput) {
        updateBranchUsers(input: $input, condition: $condition) {
          __typename
          id
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBranchUsersMutation>response.data.updateBranchUsers;
  }
  async DeleteBranchUsers(
    input: DeleteBranchUsersInput,
    condition?: ModelBranchUsersConditionInput
  ): Promise<DeleteBranchUsersMutation> {
    const statement = `mutation DeleteBranchUsers($input: DeleteBranchUsersInput!, $condition: ModelBranchUsersConditionInput) {
        deleteBranchUsers(input: $input, condition: $condition) {
          __typename
          id
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBranchUsersMutation>response.data.deleteBranchUsers;
  }
  async CreateUserNotes(
    input: CreateUserNotesInput,
    condition?: ModelUserNotesConditionInput
  ): Promise<CreateUserNotesMutation> {
    const statement = `mutation CreateUserNotes($input: CreateUserNotesInput!, $condition: ModelUserNotesConditionInput) {
        createUserNotes(input: $input, condition: $condition) {
          __typename
          id
          desc
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserNotesMutation>response.data.createUserNotes;
  }
  async UpdateUserNotes(
    input: UpdateUserNotesInput,
    condition?: ModelUserNotesConditionInput
  ): Promise<UpdateUserNotesMutation> {
    const statement = `mutation UpdateUserNotes($input: UpdateUserNotesInput!, $condition: ModelUserNotesConditionInput) {
        updateUserNotes(input: $input, condition: $condition) {
          __typename
          id
          desc
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserNotesMutation>response.data.updateUserNotes;
  }
  async DeleteUserNotes(
    input: DeleteUserNotesInput,
    condition?: ModelUserNotesConditionInput
  ): Promise<DeleteUserNotesMutation> {
    const statement = `mutation DeleteUserNotes($input: DeleteUserNotesInput!, $condition: ModelUserNotesConditionInput) {
        deleteUserNotes(input: $input, condition: $condition) {
          __typename
          id
          desc
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserNotesMutation>response.data.deleteUserNotes;
  }
  async CreateAppointmentNotes(
    input: CreateAppointmentNotesInput,
    condition?: ModelAppointmentNotesConditionInput
  ): Promise<CreateAppointmentNotesMutation> {
    const statement = `mutation CreateAppointmentNotes($input: CreateAppointmentNotesInput!, $condition: ModelAppointmentNotesConditionInput) {
        createAppointmentNotes(input: $input, condition: $condition) {
          __typename
          id
          desc
          appointmentId
          appointment {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppointmentNotesMutation>response.data.createAppointmentNotes;
  }
  async UpdateAppointmentNotes(
    input: UpdateAppointmentNotesInput,
    condition?: ModelAppointmentNotesConditionInput
  ): Promise<UpdateAppointmentNotesMutation> {
    const statement = `mutation UpdateAppointmentNotes($input: UpdateAppointmentNotesInput!, $condition: ModelAppointmentNotesConditionInput) {
        updateAppointmentNotes(input: $input, condition: $condition) {
          __typename
          id
          desc
          appointmentId
          appointment {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppointmentNotesMutation>response.data.updateAppointmentNotes;
  }
  async DeleteAppointmentNotes(
    input: DeleteAppointmentNotesInput,
    condition?: ModelAppointmentNotesConditionInput
  ): Promise<DeleteAppointmentNotesMutation> {
    const statement = `mutation DeleteAppointmentNotes($input: DeleteAppointmentNotesInput!, $condition: ModelAppointmentNotesConditionInput) {
        deleteAppointmentNotes(input: $input, condition: $condition) {
          __typename
          id
          desc
          appointmentId
          appointment {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppointmentNotesMutation>response.data.deleteAppointmentNotes;
  }
  async CreateCustomerPro(
    input: CreateCustomerProInput,
    condition?: ModelCustomerProConditionInput
  ): Promise<CreateCustomerProMutation> {
    const statement = `mutation CreateCustomerPro($input: CreateCustomerProInput!, $condition: ModelCustomerProConditionInput) {
        createCustomerPro(input: $input, condition: $condition) {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          logo {
            __typename
            bucket
            region
            key
          }
          blocked
          appointments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCustomerProMutation>response.data.createCustomerPro;
  }
  async UpdateCustomerPro(
    input: UpdateCustomerProInput,
    condition?: ModelCustomerProConditionInput
  ): Promise<UpdateCustomerProMutation> {
    const statement = `mutation UpdateCustomerPro($input: UpdateCustomerProInput!, $condition: ModelCustomerProConditionInput) {
        updateCustomerPro(input: $input, condition: $condition) {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          logo {
            __typename
            bucket
            region
            key
          }
          blocked
          appointments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCustomerProMutation>response.data.updateCustomerPro;
  }
  async DeleteCustomerPro(
    input: DeleteCustomerProInput,
    condition?: ModelCustomerProConditionInput
  ): Promise<DeleteCustomerProMutation> {
    const statement = `mutation DeleteCustomerPro($input: DeleteCustomerProInput!, $condition: ModelCustomerProConditionInput) {
        deleteCustomerPro(input: $input, condition: $condition) {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          logo {
            __typename
            bucket
            region
            key
          }
          blocked
          appointments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCustomerProMutation>response.data.deleteCustomerPro;
  }
  async CreateOwnerPro(
    input: CreateOwnerProInput,
    condition?: ModelOwnerProConditionInput
  ): Promise<CreateOwnerProMutation> {
    const statement = `mutation CreateOwnerPro($input: CreateOwnerProInput!, $condition: ModelOwnerProConditionInput) {
        createOwnerPro(input: $input, condition: $condition) {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          blocked
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOwnerProMutation>response.data.createOwnerPro;
  }
  async UpdateOwnerPro(
    input: UpdateOwnerProInput,
    condition?: ModelOwnerProConditionInput
  ): Promise<UpdateOwnerProMutation> {
    const statement = `mutation UpdateOwnerPro($input: UpdateOwnerProInput!, $condition: ModelOwnerProConditionInput) {
        updateOwnerPro(input: $input, condition: $condition) {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          blocked
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOwnerProMutation>response.data.updateOwnerPro;
  }
  async DeleteOwnerPro(
    input: DeleteOwnerProInput,
    condition?: ModelOwnerProConditionInput
  ): Promise<DeleteOwnerProMutation> {
    const statement = `mutation DeleteOwnerPro($input: DeleteOwnerProInput!, $condition: ModelOwnerProConditionInput) {
        deleteOwnerPro(input: $input, condition: $condition) {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          blocked
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOwnerProMutation>response.data.deleteOwnerPro;
  }
  async CreateAppPro(
    input: CreateAppProInput,
    condition?: ModelAppProConditionInput
  ): Promise<CreateAppProMutation> {
    const statement = `mutation CreateAppPro($input: CreateAppProInput!, $condition: ModelAppProConditionInput) {
        createAppPro(input: $input, condition: $condition) {
          __typename
          id
          active
          logo {
            __typename
            bucket
            region
            key
          }
          name
          description
          SplashScreen {
            __typename
            bucket
            region
            key
          }
          link
          CreatedAt
          UpdateAt
          type
          style {
            __typename
            id
            palette
            headers
            tab
            pages
            menu
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppProMutation>response.data.createAppPro;
  }
  async UpdateAppPro(
    input: UpdateAppProInput,
    condition?: ModelAppProConditionInput
  ): Promise<UpdateAppProMutation> {
    const statement = `mutation UpdateAppPro($input: UpdateAppProInput!, $condition: ModelAppProConditionInput) {
        updateAppPro(input: $input, condition: $condition) {
          __typename
          id
          active
          logo {
            __typename
            bucket
            region
            key
          }
          name
          description
          SplashScreen {
            __typename
            bucket
            region
            key
          }
          link
          CreatedAt
          UpdateAt
          type
          style {
            __typename
            id
            palette
            headers
            tab
            pages
            menu
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppProMutation>response.data.updateAppPro;
  }
  async DeleteAppPro(
    input: DeleteAppProInput,
    condition?: ModelAppProConditionInput
  ): Promise<DeleteAppProMutation> {
    const statement = `mutation DeleteAppPro($input: DeleteAppProInput!, $condition: ModelAppProConditionInput) {
        deleteAppPro(input: $input, condition: $condition) {
          __typename
          id
          active
          logo {
            __typename
            bucket
            region
            key
          }
          name
          description
          SplashScreen {
            __typename
            bucket
            region
            key
          }
          link
          CreatedAt
          UpdateAt
          type
          style {
            __typename
            id
            palette
            headers
            tab
            pages
            menu
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppProMutation>response.data.deleteAppPro;
  }
  async CreateAppointmentPro(
    input: CreateAppointmentProInput,
    condition?: ModelAppointmentProConditionInput
  ): Promise<CreateAppointmentProMutation> {
    const statement = `mutation CreateAppointmentPro($input: CreateAppointmentProInput!, $condition: ModelAppointmentProConditionInput) {
        createAppointmentPro(input: $input, condition: $condition) {
          __typename
          id
          customerId
          date
          start
          end
          confirmedData
          confirmed
          note
          services {
            __typename
            id
            branch_id
            title
            Description
            Image
            Deleted
            Deleted_at
            duration
            price
            createdAt
            updatedAt
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppointmentProMutation>response.data.createAppointmentPro;
  }
  async UpdateAppointmentPro(
    input: UpdateAppointmentProInput,
    condition?: ModelAppointmentProConditionInput
  ): Promise<UpdateAppointmentProMutation> {
    const statement = `mutation UpdateAppointmentPro($input: UpdateAppointmentProInput!, $condition: ModelAppointmentProConditionInput) {
        updateAppointmentPro(input: $input, condition: $condition) {
          __typename
          id
          customerId
          date
          start
          end
          confirmedData
          confirmed
          note
          services {
            __typename
            id
            branch_id
            title
            Description
            Image
            Deleted
            Deleted_at
            duration
            price
            createdAt
            updatedAt
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppointmentProMutation>response.data.updateAppointmentPro;
  }
  async DeleteAppointmentPro(
    input: DeleteAppointmentProInput,
    condition?: ModelAppointmentProConditionInput
  ): Promise<DeleteAppointmentProMutation> {
    const statement = `mutation DeleteAppointmentPro($input: DeleteAppointmentProInput!, $condition: ModelAppointmentProConditionInput) {
        deleteAppointmentPro(input: $input, condition: $condition) {
          __typename
          id
          customerId
          date
          start
          end
          confirmedData
          confirmed
          note
          services {
            __typename
            id
            branch_id
            title
            Description
            Image
            Deleted
            Deleted_at
            duration
            price
            createdAt
            updatedAt
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppointmentProMutation>response.data.deleteAppointmentPro;
  }
  async CreateServicePro(
    input: CreateServiceProInput,
    condition?: ModelServiceProConditionInput
  ): Promise<CreateServiceProMutation> {
    const statement = `mutation CreateServicePro($input: CreateServiceProInput!, $condition: ModelServiceProConditionInput) {
        createServicePro(input: $input, condition: $condition) {
          __typename
          id
          branch_id
          branch {
            __typename
            id
            phone
            Active
            linkFB
            linkIG
            linkTW
            workCategory
            address
            address_id
            createdAt
            updatedAt
          }
          title
          Description
          Image
          Deleted
          Deleted_at
          duration
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateServiceProMutation>response.data.createServicePro;
  }
  async UpdateServicePro(
    input: UpdateServiceProInput,
    condition?: ModelServiceProConditionInput
  ): Promise<UpdateServiceProMutation> {
    const statement = `mutation UpdateServicePro($input: UpdateServiceProInput!, $condition: ModelServiceProConditionInput) {
        updateServicePro(input: $input, condition: $condition) {
          __typename
          id
          branch_id
          branch {
            __typename
            id
            phone
            Active
            linkFB
            linkIG
            linkTW
            workCategory
            address
            address_id
            createdAt
            updatedAt
          }
          title
          Description
          Image
          Deleted
          Deleted_at
          duration
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateServiceProMutation>response.data.updateServicePro;
  }
  async DeleteServicePro(
    input: DeleteServiceProInput,
    condition?: ModelServiceProConditionInput
  ): Promise<DeleteServiceProMutation> {
    const statement = `mutation DeleteServicePro($input: DeleteServiceProInput!, $condition: ModelServiceProConditionInput) {
        deleteServicePro(input: $input, condition: $condition) {
          __typename
          id
          branch_id
          branch {
            __typename
            id
            phone
            Active
            linkFB
            linkIG
            linkTW
            workCategory
            address
            address_id
            createdAt
            updatedAt
          }
          title
          Description
          Image
          Deleted
          Deleted_at
          duration
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteServiceProMutation>response.data.deleteServicePro;
  }
  async CreateBranchPro(
    input: CreateBranchProInput,
    condition?: ModelBranchProConditionInput
  ): Promise<CreateBranchProMutation> {
    const statement = `mutation CreateBranchPro($input: CreateBranchProInput!, $condition: ModelBranchProConditionInput) {
        createBranchPro(input: $input, condition: $condition) {
          __typename
          id
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          phone
          Active
          linkFB
          linkIG
          linkTW
          workTime {
            __typename
            id
            start
            end
            offset
            active
            dayWeek
            default
            title
            branchId
            createdAt
            updatedAt
          }
          workCategory
          address
          address_id
          services {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBranchProMutation>response.data.createBranchPro;
  }
  async UpdateBranchPro(
    input: UpdateBranchProInput,
    condition?: ModelBranchProConditionInput
  ): Promise<UpdateBranchProMutation> {
    const statement = `mutation UpdateBranchPro($input: UpdateBranchProInput!, $condition: ModelBranchProConditionInput) {
        updateBranchPro(input: $input, condition: $condition) {
          __typename
          id
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          phone
          Active
          linkFB
          linkIG
          linkTW
          workTime {
            __typename
            id
            start
            end
            offset
            active
            dayWeek
            default
            title
            branchId
            createdAt
            updatedAt
          }
          workCategory
          address
          address_id
          services {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBranchProMutation>response.data.updateBranchPro;
  }
  async DeleteBranchPro(
    input: DeleteBranchProInput,
    condition?: ModelBranchProConditionInput
  ): Promise<DeleteBranchProMutation> {
    const statement = `mutation DeleteBranchPro($input: DeleteBranchProInput!, $condition: ModelBranchProConditionInput) {
        deleteBranchPro(input: $input, condition: $condition) {
          __typename
          id
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          phone
          Active
          linkFB
          linkIG
          linkTW
          workTime {
            __typename
            id
            start
            end
            offset
            active
            dayWeek
            default
            title
            branchId
            createdAt
            updatedAt
          }
          workCategory
          address
          address_id
          services {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBranchProMutation>response.data.deleteBranchPro;
  }
  async CreateShopPro(
    input: CreateShopProInput,
    condition?: ModelShopProConditionInput
  ): Promise<CreateShopProMutation> {
    const statement = `mutation CreateShopPro($input: CreateShopProInput!, $condition: ModelShopProConditionInput) {
        createShopPro(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          logo {
            __typename
            bucket
            region
            key
          }
          pIva
          ragioneSociale
          sedeLegale
          sedeLegale_id
          website
          branchs {
            __typename
            nextToken
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateShopProMutation>response.data.createShopPro;
  }
  async UpdateShopPro(
    input: UpdateShopProInput,
    condition?: ModelShopProConditionInput
  ): Promise<UpdateShopProMutation> {
    const statement = `mutation UpdateShopPro($input: UpdateShopProInput!, $condition: ModelShopProConditionInput) {
        updateShopPro(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          logo {
            __typename
            bucket
            region
            key
          }
          pIva
          ragioneSociale
          sedeLegale
          sedeLegale_id
          website
          branchs {
            __typename
            nextToken
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateShopProMutation>response.data.updateShopPro;
  }
  async DeleteShopPro(
    input: DeleteShopProInput,
    condition?: ModelShopProConditionInput
  ): Promise<DeleteShopProMutation> {
    const statement = `mutation DeleteShopPro($input: DeleteShopProInput!, $condition: ModelShopProConditionInput) {
        deleteShopPro(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          logo {
            __typename
            bucket
            region
            key
          }
          pIva
          ragioneSociale
          sedeLegale
          sedeLegale_id
          website
          branchs {
            __typename
            nextToken
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteShopProMutation>response.data.deleteShopPro;
  }
  async CreateStyle(
    input: CreateStyleInput,
    condition?: ModelStyleConditionInput
  ): Promise<CreateStyleMutation> {
    const statement = `mutation CreateStyle($input: CreateStyleInput!, $condition: ModelStyleConditionInput) {
        createStyle(input: $input, condition: $condition) {
          __typename
          id
          appPro {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          palette
          headers
          tab
          pages
          menu
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStyleMutation>response.data.createStyle;
  }
  async UpdateStyle(
    input: UpdateStyleInput,
    condition?: ModelStyleConditionInput
  ): Promise<UpdateStyleMutation> {
    const statement = `mutation UpdateStyle($input: UpdateStyleInput!, $condition: ModelStyleConditionInput) {
        updateStyle(input: $input, condition: $condition) {
          __typename
          id
          appPro {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          palette
          headers
          tab
          pages
          menu
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStyleMutation>response.data.updateStyle;
  }
  async DeleteStyle(
    input: DeleteStyleInput,
    condition?: ModelStyleConditionInput
  ): Promise<DeleteStyleMutation> {
    const statement = `mutation DeleteStyle($input: DeleteStyleInput!, $condition: ModelStyleConditionInput) {
        deleteStyle(input: $input, condition: $condition) {
          __typename
          id
          appPro {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          palette
          headers
          tab
          pages
          menu
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStyleMutation>response.data.deleteStyle;
  }
  async GetApp(id: string): Promise<GetAppQuery> {
    const statement = `query GetApp($id: ID!) {
        getApp(id: $id) {
          __typename
          id
          appHID
          appname
          logoapp
          splashscreen
          created_at
          updated_at
          shop {
            __typename
            id
            appHID
            createdAt
            updatedAt
          }
          users {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          appLink
          defaultBranchId
          colors
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppQuery>response.data.getApp;
  }
  async ListApps(
    filter?: ModelAppFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppsQuery> {
    const statement = `query ListApps($filter: ModelAppFilterInput, $limit: Int, $nextToken: String) {
        listApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            appHID
            appname
            logoapp
            splashscreen
            created_at
            updated_at
            appLink
            defaultBranchId
            colors
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppsQuery>response.data.listApps;
  }
  async GetShop(id: string): Promise<GetShopQuery> {
    const statement = `query GetShop($id: ID!) {
        getShop(id: $id) {
          __typename
          id
          appHID
          app {
            __typename
            nextToken
          }
          branches {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetShopQuery>response.data.getShop;
  }
  async ListShops(
    filter?: ModelShopFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListShopsQuery> {
    const statement = `query ListShops($filter: ModelShopFilterInput, $limit: Int, $nextToken: String) {
        listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            appHID
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListShopsQuery>response.data.listShops;
  }
  async GetAppointment(id: string): Promise<GetAppointmentQuery> {
    const statement = `query GetAppointment($id: ID!) {
        getAppointment(id: $id) {
          __typename
          id
          appId
          bookedBy
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          branchId
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          end
          start
          date
          price
          cancelled
          serviceId
          service {
            __typename
            id
            title
            description
            price
            duration
            branchId
            deleted
            deletedAt
            createdAt
            updatedAt
          }
          userName
          type
          notificationId
          canncelledBy
          note
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppointmentQuery>response.data.getAppointment;
  }
  async ListAppointments(
    filter?: ModelAppointmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppointmentsQuery> {
    const statement = `query ListAppointments($filter: ModelAppointmentFilterInput, $limit: Int, $nextToken: String) {
        listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppointmentsQuery>response.data.listAppointments;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          branchID
          ShopID
          appointments {
            __typename
            nextToken
          }
          Branchs {
            __typename
            nextToken
          }
          operateInBranchId
          role
          app {
            __typename
            nextToken
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          nome
          cognome
          fb
          birthDate
          email
          cell
          userName
          logo {
            __typename
            bucket
            region
            key
          }
          device_id
          blocked
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetBranch(id: string): Promise<GetBranchQuery> {
    const statement = `query GetBranch($id: ID!) {
        getBranch(id: $id) {
          __typename
          id
          name
          logo {
            __typename
            bucket
            region
            key
          }
          shopId
          cell
          linkFb
          linkIn
          linkTw
          address
          address_id
          phone
          services {
            __typename
            nextToken
          }
          operators {
            __typename
            nextToken
          }
          users {
            __typename
            nextToken
          }
          admin {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          workTime {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          active
          workCategory
          addressId
          regioneSociale
          pIva
          sedeLegale
          sedeLegale_id
          description
          sede23
          Nuovo
          site
          adminId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBranchQuery>response.data.getBranch;
  }
  async ListBranchs(
    filter?: ModelBranchFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBranchsQuery> {
    const statement = `query ListBranchs($filter: ModelBranchFilterInput, $limit: Int, $nextToken: String) {
        listBranchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBranchsQuery>response.data.listBranchs;
  }
  async GetService(id: string): Promise<GetServiceQuery> {
    const statement = `query GetService($id: ID!) {
        getService(id: $id) {
          __typename
          id
          title
          description
          price
          image {
            __typename
            bucket
            region
            key
          }
          operator {
            __typename
            nextToken
          }
          duration
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          appointments {
            __typename
            nextToken
          }
          deleted
          deletedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetServiceQuery>response.data.getService;
  }
  async ListServices(
    filter?: ModelServiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListServicesQuery> {
    const statement = `query ListServices($filter: ModelServiceFilterInput, $limit: Int, $nextToken: String) {
        listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            price
            duration
            branchId
            deleted
            deletedAt
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListServicesQuery>response.data.listServices;
  }
  async GetWorkTime(id: string): Promise<GetWorkTimeQuery> {
    const statement = `query GetWorkTime($id: ID!) {
        getWorkTime(id: $id) {
          __typename
          id
          start
          end
          offset
          active
          dayWeek
          default
          title
          branchId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWorkTimeQuery>response.data.getWorkTime;
  }
  async ListWorkTimes(
    filter?: ModelWorkTimeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWorkTimesQuery> {
    const statement = `query ListWorkTimes($filter: ModelWorkTimeFilterInput, $limit: Int, $nextToken: String) {
        listWorkTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            start
            end
            offset
            active
            dayWeek
            default
            title
            branchId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWorkTimesQuery>response.data.listWorkTimes;
  }
  async GetContacts(id: string): Promise<GetContactsQuery> {
    const statement = `query GetContacts($id: ID!) {
        getContacts(id: $id) {
          __typename
          id
          subject
          message
          userId
          img {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetContactsQuery>response.data.getContacts;
  }
  async ListContactss(
    filter?: ModelcontactsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListContactssQuery> {
    const statement = `query ListContactss($filter: ModelcontactsFilterInput, $limit: Int, $nextToken: String) {
        listContactss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            subject
            message
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListContactssQuery>response.data.listContactss;
  }
  async GetFaq(id: string): Promise<GetFaqQuery> {
    const statement = `query GetFaq($id: ID!) {
        getFaq(id: $id) {
          __typename
          id
          subject
          description
          order
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFaqQuery>response.data.getFaq;
  }
  async ListFaqs(
    filter?: ModelFaqFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFaqsQuery> {
    const statement = `query ListFaqs($filter: ModelFaqFilterInput, $limit: Int, $nextToken: String) {
        listFaqs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            subject
            description
            order
            type
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFaqsQuery>response.data.listFaqs;
  }
  async GetUserNotes(id: string): Promise<GetUserNotesQuery> {
    const statement = `query GetUserNotes($id: ID!) {
        getUserNotes(id: $id) {
          __typename
          id
          desc
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserNotesQuery>response.data.getUserNotes;
  }
  async ListUserNotess(
    filter?: ModelUserNotesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserNotessQuery> {
    const statement = `query ListUserNotess($filter: ModelUserNotesFilterInput, $limit: Int, $nextToken: String) {
        listUserNotess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            desc
            userId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserNotessQuery>response.data.listUserNotess;
  }
  async GetAppointmentNotes(id: string): Promise<GetAppointmentNotesQuery> {
    const statement = `query GetAppointmentNotes($id: ID!) {
        getAppointmentNotes(id: $id) {
          __typename
          id
          desc
          appointmentId
          appointment {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppointmentNotesQuery>response.data.getAppointmentNotes;
  }
  async ListAppointmentNotess(
    filter?: ModelAppointmentNotesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppointmentNotessQuery> {
    const statement = `query ListAppointmentNotess($filter: ModelAppointmentNotesFilterInput, $limit: Int, $nextToken: String) {
        listAppointmentNotess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            desc
            appointmentId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppointmentNotessQuery>response.data.listAppointmentNotess;
  }
  async GetCustomerPro(id: string): Promise<GetCustomerProQuery> {
    const statement = `query GetCustomerPro($id: ID!) {
        getCustomerPro(id: $id) {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          logo {
            __typename
            bucket
            region
            key
          }
          blocked
          appointments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerProQuery>response.data.getCustomerPro;
  }
  async ListCustomerPros(
    filter?: ModelCustomerProFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCustomerProsQuery> {
    const statement = `query ListCustomerPros($filter: ModelCustomerProFilterInput, $limit: Int, $nextToken: String) {
        listCustomerPros(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCustomerProsQuery>response.data.listCustomerPros;
  }
  async GetOwnerPro(id: string): Promise<GetOwnerProQuery> {
    const statement = `query GetOwnerPro($id: ID!) {
        getOwnerPro(id: $id) {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          blocked
          app {
          __typename
            id
            active
            logo {
              __typename
              bucket
              region
              key
            }
            name
            description
            SplashScreen {
              __typename
              bucket
              region
              key
            }
            link
            CreatedAt
            UpdateAt
            type
            style {
              __typename
              id
              palette
              headers
              tab
              pages
              menu
              createdAt
              updatedAt
            }
            shop {
              __typename
              id
              name
              description
              logo {
                __typename
                bucket
                region
                key
              }
              pIva
              ragioneSociale
              sedeLegale
              sedeLegale_id
              website
              branchs {
                __typename
                items {
                  __typename
                  id
                  phone
                  Active
                  linkFB
                  linkIG
                  linkTW
                  workTime {
                    __typename
                    id
                    start
                    end
                    offset
                    active
                    dayWeek
                    default
                    title
                    branchId
                    createdAt
                    updatedAt
                  }
                  workCategory
                  address
                  address_id
                  services {
                    __typename
                    items{
                      __typename
                      id
                      title
                      Description
                      Image
                      duration
                      price
                    }
                  }
                  createdAt
                  updatedAt
                }
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOwnerProQuery>response.data.getOwnerPro;
  }
  async ListOwnerPros(
    filter?: ModelOwnerProFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOwnerProsQuery> {
    const statement = `query ListOwnerPros($filter: ModelOwnerProFilterInput, $limit: Int, $nextToken: String) {
        listOwnerPros(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOwnerProsQuery>response.data.listOwnerPros;
  }
  async GetAppPro(id: string): Promise<GetAppProQuery> {
    const statement = `query GetAppPro($id: ID!) {
        getAppPro(id: $id) {
          __typename
          id
          active
          logo {
            __typename
            bucket
            region
            key
          }
          name
          description
          SplashScreen {
            __typename
            bucket
            region
            key
          }
          link
          CreatedAt
          UpdateAt
          type
          style {
            __typename
            id
            palette
            headers
            tab
            pages
            menu
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppProQuery>response.data.getAppPro;
  }
  async ListAppPros(
    filter?: ModelAppProFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppProsQuery> {
    const statement = `query ListAppPros($filter: ModelAppProFilterInput, $limit: Int, $nextToken: String) {
        listAppPros(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppProsQuery>response.data.listAppPros;
  }
  async GetAppointmentPro(id: string): Promise<GetAppointmentProQuery> {
    const statement = `query GetAppointmentPro($id: ID!) {
        getAppointmentPro(id: $id) {
          __typename
          id
          customerId
          date
          start
          end
          confirmedData
          confirmed
          note
          services {
            __typename
            id
            branch_id
            title
            Description
            Image
            Deleted
            Deleted_at
            duration
            price
            createdAt
            updatedAt
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppointmentProQuery>response.data.getAppointmentPro;
  }
  async ListAppointmentPros(
    filter?: ModelAppointmentProFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppointmentProsQuery> {
    const statement = `query ListAppointmentPros($filter: ModelAppointmentProFilterInput, $limit: Int, $nextToken: String) {
        listAppointmentPros(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            customerId
            date
            start
            end
            confirmedData
            confirmed
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppointmentProsQuery>response.data.listAppointmentPros;
  }
  async GetServicePro(id: string): Promise<GetServiceProQuery> {
    const statement = `query GetServicePro($id: ID!) {
        getServicePro(id: $id) {
          __typename
          id
          branch_id
          branch {
            __typename
            id
            phone
            Active
            linkFB
            linkIG
            linkTW
            workCategory
            address
            address_id
            createdAt
            updatedAt
          }
          title
          Description
          Image
          Deleted
          Deleted_at
          duration
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetServiceProQuery>response.data.getServicePro;
  }
  async ListServicePros(
    filter?: ModelServiceProFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListServiceProsQuery> {
    const statement = `query ListServicePros($filter: ModelServiceProFilterInput, $limit: Int, $nextToken: String) {
        listServicePros(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            branch_id
            title
            Description
            Image
            Deleted
            Deleted_at
            duration
            price
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListServiceProsQuery>response.data.listServicePros;
  }
  async GetBranchPro(id: string): Promise<GetBranchProQuery> {
    const statement = `query GetBranchPro($id: ID!) {
        getBranchPro(id: $id) {
          __typename
          id
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          phone
          Active
          linkFB
          linkIG
          linkTW
          workTime {
            __typename
            id
            start
            end
            offset
            active
            dayWeek
            default
            title
            branchId
            createdAt
            updatedAt
          }
          workCategory
          address
          address_id
          services {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBranchProQuery>response.data.getBranchPro;
  }
  async ListBranchPros(
    filter?: ModelBranchProFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBranchProsQuery> {
    const statement = `query ListBranchPros($filter: ModelBranchProFilterInput, $limit: Int, $nextToken: String) {
        listBranchPros(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            phone
            Active
            linkFB
            linkIG
            linkTW
            workCategory
            address
            address_id
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBranchProsQuery>response.data.listBranchPros;
  }
  async GetShopPro(id: string): Promise<GetShopProQuery> {
    const statement = `query GetShopPro($id: ID!) {
        getShopPro(id: $id) {
          __typename
          id
          name
          description
          logo {
            __typename
            bucket
            region
            key
          }
          pIva
          ragioneSociale
          sedeLegale
          sedeLegale_id
          website
          branchs {
            __typename
            nextToken
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetShopProQuery>response.data.getShopPro;
  }
  async ListShopPros(
    filter?: ModelShopProFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListShopProsQuery> {
    const statement = `query ListShopPros($filter: ModelShopProFilterInput, $limit: Int, $nextToken: String) {
        listShopPros(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListShopProsQuery>response.data.listShopPros;
  }
  async GetStyle(id: string): Promise<GetStyleQuery> {
    const statement = `query GetStyle($id: ID!) {
        getStyle(id: $id) {
          __typename
          id
          appPro {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          palette
          headers
          tab
          pages
          menu
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStyleQuery>response.data.getStyle;
  }
  async ListStyles(
    filter?: ModelStyleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStylesQuery> {
    const statement = `query ListStyles($filter: ModelStyleFilterInput, $limit: Int, $nextToken: String) {
        listStyles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            palette
            headers
            tab
            pages
            menu
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStylesQuery>response.data.listStyles;
  }
  async GetAppByHumanId(
    appHID?: string,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelAppFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetAppByHumanIdQuery> {
    const statement = `query GetAppByHumanId($appHID: String, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelAppFilterInput, $limit: Int, $nextToken: String) {
        getAppByHumanId(appHID: $appHID, id: $id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            appHID
            appname
            logoapp
            splashscreen
            created_at
            updated_at
            appLink
            defaultBranchId
            colors
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (appHID) {
      gqlAPIServiceArguments.appHID = appHID;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppByHumanIdQuery>response.data.getAppByHumanId;
  }
  async AppointmentByDateStart(
    branchId?: string,
    date?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelAppointmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AppointmentByDateStartQuery> {
    const statement = `query AppointmentByDateStart($branchId: ID, $date: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelAppointmentFilterInput, $limit: Int, $nextToken: String) {
        AppointmentByDateStart(branchId: $branchId, date: $date, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (branchId) {
      gqlAPIServiceArguments.branchId = branchId;
    }
    if (date) {
      gqlAPIServiceArguments.date = date;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AppointmentByDateStartQuery>response.data.AppointmentByDateStart;
  }
  async AppointmentByBranchDate(
    branchId?: string,
    date?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelAppointmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AppointmentByBranchDateQuery> {
    const statement = `query AppointmentByBranchDate($branchId: ID, $date: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelAppointmentFilterInput, $limit: Int, $nextToken: String) {
        AppointmentByBranchDate(branchId: $branchId, date: $date, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (branchId) {
      gqlAPIServiceArguments.branchId = branchId;
    }
    if (date) {
      gqlAPIServiceArguments.date = date;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AppointmentByBranchDateQuery>response.data.AppointmentByBranchDate;
  }
  async AppointmentByStart(
    branchId?: string,
    dateStart?: ModelAppointmentByDateStartTimeCompositeKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelAppointmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AppointmentByStartQuery> {
    const statement = `query AppointmentByStart($branchId: ID, $dateStart: ModelAppointmentByDateStartTimeCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelAppointmentFilterInput, $limit: Int, $nextToken: String) {
        AppointmentByStart(branchId: $branchId, dateStart: $dateStart, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (branchId) {
      gqlAPIServiceArguments.branchId = branchId;
    }
    if (dateStart) {
      gqlAPIServiceArguments.dateStart = dateStart;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AppointmentByStartQuery>response.data.AppointmentByStart;
  }
  OnCreateAppListener: Observable<OnCreateAppSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateApp {
        onCreateApp {
          __typename
          id
          appHID
          appname
          logoapp
          splashscreen
          created_at
          updated_at
          shop {
            __typename
            id
            appHID
            createdAt
            updatedAt
          }
          users {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          appLink
          defaultBranchId
          colors
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAppSubscription>;

  OnUpdateAppListener: Observable<OnUpdateAppSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateApp {
        onUpdateApp {
          __typename
          id
          appHID
          appname
          logoapp
          splashscreen
          created_at
          updated_at
          shop {
            __typename
            id
            appHID
            createdAt
            updatedAt
          }
          users {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          appLink
          defaultBranchId
          colors
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAppSubscription>;

  OnDeleteAppListener: Observable<OnDeleteAppSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteApp {
        onDeleteApp {
          __typename
          id
          appHID
          appname
          logoapp
          splashscreen
          created_at
          updated_at
          shop {
            __typename
            id
            appHID
            createdAt
            updatedAt
          }
          users {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          appLink
          defaultBranchId
          colors
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAppSubscription>;

  OnCreateShopListener: Observable<OnCreateShopSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateShop {
        onCreateShop {
          __typename
          id
          appHID
          app {
            __typename
            nextToken
          }
          branches {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateShopSubscription>;

  OnUpdateShopListener: Observable<OnUpdateShopSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateShop {
        onUpdateShop {
          __typename
          id
          appHID
          app {
            __typename
            nextToken
          }
          branches {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateShopSubscription>;

  OnDeleteShopListener: Observable<OnDeleteShopSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteShop {
        onDeleteShop {
          __typename
          id
          appHID
          app {
            __typename
            nextToken
          }
          branches {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteShopSubscription>;

  OnCreateAppointmentListener: Observable<
    OnCreateAppointmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppointment {
        onCreateAppointment {
          __typename
          id
          appId
          bookedBy
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          branchId
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          end
          start
          date
          price
          cancelled
          serviceId
          service {
            __typename
            id
            title
            description
            price
            duration
            branchId
            deleted
            deletedAt
            createdAt
            updatedAt
          }
          userName
          type
          notificationId
          canncelledBy
          note
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAppointmentSubscription>;

  OnUpdateAppointmentListener: Observable<
    OnUpdateAppointmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppointment {
        onUpdateAppointment {
          __typename
          id
          appId
          bookedBy
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          branchId
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          end
          start
          date
          price
          cancelled
          serviceId
          service {
            __typename
            id
            title
            description
            price
            duration
            branchId
            deleted
            deletedAt
            createdAt
            updatedAt
          }
          userName
          type
          notificationId
          canncelledBy
          note
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAppointmentSubscription>;

  OnDeleteAppointmentListener: Observable<
    OnDeleteAppointmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppointment {
        onDeleteAppointment {
          __typename
          id
          appId
          bookedBy
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          branchId
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          end
          start
          date
          price
          cancelled
          serviceId
          service {
            __typename
            id
            title
            description
            price
            duration
            branchId
            deleted
            deletedAt
            createdAt
            updatedAt
          }
          userName
          type
          notificationId
          canncelledBy
          note
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAppointmentSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          branchID
          ShopID
          appointments {
            __typename
            nextToken
          }
          Branchs {
            __typename
            nextToken
          }
          operateInBranchId
          role
          app {
            __typename
            nextToken
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          nome
          cognome
          fb
          birthDate
          email
          cell
          userName
          logo {
            __typename
            bucket
            region
            key
          }
          device_id
          blocked
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          branchID
          ShopID
          appointments {
            __typename
            nextToken
          }
          Branchs {
            __typename
            nextToken
          }
          operateInBranchId
          role
          app {
            __typename
            nextToken
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          nome
          cognome
          fb
          birthDate
          email
          cell
          userName
          logo {
            __typename
            bucket
            region
            key
          }
          device_id
          blocked
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          branchID
          ShopID
          appointments {
            __typename
            nextToken
          }
          Branchs {
            __typename
            nextToken
          }
          operateInBranchId
          role
          app {
            __typename
            nextToken
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          nome
          cognome
          fb
          birthDate
          email
          cell
          userName
          logo {
            __typename
            bucket
            region
            key
          }
          device_id
          blocked
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateBranchListener: Observable<OnCreateBranchSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateBranch {
        onCreateBranch {
          __typename
          id
          name
          logo {
            __typename
            bucket
            region
            key
          }
          shopId
          cell
          linkFb
          linkIn
          linkTw
          address
          address_id
          phone
          services {
            __typename
            nextToken
          }
          operators {
            __typename
            nextToken
          }
          users {
            __typename
            nextToken
          }
          admin {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          workTime {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          active
          workCategory
          addressId
          regioneSociale
          pIva
          sedeLegale
          sedeLegale_id
          description
          sede23
          Nuovo
          site
          adminId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBranchSubscription>;

  OnUpdateBranchListener: Observable<OnUpdateBranchSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBranch {
        onUpdateBranch {
          __typename
          id
          name
          logo {
            __typename
            bucket
            region
            key
          }
          shopId
          cell
          linkFb
          linkIn
          linkTw
          address
          address_id
          phone
          services {
            __typename
            nextToken
          }
          operators {
            __typename
            nextToken
          }
          users {
            __typename
            nextToken
          }
          admin {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          workTime {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          active
          workCategory
          addressId
          regioneSociale
          pIva
          sedeLegale
          sedeLegale_id
          description
          sede23
          Nuovo
          site
          adminId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBranchSubscription>;

  OnDeleteBranchListener: Observable<OnDeleteBranchSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBranch {
        onDeleteBranch {
          __typename
          id
          name
          logo {
            __typename
            bucket
            region
            key
          }
          shopId
          cell
          linkFb
          linkIn
          linkTw
          address
          address_id
          phone
          services {
            __typename
            nextToken
          }
          operators {
            __typename
            nextToken
          }
          users {
            __typename
            nextToken
          }
          admin {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          workTime {
            __typename
            nextToken
          }
          appointments {
            __typename
            nextToken
          }
          active
          workCategory
          addressId
          regioneSociale
          pIva
          sedeLegale
          sedeLegale_id
          description
          sede23
          Nuovo
          site
          adminId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBranchSubscription>;

  OnCreateServiceListener: Observable<
    OnCreateServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateService {
        onCreateService {
          __typename
          id
          title
          description
          price
          image {
            __typename
            bucket
            region
            key
          }
          operator {
            __typename
            nextToken
          }
          duration
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          appointments {
            __typename
            nextToken
          }
          deleted
          deletedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateServiceSubscription>;

  OnUpdateServiceListener: Observable<
    OnUpdateServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateService {
        onUpdateService {
          __typename
          id
          title
          description
          price
          image {
            __typename
            bucket
            region
            key
          }
          operator {
            __typename
            nextToken
          }
          duration
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          appointments {
            __typename
            nextToken
          }
          deleted
          deletedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateServiceSubscription>;

  OnDeleteServiceListener: Observable<
    OnDeleteServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteService {
        onDeleteService {
          __typename
          id
          title
          description
          price
          image {
            __typename
            bucket
            region
            key
          }
          operator {
            __typename
            nextToken
          }
          duration
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          appointments {
            __typename
            nextToken
          }
          deleted
          deletedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteServiceSubscription>;

  OnCreateAppUsersListener: Observable<
    OnCreateAppUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppUsers {
        onCreateAppUsers {
          __typename
          id
          appId
          app {
            __typename
            id
            appHID
            appname
            logoapp
            splashscreen
            created_at
            updated_at
            appLink
            defaultBranchId
            colors
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAppUsersSubscription>;

  OnUpdateAppUsersListener: Observable<
    OnUpdateAppUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppUsers {
        onUpdateAppUsers {
          __typename
          id
          appId
          app {
            __typename
            id
            appHID
            appname
            logoapp
            splashscreen
            created_at
            updated_at
            appLink
            defaultBranchId
            colors
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAppUsersSubscription>;

  OnDeleteAppUsersListener: Observable<
    OnDeleteAppUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppUsers {
        onDeleteAppUsers {
          __typename
          id
          appId
          app {
            __typename
            id
            appHID
            appname
            logoapp
            splashscreen
            created_at
            updated_at
            appLink
            defaultBranchId
            colors
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAppUsersSubscription>;

  OnCreateWorkTimeListener: Observable<
    OnCreateWorkTimeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateWorkTime {
        onCreateWorkTime {
          __typename
          id
          start
          end
          offset
          active
          dayWeek
          default
          title
          branchId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateWorkTimeSubscription>;

  OnUpdateWorkTimeListener: Observable<
    OnUpdateWorkTimeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWorkTime {
        onUpdateWorkTime {
          __typename
          id
          start
          end
          offset
          active
          dayWeek
          default
          title
          branchId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateWorkTimeSubscription>;

  OnDeleteWorkTimeListener: Observable<
    OnDeleteWorkTimeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWorkTime {
        onDeleteWorkTime {
          __typename
          id
          start
          end
          offset
          active
          dayWeek
          default
          title
          branchId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteWorkTimeSubscription>;

  OnCreateContactsListener: Observable<
    OnCreateContactsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateContacts {
        onCreateContacts {
          __typename
          id
          subject
          message
          userId
          img {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateContactsSubscription>;

  OnUpdateContactsListener: Observable<
    OnUpdateContactsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateContacts {
        onUpdateContacts {
          __typename
          id
          subject
          message
          userId
          img {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateContactsSubscription>;

  OnDeleteContactsListener: Observable<
    OnDeleteContactsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteContacts {
        onDeleteContacts {
          __typename
          id
          subject
          message
          userId
          img {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteContactsSubscription>;

  OnCreateFaqListener: Observable<OnCreateFaqSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateFaq {
        onCreateFaq {
          __typename
          id
          subject
          description
          order
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateFaqSubscription>;

  OnUpdateFaqListener: Observable<OnUpdateFaqSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFaq {
        onUpdateFaq {
          __typename
          id
          subject
          description
          order
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateFaqSubscription>;

  OnDeleteFaqListener: Observable<OnDeleteFaqSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFaq {
        onDeleteFaq {
          __typename
          id
          subject
          description
          order
          type
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteFaqSubscription>;

  OnCreateBranchUsersListener: Observable<
    OnCreateBranchUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBranchUsers {
        onCreateBranchUsers {
          __typename
          id
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBranchUsersSubscription>;

  OnUpdateBranchUsersListener: Observable<
    OnUpdateBranchUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBranchUsers {
        onUpdateBranchUsers {
          __typename
          id
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBranchUsersSubscription>;

  OnDeleteBranchUsersListener: Observable<
    OnDeleteBranchUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBranchUsers {
        onDeleteBranchUsers {
          __typename
          id
          branchId
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBranchUsersSubscription>;

  OnCreateUserNotesListener: Observable<
    OnCreateUserNotesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUserNotes {
        onCreateUserNotes {
          __typename
          id
          desc
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserNotesSubscription>;

  OnUpdateUserNotesListener: Observable<
    OnUpdateUserNotesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUserNotes {
        onUpdateUserNotes {
          __typename
          id
          desc
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserNotesSubscription>;

  OnDeleteUserNotesListener: Observable<
    OnDeleteUserNotesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUserNotes {
        onDeleteUserNotes {
          __typename
          id
          desc
          userId
          user {
            __typename
            id
            username
            branchID
            ShopID
            operateInBranchId
            role
            nome
            cognome
            fb
            birthDate
            email
            cell
            userName
            device_id
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserNotesSubscription>;

  OnCreateAppointmentNotesListener: Observable<
    OnCreateAppointmentNotesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppointmentNotes {
        onCreateAppointmentNotes {
          __typename
          id
          desc
          appointmentId
          appointment {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAppointmentNotesSubscription>;

  OnUpdateAppointmentNotesListener: Observable<
    OnUpdateAppointmentNotesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppointmentNotes {
        onUpdateAppointmentNotes {
          __typename
          id
          desc
          appointmentId
          appointment {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAppointmentNotesSubscription>;

  OnDeleteAppointmentNotesListener: Observable<
    OnDeleteAppointmentNotesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppointmentNotes {
        onDeleteAppointmentNotes {
          __typename
          id
          desc
          appointmentId
          appointment {
            __typename
            id
            appId
            bookedBy
            branchId
            userId
            end
            start
            date
            price
            cancelled
            serviceId
            userName
            type
            notificationId
            canncelledBy
            note
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAppointmentNotesSubscription>;

  OnCreateCustomerProListener: Observable<
    OnCreateCustomerProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCustomerPro {
        onCreateCustomerPro {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          logo {
            __typename
            bucket
            region
            key
          }
          blocked
          appointments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCustomerProSubscription>;

  OnUpdateCustomerProListener: Observable<
    OnUpdateCustomerProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCustomerPro {
        onUpdateCustomerPro {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          logo {
            __typename
            bucket
            region
            key
          }
          blocked
          appointments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCustomerProSubscription>;

  OnDeleteCustomerProListener: Observable<
    OnDeleteCustomerProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCustomerPro {
        onDeleteCustomerPro {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          logo {
            __typename
            bucket
            region
            key
          }
          blocked
          appointments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCustomerProSubscription>;

  OnCreateOwnerProListener: Observable<
    OnCreateOwnerProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOwnerPro {
        onCreateOwnerPro {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          blocked
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateOwnerProSubscription>;

  OnUpdateOwnerProListener: Observable<
    OnUpdateOwnerProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOwnerPro {
        onUpdateOwnerPro {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          blocked
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateOwnerProSubscription>;

  OnDeleteOwnerProListener: Observable<
    OnDeleteOwnerProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOwnerPro {
        onDeleteOwnerPro {
          __typename
          id
          username
          nome
          cognome
          fb
          email
          cell
          blocked
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteOwnerProSubscription>;

  OnCreateAppProListener: Observable<OnCreateAppProSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppPro {
        onCreateAppPro {
          __typename
          id
          active
          logo {
            __typename
            bucket
            region
            key
          }
          name
          description
          SplashScreen {
            __typename
            bucket
            region
            key
          }
          link
          CreatedAt
          UpdateAt
          type
          style {
            __typename
            id
            palette
            headers
            tab
            pages
            menu
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAppProSubscription>;

  OnUpdateAppProListener: Observable<OnUpdateAppProSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppPro {
        onUpdateAppPro {
          __typename
          id
          active
          logo {
            __typename
            bucket
            region
            key
          }
          name
          description
          SplashScreen {
            __typename
            bucket
            region
            key
          }
          link
          CreatedAt
          UpdateAt
          type
          style {
            __typename
            id
            palette
            headers
            tab
            pages
            menu
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAppProSubscription>;

  OnDeleteAppProListener: Observable<OnDeleteAppProSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppPro {
        onDeleteAppPro {
          __typename
          id
          active
          logo {
            __typename
            bucket
            region
            key
          }
          name
          description
          SplashScreen {
            __typename
            bucket
            region
            key
          }
          link
          CreatedAt
          UpdateAt
          type
          style {
            __typename
            id
            palette
            headers
            tab
            pages
            menu
            createdAt
            updatedAt
          }
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAppProSubscription>;

  OnCreateAppointmentProListener: Observable<
    OnCreateAppointmentProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppointmentPro {
        onCreateAppointmentPro {
          __typename
          id
          customerId
          date
          start
          end
          confirmedData
          confirmed
          note
          services {
            __typename
            id
            branch_id
            title
            Description
            Image
            Deleted
            Deleted_at
            duration
            price
            createdAt
            updatedAt
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateAppointmentProSubscription>;

  OnUpdateAppointmentProListener: Observable<
    OnUpdateAppointmentProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppointmentPro {
        onUpdateAppointmentPro {
          __typename
          id
          customerId
          date
          start
          end
          confirmedData
          confirmed
          note
          services {
            __typename
            id
            branch_id
            title
            Description
            Image
            Deleted
            Deleted_at
            duration
            price
            createdAt
            updatedAt
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateAppointmentProSubscription>;

  OnDeleteAppointmentProListener: Observable<
    OnDeleteAppointmentProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppointmentPro {
        onDeleteAppointmentPro {
          __typename
          id
          customerId
          date
          start
          end
          confirmedData
          confirmed
          note
          services {
            __typename
            id
            branch_id
            title
            Description
            Image
            Deleted
            Deleted_at
            duration
            price
            createdAt
            updatedAt
          }
          branch {
            __typename
            id
            name
            shopId
            cell
            linkFb
            linkIn
            linkTw
            address
            address_id
            phone
            active
            workCategory
            addressId
            regioneSociale
            pIva
            sedeLegale
            sedeLegale_id
            description
            sede23
            Nuovo
            site
            adminId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteAppointmentProSubscription>;

  OnCreateServiceProListener: Observable<
    OnCreateServiceProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateServicePro {
        onCreateServicePro {
          __typename
          id
          branch_id
          branch {
            __typename
            id
            phone
            Active
            linkFB
            linkIG
            linkTW
            workCategory
            address
            address_id
            createdAt
            updatedAt
          }
          title
          Description
          Image
          Deleted
          Deleted_at
          duration
          price
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateServiceProSubscription>;

  OnUpdateServiceProListener: Observable<
    OnUpdateServiceProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateServicePro {
        onUpdateServicePro {
          __typename
          id
          branch_id
          branch {
            __typename
            id
            phone
            Active
            linkFB
            linkIG
            linkTW
            workCategory
            address
            address_id
            createdAt
            updatedAt
          }
          title
          Description
          Image
          Deleted
          Deleted_at
          duration
          price
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateServiceProSubscription>;

  OnDeleteServiceProListener: Observable<
    OnDeleteServiceProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteServicePro {
        onDeleteServicePro {
          __typename
          id
          branch_id
          branch {
            __typename
            id
            phone
            Active
            linkFB
            linkIG
            linkTW
            workCategory
            address
            address_id
            createdAt
            updatedAt
          }
          title
          Description
          Image
          Deleted
          Deleted_at
          duration
          price
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteServiceProSubscription>;

  OnCreateBranchProListener: Observable<
    OnCreateBranchProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBranchPro {
        onCreateBranchPro {
          __typename
          id
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          phone
          Active
          linkFB
          linkIG
          linkTW
          workTime {
            __typename
            id
            start
            end
            offset
            active
            dayWeek
            default
            title
            branchId
            createdAt
            updatedAt
          }
          workCategory
          address
          address_id
          services {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateBranchProSubscription>;

  OnUpdateBranchProListener: Observable<
    OnUpdateBranchProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBranchPro {
        onUpdateBranchPro {
          __typename
          id
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          phone
          Active
          linkFB
          linkIG
          linkTW
          workTime {
            __typename
            id
            start
            end
            offset
            active
            dayWeek
            default
            title
            branchId
            createdAt
            updatedAt
          }
          workCategory
          address
          address_id
          services {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateBranchProSubscription>;

  OnDeleteBranchProListener: Observable<
    OnDeleteBranchProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBranchPro {
        onDeleteBranchPro {
          __typename
          id
          shop {
            __typename
            id
            name
            description
            pIva
            ragioneSociale
            sedeLegale
            sedeLegale_id
            website
            createdAt
            updatedAt
          }
          phone
          Active
          linkFB
          linkIG
          linkTW
          workTime {
            __typename
            id
            start
            end
            offset
            active
            dayWeek
            default
            title
            branchId
            createdAt
            updatedAt
          }
          workCategory
          address
          address_id
          services {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteBranchProSubscription>;

  OnCreateShopProListener: Observable<
    OnCreateShopProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateShopPro {
        onCreateShopPro {
          __typename
          id
          name
          description
          logo {
            __typename
            bucket
            region
            key
          }
          pIva
          ragioneSociale
          sedeLegale
          sedeLegale_id
          website
          branchs {
            __typename
            nextToken
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateShopProSubscription>;

  OnUpdateShopProListener: Observable<
    OnUpdateShopProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateShopPro {
        onUpdateShopPro {
          __typename
          id
          name
          description
          logo {
            __typename
            bucket
            region
            key
          }
          pIva
          ragioneSociale
          sedeLegale
          sedeLegale_id
          website
          branchs {
            __typename
            nextToken
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateShopProSubscription>;

  OnDeleteShopProListener: Observable<
    OnDeleteShopProSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteShopPro {
        onDeleteShopPro {
          __typename
          id
          name
          description
          logo {
            __typename
            bucket
            region
            key
          }
          pIva
          ragioneSociale
          sedeLegale
          sedeLegale_id
          website
          branchs {
            __typename
            nextToken
          }
          owner {
            __typename
            id
            username
            nome
            cognome
            fb
            email
            cell
            blocked
            createdAt
            updatedAt
          }
          app {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteShopProSubscription>;

  OnCreateStyleListener: Observable<OnCreateStyleSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStyle {
        onCreateStyle {
          __typename
          id
          appPro {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          palette
          headers
          tab
          pages
          menu
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateStyleSubscription>;

  OnUpdateStyleListener: Observable<OnUpdateStyleSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStyle {
        onUpdateStyle {
          __typename
          id
          appPro {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          palette
          headers
          tab
          pages
          menu
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateStyleSubscription>;

  OnDeleteStyleListener: Observable<OnDeleteStyleSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStyle {
        onDeleteStyle {
          __typename
          id
          appPro {
            __typename
            id
            active
            name
            description
            link
            CreatedAt
            UpdateAt
            type
            createdAt
            updatedAt
          }
          palette
          headers
          tab
          pages
          menu
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteStyleSubscription>;
}
