function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

function validateCreateParams(params) {
    let messages = [];

    if (!params) {
        messages.push('No object is provided');
    }

    if (!params.email) {
        messages.push('Email is empty');
    }

    if (!params.first_name) {
        messages.push('First Name is empty');
    }

    if (!params.last_name) {
        messages.push('Last Name is empty');
    }

    if (!params.ip) {
        messages.push('IP is empty');
    }

    if (!params.latitude) {
        messages.push('Latitude is empty');
    }

    if (!params.longitude) {
        messages.push('Longitude is empty');
    }

    if (messages.length) {
        let error = new Error(messages.join());
        error.statusCode = 400;

        throw error;
    }
}

function validateParams(params) {
    if (!params) {
        let error = new Error('No object is provided');
        error.statusCode = 400;
        throw error;
    }
}

module.exports = {
    getOffset,
    emptyOrRows,
    validateCreateParams,
    validateParams
}