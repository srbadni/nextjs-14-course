type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersPage() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json() as User[];
    console.log(users, "users");
    
    return <ul>
        {
            users.map(user => {
                return <li key={user.id}>
                    {user.name} - {user.username} - {user.phone} - {user.email}
                </li>
            })
        }
    </ul>
}