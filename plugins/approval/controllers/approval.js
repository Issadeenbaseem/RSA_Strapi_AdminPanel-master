'use strict';

/**
 * approval.js controller
 *
 * @description: A set of functions called "actions" of the `approval` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    


  },
  async update(ctx) {
   

   
    // let entity;
    // const { id } = ctx.params;

     
   
   
    //  entity = await strapi.services.advertisement.update(
    //    ctx.params,
    //    ctx.request.body
    //  );

    // return sanitizeEntity(entity, { model: strapi.models.advertisement });
    const { id } = ctx.params;

    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.advertisement.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.advertisement.update({ id }, ctx.request.body);
    }

    ctx.send({message: 'ok'});

   // return sanitizeEntity(entity, { model: strapi.models.advertisement });
  },

  async show(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.advertisement.findOne({ id });
    strapi.console.log(entity)

    return sanitizeEntity(entity, { model: strapi.models.advertisement });
  },

};
