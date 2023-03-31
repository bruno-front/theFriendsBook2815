import css from './Profile.module.css';

function Profile() {
    return (
        <div className={css.Profile}>
            <img src="" alt="" className={css.photo} />
            <strong className={css.name}>Kirill</strong>
            <p className={css.status}>Работа не волк, волк - это ходить</p>
        </div>
    );
}

export default Profile;