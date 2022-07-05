import React from 'react';
import styles from './Users.module.scss';
import { Image, Alert, Button } from 'react-bootstrap';
import avatar from '../../assets/img/avatar.jpg';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <Alert className={styles.block}>
      <span>
        <div className={styles.avatar}>
          <NavLink to={'/profile/' + user.id}>
            <Image roundedCircle src={user.photos.small != null ? user.photos.small : avatar} alt='img'></Image>
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              UnFollow
            </Button>
          ) : (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </Button>
          )}
        </div>
      </span>

      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'u.location.city'}</div>
          <div>{'u.location.country'}</div>
        </span>
      </span>
    </Alert>
  );
};

export default User;
