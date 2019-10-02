const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const CreatedSpotsController  = require('./controllers/CreatedSpotsController');
const BookingController = require('./controllers/BookingController');

const router = express.Router();
const upload = multer(uploadConfig);

router.post('/sessions', SessionController.store);

router.get('/spots', SpotController.index);
router.post('/spots', upload.single('thumbnail'), SpotController.store);

router.get('/profile/spots', CreatedSpotsController.show);

router.post('/spot/:spot_id/bookings', BookingController.store);

module.exports = router;
