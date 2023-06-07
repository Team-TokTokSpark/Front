import { useRecoilState } from "recoil";
import { nextPopUpModal, popUpModal } from "../atom";
import * as M from "../Styles/Modal";

type Props = {
  modalClose: () => void;
};

const ReturnNextModal = ({ modalClose }: Props) => {
  return (
    <M.ModalPage>
      <div>The Sticker Add Page</div>
      <button onClick={modalClose}>닫기</button>
    </M.ModalPage>
  );
};

function StickerModal({ modalClose }: Props) {
  const [nextModalOpen, setNextModalOpen] = useRecoilState(nextPopUpModal);
  const [modalOpen, setModalOpen] = useRecoilState(popUpModal);
  const nextModalClose = () => {
    setNextModalOpen(!nextModalOpen);
    setModalOpen(!modalOpen);
  };
  return (
    <M.BackgroundModal>
      <M.ModalPage>
        <div>Search Modal Page</div>
        <button
          onClick={() => {
            setNextModalOpen(!nextModalOpen);
          }}
        >
          Next
        </button>
        {nextModalOpen && <ReturnNextModal modalClose={nextModalClose} />}
        <button onClick={modalClose}>닫기</button>
      </M.ModalPage>
    </M.BackgroundModal>
  );
}

export default StickerModal;
