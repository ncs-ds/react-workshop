import { Typography } from "@material-ui/core";
import { FC } from "react";
import { useUserList } from "./hooks/useUserList";

export interface UserListProps {
  colour: string;
}

const UserList: FC<UserListProps> = ({ colour: myColour }) => {
  const { data } = useUserList();
  return (
    <>
      <Typography variant="h5">The valid users are:</Typography>

      {data &&
        data.map((user: any) => (
          <Typography variant="h6">
            <li style={{ color: myColour }}>
              {user.name} - {user.email}
            </li>
          </Typography>
        ))}
    </>
  );
};

export default UserList;
