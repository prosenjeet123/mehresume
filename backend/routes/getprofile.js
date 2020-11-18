const router= require('express').Router();
let Profile = require('../models/profile.model');

router.route('/').get((req,res) => {
    Profile.find()
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json(`error mila: ${err}`))
})

//add userdetails
router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const profile=  req.body.profile;
    const name =    req.body.name;
    const summary=  req.body.summary;
    const date= Date.parse(req.body.date);  


    const newProfile=  new Profile({
        username,
        profile,
        name,
        summary,
        date
    });

    newProfile.save()
    .then(()=>res.json('Profile  added!'))
    .catch(err=>res.status(400).json('Error mila'+err))

})

module.exports = router;