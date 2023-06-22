import PropTypes from 'prop-types';
import defaultImage from 'default-avatar-profile.jpg'

const FriendListItem = ({ avatar = defaultImage, name, isOnline }) => {
    return (
        <div>
            <span className={isOnline.toString()}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </div>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    name: PropTypes.string
}