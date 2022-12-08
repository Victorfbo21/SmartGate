/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  Date: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: any;
}

export enum EnumusersUf {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO'
}

export enum EnumusersRole {
  user = 'user',
  viewer = 'viewer',
  admin = 'admin'
}

export interface FilterFindManyusersInput {
  owner?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['JSON']>;
  cpf?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumusersUf>;
  enabled?: Maybe<Scalars['Boolean']>;
  lastSeenAt?: Maybe<Scalars['Date']>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  role?: Maybe<EnumusersRole>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyusersOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyusersInput>>;
  AND?: Maybe<Array<FilterFindManyusersInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyusersOperatorsInput {
  email?: Maybe<FilterFindManyusersEmailOperatorsInput>;
  _id?: Maybe<FilterFindManyusers_idOperatorsInput>;
}

export interface FilterFindManyusersEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterFindManyusers_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortFindManyusersInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  EMAIL_ASC = 'EMAIL_ASC',
  EMAIL_DESC = 'EMAIL_DESC'
}

export interface FilterCountusersInput {
  owner?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['JSON']>;
  cpf?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumusersUf>;
  enabled?: Maybe<Scalars['Boolean']>;
  lastSeenAt?: Maybe<Scalars['Date']>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  role?: Maybe<EnumusersRole>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountusersOperatorsInput>;
  OR?: Maybe<Array<FilterCountusersInput>>;
  AND?: Maybe<Array<FilterCountusersInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountusersOperatorsInput {
  email?: Maybe<FilterCountusersEmailOperatorsInput>;
  _id?: Maybe<FilterCountusers_idOperatorsInput>;
}

export interface FilterCountusersEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterCountusers_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum EnumorgsUf {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO'
}

export interface FilterFindManyorgsInput {
  org?: Maybe<Scalars['JSON']>;
  nome?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  cidade?: Maybe<Scalars['JSON']>;
  uf?: Maybe<EnumorgsUf>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyorgsOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyorgsInput>>;
  AND?: Maybe<Array<FilterFindManyorgsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyorgsOperatorsInput {
  email?: Maybe<FilterFindManyorgsEmailOperatorsInput>;
  _id?: Maybe<FilterFindManyorgs_idOperatorsInput>;
}

export interface FilterFindManyorgsEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterFindManyorgs_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortFindManyorgsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  EMAIL_ASC = 'EMAIL_ASC',
  EMAIL_DESC = 'EMAIL_DESC'
}

export interface FilterCountorgsInput {
  org?: Maybe<Scalars['JSON']>;
  nome?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  cidade?: Maybe<Scalars['JSON']>;
  uf?: Maybe<EnumorgsUf>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountorgsOperatorsInput>;
  OR?: Maybe<Array<FilterCountorgsInput>>;
  AND?: Maybe<Array<FilterCountorgsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountorgsOperatorsInput {
  email?: Maybe<FilterCountorgsEmailOperatorsInput>;
  _id?: Maybe<FilterCountorgs_idOperatorsInput>;
}

export interface FilterCountorgsEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterCountorgs_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum EnumprojectsUf {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO'
}

export interface FilterFindManyprojectsInput {
  owner?: Maybe<Scalars['MongoID']>;
  org?: Maybe<Scalars['MongoID']>;
  projeto?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['String']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumprojectsUf>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyprojectsOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyprojectsInput>>;
  AND?: Maybe<Array<FilterFindManyprojectsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyprojectsOperatorsInput {
  email?: Maybe<FilterFindManyprojectsEmailOperatorsInput>;
  _id?: Maybe<FilterFindManyprojects_idOperatorsInput>;
}

export interface FilterFindManyprojectsEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterFindManyprojects_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortFindManyprojectsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  EMAIL_ASC = 'EMAIL_ASC',
  EMAIL_DESC = 'EMAIL_DESC'
}

export interface FilterCountprojectsInput {
  owner?: Maybe<Scalars['MongoID']>;
  org?: Maybe<Scalars['MongoID']>;
  projeto?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['String']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumprojectsUf>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountprojectsOperatorsInput>;
  OR?: Maybe<Array<FilterCountprojectsInput>>;
  AND?: Maybe<Array<FilterCountprojectsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountprojectsOperatorsInput {
  email?: Maybe<FilterCountprojectsEmailOperatorsInput>;
  _id?: Maybe<FilterCountprojects_idOperatorsInput>;
}

export interface FilterCountprojectsEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterCountprojects_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum EnumequipmentsType {
  DIGEST = 'DIGEST',
  CONTROLLER = 'CONTROLLER',
  SENSOR = 'SENSOR'
}

export interface FilterFindManyequipmentsInput {
  owner?: Maybe<Scalars['MongoID']>;
  project?: Maybe<Scalars['MongoID']>;
  descricao?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  controlador?: Maybe<Scalars['MongoID']>;
  type?: Maybe<EnumequipmentsType>;
  modelo?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  parametros?: Maybe<Array<Maybe<FilterFindManyequipmentsParametrosInput>>>;
  order?: Maybe<Scalars['Float']>;
  responsavel?: Maybe<Scalars['String']>;
  iniciadoEm?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyequipmentsOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyequipmentsInput>>;
  AND?: Maybe<Array<FilterFindManyequipmentsInput>>;
}

export interface FilterFindManyequipmentsParametrosInput {
  nome?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['String']>;
  unidadeMedida?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyequipmentsOperatorsInput {
  code?: Maybe<FilterFindManyequipmentsCodeOperatorsInput>;
  _id?: Maybe<FilterFindManyequipments_idOperatorsInput>;
}

export interface FilterFindManyequipmentsCodeOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterFindManyequipments_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortFindManyequipmentsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  CODE_ASC = 'CODE_ASC',
  CODE_DESC = 'CODE_DESC'
}

export interface FilterCountequipmentsInput {
  owner?: Maybe<Scalars['MongoID']>;
  project?: Maybe<Scalars['MongoID']>;
  descricao?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  controlador?: Maybe<Scalars['MongoID']>;
  type?: Maybe<EnumequipmentsType>;
  modelo?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  parametros?: Maybe<Array<Maybe<FilterCountequipmentsParametrosInput>>>;
  order?: Maybe<Scalars['Float']>;
  responsavel?: Maybe<Scalars['String']>;
  iniciadoEm?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountequipmentsOperatorsInput>;
  OR?: Maybe<Array<FilterCountequipmentsInput>>;
  AND?: Maybe<Array<FilterCountequipmentsInput>>;
}

export interface FilterCountequipmentsParametrosInput {
  nome?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['String']>;
  unidadeMedida?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountequipmentsOperatorsInput {
  code?: Maybe<FilterCountequipmentsCodeOperatorsInput>;
  _id?: Maybe<FilterCountequipments_idOperatorsInput>;
}

export interface FilterCountequipmentsCodeOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterCountequipments_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterFindManydata_sensorsInput {
  device?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  measureUnity?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManydata_sensorsOperatorsInput>;
  OR?: Maybe<Array<FilterFindManydata_sensorsInput>>;
  AND?: Maybe<Array<FilterFindManydata_sensorsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManydata_sensorsOperatorsInput {
  _id?: Maybe<FilterFindManydata_sensors_idOperatorsInput>;
}

export interface FilterFindManydata_sensors_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortFindManydata_sensorsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  /** Ordena por data decrescente */
  CREATED_AT_DESC = 'CREATED_AT_DESC'
}

export interface FilterCountdata_sensorsInput {
  device?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  measureUnity?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountdata_sensorsOperatorsInput>;
  OR?: Maybe<Array<FilterCountdata_sensorsInput>>;
  AND?: Maybe<Array<FilterCountdata_sensorsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterCountdata_sensorsOperatorsInput {
  _id?: Maybe<FilterCountdata_sensors_idOperatorsInput>;
}

export interface FilterCountdata_sensors_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface CreateOneusersInput {
  owner?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['JSON']>;
  cpf?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumusersUf>;
  enabled?: Maybe<Scalars['Boolean']>;
  lastSeenAt?: Maybe<Scalars['Date']>;
  responsavel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['Date']>;
  role?: Maybe<EnumusersRole>;
}

export interface UpdateOneusersInput {
  owner?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['JSON']>;
  cpf?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumusersUf>;
  enabled?: Maybe<Scalars['Boolean']>;
  lastSeenAt?: Maybe<Scalars['Date']>;
  responsavel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  role?: Maybe<EnumusersRole>;
}

export interface FilterUpdateOneusersInput {
  owner?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['JSON']>;
  cpf?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumusersUf>;
  enabled?: Maybe<Scalars['Boolean']>;
  lastSeenAt?: Maybe<Scalars['Date']>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  role?: Maybe<EnumusersRole>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneusersOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneusersInput>>;
  AND?: Maybe<Array<FilterUpdateOneusersInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneusersOperatorsInput {
  email?: Maybe<FilterUpdateOneusersEmailOperatorsInput>;
  _id?: Maybe<FilterUpdateOneusers_idOperatorsInput>;
}

export interface FilterUpdateOneusersEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterUpdateOneusers_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortUpdateOneusersInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  EMAIL_ASC = 'EMAIL_ASC',
  EMAIL_DESC = 'EMAIL_DESC'
}

export interface CreateOneorgsInput {
  org?: Maybe<Scalars['JSON']>;
  nome?: Maybe<Scalars['JSON']>;
  email: Scalars['String'];
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  cidade?: Maybe<Scalars['JSON']>;
  uf?: Maybe<EnumorgsUf>;
  responsavel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['Date']>;
}

export interface UpdateOneorgsInput {
  org?: Maybe<Scalars['JSON']>;
  nome?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  cidade?: Maybe<Scalars['JSON']>;
  uf?: Maybe<EnumorgsUf>;
  responsavel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
}

export interface FilterUpdateOneorgsInput {
  org?: Maybe<Scalars['JSON']>;
  nome?: Maybe<Scalars['JSON']>;
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['JSON']>;
  cidade?: Maybe<Scalars['JSON']>;
  uf?: Maybe<EnumorgsUf>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneorgsOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneorgsInput>>;
  AND?: Maybe<Array<FilterUpdateOneorgsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneorgsOperatorsInput {
  email?: Maybe<FilterUpdateOneorgsEmailOperatorsInput>;
  _id?: Maybe<FilterUpdateOneorgs_idOperatorsInput>;
}

export interface FilterUpdateOneorgsEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterUpdateOneorgs_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortUpdateOneorgsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  EMAIL_ASC = 'EMAIL_ASC',
  EMAIL_DESC = 'EMAIL_DESC'
}

export interface CreateOneprojectsInput {
  owner?: Maybe<Scalars['MongoID']>;
  org?: Maybe<Scalars['MongoID']>;
  projeto?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['String']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumprojectsUf>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  responsavel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['Date']>;
}

export interface UpdateOneprojectsInput {
  owner?: Maybe<Scalars['MongoID']>;
  org?: Maybe<Scalars['MongoID']>;
  projeto?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['String']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumprojectsUf>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  responsavel?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
}

export interface FilterUpdateOneprojectsInput {
  owner?: Maybe<Scalars['MongoID']>;
  org?: Maybe<Scalars['MongoID']>;
  projeto?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['String']>;
  rua?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
  complemento?: Maybe<Scalars['String']>;
  bairro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  uf?: Maybe<EnumprojectsUf>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  responsavel?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneprojectsOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneprojectsInput>>;
  AND?: Maybe<Array<FilterUpdateOneprojectsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneprojectsOperatorsInput {
  email?: Maybe<FilterUpdateOneprojectsEmailOperatorsInput>;
  _id?: Maybe<FilterUpdateOneprojects_idOperatorsInput>;
}

export interface FilterUpdateOneprojectsEmailOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterUpdateOneprojects_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortUpdateOneprojectsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  EMAIL_ASC = 'EMAIL_ASC',
  EMAIL_DESC = 'EMAIL_DESC'
}

export interface CreateOneequipmentsInput {
  owner?: Maybe<Scalars['MongoID']>;
  project?: Maybe<Scalars['MongoID']>;
  descricao?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  controlador?: Maybe<Scalars['MongoID']>;
  type?: Maybe<EnumequipmentsType>;
  modelo?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  parametros?: Maybe<Array<Maybe<equipmentsParametrosInput>>>;
  order?: Maybe<Scalars['Float']>;
  responsavel?: Maybe<Scalars['String']>;
  iniciadoEm?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted: Scalars['Boolean'];
  deletedAt?: Maybe<Scalars['Date']>;
}

export interface equipmentsParametrosInput {
  nome?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['String']>;
  unidadeMedida?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
}

export interface UpdateOneequipmentsInput {
  owner?: Maybe<Scalars['MongoID']>;
  project?: Maybe<Scalars['MongoID']>;
  descricao?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  controlador?: Maybe<Scalars['MongoID']>;
  type?: Maybe<EnumequipmentsType>;
  modelo?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  parametros?: Maybe<Array<Maybe<UpdateOneequipmentsParametrosInput>>>;
  order?: Maybe<Scalars['Float']>;
  responsavel?: Maybe<Scalars['String']>;
  iniciadoEm?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
}

export interface UpdateOneequipmentsParametrosInput {
  nome?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['String']>;
  unidadeMedida?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
}

export interface FilterUpdateOneequipmentsInput {
  owner?: Maybe<Scalars['MongoID']>;
  project?: Maybe<Scalars['MongoID']>;
  descricao?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  controlador?: Maybe<Scalars['MongoID']>;
  type?: Maybe<EnumequipmentsType>;
  modelo?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  parametros?: Maybe<Array<Maybe<FilterUpdateOneequipmentsParametrosInput>>>;
  order?: Maybe<Scalars['Float']>;
  responsavel?: Maybe<Scalars['String']>;
  iniciadoEm?: Maybe<Scalars['Date']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneequipmentsOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneequipmentsInput>>;
  AND?: Maybe<Array<FilterUpdateOneequipmentsInput>>;
}

export interface FilterUpdateOneequipmentsParametrosInput {
  nome?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['String']>;
  unidadeMedida?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOneequipmentsOperatorsInput {
  code?: Maybe<FilterUpdateOneequipmentsCodeOperatorsInput>;
  _id?: Maybe<FilterUpdateOneequipments_idOperatorsInput>;
}

export interface FilterUpdateOneequipmentsCodeOperatorsInput {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
}

export interface FilterUpdateOneequipments_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortUpdateOneequipmentsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  CODE_ASC = 'CODE_ASC',
  CODE_DESC = 'CODE_DESC'
}

export interface CreateOnedata_sensorsInput {
  device?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  measureUnity?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
}

export interface UpdateOnedata_sensorsInput {
  device?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  measureUnity?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
}

export interface FilterUpdateOnedata_sensorsInput {
  device?: Maybe<Scalars['String']>;
  paramName?: Maybe<Scalars['String']>;
  paramCode?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  measureUnity?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOnedata_sensorsOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOnedata_sensorsInput>>;
  AND?: Maybe<Array<FilterUpdateOnedata_sensorsInput>>;
}

/** For performance reason this type contains only *indexed* fields. */
export interface FilterUpdateOnedata_sensorsOperatorsInput {
  _id?: Maybe<FilterUpdateOnedata_sensors_idOperatorsInput>;
}

export interface FilterUpdateOnedata_sensors_idOperatorsInput {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
}

export enum SortUpdateOnedata_sensorsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export const scalarsEnumsHash: import('gqless').ScalarsEnumsHash = {
  String: true,
  JSON: true,
  EnumusersUf: true,
  Boolean: true,
  Date: true,
  MongoID: true,
  EnumusersRole: true,
  RegExpAsString: true,
  Int: true,
  SortFindManyusersInput: true,
  EnumorgsUf: true,
  SortFindManyorgsInput: true,
  EnumprojectsUf: true,
  SortFindManyprojectsInput: true,
  EnumequipmentsType: true,
  Float: true,
  SortFindManyequipmentsInput: true,
  SortFindManydata_sensorsInput: true,
  SortUpdateOneusersInput: true,
  SortUpdateOneorgsInput: true,
  SortUpdateOneprojectsInput: true,
  SortUpdateOneequipmentsInput: true,
  SortUpdateOnedata_sensorsInput: true
};
export const generatedSchema = {
  query: {
    __typename: { __type: 'String!' },
    userById: { __type: 'users', __args: { _id: 'MongoID!' } },
    userMany: {
      __type: '[users!]!',
      __args: {
        filter: 'FilterFindManyusersInput',
        skip: 'Int',
        limit: 'Int',
        sort: 'SortFindManyusersInput'
      }
    },
    userCount: { __type: 'Int', __args: { filter: 'FilterCountusersInput' } },
    userPagination: {
      __type: 'usersPagination',
      __args: {
        page: 'Int',
        perPage: 'Int',
        filter: 'FilterFindManyusersInput',
        sort: 'SortFindManyusersInput'
      }
    },
    orgById: { __type: 'orgs', __args: { _id: 'MongoID!' } },
    orgMany: {
      __type: '[orgs!]!',
      __args: {
        filter: 'FilterFindManyorgsInput',
        skip: 'Int',
        limit: 'Int',
        sort: 'SortFindManyorgsInput'
      }
    },
    orgCount: { __type: 'Int', __args: { filter: 'FilterCountorgsInput' } },
    orgPagination: {
      __type: 'orgsPagination',
      __args: {
        page: 'Int',
        perPage: 'Int',
        filter: 'FilterFindManyorgsInput',
        sort: 'SortFindManyorgsInput'
      }
    },
    projectById: { __type: 'projects', __args: { _id: 'MongoID!' } },
    projectMany: {
      __type: '[projects!]!',
      __args: {
        filter: 'FilterFindManyprojectsInput',
        skip: 'Int',
        limit: 'Int',
        sort: 'SortFindManyprojectsInput'
      }
    },
    projectCount: {
      __type: 'Int',
      __args: { filter: 'FilterCountprojectsInput' }
    },
    projectPagination: {
      __type: 'projectsPagination',
      __args: {
        page: 'Int',
        perPage: 'Int',
        filter: 'FilterFindManyprojectsInput',
        sort: 'SortFindManyprojectsInput'
      }
    },
    equipmentById: { __type: 'equipments', __args: { _id: 'MongoID!' } },
    equipmentMany: {
      __type: '[equipments!]!',
      __args: {
        filter: 'FilterFindManyequipmentsInput',
        skip: 'Int',
        limit: 'Int',
        sort: 'SortFindManyequipmentsInput'
      }
    },
    equipmentCount: {
      __type: 'Int',
      __args: { filter: 'FilterCountequipmentsInput' }
    },
    equipmentPagination: {
      __type: 'equipmentsPagination',
      __args: {
        page: 'Int',
        perPage: 'Int',
        filter: 'FilterFindManyequipmentsInput',
        sort: 'SortFindManyequipmentsInput'
      }
    },
    getUserContext: { __type: 'GetUserContext' },
    dataSensorsById: { __type: 'data_sensors', __args: { _id: 'MongoID!' } },
    dataSensorsByDevice: {
      __type: 'data_sensors',
      __args: { device: 'String', page: 'Int', perPage: 'Int' }
    },
    dataSensorsByController: {
      __type: 'data_sensors',
      __args: { id: 'String', page: 'Int', perPage: 'Int' }
    },
    dataSensorsMany: {
      __type: '[data_sensors!]!',
      __args: {
        filter: 'FilterFindManydata_sensorsInput',
        skip: 'Int',
        limit: 'Int',
        sort: 'SortFindManydata_sensorsInput'
      }
    },
    dataSensorsCount: {
      __type: 'Int',
      __args: { filter: 'FilterCountdata_sensorsInput' }
    },
    dataSensorsPagination: {
      __type: 'data_sensorsPagination',
      __args: {
        page: 'Int',
        perPage: 'Int',
        filter: 'FilterFindManydata_sensorsInput',
        sort: 'SortFindManydata_sensorsInput'
      }
    }
  },
  mutation: {
    __typename: { __type: 'String!' },
    userCreateOne: {
      __type: 'CreateOneusersPayload',
      __args: { record: 'CreateOneusersInput!' }
    },
    userUpdateOne: {
      __type: 'UpdateOneusersPayload',
      __args: {
        record: 'UpdateOneusersInput!',
        filter: 'FilterUpdateOneusersInput',
        sort: 'SortUpdateOneusersInput',
        skip: 'Int'
      }
    },
    userDelete: {
      __type: 'RemoveByIdusersPayload',
      __args: { _id: 'MongoID!' }
    },
    orgCreateOne: {
      __type: 'CreateOneorgsPayload',
      __args: { record: 'CreateOneorgsInput!' }
    },
    orgUpdateOne: {
      __type: 'UpdateOneorgsPayload',
      __args: {
        record: 'UpdateOneorgsInput!',
        filter: 'FilterUpdateOneorgsInput',
        sort: 'SortUpdateOneorgsInput',
        skip: 'Int'
      }
    },
    orgDelete: { __type: 'RemoveByIdorgsPayload', __args: { _id: 'MongoID!' } },
    projectCreateOne: {
      __type: 'CreateOneprojectsPayload',
      __args: { record: 'CreateOneprojectsInput!' }
    },
    projectUpdateOne: {
      __type: 'UpdateOneprojectsPayload',
      __args: {
        record: 'UpdateOneprojectsInput!',
        filter: 'FilterUpdateOneprojectsInput',
        sort: 'SortUpdateOneprojectsInput',
        skip: 'Int'
      }
    },
    projectDelete: {
      __type: 'RemoveByIdprojectsPayload',
      __args: { _id: 'MongoID!' }
    },
    equipmentCreateOne: {
      __type: 'CreateOneequipmentsPayload',
      __args: { record: 'CreateOneequipmentsInput!' }
    },
    equipmentUpdateOne: {
      __type: 'UpdateOneequipmentsPayload',
      __args: {
        record: 'UpdateOneequipmentsInput!',
        filter: 'FilterUpdateOneequipmentsInput',
        sort: 'SortUpdateOneequipmentsInput',
        skip: 'Int'
      }
    },
    equipmentDelete: {
      __type: 'RemoveByIdequipmentsPayload',
      __args: { _id: 'MongoID!' }
    },
    login: { __type: 'Auth', __args: { email: 'String', password: 'String' } },
    RefreshTokenTC: { __type: 'RefreshToken' },
    dataSensorsCreateOne: {
      __type: 'CreateOnedata_sensorsPayload',
      __args: { record: 'CreateOnedata_sensorsInput!' }
    },
    dataSensorsUpdateOne: {
      __type: 'UpdateOnedata_sensorsPayload',
      __args: {
        record: 'UpdateOnedata_sensorsInput!',
        filter: 'FilterUpdateOnedata_sensorsInput',
        sort: 'SortUpdateOnedata_sensorsInput',
        skip: 'Int'
      }
    },
    dataSensorsDelete: {
      __type: 'RemoveByIddata_sensorsPayload',
      __args: { _id: 'MongoID!' }
    }
  },
  subscription: {
    __typename: { __type: 'String!' },
    usersUpdated: { __type: 'users' },
    DataSensorCreated: {
      __type: 'SubPayload',
      __args: { device: 'String', code: 'Int', limit: 'Int' }
    }
  },
  users: {
    __typename: { __type: 'String!' },
    owner: { __type: 'String' },
    email: { __type: 'String!' },
    password: { __type: 'String' },
    nome: { __type: 'JSON' },
    cpf: { __type: 'String' },
    telefone: { __type: 'JSON' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumusersUf' },
    enabled: { __type: 'Boolean' },
    lastSeenAt: { __type: 'Date' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID!' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean!' },
    deletedAt: { __type: 'Date' },
    role: { __type: 'EnumusersRole' }
  },
  FilterFindManyusersInput: {
    owner: { __type: 'String' },
    email: { __type: 'String' },
    password: { __type: 'String' },
    nome: { __type: 'JSON' },
    cpf: { __type: 'String' },
    telefone: { __type: 'JSON' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumusersUf' },
    enabled: { __type: 'Boolean' },
    lastSeenAt: { __type: 'Date' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    role: { __type: 'EnumusersRole' },
    _operators: { __type: 'FilterFindManyusersOperatorsInput' },
    OR: { __type: '[FilterFindManyusersInput!]' },
    AND: { __type: '[FilterFindManyusersInput!]' }
  },
  FilterFindManyusersOperatorsInput: {
    email: { __type: 'FilterFindManyusersEmailOperatorsInput' },
    _id: { __type: 'FilterFindManyusers_idOperatorsInput' }
  },
  FilterFindManyusersEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterFindManyusers_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  FilterCountusersInput: {
    owner: { __type: 'String' },
    email: { __type: 'String' },
    password: { __type: 'String' },
    nome: { __type: 'JSON' },
    cpf: { __type: 'String' },
    telefone: { __type: 'JSON' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumusersUf' },
    enabled: { __type: 'Boolean' },
    lastSeenAt: { __type: 'Date' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    role: { __type: 'EnumusersRole' },
    _operators: { __type: 'FilterCountusersOperatorsInput' },
    OR: { __type: '[FilterCountusersInput!]' },
    AND: { __type: '[FilterCountusersInput!]' }
  },
  FilterCountusersOperatorsInput: {
    email: { __type: 'FilterCountusersEmailOperatorsInput' },
    _id: { __type: 'FilterCountusers_idOperatorsInput' }
  },
  FilterCountusersEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterCountusers_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  usersPagination: {
    __typename: { __type: 'String!' },
    count: { __type: 'Int' },
    items: { __type: '[users!]' },
    pageInfo: { __type: 'PaginationInfo!' }
  },
  PaginationInfo: {
    __typename: { __type: 'String!' },
    currentPage: { __type: 'Int!' },
    perPage: { __type: 'Int!' },
    pageCount: { __type: 'Int' },
    itemCount: { __type: 'Int' },
    hasNextPage: { __type: 'Boolean' },
    hasPreviousPage: { __type: 'Boolean' }
  },
  orgs: {
    __typename: { __type: 'String!' },
    org: { __type: 'JSON' },
    nome: { __type: 'JSON' },
    email: { __type: 'String!' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'JSON' },
    cidade: { __type: 'JSON' },
    uf: { __type: 'EnumorgsUf' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID!' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean!' },
    deletedAt: { __type: 'Date' }
  },
  FilterFindManyorgsInput: {
    org: { __type: 'JSON' },
    nome: { __type: 'JSON' },
    email: { __type: 'String' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'JSON' },
    cidade: { __type: 'JSON' },
    uf: { __type: 'EnumorgsUf' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterFindManyorgsOperatorsInput' },
    OR: { __type: '[FilterFindManyorgsInput!]' },
    AND: { __type: '[FilterFindManyorgsInput!]' }
  },
  FilterFindManyorgsOperatorsInput: {
    email: { __type: 'FilterFindManyorgsEmailOperatorsInput' },
    _id: { __type: 'FilterFindManyorgs_idOperatorsInput' }
  },
  FilterFindManyorgsEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterFindManyorgs_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  FilterCountorgsInput: {
    org: { __type: 'JSON' },
    nome: { __type: 'JSON' },
    email: { __type: 'String' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'JSON' },
    cidade: { __type: 'JSON' },
    uf: { __type: 'EnumorgsUf' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterCountorgsOperatorsInput' },
    OR: { __type: '[FilterCountorgsInput!]' },
    AND: { __type: '[FilterCountorgsInput!]' }
  },
  FilterCountorgsOperatorsInput: {
    email: { __type: 'FilterCountorgsEmailOperatorsInput' },
    _id: { __type: 'FilterCountorgs_idOperatorsInput' }
  },
  FilterCountorgsEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterCountorgs_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  orgsPagination: {
    __typename: { __type: 'String!' },
    count: { __type: 'Int' },
    items: { __type: '[orgs!]' },
    pageInfo: { __type: 'PaginationInfo!' }
  },
  projects: {
    __typename: { __type: 'String!' },
    owner: { __type: 'MongoID' },
    org: { __type: 'MongoID' },
    projeto: { __type: 'String' },
    nome: { __type: 'String' },
    email: { __type: 'String!' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'String' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumprojectsUf' },
    latitude: { __type: 'String' },
    longitude: { __type: 'String' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID!' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean!' },
    deletedAt: { __type: 'Date' }
  },
  FilterFindManyprojectsInput: {
    owner: { __type: 'MongoID' },
    org: { __type: 'MongoID' },
    projeto: { __type: 'String' },
    nome: { __type: 'String' },
    email: { __type: 'String' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'String' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumprojectsUf' },
    latitude: { __type: 'String' },
    longitude: { __type: 'String' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterFindManyprojectsOperatorsInput' },
    OR: { __type: '[FilterFindManyprojectsInput!]' },
    AND: { __type: '[FilterFindManyprojectsInput!]' }
  },
  FilterFindManyprojectsOperatorsInput: {
    email: { __type: 'FilterFindManyprojectsEmailOperatorsInput' },
    _id: { __type: 'FilterFindManyprojects_idOperatorsInput' }
  },
  FilterFindManyprojectsEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterFindManyprojects_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  FilterCountprojectsInput: {
    owner: { __type: 'MongoID' },
    org: { __type: 'MongoID' },
    projeto: { __type: 'String' },
    nome: { __type: 'String' },
    email: { __type: 'String' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'String' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumprojectsUf' },
    latitude: { __type: 'String' },
    longitude: { __type: 'String' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterCountprojectsOperatorsInput' },
    OR: { __type: '[FilterCountprojectsInput!]' },
    AND: { __type: '[FilterCountprojectsInput!]' }
  },
  FilterCountprojectsOperatorsInput: {
    email: { __type: 'FilterCountprojectsEmailOperatorsInput' },
    _id: { __type: 'FilterCountprojects_idOperatorsInput' }
  },
  FilterCountprojectsEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterCountprojects_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  projectsPagination: {
    __typename: { __type: 'String!' },
    count: { __type: 'Int' },
    items: { __type: '[projects!]' },
    pageInfo: { __type: 'PaginationInfo!' }
  },
  equipments: {
    __typename: { __type: 'String!' },
    owner: { __type: 'MongoID' },
    project: { __type: 'MongoID' },
    descricao: { __type: 'String' },
    code: { __type: 'String!' },
    controlador: { __type: 'MongoID' },
    type: { __type: 'EnumequipmentsType' },
    modelo: { __type: 'String' },
    volume: { __type: 'Float' },
    parametros: { __type: '[equipmentsParametros]' },
    order: { __type: 'Float' },
    responsavel: { __type: 'String' },
    iniciadoEm: { __type: 'Date' },
    _id: { __type: 'MongoID!' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean!' },
    deletedAt: { __type: 'Date' }
  },
  equipmentsParametros: {
    __typename: { __type: 'String!' },
    nome: { __type: 'String' },
    paramCode: { __type: 'String' },
    unidadeMedida: { __type: 'String' },
    min: { __type: 'Float' },
    max: { __type: 'Float' },
    order: { __type: 'Float' },
    _id: { __type: 'MongoID' }
  },
  FilterFindManyequipmentsInput: {
    owner: { __type: 'MongoID' },
    project: { __type: 'MongoID' },
    descricao: { __type: 'String' },
    code: { __type: 'String' },
    controlador: { __type: 'MongoID' },
    type: { __type: 'EnumequipmentsType' },
    modelo: { __type: 'String' },
    volume: { __type: 'Float' },
    parametros: { __type: '[FilterFindManyequipmentsParametrosInput]' },
    order: { __type: 'Float' },
    responsavel: { __type: 'String' },
    iniciadoEm: { __type: 'Date' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterFindManyequipmentsOperatorsInput' },
    OR: { __type: '[FilterFindManyequipmentsInput!]' },
    AND: { __type: '[FilterFindManyequipmentsInput!]' }
  },
  FilterFindManyequipmentsParametrosInput: {
    nome: { __type: 'String' },
    paramCode: { __type: 'String' },
    unidadeMedida: { __type: 'String' },
    min: { __type: 'Float' },
    max: { __type: 'Float' },
    order: { __type: 'Float' },
    _id: { __type: 'MongoID' }
  },
  FilterFindManyequipmentsOperatorsInput: {
    code: { __type: 'FilterFindManyequipmentsCodeOperatorsInput' },
    _id: { __type: 'FilterFindManyequipments_idOperatorsInput' }
  },
  FilterFindManyequipmentsCodeOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterFindManyequipments_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  FilterCountequipmentsInput: {
    owner: { __type: 'MongoID' },
    project: { __type: 'MongoID' },
    descricao: { __type: 'String' },
    code: { __type: 'String' },
    controlador: { __type: 'MongoID' },
    type: { __type: 'EnumequipmentsType' },
    modelo: { __type: 'String' },
    volume: { __type: 'Float' },
    parametros: { __type: '[FilterCountequipmentsParametrosInput]' },
    order: { __type: 'Float' },
    responsavel: { __type: 'String' },
    iniciadoEm: { __type: 'Date' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterCountequipmentsOperatorsInput' },
    OR: { __type: '[FilterCountequipmentsInput!]' },
    AND: { __type: '[FilterCountequipmentsInput!]' }
  },
  FilterCountequipmentsParametrosInput: {
    nome: { __type: 'String' },
    paramCode: { __type: 'String' },
    unidadeMedida: { __type: 'String' },
    min: { __type: 'Float' },
    max: { __type: 'Float' },
    order: { __type: 'Float' },
    _id: { __type: 'MongoID' }
  },
  FilterCountequipmentsOperatorsInput: {
    code: { __type: 'FilterCountequipmentsCodeOperatorsInput' },
    _id: { __type: 'FilterCountequipments_idOperatorsInput' }
  },
  FilterCountequipmentsCodeOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterCountequipments_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  equipmentsPagination: {
    __typename: { __type: 'String!' },
    count: { __type: 'Int' },
    items: { __type: '[equipments!]' },
    pageInfo: { __type: 'PaginationInfo!' }
  },
  GetUserContext: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    email: { __type: 'String' },
    expiration: { __type: 'Date' },
    role: { __type: 'String' }
  },
  data_sensors: {
    __typename: { __type: 'String!' },
    device: { __type: 'String' },
    paramName: { __type: 'String' },
    paramCode: { __type: 'Float' },
    value: { __type: 'Float' },
    measureUnity: { __type: 'String' },
    _id: { __type: 'MongoID!' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' }
  },
  FilterFindManydata_sensorsInput: {
    device: { __type: 'String' },
    paramName: { __type: 'String' },
    paramCode: { __type: 'Float' },
    value: { __type: 'Float' },
    measureUnity: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    _operators: { __type: 'FilterFindManydata_sensorsOperatorsInput' },
    OR: { __type: '[FilterFindManydata_sensorsInput!]' },
    AND: { __type: '[FilterFindManydata_sensorsInput!]' }
  },
  FilterFindManydata_sensorsOperatorsInput: {
    _id: { __type: 'FilterFindManydata_sensors_idOperatorsInput' }
  },
  FilterFindManydata_sensors_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  FilterCountdata_sensorsInput: {
    device: { __type: 'String' },
    paramName: { __type: 'String' },
    paramCode: { __type: 'Float' },
    value: { __type: 'Float' },
    measureUnity: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    _operators: { __type: 'FilterCountdata_sensorsOperatorsInput' },
    OR: { __type: '[FilterCountdata_sensorsInput!]' },
    AND: { __type: '[FilterCountdata_sensorsInput!]' }
  },
  FilterCountdata_sensorsOperatorsInput: {
    _id: { __type: 'FilterCountdata_sensors_idOperatorsInput' }
  },
  FilterCountdata_sensors_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  data_sensorsPagination: {
    __typename: { __type: 'String!' },
    count: { __type: 'Int' },
    items: { __type: '[data_sensors!]' },
    pageInfo: { __type: 'PaginationInfo!' }
  },
  CreateOneusersPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'users' },
    error: { __type: 'ErrorInterface' }
  },
  ErrorInterface: {
    __typename: { __type: 'String!' },
    message: { __type: 'String' }
  },
  CreateOneusersInput: {
    owner: { __type: 'String' },
    email: { __type: 'String!' },
    password: { __type: 'String' },
    nome: { __type: 'JSON' },
    cpf: { __type: 'String' },
    telefone: { __type: 'JSON' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumusersUf' },
    enabled: { __type: 'Boolean' },
    lastSeenAt: { __type: 'Date' },
    responsavel: { __type: 'String' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean!' },
    deletedAt: { __type: 'Date' },
    role: { __type: 'EnumusersRole' }
  },
  UpdateOneusersPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'users' },
    error: { __type: 'ErrorInterface' }
  },
  UpdateOneusersInput: {
    owner: { __type: 'String' },
    email: { __type: 'String' },
    password: { __type: 'String' },
    nome: { __type: 'JSON' },
    cpf: { __type: 'String' },
    telefone: { __type: 'JSON' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumusersUf' },
    enabled: { __type: 'Boolean' },
    lastSeenAt: { __type: 'Date' },
    responsavel: { __type: 'String' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    role: { __type: 'EnumusersRole' }
  },
  FilterUpdateOneusersInput: {
    owner: { __type: 'String' },
    email: { __type: 'String' },
    password: { __type: 'String' },
    nome: { __type: 'JSON' },
    cpf: { __type: 'String' },
    telefone: { __type: 'JSON' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumusersUf' },
    enabled: { __type: 'Boolean' },
    lastSeenAt: { __type: 'Date' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    role: { __type: 'EnumusersRole' },
    _operators: { __type: 'FilterUpdateOneusersOperatorsInput' },
    OR: { __type: '[FilterUpdateOneusersInput!]' },
    AND: { __type: '[FilterUpdateOneusersInput!]' }
  },
  FilterUpdateOneusersOperatorsInput: {
    email: { __type: 'FilterUpdateOneusersEmailOperatorsInput' },
    _id: { __type: 'FilterUpdateOneusers_idOperatorsInput' }
  },
  FilterUpdateOneusersEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterUpdateOneusers_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  RemoveByIdusersPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'users' },
    error: { __type: 'ErrorInterface' }
  },
  CreateOneorgsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'orgs' },
    error: { __type: 'ErrorInterface' }
  },
  CreateOneorgsInput: {
    org: { __type: 'JSON' },
    nome: { __type: 'JSON' },
    email: { __type: 'String!' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'JSON' },
    cidade: { __type: 'JSON' },
    uf: { __type: 'EnumorgsUf' },
    responsavel: { __type: 'String' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean!' },
    deletedAt: { __type: 'Date' }
  },
  UpdateOneorgsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'orgs' },
    error: { __type: 'ErrorInterface' }
  },
  UpdateOneorgsInput: {
    org: { __type: 'JSON' },
    nome: { __type: 'JSON' },
    email: { __type: 'String' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'JSON' },
    cidade: { __type: 'JSON' },
    uf: { __type: 'EnumorgsUf' },
    responsavel: { __type: 'String' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' }
  },
  FilterUpdateOneorgsInput: {
    org: { __type: 'JSON' },
    nome: { __type: 'JSON' },
    email: { __type: 'String' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'JSON' },
    cidade: { __type: 'JSON' },
    uf: { __type: 'EnumorgsUf' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterUpdateOneorgsOperatorsInput' },
    OR: { __type: '[FilterUpdateOneorgsInput!]' },
    AND: { __type: '[FilterUpdateOneorgsInput!]' }
  },
  FilterUpdateOneorgsOperatorsInput: {
    email: { __type: 'FilterUpdateOneorgsEmailOperatorsInput' },
    _id: { __type: 'FilterUpdateOneorgs_idOperatorsInput' }
  },
  FilterUpdateOneorgsEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterUpdateOneorgs_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  RemoveByIdorgsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'orgs' },
    error: { __type: 'ErrorInterface' }
  },
  CreateOneprojectsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'projects' },
    error: { __type: 'ErrorInterface' }
  },
  CreateOneprojectsInput: {
    owner: { __type: 'MongoID' },
    org: { __type: 'MongoID' },
    projeto: { __type: 'String' },
    nome: { __type: 'String' },
    email: { __type: 'String!' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'String' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumprojectsUf' },
    latitude: { __type: 'String' },
    longitude: { __type: 'String' },
    responsavel: { __type: 'String' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean!' },
    deletedAt: { __type: 'Date' }
  },
  UpdateOneprojectsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'projects' },
    error: { __type: 'ErrorInterface' }
  },
  UpdateOneprojectsInput: {
    owner: { __type: 'MongoID' },
    org: { __type: 'MongoID' },
    projeto: { __type: 'String' },
    nome: { __type: 'String' },
    email: { __type: 'String' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'String' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumprojectsUf' },
    latitude: { __type: 'String' },
    longitude: { __type: 'String' },
    responsavel: { __type: 'String' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' }
  },
  FilterUpdateOneprojectsInput: {
    owner: { __type: 'MongoID' },
    org: { __type: 'MongoID' },
    projeto: { __type: 'String' },
    nome: { __type: 'String' },
    email: { __type: 'String' },
    cpf: { __type: 'String' },
    cnpj: { __type: 'String' },
    telefone: { __type: 'String' },
    rua: { __type: 'String' },
    numero: { __type: 'String' },
    complemento: { __type: 'String' },
    bairro: { __type: 'String' },
    cep: { __type: 'String' },
    cidade: { __type: 'String' },
    uf: { __type: 'EnumprojectsUf' },
    latitude: { __type: 'String' },
    longitude: { __type: 'String' },
    responsavel: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterUpdateOneprojectsOperatorsInput' },
    OR: { __type: '[FilterUpdateOneprojectsInput!]' },
    AND: { __type: '[FilterUpdateOneprojectsInput!]' }
  },
  FilterUpdateOneprojectsOperatorsInput: {
    email: { __type: 'FilterUpdateOneprojectsEmailOperatorsInput' },
    _id: { __type: 'FilterUpdateOneprojects_idOperatorsInput' }
  },
  FilterUpdateOneprojectsEmailOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterUpdateOneprojects_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  RemoveByIdprojectsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'projects' },
    error: { __type: 'ErrorInterface' }
  },
  CreateOneequipmentsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'equipments' },
    error: { __type: 'ErrorInterface' }
  },
  CreateOneequipmentsInput: {
    owner: { __type: 'MongoID' },
    project: { __type: 'MongoID' },
    descricao: { __type: 'String' },
    code: { __type: 'String!' },
    controlador: { __type: 'MongoID' },
    type: { __type: 'EnumequipmentsType' },
    modelo: { __type: 'String' },
    volume: { __type: 'Float' },
    parametros: { __type: '[equipmentsParametrosInput]' },
    order: { __type: 'Float' },
    responsavel: { __type: 'String' },
    iniciadoEm: { __type: 'Date' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean!' },
    deletedAt: { __type: 'Date' }
  },
  equipmentsParametrosInput: {
    nome: { __type: 'String' },
    paramCode: { __type: 'String' },
    unidadeMedida: { __type: 'String' },
    min: { __type: 'Float' },
    max: { __type: 'Float' },
    order: { __type: 'Float' },
    _id: { __type: 'MongoID' }
  },
  UpdateOneequipmentsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'equipments' },
    error: { __type: 'ErrorInterface' }
  },
  UpdateOneequipmentsInput: {
    owner: { __type: 'MongoID' },
    project: { __type: 'MongoID' },
    descricao: { __type: 'String' },
    code: { __type: 'String' },
    controlador: { __type: 'MongoID' },
    type: { __type: 'EnumequipmentsType' },
    modelo: { __type: 'String' },
    volume: { __type: 'Float' },
    parametros: { __type: '[UpdateOneequipmentsParametrosInput]' },
    order: { __type: 'Float' },
    responsavel: { __type: 'String' },
    iniciadoEm: { __type: 'Date' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' }
  },
  UpdateOneequipmentsParametrosInput: {
    nome: { __type: 'String' },
    paramCode: { __type: 'String' },
    unidadeMedida: { __type: 'String' },
    min: { __type: 'Float' },
    max: { __type: 'Float' },
    order: { __type: 'Float' },
    _id: { __type: 'MongoID' }
  },
  FilterUpdateOneequipmentsInput: {
    owner: { __type: 'MongoID' },
    project: { __type: 'MongoID' },
    descricao: { __type: 'String' },
    code: { __type: 'String' },
    controlador: { __type: 'MongoID' },
    type: { __type: 'EnumequipmentsType' },
    modelo: { __type: 'String' },
    volume: { __type: 'Float' },
    parametros: { __type: '[FilterUpdateOneequipmentsParametrosInput]' },
    order: { __type: 'Float' },
    responsavel: { __type: 'String' },
    iniciadoEm: { __type: 'Date' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    isDeleted: { __type: 'Boolean' },
    deletedAt: { __type: 'Date' },
    _operators: { __type: 'FilterUpdateOneequipmentsOperatorsInput' },
    OR: { __type: '[FilterUpdateOneequipmentsInput!]' },
    AND: { __type: '[FilterUpdateOneequipmentsInput!]' }
  },
  FilterUpdateOneequipmentsParametrosInput: {
    nome: { __type: 'String' },
    paramCode: { __type: 'String' },
    unidadeMedida: { __type: 'String' },
    min: { __type: 'Float' },
    max: { __type: 'Float' },
    order: { __type: 'Float' },
    _id: { __type: 'MongoID' }
  },
  FilterUpdateOneequipmentsOperatorsInput: {
    code: { __type: 'FilterUpdateOneequipmentsCodeOperatorsInput' },
    _id: { __type: 'FilterUpdateOneequipments_idOperatorsInput' }
  },
  FilterUpdateOneequipmentsCodeOperatorsInput: {
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    ne: { __type: 'String' },
    in: { __type: '[String]' },
    nin: { __type: '[String]' },
    regex: { __type: 'RegExpAsString' },
    exists: { __type: 'Boolean' }
  },
  FilterUpdateOneequipments_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  RemoveByIdequipmentsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'equipments' },
    error: { __type: 'ErrorInterface' }
  },
  Auth: {
    __typename: { __type: 'String!' },
    user: { __type: 'users' },
    token: { __type: 'String' },
    refreshToken: { __type: 'String' }
  },
  RefreshToken: {
    __typename: { __type: 'String!' },
    data: { __type: 'GetUserContext' },
    token: { __type: 'String' },
    refreshToken: { __type: 'String' }
  },
  CreateOnedata_sensorsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'data_sensors' },
    error: { __type: 'ErrorInterface' }
  },
  CreateOnedata_sensorsInput: {
    device: { __type: 'String' },
    paramName: { __type: 'String' },
    paramCode: { __type: 'Float' },
    value: { __type: 'Float' },
    measureUnity: { __type: 'String' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' }
  },
  UpdateOnedata_sensorsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'data_sensors' },
    error: { __type: 'ErrorInterface' }
  },
  UpdateOnedata_sensorsInput: {
    device: { __type: 'String' },
    paramName: { __type: 'String' },
    paramCode: { __type: 'Float' },
    value: { __type: 'Float' },
    measureUnity: { __type: 'String' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' }
  },
  FilterUpdateOnedata_sensorsInput: {
    device: { __type: 'String' },
    paramName: { __type: 'String' },
    paramCode: { __type: 'Float' },
    value: { __type: 'Float' },
    measureUnity: { __type: 'String' },
    _id: { __type: 'MongoID' },
    createdAt: { __type: 'Date' },
    updatedAt: { __type: 'Date' },
    _operators: { __type: 'FilterUpdateOnedata_sensorsOperatorsInput' },
    OR: { __type: '[FilterUpdateOnedata_sensorsInput!]' },
    AND: { __type: '[FilterUpdateOnedata_sensorsInput!]' }
  },
  FilterUpdateOnedata_sensorsOperatorsInput: {
    _id: { __type: 'FilterUpdateOnedata_sensors_idOperatorsInput' }
  },
  FilterUpdateOnedata_sensors_idOperatorsInput: {
    gt: { __type: 'MongoID' },
    gte: { __type: 'MongoID' },
    lt: { __type: 'MongoID' },
    lte: { __type: 'MongoID' },
    ne: { __type: 'MongoID' },
    in: { __type: '[MongoID]' },
    nin: { __type: '[MongoID]' },
    exists: { __type: 'Boolean' }
  },
  RemoveByIddata_sensorsPayload: {
    __typename: { __type: 'String!' },
    recordId: { __type: 'MongoID' },
    record: { __type: 'data_sensors' },
    error: { __type: 'ErrorInterface' }
  },
  SubPayload: {
    __typename: { __type: 'String!' },
    device: { __type: 'String' },
    code: { __type: 'String' },
    data: { __type: '[data_sensors]' }
  }
} as const;

export interface Query {
  __typename: 'Query' | undefined;
  userById: (args: { _id: Scalars['MongoID'] }) => Maybe<users>;
  userMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyusersInput>;
    skip?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<SortFindManyusersInput>;
  }) => Array<users>;
  userCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountusersInput>;
  }) => Maybe<ScalarsEnums['Int']>;
  userPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars['Int']>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyusersInput>;
    sort?: Maybe<SortFindManyusersInput>;
  }) => Maybe<usersPagination>;
  orgById: (args: { _id: Scalars['MongoID'] }) => Maybe<orgs>;
  orgMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyorgsInput>;
    skip?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<SortFindManyorgsInput>;
  }) => Array<orgs>;
  orgCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountorgsInput>;
  }) => Maybe<ScalarsEnums['Int']>;
  orgPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars['Int']>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyorgsInput>;
    sort?: Maybe<SortFindManyorgsInput>;
  }) => Maybe<orgsPagination>;
  projectById: (args: { _id: Scalars['MongoID'] }) => Maybe<projects>;
  projectMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyprojectsInput>;
    skip?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<SortFindManyprojectsInput>;
  }) => Array<projects>;
  projectCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountprojectsInput>;
  }) => Maybe<ScalarsEnums['Int']>;
  projectPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars['Int']>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyprojectsInput>;
    sort?: Maybe<SortFindManyprojectsInput>;
  }) => Maybe<projectsPagination>;
  equipmentById: (args: { _id: Scalars['MongoID'] }) => Maybe<equipments>;
  equipmentMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManyequipmentsInput>;
    skip?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<SortFindManyequipmentsInput>;
  }) => Array<equipments>;
  equipmentCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountequipmentsInput>;
  }) => Maybe<ScalarsEnums['Int']>;
  equipmentPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars['Int']>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManyequipmentsInput>;
    sort?: Maybe<SortFindManyequipmentsInput>;
  }) => Maybe<equipmentsPagination>;
  getUserContext?: Maybe<GetUserContext>;
  dataSensorsById: (args: { _id: Scalars['MongoID'] }) => Maybe<data_sensors>;
  dataSensorsByDevice: (args?: {
    device?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    perPage?: Maybe<Scalars['Int']>;
  }) => Maybe<data_sensors>;
  dataSensorsByController: (args?: {
    id?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    perPage?: Maybe<Scalars['Int']>;
  }) => Maybe<data_sensors>;
  dataSensorsMany: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterFindManydata_sensorsInput>;
    skip?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `100`
     */;
    limit?: Maybe<Scalars['Int']>;
    sort?: Maybe<SortFindManydata_sensorsInput>;
  }) => Array<data_sensors>;
  dataSensorsCount: (args?: {
    /**
     * Filter by fields
     */
    filter?: Maybe<FilterCountdata_sensorsInput>;
  }) => Maybe<ScalarsEnums['Int']>;
  dataSensorsPagination: (args?: {
    /**
     * Page number for displaying
     */
    page?: Maybe<Scalars['Int']>
    /**
     * @defaultValue `20`
     */;
    perPage?: Maybe<Scalars['Int']>
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterFindManydata_sensorsInput>;
    sort?: Maybe<SortFindManydata_sensorsInput>;
  }) => Maybe<data_sensorsPagination>;
}

