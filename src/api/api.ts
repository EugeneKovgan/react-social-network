import axios from 'axios';
import { UserType } from '../types/types';

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  message: Array<string>;
  resultCode: RC;
};

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '62aff3fc-0839-43f8-ae8d-6be38ec7eea2',
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};
