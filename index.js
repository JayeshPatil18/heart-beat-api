const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    // Reference to Firestore document
    const docRef = User.doc('usersdoc');

    // Get the document data
    const docSnapshot = await docRef.get();

    if (docSnapshot.exists) {
      const userData = docSnapshot.data();

      // Check if 'userslist' field exists and is an array
      if (userData && userData.userslist && Array.isArray(userData.userslist)) {
        const usersList = userData.userslist;
        const emailList = jsonResponse.map(item => item.email);

        console.log('Users List:', usersList);
        res.send(usersList);
      } else {
        res.status(500).send('The document does not contain a valid "userslist" field.');
      }
    } else {
      res.status(404).send('Document not found');
    }
  } catch (error) {
    console.error('Error getting document:', error);
    res.status(500).send('Internal Server Error');
  }
});

// app.post("/create", async (req, res) => {
//   const data = req.body;
//   await User.add({ data });
//   res.send({ msg: "User Added" });
// });

// app.post("/update", async (req, res) => {
//   const id = req.body.id;
//   delete req.body.id;
//   const data = req.body;
//   await User.doc(id).update(data);
//   res.send({ msg: "Updated" });
// });

// app.post("/delete", async (req, res) => {
//   const id = req.body.id;
//   await User.doc(id).delete();
//   res.send({ msg: "Deleted" });
// });

app.listen(4000, () => console.log("Up & RUnning *4000"));
