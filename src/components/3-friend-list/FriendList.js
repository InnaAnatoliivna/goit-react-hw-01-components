import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => {
                return (
                    <li className="item" key={friend.id}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                            id={friend.id}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array
}