// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiTest from '../../../app/controller/api/test';
import ExportApiUser from '../../../app/controller/api/User';

declare module 'egg' {
  interface IController {
    api: {
      test: ExportApiTest;
      user: ExportApiUser;
    }
  }
}
