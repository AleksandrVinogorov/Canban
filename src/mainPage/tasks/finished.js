import { useState } from "react";
const Finished = ({ navigate, inProgress, setInProgress, finished, setFinished }) => {
    const [isPressed, setPressed] = useState(false);

    function selectTask(id) {
        let task = inProgress.find(t => t.id === id);
        setFinished([...finished, task]);
        setInProgress(inProgress.filter(t => t.id !== id));
    }
    // обработчик
    const handleButtonClick = () => {
        isPressed === true ? setPressed(false) : setPressed(true);
    };
    const handleTaskClick = (id) => {
        navigate(`/finished/${id}`);
    }
    const handleSelectChange = (event) => {
        isPressed === true ? setPressed(false) : setPressed(true);
        selectTask(parseInt(event.target.value));
        const selectedValue = event.target.value;
        // Проверяем, был ли выбран элемент, который будет удален
        if (selectedValue && !inProgress.find(item => item.id === selectedValue)) {
            // Если выбранный элемент не найден в backlog, выбираем подсказку
            event.target.value = "";
        }
        // Остальная логика обработки изменения select
    };
    return (
        <div className='tasks-finished todo'>
            <p className='tasks__title'>Finished</p>
            <div className="tasks__container">
                {finished && finished.map((t, index) => (
                    <div key={`finished-${index}`}>
                        <div onClick={() => handleTaskClick(t.id)} className='tasks__content'>{t.title}</div>
                    </div>
                ))}
            </div>
            <select className={isPressed ? "" : 'display-none'} onChange={handleSelectChange}>
                <option disabled selected value="">Выберите задание</option>

                {inProgress && inProgress.map((t, index) => (
                    <option key={`inProgress-option${index}`} value={t.id}>{t.title || 'Без названия'}</option>
                ))}
            </select>
            <button disabled={inProgress.length === 0} onClick={handleButtonClick} className={ inProgress.length === 0 ? "tasks__add-disabled" : "tasks__add"}>
                <img src={require("../../img/plus.svg").default} alt='/*'></img>
                <p>Add card</p>
            </button>
        </div>
    )
}
export default Finished