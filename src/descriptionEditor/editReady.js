import { useState } from "react";
import { useParams } from 'react-router-dom';
import Footer from "../pageElements/footer";
import Header from "../pageElements/header";
import EditPage from "./editPageCommon";
const EditReady = ({backlog, finished, ready, setReady, navigate}) => {
  const { id } = useParams();
  const task = ready.find(t => t.id === parseInt(id));

  const [description, setDescription] = useState(task?.description || '');

  const handleSave = () => {
    const updatedTask = { ...task, description };
    const updatedReady = ready.map(t => t.id === updatedTask.id ? updatedTask : t);
    setReady(updatedReady);
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

export default EditReady;