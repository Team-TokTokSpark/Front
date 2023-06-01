import { Link } from "react-router-dom";
import MusicPageShow from "../Components/MusicPageShow";

function MymusicPage() {
  return (
    <>
      <div className="setting-part">
        <Link to="edit">
          <img src="/img/Pencil_Edit.png" alt="editing" />
        </Link>
      </div>
      <MusicPageShow />
    </>
  );
}

export default MymusicPage;
