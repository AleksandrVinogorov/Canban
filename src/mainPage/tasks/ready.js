import { useState } from "react";
const Ready = ({ navigate, backlog, setBacklog, ready, setReady }) => {

  const [isPressed, setPressed] = useState(false);

  function selectTask(id) {
    let task = backlog.find(t => t.id === id);
    setReady([...ready, task]);
    setBacklog(backlog.filter(t => t.id !== id));
  }
  // обработчик
  const handleButtonClick = () => {
    setPressed(true);
  };
  const handleTaskClick = (id) => {
    navigate(`/ready/${id}`);
  }
  const handleSelectChange = (event) => {
    isPressed === true ? setPressed(false) : setPressed(true);
    selectTask(parseInt(event.target.value));
    const selectedValue = event.target.value;
    // Проверяем, был ли выбран элемент, который будет удален
    if (selectedValue && !backlog.find(item => item.id === selectedValue)) {
      // Если выбранный элемент не найден в backlog, выбираем подсказку
      event.target.value = "";
    }
  };
  return (
    <div className='tasks-ready todo'>
      <p className='tasks__title'>Ready</p>
      <div className="tasks__container">
        {ready && ready.map((t, index) => (
          <div key={`ready-${index}`}>
            <div onClick={() => handleTaskClick(t.id)} className="tasks__content">{t.title}</div>
          </div>
        ))}
      </div>
      <select className={isPressed ? "" : 'display-none'} onChange={handleSelectChange}>
        <option disabled selected value="">Выберите задание</option>
        {backlog && backlog.map((t, index) => (
          <option key={`backlog-option-${index}`} value={t.id}>{t.title}</option>
        ))}
      </select>
      <button disabled={backlog.length === 0} onClick={handleButtonClick} className={backlog.length === 0 ? "tasks__add-disabled" : "tasks__add"}>
        <img src={require("../../img/plus.svg").default} alt='/*'></img>
        <p>Add card</p>
      </button>
    </div>
  );
}
export default Ready