import { Subhead } from "@vkontakte/vkui";

import styles from "./InfoRow.module.css";

type Props = {
  header: string;
  children: React.ReactNode;
};
export const InfoRow: React.FC<Props> = ({ header, children }) => {
  return (
    <div className={styles.root}>
      <Subhead className={styles.title}>{header}</Subhead>
      {children}
    </div>
  );
};
