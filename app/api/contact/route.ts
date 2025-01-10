// import { NextResponse } from "next/server";

// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   if (req.method === "POST") {
//     try {
//       const {
//       first_name,
//       last_name,
//       email,
//       services,
//       company_name,
//       help,
//       company_size,
//       info,
//     } = await req.body();
//       console.log(first_name);

//       const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//           user: "humayunahmad987@gmail.com",
//           pass: "yfhs ywyi wicl lujk",
//         },
//       });

//       const mailOptions = {
//         from: email,
//         to: "humayuna23@iitk.ac.in",
//         subject: "Contact Form Submission",
//         html: `
//                     <h1>Contact Form</h1>
//                     <p>First Name: ${first_name}</p>
//                     <p>Last Name: ${last_name}</p>
//                     <p>Work Email: ${email}</p>
                
//                     <p>Company Name: ${company_name}</p>
//                     <p>Company Size: ${company_size}</p>
//                     <p>Help: ${help}</p>
                
//                     <p>Info: ${info}</p>
//                 `,
//       };

 
//       await transporter.sendMail(mailOptions);

//       return NextResponse.json("email has been sent");
//     } catch (error) {
//       return NextResponse.json("email has not been sent");
//     }
//   } else {
//     return NextResponse.json('method not allowed');
//   }

// }

// // .............................

import { NextRequest, NextResponse } from 'next/server';
import {transporter,mailOptions} from "../../../config/nodemailer";
export async function POST(request: NextRequest) {
  try {
    // Parse the JSON data from the request
    const data = await request.json();

    // Print the received data to the console
    console.log('Received contact form data:', data);

    // You can validate the data here if needed
    if (!data.first_name || !data.email || !data.services) {
      return NextResponse.json(
        { error: 'All fields (name, email, services) are required.' },
        { status: 400 }
      );
    }
    try{
      await transporter.sendMail({
        ...mailOptions,
        subject: "Contact Form Submission",
        text: "This is a test string",
        html: `<h1>Contact Form</h1>
              <p>First Name: ${data.first_name}</p>
              <p>Last Name: ${data.last_name}</p>
              <p>Work Email: ${data.email}</p>
              <p>Company Name: ${data.company_name}</p>
              <p>Interested service: ${data.services}</p>
              <p>Help: ${data.help}</p>
              <p>Info: ${data.info}</p>`
      })
      return NextResponse.json({ message: 'Contact form submitted successfully!' }, { status: 200 });
    }catch(error){
      console.log(error);
      return NextResponse.json(
        { error: error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error handling contact form:', error);

    // Respond with an error message
    return NextResponse.json(
      { error: 'Something went wrong while handling the request.' },
      { status: 500 }
    );
  }
}
