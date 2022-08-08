import React, { useState } from "react";
import {
  Avatar,
  Button,
  Caption,
  Checkbox,
  Counter,
  FormItem,
  FormLayout,
  Group,
  Header,
  Input,
  IOS,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderButton,
  PanelHeaderClose,
  Placeholder,
  platform,
  SimpleCell,
  Slider,
  Spacing,
  SplitCol,
  SplitLayout,
  SubnavigationBar,
  SubnavigationButton,
  View,
  ViewWidth,
} from "@vkontakte/vkui";
import { PanelProps } from "..";
import { useRequiredContext } from "../../hooks/useRequiredContext";
import { AppStoreContext } from "../../store";
import { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_STORY } from "../../constants";
import {
  Icon24Dismiss,
  Icon24Filter,
  Icon24FavoriteOutline,
  Icon24ScanViewfinderOutline,
  Icon24UserAddOutline,
} from "@vkontakte/icons";
import { AmountFormItem, PeriodFormItem } from "../../components/Form";

const MODAL_NAME = "filters";

export const Loans: React.FC<PanelProps> = ({ id }: PanelProps) => {
  const app = useRequiredContext(AppStoreContext);
  const { setActivePanel, openModal } = app;

  const [sizeSelected, setSizeSelected] = useState(false);
  const [faveSelected, setFaveSelected] = useState(false);

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderBack
            onClick={() => setActivePanel(ACTIVE_PANEL.HOME, ACTIVE_STORY.HOME)}
          />
        }
      >
        Loans
      </PanelHeader>

      <Group separator="hide">
        <SubnavigationBar>
          <SubnavigationButton
            before={<Icon24Filter />}
            selected={false}
            expandable
            // after={
            //   filtersCount > 0 && (
            //     <Counter mode="primary" size="s">
            //       {filtersCount}
            //     </Counter>
            //   )
            // }
            onClick={() => openModal(ACTIVE_MODAL.LOANS_FILTER)}
          >
            Фильтры
          </SubnavigationButton>

          <SubnavigationButton
            selected={sizeSelected}
            onClick={() => setSizeSelected(!sizeSelected)}
          >
            Мой размер
          </SubnavigationButton>

          <SubnavigationButton
            before={<Icon24FavoriteOutline />}
            selected={faveSelected}
            onClick={() => setFaveSelected(!faveSelected)}
          >
            Избранное
          </SubnavigationButton>
        </SubnavigationBar>
      </Group>

      <Group>
        <SubnavigationBar mode="fixed">
          <SubnavigationButton
            before={<Icon24ScanViewfinderOutline />}
            size="l"
            textLevel={1}
            onClick={() => {}}
          >
            Сканировать QR
          </SubnavigationButton>

          <SubnavigationButton
            before={<Icon24UserAddOutline />}
            size="l"
            textLevel={1}
            onClick={() => {}}
          >
            Добавить друга
          </SubnavigationButton>
        </SubnavigationBar>

        <Header>Важные</Header>
        <SimpleCell>Иван Барышев</SimpleCell>
        <SimpleCell>Михаил Лихачёв</SimpleCell>
        <SimpleCell>Artur Stambultsian</SimpleCell>
      </Group>
    </Panel>
  );
};
