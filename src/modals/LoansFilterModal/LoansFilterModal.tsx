import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderClose,
  PanelHeaderButton,
  FormLayout,
  FormItem,
  Button,
  ModalPageProps,
} from "@vkontakte/vkui";
import { PeriodFormItem, AmountFormItem } from "../../components/Form";
import { useRequiredContext } from "../../hooks/useRequiredContext";
import { AppStoreContext } from "../../store";

export const LoansFilterModal: React.FC<ModalPageProps> = ({ id }) => {
  const { closeModal } = useRequiredContext(AppStoreContext);

  return (
    <ModalPage
      id={id}
      dynamicContentHeight
      header={
        <ModalPageHeader left={<PanelHeaderClose onClick={closeModal} />}>
          Фильтры
        </ModalPageHeader>
      }
    >
      <FormLayout>
        <PeriodFormItem />
        <AmountFormItem />

        <FormItem>
          <Button size="l" stretched onClick={() => {}}>
            Показать результаты
          </Button>
        </FormItem>
      </FormLayout>
    </ModalPage>
  );
};
