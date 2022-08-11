import { Caption } from "@vkontakte/vkui";
import cn from "classnames";
import styles from "./ColorChip.module.css";

type Colors = "green" | "red";

type Props = {
  color: Colors;
  children: React.ReactNode;
};

export const ColorChip: React.FC<Props> = ({ color, children }) => {
  return (
    <div className={cn(styles.main, styles[color])}>
      <Caption>{children}</Caption>
    </div>
  );
};
