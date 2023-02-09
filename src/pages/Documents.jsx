import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../store/Context";
import "../styles/Documents.scss";

const Documents = () => {
  const { name } = useParams();
  const { documents } = useContext(Context);
  const [subTitles, setSubTitles] = useState([]);
  const [src, setSrc] = useState();
  const [current, setCurrent] = useState();

  const changeName = (name) => {
    let arr = [];
    documents.forEach((el) => {
      if (el.title === name) {
        arr = el.subTitles;
      }
    });

    if (arr.length === 1) {
      setSrc(arr[0].src);
    } else {
      setCurrent(arr[0].subTitle);
      setSrc(arr[0].src);
    }
    setSubTitles(arr);
  };

  useEffect(() => {
    if (documents.length !== 0) {
      changeName(name.replace(/_/g, " "));
    }
  }, [name, documents]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2
        style={{
          color: "white",
          marginTop: "15px",
          borderBottom: "2px solid white",
        }}
      >
        {name.replace(/_/g, " ")}
      </h2>
      {documents.length !== 0 ? (
        <>
          <div className="buttons">
            {subTitles.length === 1 ? (
              <h2>{subTitles[0].subTitle}</h2>
            ) : (
              subTitles.map((subTitleEl) => (
                <button
                  key={subTitleEl.subTitle}
                  onClick={() => {
                    setSrc(subTitleEl.src);
                    setCurrent(subTitleEl.subTitle);
                  }}
                  style={{
                    color: current === subTitleEl.subTitle ? "forestgreen" : "",
                  }}
                >
                  {subTitleEl.subTitle}
                </button>
              ))
            )}
          </div>
          <iframe src={src} />
        </>
      ) : (
        <h2>Загрузка...</h2>
      )}
    </div>
  );
};

export default Documents;
