import { ReactElement } from "react";
import styles from "./UserCard.module.scss";
import { User } from "./useUsers";

export function UserCard({ user } : { user: User }) : ReactElement {
	return <div className={styles.userCard}>{user.name}</div>;
}
