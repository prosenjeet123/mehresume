const router= require('express').Router();
let profile = require('..models/profile.model');

router.route('/').get((req,res) => {
    profile.find()
    .then(profile => res.json(profile))
    .catch(err => res.status(400).json(`error mila: ${err}`))
})

router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const profile=req.body.profile;
    const name =req.body.name;
    const summary=req.body.summary;
    const date= Date.parse(req.body.date);  


    const newProfile=  new Profile({
        username,
        profile,
        name,
        summary,
        date
    });

    Profile.save()
    .then(()=>res.json(`Profile ${username} added!`))
    .catch(err=>res.status('400').json(`Error mila : ${err}`))

})

module.exports = router;