import React from 'react';

import UserItem from './UserItem';

import styles from './UserList.module.css';

const UserList = props => {

    return (
        <div>
            <div className={styles.users}>
                {props.users.map(user =>
                    <UserItem
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        age={user.age}
                        onDeleteUser={props.deleteUser}
                    />
                )}
            </div>
        </div>
    );
}

export default UserList;