export interface Mutation {
  __typename: 'Mutation' | undefined;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  userCreateOne: (args: {
    record: CreateOneusersInput;
  }) => Maybe<CreateOneusersPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  userUpdateOne: (args: {
    record: UpdateOneusersInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneusersInput>;
    sort?: Maybe<SortUpdateOneusersInput>;
    skip?: Maybe<Scalars['Int']>;
  }) => Maybe<UpdateOneusersPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  userDelete: (args: {
    _id: Scalars['MongoID'];
  }) => Maybe<RemoveByIdusersPayload>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  orgCreateOne: (args: {
    record: CreateOneorgsInput;
  }) => Maybe<CreateOneorgsPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  orgUpdateOne: (args: {
    record: UpdateOneorgsInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneorgsInput>;
    sort?: Maybe<SortUpdateOneorgsInput>;
    skip?: Maybe<Scalars['Int']>;
  }) => Maybe<UpdateOneorgsPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  orgDelete: (args: {
    _id: Scalars['MongoID'];
  }) => Maybe<RemoveByIdorgsPayload>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  projectCreateOne: (args: {
    record: CreateOneprojectsInput;
  }) => Maybe<CreateOneprojectsPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  projectUpdateOne: (args: {
    record: UpdateOneprojectsInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneprojectsInput>;
    sort?: Maybe<SortUpdateOneprojectsInput>;
    skip?: Maybe<Scalars['Int']>;
  }) => Maybe<UpdateOneprojectsPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  projectDelete: (args: {
    _id: Scalars['MongoID'];
  }) => Maybe<RemoveByIdprojectsPayload>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  equipmentCreateOne: (args: {
    record: CreateOneequipmentsInput;
  }) => Maybe<CreateOneequipmentsPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  equipmentUpdateOne: (args: {
    record: UpdateOneequipmentsInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOneequipmentsInput>;
    sort?: Maybe<SortUpdateOneequipmentsInput>;
    skip?: Maybe<Scalars['Int']>;
  }) => Maybe<UpdateOneequipmentsPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  equipmentDelete: (args: {
    _id: Scalars['MongoID'];
  }) => Maybe<RemoveByIdequipmentsPayload>;
  login: (args?: {
    email?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
  }) => Maybe<Auth>;
  RefreshTokenTC?: Maybe<RefreshToken>;
  /**
   * Create one document with mongoose defaults, setters, hooks and validation
   */
  dataSensorsCreateOne: (args: {
    record: CreateOnedata_sensorsInput;
  }) => Maybe<CreateOnedata_sensorsPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it.
   */
  dataSensorsUpdateOne: (args: {
    record: UpdateOnedata_sensorsInput
    /**
     * Filter by fields
     */;
    filter?: Maybe<FilterUpdateOnedata_sensorsInput>;
    sort?: Maybe<SortUpdateOnedata_sensorsInput>;
    skip?: Maybe<Scalars['Int']>;
  }) => Maybe<UpdateOnedata_sensorsPayload>;
  /**
   * Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document.
   */
  dataSensorsDelete: (args: {
    _id: Scalars['MongoID'];
  }) => Maybe<RemoveByIddata_sensorsPayload>;
}

