import React from "react";

import { Avatar } from "../Avatar";
import { UserCardFragment } from "./UserCard.fragment.generated";
import styles from "./UserCard.scss";

type Props = {
  user: UserCardFragment;
};

export const UserCard: React.FunctionComponent<Props> = ({ user }) => (
  <figure className={styles.container} data-testid={`user-card:${user.name}`}>
    <Avatar label={user.name} avatar={user.avatar} />
    <figcaption>
      {user.name} {user.__typename === "ProtectedUser" && `<${user.email}>`}
    </figcaption>
  </figure>
);
