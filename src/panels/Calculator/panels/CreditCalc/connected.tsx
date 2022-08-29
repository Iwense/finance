import React from "react";
import { PanelProps } from "panels";
import {
  CreditCalcStore,
  CreditCalcStoreProvider,
} from "panels/Calculator/store";
import { CreditCalc } from "./CreditCalc";

export const CreditCalcConnected: React.FC<PanelProps> = React.memo(
  ({ id }) => {
    const creditCalc = new CreditCalcStore();
    return (
      <CreditCalcStoreProvider value={creditCalc}>
        <CreditCalc id={id} />
      </CreditCalcStoreProvider>
    );
  }
);
