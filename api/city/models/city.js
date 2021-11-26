'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */



 const { default: createStrapi } = require("strapi");

 /**
  * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
  * to customize this model
  */

  module.exports = {
   lifecycles: {
     afterCreate(result, data){
       strapi.services.activity.create({
          contentType:'City',
          action:"create",
          content:result,
          details:data
       })
     },
     afterUpdate(result, params, data){
       strapi.services.activity.create({
         contentType:'City',
         action:"update",
         content:result,
         details:data,
         content1:params

      })

     },
     afterDelete(result, params){
       strapi.services.activity.create({
         contentType:'City',
         action:"delete",
         content:result,
         
      })

     },
     //
   },
 };

