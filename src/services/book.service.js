const express = require('express')
const router = express.Router()

const defaultPath = '/books';
router.use(express.urlencoded());
router.use(express.json());

let bookstore = {
    books: [
        {id: 1, title: 'teste', author: 'testador'}
    ]
};

router.get(defaultPath, (req, res) => {
    return res.status(200).send(bookstore);
});

router.get(`${defaultPath}/:id`, (req, res) => {
    const id = String(req?.params?.id);
    const item = bookstore.books.find(item => item.id == id);
    if (!!item) {
        return res.status(404);
    }
    return res.status(200).send(item);
});

router.post(defaultPath, (req, res) => {
    req.body.id = bookstore.books.length + 1;
    bookstore.books.push(req.body);
    return reply.status(201).send(req.body);
});

router.put(`${defaultPath}/:id`, (req, res) => {
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

router.delete(`${defaultPath}/:id`, (req, res) => {
    const id = String(req?.params?.id);
    bookstore.books = bookstore.books.filter(item => item.id != id);
    return res.status(200).send(bookstore);
});

module.exports = router;
