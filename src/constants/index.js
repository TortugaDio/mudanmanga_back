const REGEX = {
    PASSWORD:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,20}$/,
    EMAIL:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
const EXTENSIONS_IMAGE = ['jpg', 'jpeg' , 'png', 'gif'];
const EXTENSIONS_DOCUMENT = [];

const DB_CONFIG = {
    development : {
        username :  process.env.DB_USER ,
        password :  process.env.DB_PASSWORD ,
        database :  process.env.DB_NAME ,
        host :  process.env.DB_HOST ,
        dialect :  process.env.DB_DIALECT ,
        port : process.env.DB_PORT,
        logging : false,

    },
    test : {},
    production : {
        username :  "l0ox1vvjwbnn" ,
        password :  "pscale_pw_xQCKtZ49h2Vmx6k8jUlY134phgDCi4IoDd7TG87AYdA" ,
        database :  "mudanbd" ,
        host :  "sy80kbkv14kk.us-east-2.psdb.cloud" ,
        dialect :  "mysql" ,
        port : 3306,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            }
        }
    }

}

const ROLES = {
    ADMIN : 'ADMIN',
    EDITOR : 'EDITOR',
    MODERATOR : 'MODERATOR',
    READER : 'READER',
}

module.exports = {
    REGEX,
    EXTENSIONS_IMAGE,
    ...DB_CONFIG,
    ROLES
}