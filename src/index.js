import "./styles.css";

const onClickAdd = () => {
  const getText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  li.className = "item";

  const div = document.createElement("div");
  div.className = "action";
  div.innerText = getText;

  const deleteElement = (e) => {
    document.getElementById("incomplete").removeChild(e);
  };

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteElement(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const addText = addTarget.firstChild.innerText;

    addTarget.textContent = null;
    const div = document.createElement("div");
    div.innerText = addText;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    addTarget.appendChild(div);
    addTarget.appendChild(backButton);

    document.getElementById("complete").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteElement(deleteButton.parentNode);
  });

  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
