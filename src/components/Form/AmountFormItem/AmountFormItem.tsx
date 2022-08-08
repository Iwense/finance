import { FormItem, Input, Spacing, Slider, Caption } from "@vkontakte/vkui";
import { useState } from "react";

import styles from "./AmountFormItem.module.css";

export const AmountFormItem = () => {
  const [amount, setAmount] = useState<number>(10000);
  return (
    <FormItem top="Сумма займа, рубли">
      <Input
        max={200000}
        type="number"
        value={String(amount)}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <Spacing />
      <Slider
        step={100}
        min={1000}
        max={200000}
        value={amount}
        onChange={(val) => setAmount(val)}
      />
      <div className={styles.sliderCaption}>
        <Caption weight="3">1000 Р</Caption>
        <Caption weight="3">200 000 Р</Caption>
      </div>
    </FormItem>
  );
};
