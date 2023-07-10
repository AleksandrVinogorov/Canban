import { useState } from "react";
const Backlog = ({ backlog, setBacklog, navigate }) => {
    // обработчик для новых заданий
    const [isPressed, setPressed] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    function addTask(title, description) {
        let task = { id: backlog.length, title, description };
        let newTask = [...backlog, task];
        setBacklog(newTask);
        setTitle('');
        setDescription('');
        setPressed(false);
    }

    // обработчик
    const handleClick = event => {
        setPressed(current => !current);
    };

    const handleTaskClick = (id) => {
        navigate(`/backlog/${id}`);
    }

    return (
        <div className='tasks-backlog todo'>
            <p className='tasks__title'>Backlog</p>
            <div className="tasks__container">
                {backlog && backlog.map((t, index) => (
                    <div key={`backlog-${index}`}>
                        <div onClick={() => handleTaskClick(t.id)} className='tasks__content'>{t.title}</div>
                    </div>
                ))}
            </div>
            <input
                onKeyPress={(e) => { e.key === 'Enter' && addTask(title) }}
                onChange={e => setTitle(e.target.value)}
                value={title}
                className={isPressed ? 'new__task' : 'display-none'}
            />
            {!isPressed ?
                <button onClick={handleClick} className={"tasks__add"}>
                    <img src={require("../../img/plus.svg").default} alt='/*'></img>
                    <p>Add card</p>
                </button>
                : <button disabled={!title} onClick={() => addTask(title)} className={!title ? "submit-disabled" : "submit"}>
                    <p>Submit</p>
                </button>
            }
        </div>
    );
}
export default Backlog