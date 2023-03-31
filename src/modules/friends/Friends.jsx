import css from './Friends.module.css';

function Friends(props) {
    let friendsData = props.friends;
    let friendsElements = [];

    friendsData.forEach(function(friend) {

        friendsElements.push(
            <li className={css.item}>
                <div className={css.friend}>
                    <img src={friend.photoUrl} alt="" />
                    <strong className={css.name}>{friend.name} {friend.surname}</strong>
                    <p className={css.location}>{friend.city}</p>
                    
                    {friend.isFollow ? 
                        <button className={css.btn}>Отписаться</button> : 
                        <button className={css.btn}>Подписаться</button>
                    }
                </div> 
            </li>
        );
    });

    console.log(friendsElements);

    return (
        <div className={css.Friends}>
            <h1 className={css.title}>Мои друзяшки</h1>
            <ul className={css.list}>
                {friendsElements}
                {/* <li className={css.item}>
                    <div className={css.friend}>
                        <img src="" alt="" />
                        <strong className={css.name}></strong>
                        <p className={css.location}></p>
                        <button className={css.btn}>Подписаться</button>
                    </div> 
                </li> */}
            </ul>
        </div>
    );
}

export default Friends;