import React, { useState } from 'react';
//styles
import css from 'components/app.module.css'
//1 task
import Profile from "./1-profile/Profile";
import profile from 'data/user.json'
//2 task
import data from 'data/data.json';
import Statistics from 'components/2-statistics/Statistics';
//3 task
import friends from 'data/friends.json';
import FriendList from './3-friend-list/FriendList';
//4 task
import TransactionHistory from './4-transaction/Transactions';
import transactions from 'data/transactions';

export const App = () => {
  const [currentTask, setCurrentTask] = useState('Profile');

  const renderTask = () => {
    switch (currentTask) {
      case 'Profile':
        return (
          <Profile
            username={profile.username}
            tag={profile.tag}
            location={profile.location}
            avatar={profile.avatar}
            stats={profile.stats}
          />);
      case 'Statistics':
        return (
          <Statistics
            title="Upload stats"
            stats={data}
          />);
      case 'FriendList':
        return (
          <FriendList
            friends={friends}
          />);
      case 'TransactionHistory':
        return (
          <TransactionHistory
            items={transactions}
          />);
      default:
        return null;
    }
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>React homework 01. Components</h1>
      <div className={css.wrapperBtn}>

        <button className={css.btn} type='button' onClick={() => setCurrentTask('Profile')}>Profile</button>
        <button className={css.btn} type='button' onClick={() => setCurrentTask('Statistics')}>Statistics</button>
        <button className={css.btn} type='button' onClick={() => setCurrentTask('FriendList')}>FriendList</button>
        <button className={css.btn} type='button' onClick={() => setCurrentTask('TransactionHistory')}>TransactionHistory</button>

      </div>
      {renderTask()}
    </div>
  )
}