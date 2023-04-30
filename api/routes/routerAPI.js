const express = require('express')
const routerAPI = express.Router()

routerAPI.use(express.urlencoded());
routerAPI.use(express.json());

const URL = '/books';

let bookstore = {
    books: [
        {id: 1, title: 'teste', author: 'testador'}
    ]
};

routerAPI.get(URL, (req, res) => {
    return res.status(200).send(bookstore);
});

routerAPI.get(`${URL}/:id`, function (req, res) {
    const id = String(req?.params?.id);
    const item = bookstore.books.find(item => item.id == id);
    if (!!item) {
        return res.status(404);
    }
    return res.status(200).send(item);
});

routerAPI.post(URL, function (req, res) {
    req.body.id = bookstore.books.length + 1;
    bookstore.books.push(req.body);
    return reply.status(201).send(req.body);
});

routerAPI.put(`${URL}/:id`, function (req, res) {
    const id = String(request?.params?.id);
    let thereIs = false;
    let currentItem = null;
    bookstore.books = bookstore.books.map(item => {
        if (item.id === id) {
            item = req.body
            thereIs = true;
            currentItem = item;
        }
        return item;
    });

    return !thereIs
        ? res.status(404)
        : res.status(200).send(currentItem);
});

routerAPI.delete(`${URL}/:id`, function (req, res) {
    const id = String(req?.params?.id);
    bookstore.books = bookstore.books.filter(item => item.id != id);
    return res.status(200).send(bookstore);
});

module.exports = routerAPI;
