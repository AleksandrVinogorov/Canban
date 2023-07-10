const Footer = ({backlog, finished}) => {
    return (
        <footer>
            <div className='footer-wrapper'>
                <div className='footer__stats'>
                    <div className='footer__stats-active'>Active tasks: {backlog.length}</div>
                    <div className='footer__stats-finished'>Finished tasks: {finished.length}</div>
                </div>
                <div className='footer__author'>Kanban board by Name, 2023</div>
            </div>
        </footer>
    )
}
export default Footer