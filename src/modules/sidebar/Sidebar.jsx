import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={css.Sidebar}>
            <ul className={css.list}>
                <li className={css.item}>
                    <NavLink to="/friends">Друзяшки</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/profile">Профилек</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;