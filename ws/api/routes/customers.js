const express = require('express');
const router = express.Router();
const customers = require('../services/customers');

/* GET quotes listing. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await customers.getAllList(req.query.page));
    } catch (err) {
        console.error(`Error while getting customers `, err.message);
        next(err);
    }
});

router.post('/search', async function (req, res, next) {
    try {
        res.json(await customers.searchCustomer(req.body, req.query.page));
    } catch (err) {
        console.error(`Error while filtering customer `, err.message);
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await customers.getCustomer(req.params.id));
    } catch (err) {
        console.error(`Error while getting customer `, err.message);
        next(err);
    }
});

router.put('/', async function (req, res, next) {
    try {
        res.json(await customers.addCustomer(req.body));
    } catch (err) {
        console.error(`Error while creating customer `, err.message);
        next(err);
    }
});

router.patch('/:id', async function (req, res, next) {
    try {
        res.json(await customers.updateCustomer(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating customer `, err.message);
        next(err);
    }
});

router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await customers.deleteCustomer(req.params.id));
    } catch (err) {
        console.error(`Error while deleting customer `, err.message);
        next(err);
    }
});

module.exports = router;