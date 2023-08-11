const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/calculate", (req, res) => {
    const input = req.body.input;
    if (!input) return res.status(400).json({ error: "Input is required." });

    try {
        const result = eval(input);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while calculating." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
