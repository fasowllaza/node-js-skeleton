const USER_ERRORS = {
    'USER-001': {
        errorCode: '404',
        errorMessage: 'User not found'
    },
    'USER-002': {
        errorCode: '400',
        errorMessage: 'Invalid Username/Password'
    }
}

const MUSEUM_ERRORS = {
    'MUSEUM-001': {
        errorCode: '400',
        errorMessage: 'Error Request'
    },
    'MUSEUM-002': {
        errorCode: '404',
        errorMessage: 'Objects Not Found'
    }
}

const DATABASE_ERRORS = {
    ServerError: {
        errorCode: '500',
        errorMessage: 'Server Error'
    },
    SequelizeValidationError: {
        errorCode: '400',
        errorMessage: 'Sequelize Validation Error'
    }
}

module.exports = {
    USER_ERRORS,
    MUSEUM_ERRORS,
    DATABASE_ERRORS
}