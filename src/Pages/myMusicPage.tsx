import { Link } from "react-router-dom";

function MymusicPage() {
  return (
    <div className="setting-part">
      <Link to="edit">
        <img src="/img/Pencil_Edit.png" alt="editing" />
      </Link>
    </div>
  );
}

export default MymusicPage;
