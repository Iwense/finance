import {
  Header,
  Tabs,
  HorizontalScroll,
  TabsItem,
  Caption,
  Group,
  FormItem,
  Input,
  SizeType,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  CellButton,
  FormLayout,
  FormLayoutGroup,
  Select,
  Div,
  DateInput,
  FixedLayout,
  Separator,
  SimpleCell,
} from "@vkontakte/vkui";
import { SliderInput } from "components/Form/SliderInput";
import { SliderInputAndSelect } from "components/Form/SliderInputAndSelect";
import { InfoRow } from "components/InfoRow";
import { TextValue } from "components/TextValue";
import { ACTIVE_PANEL, ACTIVE_STORY } from "constants/index";
import { useRequiredContext } from "hooks/useRequiredContext";
import { observer } from "mobx-react-lite";
import { PanelProps } from "panels";
import {
  CalcInputName,
  CreditCalcStore,
  CreditCalcStoreContext,
  CreditCalcStoreProvider,
} from "panels/Calculator/store";
import { useState } from "react";
import { AppStoreContext } from "store";
import styles from "./CreditCalc.module.css";

const enum CALCULATE_BY {
  CREDIT_AMOUNT = "credit_amount",
  PAYMENT_AMOUNT = "payment_amount",
}

const contentStyles = {
  paddingBottom: 140,
};

export const CreditCalc: React.FC<PanelProps> = observer(({ id }) => {
  const app = useRequiredContext(AppStoreContext);
  const calc = useRequiredContext(CreditCalcStoreContext);
  const {
    changeInput,
    creditAmount,
    creditTerm,
    yearPercent,
    monthlyPayment,
    interestPercent,
    debtPlusInterest,
    repaymentProcedure,
  } = calc;
  const { setActivePanel } = app;

  const [activeTab, setActiveTab] = useState<CALCULATE_BY>(
    CALCULATE_BY.CREDIT_AMOUNT
  );

  const onChange = (e: any) => {
    const { name, value } = e.currentTarget;
    console.log("name = ", name);
    changeInput(value, name);
  };

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderBack
            onClick={() =>
              setActivePanel(ACTIVE_PANEL.CALCULATOR, ACTIVE_STORY.CALCULATOR)
            }
          />
        }
      >
        Кредитный калькулятор
      </PanelHeader>
      <Tabs>
        <HorizontalScroll>
          <TabsItem
            onClick={() => setActiveTab(CALCULATE_BY.CREDIT_AMOUNT)}
            selected={activeTab === CALCULATE_BY.CREDIT_AMOUNT}
          >
            <Caption>По сумме кредита/займа</Caption>
          </TabsItem>

          <TabsItem
            onClick={() => setActiveTab(CALCULATE_BY.PAYMENT_AMOUNT)}
            selected={activeTab === CALCULATE_BY.PAYMENT_AMOUNT}
          >
            <Caption>По сумме платежа</Caption>
          </TabsItem>
        </HorizontalScroll>
      </Tabs>
      <FormLayout style={contentStyles}>
        <SliderInput
          top="Сумма кредита/займа ₽"
          name="credit_amount"
          max={30_000_000}
          value={creditAmount}
          onChange={(val) => changeInput(val, CalcInputName.CREDIT_AMOUNT)}
        />

        <SliderInput
          top="Процентная ставка, % годовых"
          name="year_percent"
          value={yearPercent}
          onChange={(val) => changeInput(val, CalcInputName.YEAR_PERCENT)}
        />
        <SliderInputAndSelect
          top="Срок кредита/займа"
          name="credit_term"
          value={creditTerm}
          selectValue={0}
          onChange={(val) => changeInput(val, CalcInputName.CREDIT_TERM)}
          onChangeSelect={() => null}
        />

        <FormItem top="Порядок погашения">
          <Select
            sizeY={SizeType.COMPACT}
            onChange={onChange}
            value={repaymentProcedure}
            name={CalcInputName.REPAYMENT_PROCEDURE}
            options={[
              {
                value: "0",
                label: "Аннуительный",
              },
              {
                value: "1",
                label: "Дифференцированный",
              },
            ]}
          />
        </FormItem>
      </FormLayout>

      <FixedLayout filled vertical="bottom">
        <Separator wide />
        <TextValue
          text={"Ежемесячный платеж"}
          value={`${monthlyPayment} ₽`}
          noSeparator
        />
        <TextValue
          text={"Начисленные проценты"}
          value={`${interestPercent} ₽`}
          noSeparator
        />
        <TextValue
          text={"Долг + проценты"}
          value={`${debtPlusInterest} ₽`}
          noSeparator
        />
      </FixedLayout>
    </Panel>
  );
});
