import { useState } from "react";
import { useParams } from 'react-router-dom';
import Footer from "../pageElements/footer";
import Header from "../pageElements/header";
import EditPage from "./editPageCommon";

const EditInProgress = ({ backlog, finished, inProgress, setInProgress, navigate }) => {
  const { id } = useParams();
  const task = inProgress.find(t => t.id === parseInt(id));

  const [description, setDescription] = useState(task?.description || '');

  const handleSave = () => {
    const updatedTask = { ...task, description };
    const updatedInProgress = inProgress.map(t => t.id === updatedTask.id ? updatedTask : t);
    setInProgress(updatedInProgress);
    navigate('/');
  }

  return (
    <div className="edit-page">
      <Header/>
      <EditPage task={task} description={description} handleSave={handleSave} setDescription={setDescription}/>
      <Footer backlog={backlog} finished={finished}/>
    </div>
  );
};

export default EditInProgress;