export interface Subscription {
  __typename: 'Subscription' | undefined;
  usersUpdated?: Maybe<users>;
  DataSensorCreated: (args?: {
    device?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  }) => Maybe<SubPayload>;
}

export interface users {
  __typename: 'users' | undefined;
  owner?: Maybe<ScalarsEnums['String']>;
  email: ScalarsEnums['String'];
  password?: Maybe<ScalarsEnums['String']>;
  nome?: Maybe<ScalarsEnums['JSON']>;
  cpf?: Maybe<ScalarsEnums['String']>;
  telefone?: Maybe<ScalarsEnums['JSON']>;
  rua?: Maybe<ScalarsEnums['String']>;
  numero?: Maybe<ScalarsEnums['String']>;
  complemento?: Maybe<ScalarsEnums['String']>;
  bairro?: Maybe<ScalarsEnums['String']>;
  cep?: Maybe<ScalarsEnums['String']>;
  cidade?: Maybe<ScalarsEnums['String']>;
  uf?: Maybe<ScalarsEnums['EnumusersUf']>;
  enabled?: Maybe<ScalarsEnums['Boolean']>;
  lastSeenAt?: Maybe<ScalarsEnums['Date']>;
  responsavel?: Maybe<ScalarsEnums['String']>;
  _id: ScalarsEnums['MongoID'];
  createdAt?: Maybe<ScalarsEnums['Date']>;
  updatedAt?: Maybe<ScalarsEnums['Date']>;
  isDeleted: ScalarsEnums['Boolean'];
  deletedAt?: Maybe<ScalarsEnums['Date']>;
  role?: Maybe<ScalarsEnums['EnumusersRole']>;
}

