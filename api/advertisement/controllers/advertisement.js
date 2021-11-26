"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async approved(ctx) {
    let entities;

    entities = await strapi.query("advertisement").find({ status: "Pending" });

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.advertisement })
    );
  },

  async getPendingAd(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.advertisement.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.advertisement });
  },

  async advertisements_panding_count(ctx) {
    return await strapi.query("advertisement").count({ status: "Pending" });
  },
  async advertisements_approved_count(ctx) {
    return await strapi.query("advertisement").count({ status: "Approved" });
  },
  async advertisements_reject_count(ctx) {
    return await strapi.query("advertisement").count({ status: "Reject" });
  },
};

//advertisements/approved
