import React from "react";
import { Alert } from "@vkontakte/vkui";
import { PopoutProps } from "../types";
import { useRequiredContext } from "../hooks/useRequiredContext";
import { AppStoreContext } from "../store";

export const TestAlert: React.FC<PopoutProps> = () => {
  const { closePopup } = useRequiredContext(AppStoreContext);
  return (
    <Alert
      actions={[
        {
          title: "Круто!",
          mode: "destructive",
          autoclose: true,
        },
        {
          title: "Отмена",
          mode: "cancel",
          autoclose: true,
        },
      ]}
      onClose={() => closePopup()}
      header="Тестовый алерт"
      text="Это тестовый алерт!"
      actionsLayout="vertical"
    />
  );
};
