'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {

    afterFetchAll: async (model, response, options) => {

        console.log("After fetch...");
        console.log(response);

    },

};
