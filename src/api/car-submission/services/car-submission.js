'use strict';

/**
 * car-submission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-submission.car-submission');
