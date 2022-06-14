import React from 'react';
import styles from './Users.module.scss';
import { Image, Alert, Button } from 'react-bootstrap';
import avatar from '../../assets/img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {
  axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
    // debugger;
    props.setUsers(response.data.items);
  });

  return (
    <div>
      {props.users.map((u) => (
        <Alert className={styles.block} key={u.id}>
          <span>
            <div className={styles.avatar}>
              <NavLink to={'/profile/' + u.id}>
                <Image roundedCircle src={u.photos.small != null ? u.photos.small : avatar} alt='img'></Image>
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <Button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </Button>
              ) : (
                <Button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </Button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </span>
          </span>
        </Alert>
      ))}
    </div>
  );
};

export default Users;
