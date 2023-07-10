import Profile from "./profile"
const Header = () => {
    return (
        <header className='header'>
            <div className='header-wrapper'>
                <div className='header__logo'>
                    <p>Awesome Kanban Board</p>
                </div>
                <Profile />
            </div>
        </header>
    )
}
export default Header