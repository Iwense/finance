import { Caption, Div, Separator, Text } from "@vkontakte/vkui";
import { Fragment } from "react";

import styles from "./TextValue.module.css";

type Props = {
  text: string | React.ReactNode;
  value: string | React.ReactNode;
  noSeparator?: boolean;
};

export const TextValue: React.FC<Props> = ({ text, value, noSeparator }) => {
  return (
    <Fragment>
      <Div className={styles.row}>
        <Text weight="regular">{text}</Text>
        <Text weight="semibold">{value}</Text>
      </Div>
      {!noSeparator && <Separator />}
    </Fragment>
  );
};
