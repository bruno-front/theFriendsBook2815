import Friend from '../friend/Friend';
import css from './Friends.module.css';

function Friends(props) {
    let friendsData = props.friends;
    let friendsElements = [];

    friendsData.forEach(function(friend) {
        friendsElements.push(
            <li className={css.item}>
                <Friend friend={friend}/>
            </li>
        );
    });

    console.log(friendsElements);

    return (
        <div className={css.Friends}>
            <h1 className={css.title}>Мои друзяшки</h1>
            <ul className={css.list}>
                {friendsElements}
            </ul>
        </div>
    );
}

export default Friends;