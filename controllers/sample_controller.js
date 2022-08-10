const util = require('./util');

const handleSampleResponse = (req) => {

    console.log(req.body);

    return util.formatResponseForDialogflow(
        [
            'This is a sample response from webhook.',
            'Another sample response.'
        ],
        '',
        '',
        ''
    );
};

module.exports = {
    handleSampleResponse
};