import React from "react";
import { TestAlert } from "./TestAlert";
import { ACTIVE_POPUP } from "../constants";

type PopoutsList = {
  [key: string]: React.ReactNode | null;
};

export const PopoutsList: PopoutsList = {
  [ACTIVE_POPUP.TEST]: <TestAlert nav="action-sheet" />,
};
