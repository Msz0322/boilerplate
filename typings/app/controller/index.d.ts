// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiTest from '../../../app/controller/api/test';
import ExportApiUserRegister from '../../../app/controller/api/user/Register';

declare module 'egg' {
  interface IController {
    api: {
      test: ExportApiTest;
      user: {
        register: ExportApiUserRegister;
      }
    }
  }
}
