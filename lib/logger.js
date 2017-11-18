var chalk = require('chalk');

var logCategories = {
    bot: chalk.cyan
};

/**
 * Creates a log message coming from a category
 * @param {String} category A category from logCategories
 * @param {String} message The message of the category
 */
function logger(category, message) {
    console.log(`[${logCategories[category](category.toUpperCase())}] ${message}`);
}

module.exports = logger;
module.exports.logCategories = logCategories;