import { FormItem, Input, SizeType, Slider } from "@vkontakte/vkui";
import React from "react";

import styles from "./SliderInput.module.css";

type SliderInputProps = {
  top?: string;
  name: string;
  step?: number;
  max?: number;
  min?: number;
  value: number | string;
  onChange: (val: number) => void;
};

export const SliderInput: React.FC<SliderInputProps> = React.memo(
  ({ top, name, max = 30, min = 0, step = 1, value, onChange }) => {
    const sliderValue = value === typeof String && !value ? 0 : +value;
    return (
      <FormItem top={top}>
        <Input
          sizeY={SizeType.COMPACT}
          type="number"
          name={name}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div className={styles.sliderWrapper}>
          <Slider
            step={step}
            min={min}
            max={max}
            value={sliderValue}
            onChange={(val) => onChange(val)}
            className={styles.slider}
          />
        </div>
      </FormItem>
    );
  }
);
