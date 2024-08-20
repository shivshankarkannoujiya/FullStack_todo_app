/* eslint-disable no-unused-vars */

import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{}}>
      <div style={{}}>
        <input
          style={{
            padding: 10,
            margin: 10,
          }}
            type="text"
            placeholder="enter title"
            onChange={function (e) {
            const val = e.target.value;
            setTitle(val);
          }}
        />{" "}
        <br />
        <br />
        <input
          style={{
            padding: 10,
            margin: 10,
          }}
            type="text"
            placeholder="enter description"
            onChange={function (e) {
            const val = e.target.value;
            setDescription(val);
          }}
        />
        <br />
        <br />
        <button
          style={{
            padding: 10,
            margin: 10,
          }}
          onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                title: title,
                description: description,
              }),
                headers: {
                "Content-Type": "application/json",
              },
            }).then(async function (response) {
                const json = await response.json();
                alert(`todo added...`);
            });
          }}
        >
            Add Todo
        </button>
      </div>
    </div>
  );
}

export { CreateTodo };
