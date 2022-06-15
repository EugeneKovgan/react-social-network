import React from 'react';
import styles from './Users.module.scss';
import { Image, Alert, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import avatar from '../../assets/img/avatar.jpg';

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      console.log(response.data.items);
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <Alert className={styles.block} key={u.id}>
            <span>
              <div className={styles.avatar}>
                {/* <Image roundedCircle src={u.photos.small != null ? u.photos.small : avatar} alt='img'></Image> */}
                <Image roundedCircle src={avatar} alt='img'></Image>
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
        ))}
      </div>
    );
  }
}

export default Users;
