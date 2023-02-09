import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import Context from "../store/Context";
import "../styles/Layout.scss";

const Navbar = () => {
  const { documents } = useContext(Context);
  const [dropDown, setDropDown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const changeClassHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <span onClick={changeClassHandler} className="material-symbols-outlined">
        {isClicked ? "close" : "menu"}
      </span>

      <nav className={isClicked ? "active" : ""}>
        <Link className="btn" to="/about" onClick={() => setIsClicked(false)}>
          О НАС
        </Link>
        <Link
          className="btn"
          to="/services"
          onClick={() => setIsClicked(false)}
        >
          УСЛУГИ
        </Link>

        <div
          style={{ cursor: "pointer", height: "35px", position: "relative" }}
          className="btn"
          onMouseOver={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          ДОКУМЕНТЫ
          {dropDown ? (
            <div className="documents">
              {documents !== 0 &&
                documents.map((doc) => (
                  <Link
                    key={doc.title}
                    className="btn"
                    to={`/documents/${doc.title.replace(/ /g, "_")}`}
                    onClick={() => setIsClicked(false)}
                  >
                    {doc.title}
                  </Link>
                ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
