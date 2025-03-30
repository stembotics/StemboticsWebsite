import type { APIRoute } from "astro";
import { turso } from "@/turso";
import { sendMail } from "./mailService";
import Stripe from "stripe";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const stripe = new Stripe(import.meta.env.STRIPE_KEY);

  const user_id = data.get("user_id");
  const child_id = data.get("child_id");
  const course = data.get("course");
  const date = new Date();

  const { rows:courses } = await turso.execute({
    sql: 'SELECT * FROM Courses WHERE name = ?',
    args: [course]
  });
  const courseData = courses[0]

  const { rows:preData } = await turso.execute({
    sql: 'SELECT * FROM ChildCourses WHERE child_id = ? and course_id = ?',
    args: [child_id, courseData.id]
  });
  if (preData.length >0){
    const realData = preData[0]
    if (realData.status = "Pre-Registered")
      return new Response(
        JSON.stringify({
          message: "You have already registered, please pay to confirm your spot."
        }),
        { status: 200 }
      );
    else{
      if(realData.status = "Enrolled")
        {

        return new Response(
          JSON.stringify({
            message: "You have already Registered!"
          }),
          { status: 200 }
        );
      }
    }
  }



  // const paymentLink = await stripe.paymentLinks.retrieve(
  //   `${courseData.plink_id}`
  // );
  const product = await stripe.products.retrieve(`${courseData.product_id}`);

  // console.log(paymentLink)
  const { rows:parentData } = await turso.execute({
    sql: 'SELECT * FROM Users WHERE user_id = ?',
    args: [user_id]
  });
  const parentEmail = parentData[0]

  const session = await stripe.checkout.sessions.create({
    client_reference_id: `${parentEmail.stripe_customer_id}`,
    success_url: 'https://example.com/success',
    line_items: [
      {
        price: `${product.default_price}`,
        quantity: 2,
      },
    ],
    mode: 'payment',
  });
  const { rows:childDatas } = await turso.execute({
    sql: 'SELECT * FROM Children WHERE child_id = ?',
    args: [child_id]
  });
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth is zero-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  console.log(courseData.id)
  console.log(child_id)
  const formattedDate = `${month}-${day}-${year}`;
  await turso.execute({
    sql: 'INSERT INTO ChildCourses (child_id, course_id, enrollment_date, status) VALUES (?, ?, ?, ?)',
    args: [child_id, courseData.id, formattedDate, "Pre-Registered"]
  });


  const childData = childDatas[0]
  const from: string = 'Stembotics Academy <info.stembotics@gmail.com>';
  const to: string = parentEmail.email+ ",Stembotics Academy <info@stembotics.org> ";
  const subject: string = 'New Registration for '+childData.first_name + " "+ childData.last_name;
  const mailTemplate: string = `<html><head><style>
  html, body{ margin:0; padding:0 }
  body {
    background: repeating-conic-gradient(rgba(128,128,128,0.06) 0% 25%, transparent 0% 50%) 50% / 20px 20px;
  }
</style></head><body><div style="display:none; font-size:1px; color:#333333; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">Stembotics Learning Academy ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏  ͏ &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &nbsp;</div><div class="t83" style="background-color:#292929;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" data-id__19309c9a033="true" style="border-collapse: separate; table-layout: fixed;"><tbody><tr><td style="border-collapse: collapse; font-size: 0px; line-height: 0; background-color: rgb(41, 41, 41);" valign="top" align="center" data-id__19309c9a033="true">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#292929"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" data-id__19309c9a033="true" style="border-collapse: separate; table-layout: fixed; -webkit-font-smoothing: antialiased;"><tbody><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;"><div class="t3" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div></td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t5" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t4" style="background-color:#A3FFAE;width:600px;padding:40px 0 40px 0;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; background-color: rgb(163, 255, 174); width: 480px; padding: 40px 0px;" data-id__19309c9a033="true">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" data-id__19309c9a033="true" style="border-collapse: separate; table-layout: fixed;"><tbody><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t1" style="width:60px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; width: 60px;" data-id__19309c9a033="true">
<!--<![endif]-->
<div style="font-size:0px;"><img style="padding: 0px; font-family: &quot;Albert Sans&quot;, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; line-height: 24px; font-weight: 400; font-style: normal; font-size: 14px; text-decoration: none; text-transform: none; letter-spacing: 0px; direction: ltr; color: rgb(17, 17, 17); text-align: left; display: block; border: 0px; height: auto; width: 100%; margin: 0px; max-width: 100%;" width="60" height="60" alt="" src="https://5d9b2fc3-458e-4c6a-9165-f901c8d9003b.b-cdn.net/e/6518f76f-5b7c-4f91-98be-755d6586c8bb/3f0272b2-3af4-4aac-a92a-eaea05ded483.png" data-id__19309c9a033="true"></div></td>
</tr></tbody></table>
</td></tr></tbody></table></td>
</tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t77" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t76" style="background-color:#FFFFFF;width:600px;padding:40px 30px 40px 30px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; background-color: rgb(255, 255, 255); width: 420px; padding: 40px 30px;" data-id__19309c9a033="true">
<!--<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" data-id__19309c9a033="true" style="border-collapse: separate; table-layout: fixed;"><tbody><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t8" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t7" style="width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; width: 420px;" data-id__19309c9a033="true">
<!--<![endif]-->
<p style="text-size-adjust: 100%; overflow-wrap: normal; white-space: normal; word-break: break-word; border: 0px; padding: 0px; letter-spacing: 0px; margin: 0px; font-family: &quot;Albert Sans&quot;, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; line-height: 24px; font-weight: 400; font-style: normal; font-size: 24px; text-decoration: none; text-transform: none; direction: ltr; color: rgb(17, 17, 17); text-align: left; min-width: 100% !important; width: 100% !important; max-width: 100% !important; display: inline-block !important;" data-id__19309c9a033="true">Hi ${parentEmail.customer_name},</p></td>
</tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;"><div class="t9" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t12" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t11" style="width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; width: 420px;" data-id__19309c9a033="true">
<!--<![endif]-->
<p style="text-size-adjust: 100%; overflow-wrap: normal; white-space: normal; word-break: break-word; border: 0px; padding: 0px; letter-spacing: 0px; margin: 0px; font-family: &quot;Albert Sans&quot;, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; line-height: 24px; font-weight: 400; font-style: normal; font-size: 14px; text-decoration: none; text-transform: none; direction: ltr; color: rgb(17, 17, 17); text-align: left; min-width: 100% !important; width: 100% !important; max-width: 100% !important; display: inline-block !important;" data-id__19309c9a033="true">Thank you for joining the STEMbotics family! We're thrilled to have ${childData.first_name} on board for our exciting new workshops. Currently, your child is registered for the course ${course}, but not yet enrolled. To fully enroll ${childData.first_name} into ${course}, please click on the link below to pay and finalize your spot!&nbsp;&nbsp;</p></td>
</tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t60" style="background-color:#FFFFFF;width:400px;padding:20px 40px 20px 40px;">
<![endif]-->
<!--[if !mso]>-->

</tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t64" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t63" style="width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; width: 420px;" data-id__19309c9a033="true">
<!--<![endif]-->
</td></tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;"><div class="t66" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t68" role="presentation" cellpadding="0" cellspacing="0" align="left">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t67" style="background-color:#A3FFAE;overflow:hidden;width:130px;text-align:center;line-height:24px;mso-line-height-rule:exactly;mso-text-raise:3px;padding:10px 10px 10px 10px;border-radius:10px 10px 10px 10px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; background-color: rgb(163, 255, 174); overflow: hidden; width: 110px; text-align: center; line-height: 24px; padding: 10px; border-radius: 10px;" data-id__19309c9a033="true">
<!--<![endif]-->
<a href="${session.url}" style="text-size-adjust: 100%; overflow-wrap: normal; white-space: normal; word-break: break-word; display: block; margin: 0px; font-family: &quot;Albert Sans&quot;, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; line-height: 24px; font-weight: 700; font-style: normal; font-size: 14px; text-decoration: none; direction: ltr; color: rgb(42, 42, 42); text-align: center;" target="_blank" data-id__19309c9a033="true">Pay Here</a></td>
</tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;"><div class="t69" style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t72" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t71" style="width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; width: 420px;" data-id__19309c9a033="true">
<!--<![endif]-->
<p style="text-size-adjust: 100%; overflow-wrap: normal; white-space: normal; word-break: break-word; border: 0px; padding: 0px; letter-spacing: 0px; margin: 0px; font-family: &quot;Albert Sans&quot;, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; line-height: 24px; font-weight: 400; font-style: normal; font-size: 14px; text-decoration: none; text-transform: none; direction: ltr; color: rgb(17, 17, 17); text-align: left; min-width: 100% !important; width: 100% !important; max-width: 100% !important; display: inline-block !important;" data-id__19309c9a033="true">See you there,&nbsp;&nbsp;</p></td>
</tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t75" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t74" style="width:540px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; width: 420px;" data-id__19309c9a033="true">
<!--<![endif]-->
<p style="text-size-adjust: 100%; overflow-wrap: normal; white-space: normal; word-break: break-word; border: 0px; padding: 0px; letter-spacing: 0px; margin: 0px; font-family: &quot;Albert Sans&quot;, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; line-height: 24px; font-weight: 400; font-style: normal; font-size: 14px; text-decoration: none; text-transform: none; direction: ltr; color: rgb(17, 17, 17); text-align: left; min-width: 100% !important; width: 100% !important; max-width: 100% !important; display: inline-block !important;" data-id__19309c9a033="true">The Stembotics Team</p></td>
</tr></tbody></table>
</td></tr></tbody></table></td>
</tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;">
<!--[if mso]>
<table class="t80" role="presentation" cellpadding="0" cellspacing="0" align="center">
<![endif]-->
<!--[if !mso]>-->
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse: separate; table-layout: fixed; margin-left: auto; margin-right: auto;" data-id__19309c9a033="true">
<!--<![endif]-->
<tbody><tr>
<!--[if mso]>
<td class="t79" style="width:600px;padding:20px 30px 20px 30px;">
<![endif]-->
<!--[if !mso]>-->
<td style="border-collapse: collapse; width: 420px; padding: 20px 30px;" data-id__19309c9a033="true">
<!--<![endif]-->
<p style="text-size-adjust: 100%; overflow-wrap: normal; white-space: normal; word-break: break-word; border: 0px; padding: 0px; letter-spacing: 0px; margin: 0px; font-family: &quot;Albert Sans&quot;, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; line-height: 24px; font-weight: 400; font-style: normal; font-size: 14px; text-decoration: none; text-transform: none; direction: ltr; color: rgb(135, 135, 135); text-align: left; min-width: 100% !important; width: 100% !important; max-width: 100% !important; display: inline-block !important;" data-id__19309c9a033="true">Copyright © 2024 an email by Stembotics</p></td>
</tr></tbody></table>
</td></tr><tr><td data-id__19309c9a033="true" style="border-collapse: collapse;"><div class="t81" style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;&nbsp;</div></td></tr></tbody></table></td></tr></tbody></table></div>


</body></html>
`;
  // console.log(subject);
  sendMail( from, to, subject, mailTemplate);

  return new Response(
    JSON.stringify({
      message: "Success! You can now hit the close button and DON'T FORGET TO RELOAD"
    }),
    { status: 200 }
  );
};