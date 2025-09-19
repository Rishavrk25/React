import React, { useEffect, useState } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    // Fetch data from dummy API
    fetch("https://jsonplaceholder.typicode.com/users", { signal: signal })
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => {
        setUsers(data); // Save data to state
        setLoading(false); // Stop loading spinner
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
      return () => { controller.abort();  // Cleanup to abort fetch on unmount
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users from Dummy API</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUsers;
