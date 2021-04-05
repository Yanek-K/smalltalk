const functions = require("firebase-functions");
const app = require("express")();
const FBAuth = require("./utils/fbAuth");

const {
  getAllPosts,
  postOnePost,
  getPost,
  commentOnPost,
} = require("./handlers/posts");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");

// Post routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);
app.get("/post/:postId", getPost);
app.post("/post/:postId/comment", FBAuth, commentOnPost);

//TODO::
// delete post
// like a post
// unlike a post
// comment on a post
//

//Signup Route
app.post("/signup", signup);

// Login Route
app.post("/login", login);

//Upload Image
app.post("/user/image", FBAuth, uploadImage);

//Add User Details
app.post("/user", FBAuth, addUserDetails);

// Get Own User Details
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
