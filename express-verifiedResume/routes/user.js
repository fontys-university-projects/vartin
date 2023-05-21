const router = require('express').Router()
const user = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

router.post('/register', user.register)

router.post('/login', user.login)

router.get('/profile', auth, user.getProfile)

router.post('/createCV', auth, user.createCV)

router.post('/editCV', auth, user.editCV)

router.get('/getCV', auth, user.getCV)

router.post('/createEducation', auth, user.createEducation)

router.post('/editEducation', auth, user.editEducation)

router.post('/addEducation', auth, user.addEducation)

router.post('/removeEducation', auth, user.removeEducation)

router.post('/createExperience', auth, user.createExperience)

router.post('/editExperience', auth, user.editExperience)

router.post('/addExperience', auth, user.addExperience)

router.post('/removeExperience', auth, user.removeExperience)

router.post('/createSkill', auth, user.createSkill)

router.post('/removeSkill', auth, user.removeSkill)

router.post('/createLanguage', auth, user.createLanguage)

router.post('/removeLanguage', auth, user.removeLanguage)

router.post('/save', auth, user.save)

router.post('/unsaved', auth, user.unsaved)

router.get('/saved', auth, user.saved)


router.post('/changePassword', auth, user.passwordChange)

module.exports = router