const asyncHandler = require("express-async-handler")
const Pub = require("../models/pubSchema")


//@desc Get Pubs
//@route GET /api/Pubs
//@access Private 
const getPubs = asyncHandler( async (req, res) => {

    const pub = await Pub.find()

    res.status(200).json({ "msg": "All Pub fetched successfully", pub })
})

//@desc Get Pubs
//@route GET /api/Pubs
//@access Private 
const getGroupPubs = asyncHandler( async (req, res) => {

    const pub = await Pub.find({group: req.params.num})

    res.status(200).json({ "msg": "All Pub fetched successfully", pub })
})

//@desc Add Pub
//@route POST /api/addpub
//@access Private
const addPub = asyncHandler( async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error("Please add a new Pub")
    }
    const newPub = req.body;
      const pub = await Pub.create(newPub)
    res.status(200).json(pub)
    console.log(pub);
})

//@desc Update Pub
//@route PUT /api/updatepub/:id
//@access Private
const updatePub = asyncHandler( async (req, res) => {

    const pub = await Pub.findById(req.params.id)

    if (!pub) {
        res.status(400)
        throw new Error("Pub updated Successfully")
    }
    
    const updatedPub = await Pub.findByIdAndUpdate(pub, req.body, {
        new: true
    })

    res.status(200).json({ "msg": "Pub updated successfully", updatedPub})
})

//@desc remove Pub
//@route DELETE /api/deletepub/:id
//@access Private
const movedPub = asyncHandler( async (req, res) => {
        const removePub = await Pub.findById(req.params.id)

        if(!removePub) {
            res.status(400)
            throw new Error("Please, select which Publisher has moved")
        }

        const deletedPub = await Pub.findByIdAndDelete(removePub)

    res.status(200).json({ "msg": "Publisher moved successfully", deletedPub})
})

//@desc remove Pub
//@route DELETE /api/deletepub/:id
//@access Private
const deleteAll = asyncHandler( async (req, res) => {
        // const removePub = await Pub.find()
        const del = await Pub.deleteMany()

        // if(!removePub) {
        //     res.status(400)
        //     throw new Error("Please, select which Publisher has moved")
        // }

        // const deletedPub = await Pub.findByIdAndDelete(removePub)

    res.status(200).json({ "msg": "Publisher deleted successfully", del})
})

//@desc Pub Group
//@route DELETE /api/group
//@access Private
const group = asyncHandler( async (req, res) => {
    // const group = req.body
        // const groupNumber = await Pub.find (req.params.id)
        const groupNumber = await Pub.find({}, {"group": 1})
        // console.log(groupNumber)

        if(!groupNumber) {
            res.status(400)
            throw new Error("Publisher Pub Group number fetched successfully")
        }

    res.status(200).json({ "msg": "Publisher moved successfully", groupNumber})
})


module.exports = {getPubs, addPub, updatePub, movedPub, group, getGroupPubs, deleteAll}

// {
    //     name,
    //     dob,
    //     dim,
    //     sex,
    //     hope,
    //     group,
    //     previlege,
    //     pioneer,
    //     pub_address,
    //     pub_phone,
    //     emergency_name,
    //     emergency_address,
    //     emergency_phone
    //   }

    // { $match: {
    //     _id : 1
    // }},

    // // Expand the scores array into a stream of documents
    // { $unwind: '$scores' },

    // // Filter to 'homework' scores 
    // { $match: {
    //     'scores.type': 'homework'
    // }},

    // // Sort in descending order
    // { $sort: {
    //     'scores.score': -1
    // }}