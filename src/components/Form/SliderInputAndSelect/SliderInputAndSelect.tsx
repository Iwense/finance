import { FormItem, Input, Select, SizeType, Slider } from "@vkontakte/vkui";
import React from "react";

import styles from "./SliderInputAndSelect.module.css";

type SliderInputProps = {
  top?: string;
  name: string;
  step?: number;
  max?: number;
  min?: number;
  value: number;
  selectValue: number;
  onChange: (val: number) => void;
  onChangeSelect: () => void;
};

export const SliderInputAndSelect: React.FC<SliderInputProps> = React.memo(
  ({
    top,
    name,
    max = 30,
    min = 0,
    step = 1,
    value,
    selectValue,
    onChange,
    onChangeSelect,
  }) => {
    return (
      <FormItem top={top}>
        <div className={styles.row}>
          <Input
            sizeY={SizeType.COMPACT}
            type="number"
            name={name}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
          />

          <Select
            sizeY={SizeType.COMPACT}
            onChange={onChangeSelect}
            value={selectValue}
            name="term_type"
            options={[
              {
                value: "0",
                label: "Год",
              },
              {
                value: "1",
                label: "Месяц",
              },
            ]}
          />
        </div>
      </FormItem>
    );
  }
);
