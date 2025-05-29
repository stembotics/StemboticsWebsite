import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

interface CourseEnrollmentEmailData {
  studentName: string;
  courseName: string;
  courseStartDate: string;
  courseDuration: string;
  courseLevel: string;
}

export async function sendCourseEnrollmentEmail(data: CourseEnrollmentEmailData) {
  const { studentName, courseName, courseStartDate, courseDuration, courseLevel } = data;

  const mailOptions = {
    from: `"Stembotics Academy" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO,
    subject: 'Course Enrollment Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #4CAF50; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Course Enrollment Confirmation</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <p>Dear ${studentName},</p>
          
          <p>You have successfully enrolled in <strong>${courseName}</strong>.</p>
          
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Course Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Start Date:</strong> ${new Date(courseStartDate).toLocaleDateString()}</li>
              <li><strong>Duration:</strong> ${courseDuration}</li>
              <li><strong>Level:</strong> ${courseLevel}</li>
            </ul>
          </div>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #856404;">Important Payment Information</h3>
            <p style="color: #856404;">
              Payment links will be sent to your email one week before the first class. 
              Please make sure to check your email regularly for updates.
            </p>
          </div>
          
          <p>
            In the meantime, you can explore the course content and structure under the course description on the course page.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.SITE_URL}/dashboard" 
               style="background-color: #4CAF50; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 5px; display: inline-block;">
              Access Course
            </a>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; background-color: #f5f5f5; font-size: 12px; color: #666;">
          <p>© ${new Date().getFullYear()} Stembotics Academy. All rights reserved.</p>
          <p>123 Education Street, Learning City, ST 12345</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending enrollment email:', error);
    throw error;
  }
} 