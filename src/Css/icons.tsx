import { MdError } from "react-icons/md";
// import { TiArrowBack } from "react-icons/ti";
import { GiMusicalNotes } from "react-icons/gi";
import { BsPlusLg, BsSpotify } from "react-icons/bs";
import { SlUserUnfollow } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { CiMusicNote1 } from "react-icons/ci";
import { GrFormClose } from "react-icons/gr";

const icons = {
  notice: <MdError />,
  back: <IoIosArrowBack />,
  music: <GiMusicalNotes />,
  spotify: <BsSpotify />,
  unfollow: <SlUserUnfollow />,
  plus: <BsPlusLg />,
  search: <FiSearch />,
  musicnote: <CiMusicNote1 />,
  close: <GrFormClose />,
};

export default icons;
