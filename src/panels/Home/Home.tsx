import React from "react";
import {
  Banner,
  Button,
  Card,
  CardGrid,
  Div,
  FormItem,
  Group,
  Header,
  Panel,
  PanelHeader,
  Text,
  Title,
} from "@vkontakte/vkui";
import { useRequiredContext } from "hooks/useRequiredContext";
import { PanelProps } from "panels";
import { AppStoreContext } from "store";
import cn from "classnames";

import { ACTIVE_PANEL, ACTIVE_POPUP, ACTIVE_STORY } from "constants/index";
import { Icon24Filter, Icon24FavoriteOutline } from "@vkontakte/icons";

import styles from "./Home.module.css";

const LIST_OF_CARDS = [
  {
    id: 1,
    name: "Займы",
    img: "",
    panelName: ACTIVE_PANEL.LOANS,
    disabled: false,
  },
  {
    id: 2,
    name: "Кредиты",
    img: "",
    panelName: ACTIVE_PANEL.CREDIT,
    disabled: true,
  },
  {
    id: 3,
    name: "Страхование",
    img: "",
    panelName: ACTIVE_PANEL.INSURANCE,
    disabled: true,
  },
  {
    id: 4,
    name: "Карты",
    img: "",
    panelName: ACTIVE_PANEL.BANK_CARDS,
    disabled: true,
  },
  {
    id: 5,
    name: "Ипотека",
    img: "",
    panelName: ACTIVE_PANEL.IPOTEKA,
    disabled: true,
  },
  {
    id: 6,
    name: "Инвестиции",
    img: "",
    panelName: ACTIVE_PANEL.INVESTING,
    disabled: true,
  },
];

export const Home: React.FC<PanelProps> = ({ id }: PanelProps) => {
  const app = useRequiredContext(AppStoreContext);
  const { setActivePanel, openPopup, setActiveRoute } = app;

  const handleCardClick = (disabled: boolean, panelName: ACTIVE_PANEL) => {
    if (disabled) {
      openPopup(ACTIVE_POPUP.NOT_AVAILABLE);
    } else {
      setActivePanel(panelName, ACTIVE_STORY.HOME);
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader>Все о финансах</PanelHeader>
      <Group separator="hide">
        <Banner
          mode="image"
          header="Рассчитать кредит"
          subheader="за пару минут"
          background={
            <div
              style={{
                backgroundColor: "#65c063",
                backgroundImage:
                  "url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)",
                backgroundPosition: "right bottom",
                backgroundSize: 320,
                backgroundRepeat: "no-repeat",
              }}
            />
          }
          actions={
            <Button
              mode="overlay_primary"
              onClick={() =>
                setActiveRoute(
                  ACTIVE_PANEL.CREDIT_CALC,
                  ACTIVE_STORY.CALCULATOR
                )
              }
            >
              Подробнее
            </Button>
          }
        />
      </Group>

      <Group separator="hide">
        <CardGrid size="m">
          {LIST_OF_CARDS.map((card) => (
            <Card
              key={card.id}
              className={cn(styles.card, { [styles.disabled]: card.disabled })}
              onClick={() => handleCardClick(card.disabled, card.panelName)}
            >
              <Title className={styles.title} level="2">
                {card.name}
              </Title>
            </Card>
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};
