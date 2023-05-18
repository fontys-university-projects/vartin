/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id for the database
 *         uid:
 *           type: string
 *           description: This is auto-generated id for public use and relations
 *         email:
 *           type: string
 *           description: The user's email
 *         name:
 *           type: string
 *           description: The user's name
 *         cv:
 *           type: object
 *           description: The user's cv
 *         savedCvs:
 *           type: object
 *           description: The user's saved cvs
 *         savedCompanies:
 *           type: object
 *           description: The user's saved companies profiles
 *         educations:
 *           type: object
 *           description: The user's educations by the respected institution
 *         experiences:
 *           type: object
 *           description: The user's experiences by the respected company 
 *         skills:
 *          type: object
 *          description: The user's skills
 *         company:
 *          type: object
 *          description: The user's company
 *         employee:
 *         type: object
 *         description: The user's current and previous employments
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User main Endpoint
 * /books:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 * /books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */


const router = require('express').Router()
const user = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

router.post('/register', user.register)

router.post('/login', user.login)

router.post('/createCV', auth, user.createCV)

router.post('/editCV', auth, user.editCV)

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