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
} from "@vkontakte/vkui";
import { useState } from "react";
import { PanelProps } from "..";

const enum CALCULATE_BY {
  CREDIT_AMOUNT = "credit_amount",
  REAL_ESTATE = "real_estate",
}

export const Calculator: React.FC<PanelProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<CALCULATE_BY>(
    CALCULATE_BY.CREDIT_AMOUNT
  );

  return (
    <Panel id={id}>
      <PanelHeader>Ипотечный калькулятор</PanelHeader>
      <Header>Рассчитать</Header>
      <Tabs>
        <HorizontalScroll>
          <TabsItem
            onClick={() => setActiveTab(CALCULATE_BY.REAL_ESTATE)}
            selected={activeTab === CALCULATE_BY.REAL_ESTATE}
          >
            <Caption>По стоимости недвижимости</Caption>
          </TabsItem>
          <TabsItem
            onClick={() => setActiveTab(CALCULATE_BY.CREDIT_AMOUNT)}
            selected={activeTab === CALCULATE_BY.CREDIT_AMOUNT}
          >
            <Caption>По сумме кредита</Caption>
          </TabsItem>
        </HorizontalScroll>
      </Tabs>

      {/* <Div> */}
      <Group>
        <FormItem
          top="Стоиомсть недвижимости"
          // status={email ? "valid" : "error"}
          // bottom={
          //   email
          //     ? "Электронная почта введена верно!"
          //     : "Пожалуйста, введите электронную почту"
          // }
        >
          <Input
            sizeY={SizeType.COMPACT}
            type="number"
            name="real_estate_price"
            value={"a"}
            onChange={() => {}}
          />
        </FormItem>
      </Group>
      {/* </Div> */}
    </Panel>
  );
};
