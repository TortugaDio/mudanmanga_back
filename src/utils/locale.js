const path = require('path');
const { I18n } = require('i18n');

const i18n = new I18n({
    locales: [`en`, `es`],
    defaultLocale: `es`,
    queryParameter: `lang`,
    directory: path.join(__dirname, '../locales'),
    cookie: 'lang',
})

module.exports = function (req , res , next){
    i18n.init(req, res);
    var current_locale = i18n.getLocale();
    console.log("current_locale", current_locale);
    return next();
}