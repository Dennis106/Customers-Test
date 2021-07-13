const helper = require('./helper');
const db = require('./db');
const config = require('../config');

async function getAllList(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query('SELECT * FROM customers LIMIT ?,?', [offset, config.listPerPage]);
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}

async function getCustomer(id) {
    const row = await db.query('SELECT * FROM customers WHERE id=?', [id]);
    const data = helper.emptyOrRows(row);
    if (data.length > 0) {
        return row[0];
    }
    return { id: id, message: 'No data' };
}

async function addCustomer(params) {
    try {
        helper.validateCreateParams(params);
    } catch (err) {
        return { "message": err.message };
    }

    const check = await db.query('SELECT * FROM customers WHERE email=? LIMIT 1', [params.email]);
    const data = helper.emptyOrRows(check);
    if (data.length > 0) {
        return { "id": data[0].id, "message": "duplicated email" };
    }
    let date_obj = new Date();
    const row = await db.query(`
        INSERT 
        INTO customers 
            (email, first_name, last_name, ip, latitude, longitude, created_at) 
        VALUES 
            (?,?,?,?,?,?,?)
        `, [params.email, params.first_name, params.last_name, params.ip, params.latitude, params.longitude, date_obj]);
    if (!row) {
        return { "message": "create failed" };
    }
    return { "id": row.insertId, "message": "success" };
}

async function updateCustomer(id, params) {
    try {
        helper.validateParams(params);
    } catch (err) {
        return { "message": err.message };
    }
    const check = await db.query('SELECT * FROM customers WHERE id=? LIMIT 1', [id]);
    const data = helper.emptyOrRows(check);
    if (data.length == 0) {
        return { "id": data[0].id, "message": "Customer id is incorrect." };
    }

    let query = "";
    let values = [];
    if (params.first_name) {
        query += "first_name=?,";
        values.push(params.first_name);
    }
    if (params.last_name) {
        query += "last_name=?,";
        values.push(params.last_name);
    }
    if (params.ip) {
        query += "ip=?,";
        values.push(params.ip);
    }
    if (params.latitude) {
        query += "latitude=?,";
        values.push(params.latitude);
    }
    if (params.longitude) {
        query += "longitude=?,";
        values.push(params.longitude);
    }
    let date_obj = new Date();
    query = 'UPDATE customers SET ' + query + 'updated_at=?' + ' WHERE id=?';
    values.push(date_obj);
    values.push(id);

    const row = await db.query(query, values);
    if (!row) {
        return { "message": "update failed" };
    }
    return { "message": "success" };
}

async function deleteCustomer(id) {
    const check = await db.query('SELECT * FROM customers WHERE id=? LIMIT 1', [id]);
    const data = helper.emptyOrRows(check);
    if (data.length == 0) {
        return { "id": data[0].id, "message": "Customer id is not existing." };
    }

    const row = await db.query('DELETE FROM customers WHERE id=?', [id]);
    return { id: id, message: 'Customer deleted.' };
}

async function searchCustomer(params, page = 1) {
    try {
        helper.validateParams(params);
    } catch (err) {
        return { "message": err.message };
    }

    const offset = helper.getOffset(page, config.listPerPage);
    let row;
    let key;
    if (!params.key) {
        key = "";
    } if (params.key === "") {
        key = "";
    } else
        key = '%' + params.key + '%';
    if (key === "") {
        row = await db.query(`SELECT * FROM customers LIMIT ?,?`, [offset, config.listPerPage]);
    } else {
        row = await db.query(`
            SELECT 
                * 
            FROM 
                customers 
            WHERE 
                email LIKE ?
                OR 
                first_name LIKE ?
                OR 
                last_name LIKE ?
                OR 
                ip LIKE ?
                OR 
                latitude LIKE ?
                OR 
                longitude LIKE ?
            LIMIT ?,?
        `, [key, key, key, key, key, key, offset, config.listPerPage]);
        console.log(row);
    }

    const data = helper.emptyOrRows(row);
    const meta = { page };

    return {
        data,
        meta
    }
}

module.exports = {
    getAllList,
    getCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    searchCustomer
}