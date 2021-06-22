'use strict';

const router = require('express').Router();

const middlewareValidator = require('../middlewares/validator');
const simianControl = require('../controller/simian');

router.post('/simian', middlewareValidator, simianControl.isSimian);

router.get('/stats', simianControl.stats);

module.exports = router;