import { useParams } from "react-router-dom";


export default function UserPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>User Page</h1>
            <p>User ID: {id}</p>
        </div>
    );
}