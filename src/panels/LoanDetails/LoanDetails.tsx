import React, { useState } from "react";
import {
  Avatar,
  Button,
  Caption,
  Card,
  CardGrid,
  Div,
  Group,
  Header,
  Headline,
  InfoRow,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Separator,
  SimpleCell,
  Subhead,
  Title,
  Text,
  Chip,
  HorizontalCell,
  HorizontalScroll,
  CardScroll,
  SubnavigationBar,
  SubnavigationButton,
  FixedLayout,
} from "@vkontakte/vkui";
import { PanelProps } from "..";
import { useRequiredContext } from "../../hooks/useRequiredContext";
import { AppStoreContext } from "../../store";
import {
  ACTIVE_MODAL,
  ACTIVE_PANEL,
  ACTIVE_POPUP,
  ACTIVE_STORY,
  PARAMS_LIST,
} from "../../constants";

import {
  Icon24CheckCircleOutline,
  Icon24FavoriteOutline,
  Icon24Filter,
} from "@vkontakte/icons";
import { Icon28CheckCircleFill } from "@vkontakte/icons";

import styles from "./LoanDetails.module.css";
import { TextValue } from "../../components/TextValue";
import src from "@vkontakte/vk-bridge";
import { ColorChip } from "../../components/ColorChip";

export const LoanDetails: React.FC<PanelProps> = ({ id }: PanelProps) => {
  const app = useRequiredContext(AppStoreContext);
  const { setActivePanel, openModal, params } = app;

  const loanId = params?.[PARAMS_LIST.LOAN_ID];

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderBack
            onClick={() =>
              setActivePanel(ACTIVE_PANEL.LOANS, ACTIVE_STORY.HOME)
            }
          />
        }
      >
        Детали
      </PanelHeader>

      <Group separator="hide">
        <SimpleCell after={<Avatar mode="image" size={72} src={""} />}>
          <Title level="1" style={{ marginBottom: 4 }}>
            Company Name
          </Title>
          <Subhead>Subhead</Subhead>
        </SimpleCell>
      </Group>

      <SubnavigationBar>
        <SubnavigationButton
          className={styles.navigationButton}
          onClick={() => {}}
        >
          На любые цели
        </SubnavigationButton>
        <SubnavigationButton
          className={styles.navigationButton}
          onClick={() => {}}
        >
          Обеспечение не требуется
        </SubnavigationButton>
        <SubnavigationButton
          className={styles.navigationButton}
          onClick={() => {}}
        >
          Без подтверждения дохода
        </SubnavigationButton>
        <SubnavigationButton
          className={styles.navigationButton}
          onClick={() => {}}
        >
          Срок рассмотрения от 5 до 40 минут
        </SubnavigationButton>
      </SubnavigationBar>

      <CardGrid size="l">
        <Card mode="shadow" className={styles.card}>
          <TextValue text="Сумма займа" value="1500 - 3000 р" />
          <TextValue text="Срок" value="62 дн." />
        </Card>
      </CardGrid>

      <FixedLayout vertical="bottom">
        <Div>
          <Button mode="commerce" size="l" stretched>
            Отправить заявку
          </Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
};
