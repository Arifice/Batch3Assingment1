
# The Significance of Union and Intersection Types in TypeScript


🎭 Union Types: Flexibility With Safety

Union types allow a variable to store more than one possible type.

let input: string | number;
input = "Hello";
input = 100;


This feature prevents errors while offering flexibility—ideal when a value might come in different formats (e.g., form inputs or API responses).

✅ When to Use Union Types

Handling multiple acceptable input types

Dealing with nullable/optional data

Working with APIs where a property can vary in type

Example (API response):

type ApiResponse = string | { message: string };

function handleResponse(res: ApiResponse) {
  if (typeof res === "string") {
    console.log(res);
  } else {
    console.log(res.message);
  }
}

🤝 Intersection Types: Combine & Extend

Intersection types merge multiple type definitions into one, enforcing all requirements.

type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  employeeId: 101,
};

✅ When to Use Intersection Types

Creating rich data models

Building mixins or combined interfaces

Enforcing that an object meets multiple contracts
