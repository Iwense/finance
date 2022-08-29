import React from "react";
import {
  Cell,
  Div,
  Group,
  List,
  Panel,
  PanelHeader,
  PanelProps,
  Placeholder,
} from "@vkontakte/vkui";
import {
  Icon28PrivacyOutline,
  Icon28SettingsOutline,
  Icon28UserOutline,
  Icon56GhostOutline,
} from "@vkontakte/icons";

export const User: React.FC<PanelProps> = ({ nav }: PanelProps) => {
  return (
    <Panel nav={nav}>
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <List>
          <Cell expandable before={<Icon28UserOutline />}>
            Учетная запись
          </Cell>
          <Cell expandable before={<Icon28SettingsOutline />}>
            Основные
          </Cell>
          <Cell expandable before={<Icon28PrivacyOutline />}>
            Приватность
          </Cell>
        </List>
      </Group>
    </Panel>
  );
};
