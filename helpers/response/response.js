module.exports = {
    success: (res, data) => {
        const resObj = {
            message: 'success',
            status: 200,
            data
        }
        return res.status(200).send(resObj)
    },

    error: (res, error) => {
        const resObj = {
            message: 'failed',
            status: 500,
            error
        }
        return res.status(500).send(resObj)
    },

    unauthorized: (res, message) => {
        const resObj = {
            message: 'failed',
            status: 401,
            error: message
        }
        return res.status(401).send(resObj)
    },

    forbidden: (res, message) => {
        const resObj = {
            message: 'failed',
            status: 403,
            error: message
        }
        return res.status(403).send(resObj)
    },

    notFound: (res, message) => {
        const resObj = {
            message: 'failed',
            status: 404,
            error: message
        }
        return res.status(404).send(resObj)
    },

    conflict: (res, message) => {
        const resObj = {
            message: 'failed',
            status: 409,
            error: message
        }
        return res.status(409).send(resObj)
    },

    unprocessable: (res, message) => {
        const resObj = {
            message: 'failed',
            status: 422,
            error: message
        }
        return res.status(422).send(resObj)
    }
}