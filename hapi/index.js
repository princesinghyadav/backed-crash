'use strict';

const Hapi = require('@hapi/hapi');
const useroutes = require('./routes/user.routes')
const productroutes=require('./routes/product.routes')
const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    server.route(useroutes);
    server.route(productroutes);

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'this is a home page '
            // return h.redirect('/check');
        }
    });

  
    server.route({
        method: 'get',
        path: "/name-user",
        handler: (request, h) => {

            const user = {
                name: "yadav jee0---",
                class: "xii",
                roll: "48",
                favourite: 'chess'
            }
            return user;
        }

    })

    // server.ext('onRequest', function (request, h) {
    //     request.setUrl('/name')

    //     return h.continue;

    // })
    server.route({
        method: "GET",
        path: "/bodyparser",
        handler: (request, h) => {

            // console.log(req.payload);
            return ' data received sucesfully !'
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();