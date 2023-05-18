const router = require('express').Router()
const company = require('../controllers/company.controller')
const auth = require('../middlewares/auth')

router.post('/createCompany', auth, company.createCompany)

router.post('/registerEmployee', auth, company.registerEmployee)

router.post('/editEmployee', auth, company.editEmployee)

router.post('/createJob', auth, company.createJob)

router.post('/editJob', auth, company.editJob)

router.post('verify', auth, company.verify)

router.post('edit', auth, company.edit)

router.post('remove', auth, company.remove)

router.get('saved', auth, company.saved)



module.exports = router