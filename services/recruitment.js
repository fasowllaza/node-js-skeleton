const axios = require('axios');

function requestRecruitment(options, callback = () => {}) {
    axios(options)
        .then((result) => {
            return callback(result.data)
        })
        .catch((err) => {
            const errorString = JSON.stringify(err);
            callback(null, errorString);
        });
}

module.exports = { requestRecruitment }
