import React from 'react';
import styles from './Users.module.css';
import { Image, Alert, Button } from 'react-bootstrap';
import avatar from '../../assets/img/avatar.jpg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={styles.pages_list}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? styles.selectedPage : undefined}
              //   className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <Alert className={styles.block} key={u.id}>
          <span>
            <div className={styles.avatar}>
              <NavLink to={'/profile/' + u.id}>
                <Image
                  roundedCircle
                  src={u.photos.small != null ? u.photos.small : avatar}
                  alt='img'
                ></Image>
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
