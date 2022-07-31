import "./index.css";

const Head = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://res.cloudinary.com/dnmtqwagj/image/upload/v1659263746/NxtWave_TM_Coloured_logo_1_2x_v855cu.png"
          alt="logo"
          className="logo"
        />
      </div>
      <button type="button" className="head-btn">
        + ADD
      </button>
      <img
        src="https://res.cloudinary.com/dnmtqwagj/image/upload/v1659263759/image_uivrjy.png"
        alt=""
        className="avatar"
      />
    </div>
  );
};

export default Head;
