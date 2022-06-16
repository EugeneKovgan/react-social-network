import React from 'react';
import styles from './Users.module.scss';
import { Image, Alert, Button } from 'react-bootstrap';
import axios from 'axios';
import avatar from '../../assets/img/avatar.jpg';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={(e) => {
                  this.props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => {
          return (
            <Alert className={styles.block} key={u.id}>
              <span>
                <div className={styles.avatar}>
                  <Image roundedCircle src={u.photos.small != null ? u.photos.small : avatar} alt='img'></Image>
                </div>
                <div>
                  {u.followed ? (
                    <Button
                      onClick={() => {
                        this.props.unfollow(u.id);
                      }}
                    >
                      UnFollow
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        this.props.follow(u.id);
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
  }
}

export default Users;
