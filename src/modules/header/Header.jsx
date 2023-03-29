import css from './Header.module.css';

console.log(css);

function Header() {
    return (
        <header className={css.Header}>
            <a href="#" className={css.logo}>The FriendsBook</a>
            <li className={css.item}></li>
            <li className={css.item}></li>
            <li className={css.item}></li>
            <li className={css.item}></li>
            <li className={css.item}></li>
        </header>
    );
}

export default Header;