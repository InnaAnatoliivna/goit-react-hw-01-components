import PropTypes from 'prop-types';
import defaultImage from 'default-avatar-profile.jpg';
import css from 'components/1-profile/profile.module.css';

const Profile = ({
    username,
    tag,
    location,
    avatar = defaultImage,
    stats
}) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{'@' + tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.item}>
                    <span className={css.label}>Followers:</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Views:</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Likes:</span>
                    <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
};