import { useRecoilState } from "recoil";
import { nextPopUpModal, popUpModal } from "../atom";
import { BackgroundModal, ModalPage } from "../Styles/Modal";

type Props = {
  modalClose: () => void;
};

const ReturnNextModal = ({ modalClose }: Props) => {
  return (
    <ModalPage>
      <div>The Sticker Add Page</div>
      <button onClick={modalClose}>닫기</button>
    </ModalPage>
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
    <BackgroundModal>
      <ModalPage>
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
      </ModalPage>
    </BackgroundModal>
  );
}

export default StickerModal;
