import React from 'react';
import styles from './Users.module.scss';
import { Image, Alert, Button } from 'react-bootstrap';
import avatar from '../../assets/img/avatar.jpg';

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
              // className={props.currentPage === p && styles.selectedPage} // ??
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        return (
          <Alert key={u.id} className={styles.block}>
            <span>
              <div className={styles.avatar}>
                <Image roundedCircle src={u.photos.small != null ? u.photos.small : avatar} alt='img'></Image>
              </div>
              <div>
                {u.followed ? (
                  <Button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    UnFollow
                  </Button>
                ) : (
                  <Button
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
        );
      })}
    </div>
  );
};

export default Users;
