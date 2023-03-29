import css from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={css.Sidebar}>
            <a href="#" className={css.logo}>The FreaksBook</a>
        </div>
    )
}

export default Sidebar;