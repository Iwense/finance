import {
  FormItem,
  Input,
  Spacing,
  Slider,
  Caption,
  SimpleCell,
  SizeType,
  Title,
  Div,
  Headline,
} from "@vkontakte/vkui";
import { useState } from "react";

import styles from "./PeriodFormItem.module.css";

export const PeriodFormItem = () => {
  const [period, setPeriod] = useState<number>(25);
  return (
    <FormItem>
      <div className={styles.row}>
        <Headline weight="regular">Срок займа, дней</Headline>
        <Input
          sizeY={SizeType.COMPACT}
          type="number"
          value={String(period)}
          onChange={(e) => setPeriod(Number(e.target.value))}
        />
      </div>
      <Spacing />
      <Slider
        step={1}
        min={1}
        max={30}
        value={period}
        onChange={(val) => setPeriod(val)}
      />
      <div className={styles.sliderCaption}>
        <Caption weight="3">1</Caption>
        <Caption weight="3">30</Caption>
      </div>
    </FormItem>
  );
};
