const data = {
  status: "ok",
  user: {
    id: 15,
    profile: {
      name: "Laura",
      email: "laura@example.com"
    },
    roles: ["user", "editor"]
  }
};

// Step 1: Safely isolate the sub-objects without using dots
const status = data["status"];
const userObj = data["user"];

const userId = userObj["id"];
const profileObj = userObj["profile"];
const rolesArr = userObj["roles"];

// Step 2: Grab the final nested variables
const name = profileObj["name"];
const primaryRole = rolesArr[0]; 

console.log(status, userId, name, primaryRole)
