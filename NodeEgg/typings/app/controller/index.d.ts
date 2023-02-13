// This file is created by egg-ts-helper@1.34.5
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportModel1Detail = require('../../../app/controller/model1/detail');
import ExportModel1List = require('../../../app/controller/model1/list');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    model1: {
      detail: ExportModel1Detail;
      list: ExportModel1List;
    }
  }
}
