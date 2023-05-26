import { useNavigate, useOutletContext } from "react-router-dom";

function MymusicPage() {
  const navigate = useNavigate();
  return (
    <div className="setting-part">
      <img
        src="/img/Pencil_Edit.png"
        alt="editing"
        onClick={() => {
          navigate(`/edit`);
        }}
      />
    </div>
  );
}

export default MymusicPage;
