const express = require("express")
const contractController = require("../controllers/contractController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router()

router.post("/", authMiddleware, contractController.createContract)
router.get("/", authMiddleware, contractController.getContracts)
router.get("/:id", authMiddleware, contractController.getContractByUser)
router.get("/:id/download", authMiddleware, contractController.downloadContract);

module.exports = router