import React, { ReactElement } from "react";
import { TestAlert } from "./TestAlert";
import { TestActionSheet } from "./TestActionSheet";
import { PopoutWrapper, PopoutWrapperProps } from "@vkontakte/vkui";
import { ACTIVE_POPUP } from "../constants";
import { observer } from "mobx-react-lite";
import { useRequiredContext } from "../hooks/useRequiredContext";
import { AppStoreContext } from "../store";

type PopoutsList = {
  [key: string]: React.ReactNode | null;
};

export const PopoutsList: PopoutsList = {
  [ACTIVE_POPUP.TEST]: <TestAlert nav="action-sheet" />,
};
