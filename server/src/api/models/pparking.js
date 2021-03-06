/**
 * pparking.js
 *
 * @description :: 车位信息
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'pparking';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//车位Id
        parkingno: {type: 'string', unique: true,required:true},//车位编号
        parkingstatus: {type: 'string'},//车位状态
        parkingmgid: {type: 'integer'},//所属停车场
        remark: {type: 'string'}//备注
    }
};
