import {
  Panel,
  PanelHeader,
  Group,
  Tabs,
  TabsItem,
  HorizontalScroll,
  PanelHeaderBack,
  Caption,
  FormItem,
  SegmentedControl,
  Header,
  SizeType,
  Input,
  Div,
  Cell,
  Separator,
  Spacing,
  List,
} from "@vkontakte/vkui";
import { useState } from "react";
import { PanelProps } from "panels";
import {
  Icon28Notifications,
  Icon28BlockOutline,
  Icon28UserOutline,
  Icon28SlidersOutline,
  Icon28PrivacyOutline,
  Icon28SettingsOutline,
} from "@vkontakte/icons";
import { useRequiredContext } from "hooks/useRequiredContext";
import { AppStoreContext } from "store";
import { ACTIVE_PANEL, ACTIVE_STORY } from "constants/index";

export const Calculator: React.FC<PanelProps> = ({ id }) => {
  const app = useRequiredContext(AppStoreContext);
  const { setActivePanel, openPopup } = app;

  const handleCalcClick = (panelName: ACTIVE_PANEL) => {
    setActivePanel(panelName, ACTIVE_STORY.CALCULATOR);
  };

  return (
    <Panel id={id}>
      <PanelHeader>Рассчитать</PanelHeader>
      <Group>
        <List>
          <Cell
            expandable
            before={<Icon28UserOutline />}
            onClick={() => handleCalcClick(ACTIVE_PANEL.CREDIT_CALC)}
          >
            Кредитный калькулятор
          </Cell>
          <Cell expandable before={<Icon28SettingsOutline />}>
            Ипотечный калькулятор
          </Cell>
        </List>
      </Group>
    </Panel>
  );
};
