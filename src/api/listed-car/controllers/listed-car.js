'use strict';

/**
 * listed-car controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::listed-car.listed-car', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
  
      const entity = await strapi.db.query("api::listed-car.listed-car").findOne({
        where: { slug: id },
        populate: ["deep"],
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    },
  }));
