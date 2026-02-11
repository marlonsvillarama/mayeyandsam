import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: "ap-southeast-2" });

const SENDER = 'marielle.villarama@gmail.com';
const RECIPIENT = 'marlonsvillarama@gmail.com';
const ADMIN = 'marlonsvillarama@gmail.com';

const buildEmails = (options) => {
    let { email, message } = options;
    let output = [];

    /* let dt = new Date(
        date.slice(0, 4),
        parseInt(date.slice(4, 6)) - 1,
        date.slice(6),
        time.slice(0, 2),
        parseInt(time.slice(2))
    );
    let dtString = dt.toLocaleString('en-NZ', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }); */
    // hour: 'numeric',
    // minute: 'numeric'
    // let hourString = time.slice(0, 2);
    // let hour = parseInt(hourString);
    // let timeString = `${hour <= 12 ? hour : hour - 12}:${time.slice(2)} ${hour < 12 ? 'AM' : 'PM'}`;

    // Customer notification
    output.push({
        to: email,
        subject: `RIDOUT - VILLARAMA WEDDING`,
        body: `<h1>Thank you for booking an appointment!</h1>
        <p>Your booking with <strong>Studio 4 Hair Salon</strong> is now confirmed. Please see your details below:</p>
        <aside>
            <div class="row">
                <span>Guest email:</span>
                <span>${email}</span>
            </div>
        </aside>

        <br/>
        <p>Please note that service cancellations must be requested <strong><u>at least 1 day</u></strong> before your scheduled appointment.</p>
        <p>For any questions or concerns, please feel free to contact us at:</p>

        <aside>
            <div class="row">
                <span>Phone:</span>
                <span>(06) 353-5678</span>
            </div>
            <div class="row">
                <span>Mobile:</span>
                <span>(022) 1888-5240</span>
            </div>
        </aside>

        <p>We'll see you soon!</p><br/>

        <div class="sig">
            <span>Sincerely yours,</span>
            <p>John Fernandez</p>
        </div>`,
    });

    // Salon notification
    output.push({
        to: RECIPIENT,
        cc: ADMIN,
        subject: `RIDOUT - VILLARAMA WEDDING`,
        body: `<h2>New appointment booked:</h2>
        <aside>
            <div class="row">
                <span>Guest email:</span>
                <span>${email}</span>
            </div>
            <div class="row">
                <span>${message}</span>
            </div>
        </aside>

        <br/><br/>
        <p>Customer details:</p>
        <aside>
            <div class="row">
                <span>Email:</span>
                <span>${email}</span>
            </div>
        </aside>`
    });

    return output;
};

const sendEmails = async (options) => {
    console.log('sendEmails', options);
    let emails = buildEmails(options);
    console.log('emails', emails.length);

    let emailResponses = [];

    for (let i = 0, count = emails.length; i < count; i++) {
        let email = emails[i];
        console.log('email', email);
        let emailData = {
            Source: SENDER,
            Destination: {
                ToAddresses: [ email.to ]
            },
            Message: {
                Body: {
                Html: {
                    Charset: 'utf-8',
                    Data: email.body
                },
                Text: {
                    Charset: 'utf-8',
                    Data: 'Appointment confirmed!'
                }
                },
                Subject: {
                    Charset: 'utf-8',
                    Data: email.subject
                }
            },
        };
        if (email.cc) {
            emailData.Destination.CcAddresses = [ email.cc ];
        }
        console.log('emailData', JSON.stringify(emailData));
        let command = new SendEmailCommand(emailData);

        let emailResponse = {};
        try {
            emailResponse = await ses.send(command);
            console.log('SES emailResponse', emailResponse);
            emailResponses.push(emailResponse);
        } catch (err) {
            console.error('*** Send email error ***', err);
        }
        finally {
            console.log('*** sendEmails END ***');
        }
    }

    return emailResponses;
};

export const handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json",
    };

    // console.log('event parameters', event['queryStringParameters']);
    console.log('{id}', event.pathParameters);

    console.log('routeKey', event.routeKey);
    try {
        switch (event.routeKey) {
        case "POST /appointments":
            let requestJSON = JSON.parse(event.body);
            console.log('request', requestJSON);
            console.log('Email API_KEY', process.env.API_KEY);

            // TODO Send confirmation email
            let emailResponses = await sendEmails(requestJSON);

            body = { ok: true, id: requestJSON.id };
            console.log('response body', emailResponses);
            break;
        default: {
            // throw new Error(`Unsupported route: "${event.routeKey}"`);
            body = { ok: false, error: 'Unsupported route' };
        }
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
