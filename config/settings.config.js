module.exports = {
    UPLOAD_MAX_SIZE: '40M',
    PROCOL: 'http://',
    BASE_URL: 'localhost',
    PORT: process.env.PORT || 3000,
    PORT_IO: 9090,
    CACHE: false,
    DATABASE_TWO: {
        config: {
            driver: "mongodb+srv",
            dbname: "dbfb",
            dbhost: "cluster0-4quw9.mongodb.net",
            dbport: "",
            username: "admin",
            password: "anhvan99",
        },
        get uri() {
            return `${this.config.driver}://${this.config.username}:${this.config.password}@${this.config.dbhost}${this.config.dbport !== "" ? ':' + this.config.dbport : ''}/${this.config.dbname}`;
        }
    },
    DATABASE_ONE: {
        config: {
            driver: "mongodb",
            dbname: "langtech",
            dbhost: "localhost",
            dbport: "27017",
            username: "",
            password: "",
        },
        get uri() {
            return `${this.config.driver}://${this.config.username}:${this.config.password}@${this.config.dbhost}${this.config.dbport !== "" ? ':' + this.config.dbport : ''}/${this.config.dbname}`;
        }
    },
};