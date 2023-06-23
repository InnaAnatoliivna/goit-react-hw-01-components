import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from 'components/3-friend-list/friendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => {
                return (
                    <li className={css.item} key={friend.id}>
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
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool,
            name: PropTypes.string,
        })
    )
}