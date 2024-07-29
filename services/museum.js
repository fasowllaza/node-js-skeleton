const axios = require('axios');

function requestMuseum(options, callback = () => {}) {
    axios(options)
        .then((result) => {
            return callback(result.data)
        })
        .catch((err) => {
            const errorString = JSON.stringify(err);
            callback(null, errorString);
        });
}

module.exports = { requestMuseum }
