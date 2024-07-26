import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { SMPT_PASSWORD, SMPT_EMAIL } = process.env;
    const { name, email, message, phone } = await request.json();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMPT_EMAIL,
        pass: SMPT_PASSWORD,
      },
    });

    try {
      const testResut = await transport.verify();
      // console.log(testResut);
    } catch (error) {
      console.log(error);
    }

    try {
      const sentResut = await transport.sendMail({
        from: SMPT_EMAIL,
        to: "cluberror404@gmail.com",
        subject: `${name} wants to Contact you `,
        html: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Information</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        header {
            text-align: center;
            margin-bottom: 20px;
        }

        header img {
            max-width: 100%;
            height: auto;
        }

        h2 {
            margin-bottom: 16px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 16px;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
        }
    </style>
</head>

<body>

    <div class="container">
        <header>
        <h2>Contact Information</h2>

        <table>
            <tr>
                <th>Field</th>
                <th>Details</th>
            </tr>
            <tr>
                <td><strong>Name</strong></td>
                <td>${name}</td>
            </tr>
            <tr>
                <td><strong>Email</strong></td>
                <td>${email}</td>
            </tr>
            <tr>
                <td><strong>Email</strong></td>
                <td>${phone}</td>
            </tr>

            <tr>
                <td><strong>message</strong></td>
                <td>${message}</td>
            </tr>
        </table>

        <footer>
            &copy; ERROR 404  . All rights reserved.
            
        </footer>
    </div>

</body>

</html>
            `,
      });
      // console.log(sentResut);

      return NextResponse.json(
        { message: "Email Sent Successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
