const fetch = require('node-fetch'); // wait node 18+ has native fetch
async function test() {
  try {
    const res = await fetch("http://localhost:3000/api/auth/sign-up/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "testuser1@example.com",
        password: "password123",
        image: "https://example.com/image.png"
      })
    });
    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Response:", JSON.stringify(data, null, 2));
  } catch(e) {
    console.error("Error:", e);
  }
}
test();
