const express = require('express');
const router = express.Router();

const CONTROLLER = require('../controllers/export_controller');

router.post('/dialogflow', async (req, res) => {

    let tag = req.body.fulfillmentInfo.tag;

    console.log('A new request came...');
    console.log(tag);

    if (tag === 'sampleResponse') {
        let responseData = CONTROLLER.sampleResponse.handleSampleResponse(req); 
        res.send(responseData);
    } else {
        res.send(
            CONTROLLER.util.formatResponse(
                [
                    'This is from the webhook.',
                    'There is no tag set for this request.'
                ]
            )
        );
    }
});

module.exports = {
    router
};