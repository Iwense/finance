import React from "react";
import { TestAlert } from "./TestAlert";
import { ACTIVE_POPUP } from "../constants";
import { NotAvailable } from "./NotAvailable";

type PopoutsList = {
  [key: string]: React.ReactNode | null;
};

export const PopoutsList: PopoutsList = {
  [ACTIVE_POPUP.TEST]: <TestAlert nav="action-sheet" />,
  [ACTIVE_POPUP.NOT_AVAILABLE]: <NotAvailable nav="not-available" />,
};
