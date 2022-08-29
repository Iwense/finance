import React from "react";
import { BaseDataProvider, createDataLayout } from "store/DataLayout";
import { action, computed, makeObservable, observable } from "mobx";
import { throws } from "assert";

export enum CalcInputName {
    YEAR_PERCENT = 'yearPercent',
    CREDIT_AMOUNT = 'creditAmount',
    CREDIT_TERM = 'creditTerm',
    CREDIT_TERM_TYPE = 'creditTermType',
    // START_DATE = 'startDate',
    REPAYMENT_PROCEDURE = 'repaymentProcedure',
    // REPAYMENT_FREQUENCY = 'repaymentFrequency'
}

export const REPAYMENT_PROCEDURE = {
  0 : 'diff',
  1 : 'anu',
}

export class CreditCalcStore implements BaseDataProvider {
  @observable.struct
  creditAmount: number = 20_000; //Сумма кредита / займа
  @observable.struct
  yearPercent: number = 12;
  @observable.struct
  creditTerm: number = 3; 
  @observable.struct
  creditTermType: number = 0; 
  @observable.struct
  repaymentProcedure: number = 0;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  changeInput(value: number, inputName: CalcInputName) {
    this[inputName] = value;
  }

  @computed
  get monthsAmount(): number {
    return this.creditTermType === 0 ? this.creditTerm * 12 : this.creditTerm;
  }

  @computed
  get monthlyPayment(): number {

    if (this.repaymentProcedure === 1) {
      const months = this.monthsAmount;
      let currentCreditAmount = this.creditAmount;
      const mainCredit = currentCreditAmount / months;
      const res = new Array(months);
      for(let i = 0; i < months; i++){
        res[i] =  currentCreditAmount * this.yearPercent * 30/365;
        currentCreditAmount -= mainCredit;
      }

      return res[0] || 0;
    }else {
      const monthlyPercent = this.yearPercent / (100 * 12);
      const pow = (1 + monthlyPercent) ** -this.monthsAmount;

      return Number((this.creditAmount * (monthlyPercent / (1 - pow))).toFixed(2)) || 0;
    }
  }

  @computed
  get interestPercent(): number{
    return Number((this.monthlyPayment * this.monthsAmount - this.creditAmount).toFixed(2)) || 0;
  }

  @computed
  get debtPlusInterest(): number{
    return Number((this.creditAmount + this.interestPercent).toFixed(2)) || 0;
  }

  destroy() {
    console.log("AppStore destroy");
  }

  init() {
    console.log("init store");
  }
}

export const CreditCalcStoreContext = React.createContext<CreditCalcStore | null>(null);
export const CreditCalcStoreProvider = createDataLayout(CreditCalcStoreContext);
