import nodemailer from 'nodemailer';
import winston from 'winston';
import dotenv from 'dotenv';

dotenv.config();
const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});
const baseTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stembotics Academy</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding: 20px 0;
      background-color: #2ba14a;
    }
    .logo {
      max-width: 200px;
      height: auto;
    }
    .content {
      padding: 30px 20px;
      background-color: #ffffff;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #f5f5f5;
      font-size: 12px;
      color: #666;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #2ba14a;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      margin: 20px 0;
    }
    .highlight {
      color: #2ba14a;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://stembotics.org/logo.png" alt="Stembotics Academy" class="logo">
    </div>
    <div class="content">
      {{content}}
    </div>
    <div class="footer">
      <p>© 2024 Stembotics Academy. All rights reserved.</p>
      <p>123 Innovation Way, San Francisco, CA 94103</p>
    </div>
  </div>
</body>
</html>
`;
const templates = {
  welcomeStudent: `
    <h1>Welcome to Stembotics Academy!</h1>
    <p>Dear {{name}},</p>
    <p>Welcome to Stembotics Academy! We're excited to have you join our community of learners.</p>
    <p>Here's what you can do next:</p>
    <ul>
      <li>Complete your profile</li>
      <li>Browse our courses</li>
      <li>Join our community forums</li>
    </ul>
    <a href="https://stembotics.org/dashboard" class="button">Go to Dashboard</a>
  `,
  welcomeTeacher: `
    <h1>Welcome to Stembotics Academy!</h1>
    <p>Dear {{name}},</p>
    <p>Welcome to Stembotics Academy! We're thrilled to have you join our teaching community.</p>
    <p>Here's what you can do next:</p>
    <ul>
      <li>Complete your teacher profile</li>
      <li>Create your first course</li>
      <li>Join our teacher community</li>
    </ul>
    <a href="https://stembotics.org/teacher/dashboard" class="button">Go to Teacher Dashboard</a>
  `,
  courseEnrollment: `
    <h1>Course Enrollment Confirmation</h1>
    <p>Dear {{name}},</p>
    <p>You have successfully enrolled in <span class="highlight">{{courseName}}</span>.</p>
    <p>Course details:</p>
    <ul>
      <li>Start Date: {{startDate}}</li>
      <li>Duration: {{duration}}</li>
      <li>Level: {{level}}</li>
    </ul>
    <a href="https://stembotics.org/courses/{{courseId}}" class="button">Access Course</a>
  `,
  courseCreated: `
    <h1>Course Created Successfully!</h1>
    <p>Dear {{name}},</p>
    <p>Your course <span class="highlight">{{courseName}}</span> has been created successfully.</p>
    <p>Next steps:</p>
    <ul>
      <li>Add course content</li>
      <li>Set up assessments</li>
      <li>Preview your course</li>
    </ul>
    <a href="https://stembotics.org/teacher/courses/{{courseId}}/manage" class="button">Manage Course</a>
  `,
  purchaseReceipt: `
    <h1>Purchase Confirmation</h1>
    <p>Dear {{name}},</p>
    <p>Thank you for your purchase!</p>
    <p>Order Details:</p>
    <ul>
      <li>Order ID: {{orderId}}</li>
      <li>Date: {{date}}</li>
      <li>Amount: {{amount}}</li>
    </ul>
    <a href="https://stembotics.org/orders/{{orderId}}" class="button">View Order</a>
  `,
  contactForm: `
    <h1>New Contact Form Submission</h1>
    <p>A new message has been received from the contact form:</p>
    <ul>
      <li>Name: {{name}}</li>
      <li>Email: {{email}}</li>
      <li>Subject: {{subject}}</li>
      <li>Message: {{message}}</li>
    </ul>
  `,
  contactAutoReply: `
    <h1>Thank You for Contacting Us</h1>
    <p>Dear {{name}},</p>
    <p>Thank you for reaching out to Stembotics Academy. We have received your message and will get back to you within 24-48 hours.</p>
    <p>For urgent matters, please call us at +1 (856) 209-3538.</p>
  `
};
const transporter = nodemailer.createTransport({
  service: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});
const sendMail = async (from, to, subject, html) => {
  const mailOptions = {
    from,
    to,
    subject,
    html
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    logger.info("Email sent successfully", { to, subject, messageId: info.messageId });
    return info;
  } catch (error) {
    logger.error("Error sending email", { to, subject, error });
    throw error;
  }
};
const replaceTemplateVars = (template, vars) => {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp(`{{${key}}}`, "g"), value);
  }
  return result;
};
const getFullEmailHtml = (content) => {
  return baseTemplate.replace("{{content}}", content);
};
const sendWelcomeStudentEmail = async (email, name) => {
  const content = replaceTemplateVars(templates.welcomeStudent, { name });
  return sendMail(
    "noreply@stembotics.org",
    email,
    "Welcome to Stembotics Academy!",
    getFullEmailHtml(content)
  );
};
const sendWelcomeTeacherEmail = async (email, name) => {
  const content = replaceTemplateVars(templates.welcomeTeacher, { name });
  return sendMail(
    "noreply@stembotics.org",
    email,
    "Welcome to Stembotics Academy - Teacher Account",
    getFullEmailHtml(content)
  );
};
const sendCourseEnrollmentEmail = async (email, studentName, courseName) => {
  const content = replaceTemplateVars(templates.courseEnrollment, {
    name: studentName,
    courseName,
    startDate: (/* @__PURE__ */ new Date()).toLocaleDateString(),
    duration: "Self-paced",
    level: "Beginner",
    courseId: "1"
    // This should be replaced with actual course ID
  });
  return sendMail(
    "noreply@stembotics.org",
    email,
    `Enrollment Confirmation: ${courseName}`,
    getFullEmailHtml(content)
  );
};
const sendCourseCreatedEmail = async (email, teacherName, courseName) => {
  const content = replaceTemplateVars(templates.courseCreated, {
    name: teacherName,
    courseName,
    courseId: "1"
    // This should be replaced with actual course ID
  });
  return sendMail(
    "noreply@stembotics.org",
    email,
    `Course Published: ${courseName}`,
    getFullEmailHtml(content)
  );
};
const sendPurchaseReceiptEmail = async (buyerEmail, buyerName, productName, amount, orderId) => {
  const content = replaceTemplateVars(templates.purchaseReceipt, {
    name: buyerName,
    orderId,
    date: (/* @__PURE__ */ new Date()).toLocaleDateString(),
    amount: `$${amount.toFixed(2)}`
  });
  await sendMail(
    "noreply@stembotics.org",
    buyerEmail,
    "Purchase Confirmation - Stembotics Academy",
    getFullEmailHtml(content)
  );
  await sendMail(
    "noreply@stembotics.org",
    "admin@stembotics.org",
    `New Purchase: ${productName}`,
    getFullEmailHtml(content)
  );
};
const sendContactFormNotification = async (name, email, subject, message) => {
  const adminContent = replaceTemplateVars(templates.contactForm, {
    name,
    email,
    subject,
    message
  });
  await sendMail(
    "noreply@stembotics.org",
    "admin@stembotics.org",
    `New Contact Form Submission: ${subject}`,
    getFullEmailHtml(adminContent)
  );
  const userContent = replaceTemplateVars(templates.contactAutoReply, { name });
  await sendMail(
    "noreply@stembotics.org",
    email,
    "Thank You for Contacting Stembotics Academy",
    getFullEmailHtml(userContent)
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  sendContactFormNotification,
  sendCourseCreatedEmail,
  sendCourseEnrollmentEmail,
  sendPurchaseReceiptEmail,
  sendWelcomeStudentEmail,
  sendWelcomeTeacherEmail
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, sendWelcomeTeacherEmail as a, sendContactFormNotification as b, sendCourseCreatedEmail as c, sendCourseEnrollmentEmail as d, sendWelcomeStudentEmail as s };
