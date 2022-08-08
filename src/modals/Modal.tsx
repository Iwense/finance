import React from "react";
import { Button, ModalCard, ModalCardProps } from "@vkontakte/vkui";
import { Icon56GhostOutline } from "@vkontakte/icons";

export const Modal: React.FC<ModalCardProps> = ({ nav }: ModalCardProps) => {
  return (
    <ModalCard
      nav={nav}
      icon={<Icon56GhostOutline />}
      header="Это модальная карточка"
      subheader="Это текст модальной карточки"
      actions={
        <Button size="l" mode="primary">
          Понятно
        </Button>
      }
    />
  );
};
