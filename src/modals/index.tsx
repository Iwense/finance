import { ModalCard, ModalPage, ModalRoot } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import { ACTIVE_MODAL } from "../constants";
import { useRequiredContext } from "../hooks/useRequiredContext";
import { AppStoreContext } from "../store";
import { LoansFilterModal } from "./LoansFilterModal";

export const Modals = observer(() => {
  const { activeModal, closeModal } = useRequiredContext(AppStoreContext);
  return (
    <ModalRoot activeModal={activeModal} onClose={closeModal}>
      <LoansFilterModal id={ACTIVE_MODAL.LOANS_FILTER} />
    </ModalRoot>
  );
});
