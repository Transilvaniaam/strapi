'use strict';

/**
 * listed-car service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::listed-car.listed-car');
