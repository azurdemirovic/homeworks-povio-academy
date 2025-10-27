console.group("Promises Exercise");

function getUser(userId, callback) {
  setTimeout(() => {
    if (userId === 1) {
      callback(null, { id: 1, name: "John Doe" });
    } else {
      callback(new Error("User not found"), null);
    }
  }, 1000);
}

function getUserPromise(userId) {
  return new Promise((resolve, reject) => {
    getUser(userId, (error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
}

console.log("--- Using .then() approach ---");

getUserPromise(1)
  .then((user) => {
    console.log("Success with .then():", user);
  })
  .catch((error) => {
    console.error("Error with .then():", error.message);
  });

getUserPromise(2)
  .then((user) => {
    console.log("Success with .then():", user);
  })
  .catch((error) => {
    console.error("Error with .then():", error.message);
  });

console.log("--- Using async/await approach ---");

async function testGetUser() {
  try {
    const user = await getUserPromise(1);
    console.log("Success with async/await:", user);
  } catch (error) {
    console.error("Error with async/await:", error.message);
  }

  try {
    const user = await getUserPromise(2);
    console.log("Success with async/await:", user);
  } catch (error) {
    console.error("Error with async/await:", error.message);
  }
}

testGetUser();

console.groupEnd();


