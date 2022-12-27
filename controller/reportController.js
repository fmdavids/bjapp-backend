const asyncHandler = require("express-async-handler")
const Report = require("../models/reportSchema")


//@desc Get All Report
//@route GET /api/reports
//@access Public 
const getReports = asyncHandler( async (req, res) => {

    const report = await Report.find()

    res.status(200).json({ "msg": "All Report fetched successfully", report })
})
//@desc Get All Report
//@route GET /api/reports
//@access Public 
const getGroupReport = asyncHandler( async (req, res) => {

    const report = await Report.find(req.params.id)

    res.status(200).json({ "msg": "Group Report fetched successfully", report  })
})
//@desc Get Pub Report
//@route GET /api/report/:id
//@access Public 
const getPubReport = asyncHandler( async (req, res) => {

    const report = await Report.findById(req.params.id)

    res.status(200).json({ "msg": "Pub Report fetched successfully", report })
})

//@desc Set goal
//@route POST /api/reports/addreport
//@access Private
const addReport = asyncHandler( async (req, res) => {
    
    if(!req.body){
        res.status(400)
        throw new Error("Please add a new Pub")
    }
    // const { group, name, month, placements, videos, hours, return_visit, study, comments } = req.body;
    const newReport = req.body;
    const report = await Report.create(newReport)
    // console.log(report);

    // const saveReport = await report.save()

    // console.log(saveReport);

    res.status(200).json({ "msg": "Report Added successfully", report })
    // res.status(200).json({ "msg": "Report Added successfully", saveReport })
})


//@desc Update report
//@route PUT /api/report/:id
//@access Private
const updateReport = asyncHandler( async (req, res) => {

    const report = await Report.findById(req.params.id)

    if (!report) {
        res.status(400)
        throw new Error("Pub updated Successfully")
    }
    
    const updatedReport = await Report.findByIdAndUpdate(report, req.body, {
        new: true
    })

    res.status(200).json(updatedReport)
})

//@desc delete goal
//@route DELETE /api/goals/:id
//@access Private
const movedReport = asyncHandler( async (req, res) => {
        const removeReport = await Report.findByIdAndDelete(req.params.id)

        if(!removeReport) {
            res.status(400)
            throw new Error("Please, select which Report to DELETE")
        }
    res.status(200).json({ "msg": "Pub removed successfully", removeReport})
})

//@desc Get All Report
//@route GET /api/reports/summary/month
//@access Public 
const getSummary = asyncHandler( async (req, res) => {

const month = req.params.month 

    const data = await Report.aggregate([
    { '$match' : { 'month' : { '$eq' : new Date(month) } }},
      {
        $group: {
          _id: null,
          totalPlacement: { $sum: "$placement" },
          totalVideo: { $sum: "$video" },
          totalHour: { $sum: "$hours" },
          totalReturn_visit: { $sum: "$return_visit" },
          totalBible_study: { $sum: "$bible_study" },
        },
      },
    ]);
    res.status(200).json(data)
})

//@desc remove Pub
//@route DELETE /api/deletepub/:id
//@access Private
const deleteAll = asyncHandler( async (req, res) => {
    // const removePub = await Pub.find()
    const del = await Report.deleteMany()

    // if(!removePub) {
    //     res.status(400)
    //     throw new Error("Please, select which Publisher has moved")
    // }

    // const deletedPub = await Pub.findByIdAndDelete(removePub)

res.status(200).json({ "msg": "Publisher deleted successfully", del})
})

module.exports = {getReports, getGroupReport, addReport, updateReport, getPubReport, movedReport, getSummary, deleteAll}