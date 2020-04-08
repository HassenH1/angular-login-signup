var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID

/* GET users listing. */
router.post('/signup', function (req, res, next) {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      message: "email and password are required"
    })
  }

  const payload = { email, password }
  req.collection.insertOne(payload)
    .then(result => res.json(result.ops[0]))
    .catch(err => res.status(400).json({
      message: "No Appointments available on that date"
    }))
});

router.post('/login', (req,res) => {
  console.log(req.body)
})

module.exports = router;