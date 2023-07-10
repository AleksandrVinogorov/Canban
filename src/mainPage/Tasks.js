import Backlog from "./tasks/backlog"
import Ready from "./tasks/ready"
import InProgress from "./tasks/inProgress"
import Finished from "./tasks/finished"

const Tasks = ({navigate, backlog, setBacklog, ready, setReady, inProgress, setInProgress, finished, setFinished}) => {

  return <>
    <div className='tasks'>
      <Backlog navigate={navigate} backlog={backlog} setBacklog={setBacklog} ready={ready} setReady={setReady} />
      <Ready navigate={navigate} ready={ready} setReady={setReady} backlog={backlog} setBacklog={setBacklog} />
      <InProgress navigate={navigate} inProgress={inProgress} setInProgress={setInProgress} ready={ready} setReady={setReady} />
      <Finished navigate={navigate} finished={finished} setFinished={setFinished} inProgress={inProgress} setInProgress={setInProgress}/>
    </div>
  </>
}

export default Tasks