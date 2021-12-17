import { useQuery } from "react-query";

export const useUserList = () => {
    async function getUserList() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"     );
        return response.json();
    }
    return useQuery(["UserList"], getUserList);
}