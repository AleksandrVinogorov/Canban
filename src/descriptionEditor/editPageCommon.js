const EditPage = ({task, description, handleSave, setDescription}) => {
    return (
        <section className="edit-page__main">
            <div className="edit-page__main-wrapper">
                <div className="edit-page__main-title">
                    <h2>{task?.title}</h2>
                    <button onClick={handleSave}>
                        <img src={require("../img/close.svg").default}></img>
                    </button>
                </div>
                <textarea className="edit-page__main-textarea" placeholder="This task has no description" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
        </section>
    )
}
export default EditPage