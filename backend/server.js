const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve your UI5 webapp folder directly
app.use(express.static(path.join(__dirname, "webapp")));

const users = [];

// Health Check
app.get("/health", (req, res) => {
    res.send("Backend Running Successfully!");
});

// GET Route: Fetch all users
app.get("/api/users", (req, res) => {
    console.log("GET /api/users requested");
    res.json(users);
});

// POST Route: Add a new user
app.post("/api/users", (req, res) => {
    console.log("POST /api/users incoming request");
    console.log("Incoming Payload:", req.body);

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Validation Failed: Name and Email are required."
        });
    }

    const newUser = {
        id: Date.now(),
        name,
        email
    };

    users.push(newUser);
    console.log("Updated User List:", users);

    res.status(201).json({
        message: `User '${name}' successfully added!`,
        user: newUser
    });
});

// Safe Fallback Middleware: Triggers for any remaining unhandled request paths
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "webapp", "index.html"));
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`🚀 Unified App running on Port: ${PORT}`);
    console.log(`==========================================`);
});