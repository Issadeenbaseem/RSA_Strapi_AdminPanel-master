'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 module.exports = {
  lifecycles: {
    afterCreate(result, data){
      strapi.services.activity.create({
         contentType:'customer',
         action:"create",
         content:result
      })
    },
    afterUpdate(result, params, data){
      strapi.services.activity.create({
        contentType:'customer',
        action:"update",
        content:result
     })

    },
    afterDelete(result, params){
      strapi.services.activity.create({
        contentType:'customer',
        action:"delete",
        content:result
     })

    },
    //
  },
};
