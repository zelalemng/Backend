/**
const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/user");
const { protect } = require("../middleware/auth");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
**/
const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe, getUsers, update, login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth, } = require("../controllers/user");
const { protect, protectAdmin, verifyToken } = require("../middleware/auth");

router.post("/", registerUser);
//router.post("/login", loginUser);
//router.get("/me", protect, getMe);
router.get('/', getUsers);
router.put('/:id', update);

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
//router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

module.exports = router;
