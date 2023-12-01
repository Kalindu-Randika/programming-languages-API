const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        user: "root",
        password: "12345678",
        database: "sys",
        connectTimeout: 60000
    },
    listPerPage: 20,
};
module.exports = config;
