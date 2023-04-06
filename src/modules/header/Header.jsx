import { useEffect, useState } from 'react';
import css from './Header.module.css';

function Header(props) {
    
    let [count, setCount] = useState(0);
    let [order, setOrder] = useState(0);
    let [price, setPrice] = useState(0);

    let upCount = function () {
        setCount(count + 1);
    }

    let downCount = function () {
        if (count - 1 < 0) {
            return;
        }

        setCount(count - 1);
    }

    useEffect(() => {
        document.title = `Счетчик равен ${count}`;
    });

    return (
        <header className={css.Header}>
            <a href="#" className={css.logo}>{props.logoText}</a>

            <div>{count}</div>

            <button onClick={ upCount }>+ count</button>
            <button onClick={ downCount }>- count</button>
        </header>
    );
}

export default Header;