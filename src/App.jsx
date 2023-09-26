import style from "./App.module.css";
import { useState } from "react";
import Title from "./components/Title";
import { uploadRandomColor, handleClick } from "./app";

function App() {
  let [colorsList, setColorsList] = useState(uploadRandomColor());
  return (
    <div>
      <h1 className={style.title}>Colors</h1>
      <ul key="1" id="color-list" className={style.color_list}>
        {colorsList.map((e, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                handleClick(colorsList[i]);
              }}
              className={style.cards}
              style={{ backgroundColor: colorsList[i] }}
            >
              <h1>{colorsList[i]}</h1>
            </li>
          );
        })}
      </ul>
      <div className={style.refreshBtnParent}>
        {" "}
        <button
          className={style.refreshBtn}
          onClick={() => {
            setColorsList(uploadRandomColor());
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
export default App;
