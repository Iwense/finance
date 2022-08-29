import React, { useState } from "react";
import {
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  SubnavigationBar,
  SubnavigationButton,
} from "@vkontakte/vkui";
import { Icon24Filter, Icon24FavoriteOutline } from "@vkontakte/icons";

import { PanelProps } from "panels";
import { useRequiredContext } from "hooks/useRequiredContext";
import { AppStoreContext } from "store";
import { ACTIVE_MODAL, ACTIVE_PANEL, ACTIVE_STORY } from "constants/index";
import { LoansItem } from "components/LoansItem";

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
          Без отказов
        </SubnavigationButton>

        <SubnavigationButton
          before={<Icon24FavoriteOutline />}
          selected={faveSelected}
          onClick={() => setFaveSelected(!faveSelected)}
        >
          Со страховкой
        </SubnavigationButton>
      </SubnavigationBar>

      <Group>
        {["1", "2", "3"].map((item) => {
          return (
            <LoansItem
              key={item}
              id={item}
              companyName="Comapny Name"
              subInfo="subInfo"
              amount={20}
              period={2}
            />
          );
        })}
      </Group>
    </Panel>
  );
};
