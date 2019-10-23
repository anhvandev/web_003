const router  = express.Router();
const cRouter = require(controller_path + 'Login.controller');

router.get('/', cRouter.index);
router.post('/', passport.authenticate('local'/*, {
    successRedirect: '/',
    failureRedirect: '/login',
}*/), cRouter.indexPost);
module.exports = router;