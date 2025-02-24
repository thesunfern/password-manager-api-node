const express = require("express");
const app = express();
const PORT = 8058;
const passwords = require("./db/passwords.json");

app.get("/api/passwords/:userId", (req, res) => {
	const id = req.params.userId;
	console.log("passwords: " + passwords);
	let userPasswords = passwords.find(user => user.username == id);
	console.log("userPasswords: " + userPasswords);
	return res.json(userPasswords);
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
