const MagicMaker = require('../models/magicMaker.model');

module.exports = {
    createNewMagicMaker:(req,res)=> {
        const {name} = req.body;
        const {type} = req.body;
        const {description} = req.body;
        const {skill1} = req.body;
        const {skill2} = req.body;
        const {skill3} = req.body;
        MagicMaker.create({
            name: name,
            type: type, 
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        })
            .then((newMagicMaker)=> {
                res.json({magicMaker: newMagicMaker})
            })
            .catch((err)=> {
                res.status(400).json(err)
            })
    },

    findAllMagicMakers:(req,res)=> {
        MagicMaker.find()
            .then((allMagicMakers)=> {
                res.json({magicMakers: allMagicMakers})
            })
            .catch((err)=> {
                res.status(400).json(err)
            })
    },
    findOneMagicMaker:(req,res) => {
        MagicMaker.findById({_id: req.params.id})
            .then((oneMagicMaker)=> {
                res.json({magicMaker: oneMagicMaker})
            })
            .catch((err)=> {
                res.status(400).json(err)
            })
    },

    updateExistingMagicMaker:(req, res)=> {
        MagicMaker.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true, runValidators: true}
        )
            .then(updatedMagicMaker=> {
                res.json({magicMaker: updatedMagicMaker})
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    deleteExistingMagicMaker:(req,res)=> {
        MagicMaker.deleteOne({_id: req.params.id})
            .then(result=> {
                res.json({result: result})
            })
            .catch((err)=> {
                res.json({message: 'Something went wrong.', error: err})
            })
    }

}