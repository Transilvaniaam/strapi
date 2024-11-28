module.exports = {
    async afterCreate(event) {
      const { result } = event;
      const brand = result.brand;
      const model = result.model;
      const model_year = result.model_year;
      const fuel_type = result.fuel_type;
      const cubic_capacity = result.cubic_capacity;
      const colors = result.colors;
      const mileage = result.mileage;
      const asking_price = result.asking_price;
      const first_name = result.first_name;
      const last_name = result.last_name;
      const email = result.email;
      const phone_number = result.phone_number;
      const additional_info = result.additional_info;
      const license_plate = result.license_plate;
      try {
          await strapi.plugins['email'].services.email.send({
              to: 'info@transilvaniaam.nl',
              from: 'no-reply@transilvaniaam.nl', //e.g. single sender verification in SendGrid
              subject: 'Incoming Car Submission',
              html: `<div>
              <ul>
              <li>Brand: ${brand}</li>
              <li>Model: ${model}</li>
              <li>Model year: ${model_year}</li>
              <li>License plate: ${license_plate}</li>
              <li>Fuel type: ${fuel_type}</li>
              <li>Cubic capacity: ${cubic_capacity}</li>
              <li>Colors: ${colors}</li>
              <li>Mileage: ${mileage}</li>
              <li>Asking price: ${asking_price}</li>
              <li>First name: ${first_name}</li>
              <li>Last name: ${last_name}</li>
              <li>Email address: ${email}</li>
              <li>Phone number: ${phone_number}</li>
              <li>Additional Information: ${additional_info}</li>
              </ul>
              </div>`,
          })
      //   await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
      //     {
      //       to: email,
      //       from: "no-reply@transilvaniaam.nl",
      //     },
      //     {
      //       templateReferenceId: 2,
      //       subject: `Transilvania Auto's & Motoren Form`,
      //     },
      //     {
      //       name: name,
      //       vehicle: vehicle,
      //     }
      //   );
      //   await strapi.plugins["email"].services.email.send({
      //     to: "adorjan.demeny@prismasolutions.ro",
      //     from: "no-reply@transilvaniaam.nl",
      //     subject: "Contact Form",
      //     html: `
      //       Name: ${name}<br>
      //       Email address: ${email}<br>
      //       Phone number: ${phone}<br>
      //       Message: ${message}<br>
      //       Vehicle: ${lastname}<br>`,
      //   });
      } catch (err) {
        console.log(err);
      }
    },
  };
  