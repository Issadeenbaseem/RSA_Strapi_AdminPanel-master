const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update1(ctx) {
  //   const { id } = ctx.params;

  //   let entity;
  //   if (ctx.is('multipart')) {
  //     const { data, files } = parseMultipartData(ctx);
  //     entity = await strapi.services.advertisement.update({ id }, data, {
  //       files,
  //     });
  //   } else {
  //     entity = await strapi.services.advertisement.update({ id }, ctx.request.body);
  //   }

  //   return sanitizeEntity(entity, { model: strapi.models.advertisement });
  },

};
