import { useState } from 'react';
import css from './Friend.module.css';

function Friend(props) {

    let [isFollow, setIsFollow] = useState(false);

    let follow = () => {
        setIsFollow(true);
    }

    let unfollow = () => {
        setIsFollow(false);
    }
    
    return (
        <div className={css.friend}>
            <img src={props.friend.photoUrl} alt="" />
            <strong className={css.name}>{props.friend.name} {props.friend.surname}</strong>
            <p className={css.location}>{props.friend.city}</p>
            
            {isFollow ? 
                <button onClick={unfollow} className={css.btn}>Отписаться</button> : 
                <button onClick={follow} className={css.btn}>Подписаться</button>
            }
        </div> 
    )
}

export default Friend;