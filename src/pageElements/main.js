
import Profile from './profile';
import Tasks from '../mainPage/Tasks';
import Header from './header';
import Footer from './footer';
function MainPage({navigate, backlog, setBacklog, ready, setReady, inProgress, setInProgress, finished, setFinished}) {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className='tasks-wrapper'>
          <Tasks navigate={navigate} backlog={backlog} setBacklog={setBacklog} ready={ready} setReady={setReady} inProgress={inProgress} setInProgress={setInProgress} finished={finished} setFinished={setFinished}/>
        </div>
      </main>
      <Footer backlog={backlog} finished={finished}/>
    </div>
  );
}


export default MainPage;
