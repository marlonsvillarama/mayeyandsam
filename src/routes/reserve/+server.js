import { json } from "@sveltejs/kit";
import { Resend } from "resend";
import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

const buildEmail = (data) => {
    let checkInDate = new Date(data.checkIn);
    let checkOutDate = new Date(data.checkOut);
    let nightCount = (checkOutDate.getTime() - checkInDate.getTime()) / (24 * 60 * 60 * 1000);

    return `
    Hello Hero,

    <p>
    A new guest has submitted a request for the wedding room rate. Please find the details below.
    </p>

    <p><b>Guest Name</b><br/>${data.name}</p>
    <p><b>Email Address</b><br/>${data.email}</p>
    <p><b>Wedding Couple</b><br/>Sam Ridout and Marielle Villarama</p>
    <p><b>Check-in Date</b><br/>
        ${checkInDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
    </p>
    <p><b>Check-out Date</b><br/>
        ${checkOutDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
    </p>
    <p><b>Number of Nights</b><br/>${nightCount}</p>
    <p><b>Number of Guests</b><br/>${data.guestCount}</p>
    <p><b>Number of Transfers</b><br/>${data.transferCount}</p>
    <p><b>Room Preference</b><br/>${data.roomName}</p>
    <p><b>Additional Notes or Requests</b><br/>${data.requests || 'NONE'}</p>

    <p>This request was submitted through the wedding website booking form and is intended for direct follow-up with the guest.</p>
    <p>Thank you very much for your assistance.</p>

    <p>Best regards,</p>
    <p>Sam Ridout and Marielle Villarama<p>
    <p><b>NOTE:</b> This is an auto-generated email. Please do not reply to this message.</p>
    `;
};

export async function POST({ request }) {
    const requestData = await request.json();
    console.log('requestData', requestData);

    try {
        const { data, error } = await resend.emails.send({
            from: 'reservation@samandmarielle.com',
            to: ['herald.lajo@movenpick.com', 'marlonsvillarama@gmail.com'],
            cc: ['marielle.villarama@gmail.com', 'marlonsvillarama.biz@gmail.com'],
            replyTo: ['marielle.villarama@gmail.com'],
            subject: 'RIDOUT - VILLARAMA WEDDING',
            html: buildEmail(requestData)
        });

        if (error) {
            console.log('error', JSON.stringify(error));
            return json({ status: 400, ok: false, error: error.message })
        }

        return json({ status: 201, ok: true, data: data.message });
    }
    catch (ex) {
            return json({ status: 500, ok: false, error: ex.toString() })
    }
}
