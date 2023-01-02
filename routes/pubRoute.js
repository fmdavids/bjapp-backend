const express = require("express")
const router = express.Router()

const { getPubs, addPub, updatePub, movedPub, group, getGroupPubs, deleteAll} = require("../controller/pubController")


router.get(`/allpubs`, getPubs)
router.post(`/addpub`, addPub)
router.put(`/updatepub/:id`, updatePub)
router.get(`/group`, group)
// router.get(`/groupname`, groupName)
router.get(`/groupname/:num`, getGroupPubs)
router.delete(`/deletepub/:id`, movedPub)
// router.delete(`/deleteall`, deleteAll)

module.exports = router