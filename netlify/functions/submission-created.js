const formData = require('form-data');
const Mailgun = require('mailgun.js');
const Airtable = require('airtable');

const sendThankYouEmail = async ({ email, first_name }) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email');

    const { MG_API_KEY: apiKey, MG_DOMAIN: domain } = process.env;

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: 'api', key: apiKey });
    const name = first_name;

    const messageData = {
      from: 'Customer Service <welcome@heallo.co.uk>',
      to: email,
      subject: `Hey ${name}, We will reach you soon`,
      template: 'welcome',
      't:variables': JSON.stringify({ // be sure to stringify your payload
        name,
      })
    };

    client.messages.create(domain, messageData)
      .then((res) => {
        console.log(res);
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject();
      });


  });
};


const saveUser = async ({ email, name, first_name, last_name, data }) => {
  return new Promise((resolve, reject) => {
    console.log('Saving user datas on airtable');

    const { AT_API_KEY: apiKey, AT_BASE_1, AT_TABLE_1 } = process.env;

    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey
    });

    const base = new Airtable({ apiKey }).base(AT_BASE_1);


    base(AT_TABLE_1).create([
      {
        "fields": {
          "Name": first_name + " " + last_name,
          "Stage": "Waiting for first contact",
          "Applying for": [
            "recyomr5B9pxHWqu2"
          ],
          "Email address": email,
          "Phone": data.phone,
          "Referrer": data.referrer,
        }
      },
    ], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
      resolve();
    });



  });
};


module.exports.handler = async function (event, context) {

  try {
    const data = JSON.parse(event.body)

    await sendThankYouEmail(data.payload);
    await saveUser(data.payload);

    return {
      // return null to show no errors
      statusCode: 200, // http status code
      body: JSON.stringify({
        msg: "Mail sent"
      })
    }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.message
    }
  }



}

