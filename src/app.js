const body = document.querySelector("body");
const uploadRandomColor = () => {
  const hexValues = [0, 1, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let colorsArr = [];
  for (let i = 0; i < 4; i++) {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomNum = Math.floor(Math.random() * 15);
      hexColor += hexValues[randomNum];
    }
    colorsArr.push(hexColor);
  }
  return colorsArr;
};
function handleClick(e) {
  body.style.backgroundColor = e;
}
export { uploadRandomColor, handleClick };
