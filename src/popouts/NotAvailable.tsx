import React from "react";
import { Alert } from "@vkontakte/vkui";
import { PopoutProps } from "../types";
import { useRequiredContext } from "../hooks/useRequiredContext";
import { AppStoreContext } from "../store";

export const NotAvailable: React.FC<PopoutProps> = () => {
  const { closePopup } = useRequiredContext(AppStoreContext);
  return (
    <Alert
      actions={[
        {
          title: "Понятно",
          mode: "cancel",
          autoclose: true,
        },
      ]}
      onClose={() => closePopup()}
      header="Пока тут пусто"
      text="Раздел добавится в обновлении"
      actionsLayout="vertical"
    />
  );
};
