/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const BuySellData = createSlice({
  name: 'BuySellData',
  initialState: {
    ifbuy: {
      companyName: '',
      orderPrice: '',
      holdingCash: 10000000,
    },
    ifsell: {
      companyName: '',
      orderPrice: '',
      holdingcount: 12,
    },
    ifopen: {
      isOpen: false,
      isType: '',
    },
    isSelect: {
      idx: 0,
    },
  },
  reducers: {
    receiveBuyData: (state, action) => {
      state.ifbuy.companyName = action.payload.companyName;
      state.ifbuy.orderPrice = action.payload.orderPrice;
    },
    receiveSellData: (state, action) => {
      state.ifsell.companyName = action.payload.companyName;
      state.ifsell.orderPrice = action.payload.orderPrice;
    },
    receiveSetting: (state, action) => {
      state.ifopen = action.payload;
    },
    selectIdx: (state, action) => {
      state.isSelect.idx = action.payload;
    },
  },
});

export const { receiveBuyData, receiveSellData, receiveSetting, selectIdx } = BuySellData.actions;
export default BuySellData;