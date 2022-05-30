import React from 'react';

import styles from './UserItem.module.css';

const UserItem = props => {
    const onDeleteUserHandler = () => {
        props.onDeleteUser(props.id);
    }

    return (
        <div className={styles.userslist}>
            <div className={styles.useritem} onClick={onDeleteUserHandler}>
                <h2>{props.name} ({props.age} years old)</h2>
            </div>
        </div>
    );
}

export default UserItem;