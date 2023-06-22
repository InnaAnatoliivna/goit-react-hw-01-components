import PropTypes from 'prop-types';
import defaultImage from 'default-avatar-profile.jpg'

const Profile = ({
    username,
    tag,
    location,
    avatar = defaultImage,
    stats
}) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{'@' + tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers:</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views:</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes:</span>
                    <span className="quantity">{stats.likes}</span>
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