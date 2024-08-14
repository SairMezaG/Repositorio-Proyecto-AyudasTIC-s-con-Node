const express = require("express");
const router = express.Router();
const { getregistroUsuarios, postregistroUsuarios, updateregistroUsuarios, deleteregistroUsuarios, getregistroUsuariosId } = require("../controllers/registroUsuarios");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorPostregistroUsuarios, validatorUpdateregistroUsuarios, validatorPostregistroUsuariosId } = require("../validators/registroUsuarios");

// Rutas para la manipulación de usuarios
router.get("/", getregistroUsuarios);
router.get("/:id", validatorPostregistroUsuariosId, getregistroUsuariosId);
router.post("/", uploadMiddleware.single('foto'), validatorPostregistroUsuarios, postregistroUsuarios);
router.put("/:id", uploadMiddleware.single('foto'), validatorUpdateregistroUsuarios, updateregistroUsuarios);
router.delete("/:id", deleteregistroUsuarios);

module.exports = router;

