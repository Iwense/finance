import {
  Group,
  CardGrid,
  Card,
  Title,
  Subhead,
  Div,
  SimpleCell,
  Avatar,
  Separator,
  Caption,
  InfoRow,
  Button,
} from "@vkontakte/vkui";
import { ACTIVE_PANEL, ACTIVE_STORY, PARAMS_LIST } from "../../constants";
import { useRequiredContext } from "../../hooks/useRequiredContext";
import { AppStoreContext } from "../../store";

import styles from "./LoansItem.module.css";

type Props = {
  id: string;
  companyName: string;
  subInfo: string;
  amount: number;
  period: number;
};

export const LoansItem: React.FC<Props> = ({
  id,
  companyName,
  subInfo,
  amount,
  period,
}) => {
  const { setActivePanel } = useRequiredContext(AppStoreContext);

  const handleDetailsClick = () => {
    setActivePanel(ACTIVE_PANEL.LOAN_DETAILS, ACTIVE_STORY.HOME, {
      [PARAMS_LIST.LOAN_ID]: id,
    });
  };

  return (
    <CardGrid size="l">
      <Card mode="shadow" className={styles.card}>
        <SimpleCell after={<Avatar src={""} />}>
          <Title level="3">{companyName}</Title>
          <Subhead>Subhead</Subhead>
        </SimpleCell>
        <Separator />

        <Div className={styles.row}>
          <InfoRow header="Сумма займа">
            <Title level="3">30 000 Р</Title>
          </InfoRow>

          <InfoRow header="Период займа">
            <Title level="3">2 недели</Title>
          </InfoRow>
        </Div>

        <Div className={styles.row}>
          <InfoRow header="Ставка">
            <Caption level="1">0.5%</Caption>
          </InfoRow>

          <InfoRow header="Период займа">
            <Caption level="1">2 недели</Caption>
          </InfoRow>
        </Div>

        <Div className={styles.row}>
          <Button mode="secondary" onClick={handleDetailsClick}>
            Детали
          </Button>
          <Button mode="commerce">Получить займ</Button>
        </Div>
      </Card>
    </CardGrid>
  );
};
