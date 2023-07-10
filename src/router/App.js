import MainPage from '../pageElements/main';
import EditBacklog from '../descriptionEditor/editBacklog';
import EditReady from '../descriptionEditor/editReady';
import EditInProgress from '../descriptionEditor/editInProgress';
import EditFinished from '../descriptionEditor/editFinished';

import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router';
const App = () => {
    const navigate = useNavigate();

    // 1. массив заданий backlog
    const [backlog, setBacklog] = useState(() => {
        const backlogData = localStorage.getItem('backlog');
        return backlogData ? JSON.parse(backlogData) : [];
    });
    // сохранение массива в localStorage
    useEffect(() => {
        localStorage.setItem('backlog', JSON.stringify(backlog));
    }, [backlog]);

    // 2. массив заданий ready
    const [ready, setReady] = useState(() => {
        const readyData = localStorage.getItem('ready');
        return readyData ? JSON.parse(readyData) : [];
    });
    // сохранение массива в localStorage
    useEffect(() => {
        localStorage.setItem('ready', JSON.stringify(ready));
    }, [ready]);

    // 3. массив заданий inProgress
    const [inProgress, setInProgress] = useState(() => {
        const inProgressData = localStorage.getItem('inProgress');
        return inProgressData ? JSON.parse(inProgressData) : [];
    })
    // сохранение массива в localStorage
    useEffect(() => {
        localStorage.setItem('inProgress', JSON.stringify(inProgress));
    }, [inProgress]);

    // 4. массив заданий backlog
    const [finished, setFinished] = useState(() => {
        const finishedData = localStorage.getItem('finished');
        return finishedData ? JSON.parse(finishedData) : [];
    });
    // сохранение массива в localStorage
    useEffect(() => {
        localStorage.setItem('finished', JSON.stringify(finished));
    }, [finished]);

    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage finished={finished} navigate={navigate} backlog={backlog} setBacklog={setBacklog} ready={ready} setReady={setReady} inProgress={inProgress} setInProgress={setInProgress} setFinished={setFinished} />} />
                <Route path='/backlog/:id' element={<EditBacklog finished={finished} backlog={backlog} setBacklog={setBacklog} navigate={navigate} />} />
                <Route path='/ready/:id' element={<EditReady finished={finished} backlog={backlog} ready={ready} setReady={setReady} navigate={navigate} />} />
                <Route path='/inProgress/:id' element={<EditInProgress finished={finished} backlog={backlog} inProgress={inProgress} setInProgress={setInProgress} navigate={navigate} />} />
                <Route path='/finished/:id' element={<EditFinished backlog={backlog} finished={finished} setFinished={setFinished} navigate={navigate} />} />
            </Routes>
        </>
    )
}
export default App