/**
 * List of items with pagination.
 */
export interface usersPagination {
  __typename: 'usersPagination' | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums['Int']>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<users>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface PaginationInfo {
  __typename: 'PaginationInfo' | undefined;
  currentPage: ScalarsEnums['Int'];
  perPage: ScalarsEnums['Int'];
  pageCount?: Maybe<ScalarsEnums['Int']>;
  itemCount?: Maybe<ScalarsEnums['Int']>;
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>;
  hasPreviousPage?: Maybe<ScalarsEnums['Boolean']>;
}

export interface orgs {
  __typename: 'orgs' | undefined;
  org?: Maybe<ScalarsEnums['JSON']>;
  nome?: Maybe<ScalarsEnums['JSON']>;
  email: ScalarsEnums['String'];
  cpf?: Maybe<ScalarsEnums['String']>;
  cnpj?: Maybe<ScalarsEnums['String']>;
  telefone?: Maybe<ScalarsEnums['JSON']>;
  cidade?: Maybe<ScalarsEnums['JSON']>;
  uf?: Maybe<ScalarsEnums['EnumorgsUf']>;
  responsavel?: Maybe<ScalarsEnums['String']>;
  _id: ScalarsEnums['MongoID'];
  createdAt?: Maybe<ScalarsEnums['Date']>;
  updatedAt?: Maybe<ScalarsEnums['Date']>;
  isDeleted: ScalarsEnums['Boolean'];
  deletedAt?: Maybe<ScalarsEnums['Date']>;
}

/**
 * List of items with pagination.
 */
export interface orgsPagination {
  __typename: 'orgsPagination' | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums['Int']>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<orgs>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface projects {
  __typename: 'projects' | undefined;
  owner?: Maybe<ScalarsEnums['MongoID']>;
  org?: Maybe<ScalarsEnums['MongoID']>;
  projeto?: Maybe<ScalarsEnums['String']>;
  nome?: Maybe<ScalarsEnums['String']>;
  email: ScalarsEnums['String'];
  cpf?: Maybe<ScalarsEnums['String']>;
  cnpj?: Maybe<ScalarsEnums['String']>;
  telefone?: Maybe<ScalarsEnums['String']>;
  rua?: Maybe<ScalarsEnums['String']>;
  numero?: Maybe<ScalarsEnums['String']>;
  complemento?: Maybe<ScalarsEnums['String']>;
  bairro?: Maybe<ScalarsEnums['String']>;
  cep?: Maybe<ScalarsEnums['String']>;
  cidade?: Maybe<ScalarsEnums['String']>;
  uf?: Maybe<ScalarsEnums['EnumprojectsUf']>;
  latitude?: Maybe<ScalarsEnums['String']>;
  longitude?: Maybe<ScalarsEnums['String']>;
  responsavel?: Maybe<ScalarsEnums['String']>;
  _id: ScalarsEnums['MongoID'];
  createdAt?: Maybe<ScalarsEnums['Date']>;
  updatedAt?: Maybe<ScalarsEnums['Date']>;
  isDeleted: ScalarsEnums['Boolean'];
  deletedAt?: Maybe<ScalarsEnums['Date']>;
}

/**
 * List of items with pagination.
 */
export interface projectsPagination {
  __typename: 'projectsPagination' | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums['Int']>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<projects>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface equipments {
  __typename: 'equipments' | undefined;
  owner?: Maybe<ScalarsEnums['MongoID']>;
  project?: Maybe<ScalarsEnums['MongoID']>;
  descricao?: Maybe<ScalarsEnums['String']>;
  code: ScalarsEnums['String'];
  controlador?: Maybe<ScalarsEnums['MongoID']>;
  type?: Maybe<ScalarsEnums['EnumequipmentsType']>;
  modelo?: Maybe<ScalarsEnums['String']>;
  volume?: Maybe<ScalarsEnums['Float']>;
  parametros?: Maybe<Array<Maybe<equipmentsParametros>>>;
  order?: Maybe<ScalarsEnums['Float']>;
  responsavel?: Maybe<ScalarsEnums['String']>;
  iniciadoEm?: Maybe<ScalarsEnums['Date']>;
  _id: ScalarsEnums['MongoID'];
  createdAt?: Maybe<ScalarsEnums['Date']>;
  updatedAt?: Maybe<ScalarsEnums['Date']>;
  isDeleted: ScalarsEnums['Boolean'];
  deletedAt?: Maybe<ScalarsEnums['Date']>;
}

export interface equipmentsParametros {
  __typename: 'equipmentsParametros' | undefined;
  nome?: Maybe<ScalarsEnums['String']>;
  paramCode?: Maybe<ScalarsEnums['String']>;
  unidadeMedida?: Maybe<ScalarsEnums['String']>;
  min?: Maybe<ScalarsEnums['Float']>;
  max?: Maybe<ScalarsEnums['Float']>;
  order?: Maybe<ScalarsEnums['Float']>;
  _id?: Maybe<ScalarsEnums['MongoID']>;
}

/**
 * List of items with pagination.
 */
export interface equipmentsPagination {
  __typename: 'equipmentsPagination' | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums['Int']>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<equipments>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface GetUserContext {
  __typename: 'GetUserContext' | undefined;
  id?: Maybe<ScalarsEnums['String']>;
  email?: Maybe<ScalarsEnums['String']>;
  expiration?: Maybe<ScalarsEnums['Date']>;
  role?: Maybe<ScalarsEnums['String']>;
}

export interface data_sensors {
  __typename: 'data_sensors' | undefined;
  device?: Maybe<ScalarsEnums['String']>;
  paramName?: Maybe<ScalarsEnums['String']>;
  paramCode?: Maybe<ScalarsEnums['Float']>;
  value?: Maybe<ScalarsEnums['Float']>;
  measureUnity?: Maybe<ScalarsEnums['String']>;
  _id: ScalarsEnums['MongoID'];
  createdAt?: Maybe<ScalarsEnums['Date']>;
  updatedAt?: Maybe<ScalarsEnums['Date']>;
}

/**
 * List of items with pagination.
 */
export interface data_sensorsPagination {
  __typename: 'data_sensorsPagination' | undefined;
  /**
   * Total object count.
   */
  count?: Maybe<ScalarsEnums['Int']>;
  /**
   * Array of objects.
   */
  items?: Maybe<Array<data_sensors>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PaginationInfo;
}

export interface CreateOneusersPayload {
  __typename: 'CreateOneusersPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Created document
   */
  record?: Maybe<users>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface ErrorInterface {
  __typename: 'ErrorInterface' | undefined;
  /**
   * Generic error message
   */
  message?: Maybe<ScalarsEnums['String']>;
}

export interface UpdateOneusersPayload {
  __typename: 'UpdateOneusersPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Updated document
   */
  record?: Maybe<users>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdusersPayload {
  __typename: 'RemoveByIdusersPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Removed document
   */
  record?: Maybe<users>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateOneorgsPayload {
  __typename: 'CreateOneorgsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Created document
   */
  record?: Maybe<orgs>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOneorgsPayload {
  __typename: 'UpdateOneorgsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Updated document
   */
  record?: Maybe<orgs>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdorgsPayload {
  __typename: 'RemoveByIdorgsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Removed document
   */
  record?: Maybe<orgs>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateOneprojectsPayload {
  __typename: 'CreateOneprojectsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Created document
   */
  record?: Maybe<projects>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOneprojectsPayload {
  __typename: 'UpdateOneprojectsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Updated document
   */
  record?: Maybe<projects>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdprojectsPayload {
  __typename: 'RemoveByIdprojectsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Removed document
   */
  record?: Maybe<projects>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface CreateOneequipmentsPayload {
  __typename: 'CreateOneequipmentsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Created document
   */
  record?: Maybe<equipments>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOneequipmentsPayload {
  __typename: 'UpdateOneequipmentsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Updated document
   */
  record?: Maybe<equipments>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIdequipmentsPayload {
  __typename: 'RemoveByIdequipmentsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Removed document
   */
  record?: Maybe<equipments>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface Auth {
  __typename: 'Auth' | undefined;
  user?: Maybe<users>;
  token?: Maybe<ScalarsEnums['String']>;
  refreshToken?: Maybe<ScalarsEnums['String']>;
}

export interface RefreshToken {
  __typename: 'RefreshToken' | undefined;
  data?: Maybe<GetUserContext>;
  token?: Maybe<ScalarsEnums['String']>;
  refreshToken?: Maybe<ScalarsEnums['String']>;
}

export interface CreateOnedata_sensorsPayload {
  __typename: 'CreateOnedata_sensorsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Created document
   */
  record?: Maybe<data_sensors>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface UpdateOnedata_sensorsPayload {
  __typename: 'UpdateOnedata_sensorsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Updated document
   */
  record?: Maybe<data_sensors>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface RemoveByIddata_sensorsPayload {
  __typename: 'RemoveByIddata_sensorsPayload' | undefined;
  /**
   * Document ID
   */
  recordId?: Maybe<ScalarsEnums['MongoID']>;
  /**
   * Removed document
   */
  record?: Maybe<data_sensors>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
}

export interface SubPayload {
  __typename: 'SubPayload' | undefined;
  device?: Maybe<ScalarsEnums['String']>;
  code?: Maybe<ScalarsEnums['String']>;
  data?: Maybe<Array<Maybe<data_sensors>>>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  users: users;
  usersPagination: usersPagination;
  PaginationInfo: PaginationInfo;
  orgs: orgs;
  orgsPagination: orgsPagination;
  projects: projects;
  projectsPagination: projectsPagination;
  equipments: equipments;
  equipmentsParametros: equipmentsParametros;
  equipmentsPagination: equipmentsPagination;
  GetUserContext: GetUserContext;
  data_sensors: data_sensors;
  data_sensorsPagination: data_sensorsPagination;
  CreateOneusersPayload: CreateOneusersPayload;
  ErrorInterface: ErrorInterface;
  UpdateOneusersPayload: UpdateOneusersPayload;
  RemoveByIdusersPayload: RemoveByIdusersPayload;
  CreateOneorgsPayload: CreateOneorgsPayload;
  UpdateOneorgsPayload: UpdateOneorgsPayload;
  RemoveByIdorgsPayload: RemoveByIdorgsPayload;
  CreateOneprojectsPayload: CreateOneprojectsPayload;
  UpdateOneprojectsPayload: UpdateOneprojectsPayload;
  RemoveByIdprojectsPayload: RemoveByIdprojectsPayload;
  CreateOneequipmentsPayload: CreateOneequipmentsPayload;
  UpdateOneequipmentsPayload: UpdateOneequipmentsPayload;
  RemoveByIdequipmentsPayload: RemoveByIdequipmentsPayload;
  Auth: Auth;
  RefreshToken: RefreshToken;
  CreateOnedata_sensorsPayload: CreateOnedata_sensorsPayload;
  UpdateOnedata_sensorsPayload: UpdateOnedata_sensorsPayload;
  RemoveByIddata_sensorsPayload: RemoveByIddata_sensorsPayload;
  SubPayload: SubPayload;
}
export type SchemaObjectTypesNames =
  | 'Query'
  | 'Mutation'
  | 'Subscription'
  | 'users'
  | 'usersPagination'
  | 'PaginationInfo'
  | 'orgs'
  | 'orgsPagination'
  | 'projects'
  | 'projectsPagination'
  | 'equipments'
  | 'equipmentsParametros'
  | 'equipmentsPagination'
  | 'GetUserContext'
  | 'data_sensors'
  | 'data_sensorsPagination'
  | 'CreateOneusersPayload'
  | 'ErrorInterface'
  | 'UpdateOneusersPayload'
  | 'RemoveByIdusersPayload'
  | 'CreateOneorgsPayload'
  | 'UpdateOneorgsPayload'
  | 'RemoveByIdorgsPayload'
  | 'CreateOneprojectsPayload'
  | 'UpdateOneprojectsPayload'
  | 'RemoveByIdprojectsPayload'
  | 'CreateOneequipmentsPayload'
  | 'UpdateOneequipmentsPayload'
  | 'RemoveByIdequipmentsPayload'
  | 'Auth'
  | 'RefreshToken'
  | 'CreateOnedata_sensorsPayload'
  | 'UpdateOnedata_sensorsPayload'
  | 'RemoveByIddata_sensorsPayload'
  | 'SubPayload';

export interface ErrorInterface {
  /**
   * Generic error message
   */
  message?: Maybe<ScalarsEnums['String']>;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  EnumusersUf: EnumusersUf | undefined;
  EnumusersRole: EnumusersRole | undefined;
  SortFindManyusersInput: SortFindManyusersInput | undefined;
  EnumorgsUf: EnumorgsUf | undefined;
  SortFindManyorgsInput: SortFindManyorgsInput | undefined;
  EnumprojectsUf: EnumprojectsUf | undefined;
  SortFindManyprojectsInput: SortFindManyprojectsInput | undefined;
  EnumequipmentsType: EnumequipmentsType | undefined;
  SortFindManyequipmentsInput: SortFindManyequipmentsInput | undefined;
  SortFindManydata_sensorsInput: SortFindManydata_sensorsInput | undefined;
  SortUpdateOneusersInput: SortUpdateOneusersInput | undefined;
  SortUpdateOneorgsInput: SortUpdateOneorgsInput | undefined;
  SortUpdateOneprojectsInput: SortUpdateOneprojectsInput | undefined;
  SortUpdateOneequipmentsInput: SortUpdateOneequipmentsInput | undefined;
  SortUpdateOnedata_sensorsInput: SortUpdateOnedata_sensorsInput | undefined;
}
