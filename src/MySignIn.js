import React from "react";

export default function MySignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    // Verify Password
    alert(
      "A name was submitted: " + username + "\nPassword printed in console"
    );
    console.log("Password is:", password);

    // Call the Server for checking credentials

    const formData = {
      username: username,
      password: password,
    };

    fetch("/login/password", {
      method: "POST",
      body: JSON.stringify(formData),
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    event.preventDefault();
  };

  return (
    <div>
      <form action="/login/password" method="post" onSubmit={handleSubmit}>
        <input
          value={username}
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
        ></input>
        <button type="submit" class="contrast">
          Sign in
        </button>
      </form>
    </div>
  );
}
