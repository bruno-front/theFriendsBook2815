import css from './Header.module.css';

function Header(props) {
    console.log(props);

    return (
        <header className={css.Header}>
            <a href="#" className={css.logo}>{props.logoText}</a>
        </header>
    );
}

export default Header;