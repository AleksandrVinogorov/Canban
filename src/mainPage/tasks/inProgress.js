import { useState } from "react";
const InProgress = ({ navigate, inProgress, setInProgress, ready, setReady }) => {
    const [isPressed, setPressed] = useState(false);

    function selectTask(id) {
        let task = ready.find(t => t.id === id);
        setInProgress([...inProgress, task]);
        setReady(ready.filter(t => t.id !== id));
    }
    // обработчик
    const handleButtonClick = () => {
        isPressed === true ? setPressed(false) : setPressed(true);
    };
    const handleTaskClick = (id) => {
        navigate(`/inProgress/${id}`);
    }
    const handleSelectChange = (event) => {
        isPressed === true ? setPressed(false) : setPressed(true);
        selectTask(parseInt(event.target.value));
        const selectedValue = event.target.value;
        // Проверяем, был ли выбран элемент, который будет удален
        if (selectedValue && !ready.find(item => item.id === selectedValue)) {
            // Если выбранный элемент не найден в backlog, выбираем подсказку
            event.target.value = "";
        }
    };
    return (
        <div className='tasks-inProgress todo'>
            <p className='tasks__title'>In Progres</p>
            <div className="tasks__container">
                {inProgress && inProgress.map((t, index) => (
                    <div key={`inProgress-${index}`}>
                        <div onClick={() => handleTaskClick(t.id)} className='tasks__content'>{t.title}</div>
                    </div>
                ))}
            </div>
            <select className={isPressed ? "" : 'display-none'} onChange={handleSelectChange}>
                <option disabled selected value="">Выберите задание</option>
                {ready && ready.map((t, index) => (
                    <option key={`ready-option${index}`} value={t.id}>{t.title}</option>
                ))}
            </select>
            <button disabled={ready.length === 0} onClick={handleButtonClick} className={ ready.length === 0 ? "tasks__add-disabled" : "tasks__add"}>
                <img src={require("../../img/plus.svg").default} alt='/*'></img>
                <p>Add card</p>
            </button>
        </div>
    )
}
export default InProgress