import React from 'react';
import styles from './Users.module.scss';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

let Users: React.FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
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
