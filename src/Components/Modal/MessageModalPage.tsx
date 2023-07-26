import { useResetRecoilState } from "recoil";
import * as M from "./ModalStyle";
import { messageModalAtom } from "../../atom";
import icons from "../../Css/icons";

type Props = {
  title: string;
  artist: string;
  message: string;
};

const MessageModalPage = ({ title, artist, message }: Props) => {
  const closeModal = useResetRecoilState(messageModalAtom);
  return (
    <M.BackgroundModal>
      <M.MessageModalPage>
        <M.MessageButton
          onClick={() => {
            closeModal();
          }}
        >
          {/* 이게 그냥 안 바뀌어서 그냥 svg파일을 데려옴 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L0.46967 8.46967ZM5.53033 5.53033C5.82322 5.23744 5.82322 4.76256 5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967L5.53033 5.53033ZM4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L4.46967 4.46967ZM9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L9.53033 1.53033ZM5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L5.53033 4.46967ZM8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L8.46967 9.53033ZM4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033C5.82322 5.23744 5.82322 4.76256 5.53033 4.46967L4.46967 5.53033ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 9.53033L5.53033 5.53033L4.46967 4.46967L0.46967 8.46967L1.53033 9.53033ZM5.53033 5.53033L9.53033 1.53033L8.46967 0.46967L4.46967 4.46967L5.53033 5.53033ZM4.46967 5.53033L8.46967 9.53033L9.53033 8.46967L5.53033 4.46967L4.46967 5.53033ZM5.53033 4.46967L1.53033 0.46967L0.46967 1.53033L4.46967 5.53033L5.53033 4.46967Z"
              fill="white"
            />
          </svg>
        </M.MessageButton>
        <div className="text">
          {title}
          <div>{artist}</div>
        </div>
        <div className="message">{message}</div>
      </M.MessageModalPage>
    </M.BackgroundModal>
  );
};

export default MessageModalPage;