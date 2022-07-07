import React from 'react';
import styles from './Users.module.scss';
import Pagination from '../../components/common/Pagination/Pagination';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
  return (
    <div className={styles.Users}>
      <Pagination
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
