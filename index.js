const express = require("express");
const cors = require("cors");
const User = require("./config"); // Make sure this imports your Firestore configuration
const app = express();

app.use(express.json());
app.use(cors());

// Endpoint to fetch all users from the "users" collection
app.get("/users", async (req, res) => {
  try {
    // Fetch all documents in the users collection
    const snapshot = await User.get();

    // Check if the collection has documents
    if (!snapshot.empty) {
      const usersList = [];
      snapshot.forEach(doc => {
        usersList.push({ id: doc.id, ...doc.data() }); // Include document ID and data
      });

      console.log('Users List:', usersList);
      res.json(usersList); // Send usersList as JSON
    } else {
      res.status(404).json({ message: 'No users found' }); // Return JSON for no users found
    }
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ message: 'Internal Server Error' }); // Return JSON for error
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
