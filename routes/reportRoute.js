const express = require("express")
const router = express.Router()

const {addReport, getReports, getGroupReport, updateReport, movedReport, getPubReport, getSummary, deleteAll } = require("../controller/reportController")

router.post(`/addreport`, addReport)
router.get(`/all`, getReports)
router.get(`/gorup/:id`, getGroupReport)
router.get(`/report/:id`, getPubReport)
router.put(`/report/:id`, updateReport)
router.get(`/summary/:month`, getSummary)
router.delete(`/removereport/:id`, movedReport)
// router.delete(`/removeallreport`, deleteAll)

module.exports = router