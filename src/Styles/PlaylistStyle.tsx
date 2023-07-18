import styled from "styled-components";

export const MusicPlaylistWrapper = styled.button`
  display: flex;
  padding: 10px;
  justify-content: start;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background-color: transparent;
  border-color: transparent;
  color: white;
  padding: 10px;
  box-sizing: content-box;
  width: 260px;
  height: 40px;
  background-color: transparent;
  grid-column: auto / span 6;
  .title {
    font-size: 14px;
    font-weight: 400;
  }

  .artist {
    font-size: 11px;
    font-weight: 400;
  }

  .albumImg {
    width: 40px;
    height: 40px;
  }
`;

export const MusicMessageWrapper = styled.div`
  display: flex;
  height: 46px;
  width: 236px;
  padding: 5px 20px;
  align-items: center;
  justify-content: start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.7);
  grid-column: auto / span 6;
`;
