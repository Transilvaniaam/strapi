module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const name = result.name;
    const email = result.email;
    const phone = result.phone;
    const message = result.message;
    const vehicle = result.vehicle;
    try {
        await strapi.plugins['email'].services.email.send({
            to: 'info@transilvaniaam.nl',
            from: 'no-reply@transilvaniaam.nl', //e.g. single sender verification in SendGrid
            subject: 'Incoming Contact',
            html: `<div>
            <ul>
            <li>Name: ${name}</li>
            <li>Email address: ${email}</li>
            <li>Phone number: ${phone}</li>
            <li>Message: ${message}</li>
            ${vehicle ? `<li>Vehicle: ${vehicle}</li>` : ''}
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
