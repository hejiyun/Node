// This file is created by egg-ts-helper@1.34.5
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportSlow = require('../../../app/middleware/slow');

declare module 'egg' {
  interface IMiddleware {
    slow: typeof ExportSlow;
  }
}
