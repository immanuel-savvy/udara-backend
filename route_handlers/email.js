import { commalise_figures, date_string } from "../utils/functions";

const verification = (code, fullname) => {
  return `<!DOCTYPE html><html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible"content="IE=edge"/><style type="text/css">@media screen {@font-face {font-family: \'Lato\';font-style: normal;font-weight: 400;src: local(\'Lato Regular\'), local(\'Lato-Regular\'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: normal;font-weight: 700;src: local(\'Lato Bold\'), local(\'Lato-Bold\'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: italic;font-weight: 400;src: local(\'Lato Italic\'), local(\'Lato-Italic\'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: italic;font-weight: 700;src: local(\'Lato Bold Italic\'), local(\'Lato-BoldItalic\'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format(\'woff\');}}/* CLIENT-SPECIFIC STYLES */body,table,td,a {-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table,td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}img {-ms-interpolation-mode: bicubic;}/* RESET STYLES */img {border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;}table {border-collapse: collapse !important;}body {height: 100% !important;margin: 0 !important;padding: 0 !important;width: 100% !important;}/* iOS BLUE LINKS */a[x-apple-data-detectors] {color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}/* MOBILE STYLES */@media screen and (max-width:600px) {h1 {font-size: 32px !important;line-height: 32px !important;}}/* ANDROID CENTER FIX */div[style*="margin: 16px 0;"] {margin: 0 !important;}.p_code{  margin:14px;  font-size: 24px;  letter-spacing:2.5px;  font-weight: bold;  color:#fff;}</style></head><body style="background-color: #ff6905; margin: 0 !important; padding: 0 !important;"><!-- HIDDEN PREHEADER TEXT --><div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: \'Lato\', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We\'re thrilled to have you here! Get ready to dive into your new account.</div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#FFA73B" align="center"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>  </tr></table></td></tr><tr><td bgcolor="#FFA73B" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">  <h1 style="font-size: 36px; font-weight: 400; margin: 2;">Welcome</h1> <img src="https://mobile.udaralinksapp.online/Images/logo_single.png" width="125" height="120" style="display: block; border: 0px;" />  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <p style="margin: 0;">We\'re excited to have you get started. First, you need to confirm your account. Just return the code below.</p>  </td>  </tr>  <tr>  <td bgcolor="#ffffff" align="left">  <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border-radius: 3px;" bgcolor="#ff6905"><p class="p_code">${code}</p></td></tr></table></td></tr>  </table>  </td>  </tr> <!-- COPY -->  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <p style="margin: 0;">If you have any questions, just reply to this email&mdash;we\'re always happy to help out.</p>  </td>  </tr>  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <p style="margin: 0;">Cheers,<br>Udara Links</p>  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>  <p style="margin: 0;"><a href="#" target="_blank" style="color: #FFA73B;">We&rsquo;re here to help you out</a></p>  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"> <br><!--  <p style="margin: 0;">If these emails get annoying, please feel free to <a href="#" target="_blank" style="color: #111111; font-weight: 700;">unsubscribe</a>.</p> -->  </td>  </tr></table></td></tr></table></body></html>`;
};

const forgot_password_email = (code) => {
  return `<!DOCTYPE html><html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible"content="IE=edge"/><style type="text/css">@media screen {@font-face {font-family: \'Lato\';font-style: normal;font-weight: 400;src: local(\'Lato Regular\'), local(\'Lato-Regular\'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: normal;font-weight: 700;src: local(\'Lato Bold\'), local(\'Lato-Bold\'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: italic;font-weight: 400;src: local(\'Lato Italic\'), local(\'Lato-Italic\'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: italic;font-weight: 700;src: local(\'Lato Bold Italic\'), local(\'Lato-BoldItalic\'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format(\'woff\');}}/* CLIENT-SPECIFIC STYLES */body,table,td,a {-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table,td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}img {-ms-interpolation-mode: bicubic;}/* RESET STYLES */img {border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;}table {border-collapse: collapse !important;}body {height: 100% !important;margin: 0 !important;padding: 0 !important;width: 100% !important;}/* iOS BLUE LINKS */a[x-apple-data-detectors] {color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}/* MOBILE STYLES */@media screen and (max-width:600px) {h1 {font-size: 32px !important;line-height: 32px !important;}}/* ANDROID CENTER FIX */div[style*="margin: 16px 0;"] {margin: 0 !important;}.p_code{  margin:14px;  font-size: 24px;  letter-spacing:2.5px;  font-weight: bold;  color:#fff;}</style></head><body style="background-color: #ff6905; margin: 0 !important; padding: 0 !important;"><!-- HIDDEN PREHEADER TEXT --><div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: \'Lato\', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We\'re thrilled to have you here! Get ready to dive into your new account.</div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#FFA73B" align="center"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>  </tr></table></td></tr><tr><td bgcolor="#FFA73B" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">  <h1 style="font-size: 36px; font-weight: 400; margin: 2;">Password Reset!</h1> <img src="https://mobile.udaralinksapp.online/Images/logo_single.png" width="125" height="120" style="display: block; border: 0px;" />  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <p style="margin: 0;">To proceed with reseting your password, you need to confirm your identity by returning the code below to the app.</p>  </td>  </tr>  <tr>  <td bgcolor="#ffffff" align="left">  <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border-radius: 3px;" bgcolor="#ff6905"><p class="p_code">${code}</p></td></tr></table></td></tr>  </table>  </td>  </tr> <!-- COPY -->  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <p style="margin: 0;">If you have any questions, just reply to this email&mdash;we\'re always happy to help out.</p>  </td>  </tr>  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <p style="margin: 0;">Cheers,<br>Udara Links</p>  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>  <p style="margin: 0;"><a href="#" target="_blank" style="color: #FFA73B;">We&rsquo;re here to help you out</a></p>  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"> <br><!--  <p style="margin: 0;">If these emails get annoying, please feel free to <a href="#" target="_blank" style="color: #111111; font-weight: 700;">unsubscribe</a>.</p> -->  </td>  </tr></table></td></tr></table></body></html>`;
};

const admin_created_email = (details, super_admin) => {
  return JSON.stringify(details);
};

const transactions_report = ({ wallet, transactions }) => {
  return JSON.stringify({ wallet, transactions });
};

const welcome_email = ({ username }) => {
  return `<!DOCTYPE html><html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible"content="IE=edge"/><style type="text/css">@media screen {@font-face {font-family: \'Lato\';font-style: normal;font-weight: 400;src: local(\'Lato Regular\'), local(\'Lato-Regular\'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: normal;font-weight: 700;src: local(\'Lato Bold\'), local(\'Lato-Bold\'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: italic;font-weight: 400;src: local(\'Lato Italic\'), local(\'Lato-Italic\'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: italic;font-weight: 700;src: local(\'Lato Bold Italic\'), local(\'Lato-BoldItalic\'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format(\'woff\');}}/* CLIENT-SPECIFIC STYLES */body,table,td,a {-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table,td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}img {-ms-interpolation-mode: bicubic;}/* RESET STYLES */img {border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;}table {border-collapse: collapse !important;}body {height: 100% !important;margin: 0 !important;padding: 0 !important;width: 100% !important;}/* iOS BLUE LINKS */a[x-apple-data-detectors] {color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}/* MOBILE STYLES */@media screen and (max-width:600px) {h1 {font-size: 32px !important;line-height: 32px !important;}}/* ANDROID CENTER FIX */div[style*="margin: 16px 0;"] {margin: 0 !important;}.p_code{  margin:14px;  font-size: 24px;  letter-spacing:2.5px;  font-weight: bold;  color:#fff;}</style></head><body style="background-color: #ff6905; margin: 0 !important; padding: 0 !important;"><!-- HIDDEN PREHEADER TEXT --><div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: \'Lato\', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We\'re thrilled to have you here! Get ready to dive into your new account.</div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#FFA73B" align="center"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>  </tr></table></td></tr><tr><td bgcolor="#FFA73B" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">  <h1 style="font-size: 36px; font-weight: 400; margin: 2;">Welcome to Udaralinks</h1> <img src="https://mobile.udaralinksapp.online/Images/logo_single.png" width="125" height="120" style="display: block; border: 0px;" />  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <p style="margin: 0;">We are excited to have you with us. </p><p style="margin: 0;">Udaralinks is the safest and coolest way to buy and sell foreign currencies as well as make International payments to anyone anywhere in the world.  </p><p style="margin: 0;">On Udaralinks, You will be able to buy and sell foreign currencies to meet your international payment needs using our Escrow System. </p><p style="margin: 0;">There are no limits to what you can do. We are happy to begin this journey with you. </p><p style="margin: 0;">We will be with you every step of the way ! </p> <p style="margin: 0;">Feel free to contact us <a mailto='support@udaralinks.com'>support@udaralinks.com</a> if you have any needs. </p> <p style="margin: 0;">A member of the team will be in touch with you shortly. </p><p style="margin: 0;">Thank You once again.</p>  </td>  </tr>  <tr>  <td bgcolor="#ffffff" align="left">  <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;"><table border="0" cellspacing="0" cellpadding="0"></table></td></tr>  </table>  </td>  </tr> <!-- COPY -->  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"></td>  </tr>  <tr>  <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <p style="margin: 0;">Best Regards.<br>Udaralinks Team</p>  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">  <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>  <p style="margin: 0;"><a href="#" target="_blank" style="color: #FFA73B;">We&rsquo;re here to help you out</a></p>  </td>  </tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">  <tr>  <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"> <br><!--  <p style="margin: 0;">If these emails get annoying, please feel free to <a href="#" target="_blank" style="color: #111111; font-weight: 700;">unsubscribe</a>.</p> -->  </td>  </tr></table></td></tr></table></body></html>`;
};

const contact_email = ({ user, description, images, title }) => {
  return `<!DOCTYPE html><html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible"content="IE=edge"/><style type="text/css">@media screen {@font-face {font-family: \'Lato\';font-style: normal;font-weight: 400;src: local(\'Lato Regular\'), local(\'Lato-Regular\'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: normal;font-weight: 700;src: local(\'Lato Bold\'), local(\'Lato-Bold\'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: italic;font-weight: 400;src: local(\'Lato Italic\'), local(\'Lato-Italic\'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format(\'woff\');}@font-face {font-family: \'Lato\';font-style: italic;font-weight: 700;src: local(\'Lato Bold Italic\'), local(\'Lato-BoldItalic\'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format(\'woff\');}}/* CLIENT-SPECIFIC STYLES */body,table,td,a {-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table,td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}img {-ms-interpolation-mode: bicubic;}/* RESET STYLES */img {border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;}table {border-collapse: collapse !important;}body {height: 100% !important;margin: 0 !important;padding: 0 !important;width: 100% !important;}/* iOS BLUE LINKS */a[x-apple-data-detectors] {color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}/* MOBILE STYLES */@media screen and (max-width:600px) {h1 {font-size: 32px !important;line-height: 32px !important;}}/* ANDROID CENTER FIX */div[style*="margin: 16px 0;"] {margin: 0 !important;}.p_code{  margin:14px;  font-size: 24px; letter-spacing:2.5px; font-weight: bold; color:#fff;}</style></head><body style="background-color: #ff6905; margin: 0 !important; padding: 0 !important;"><!-- HIDDEN PREHEADER TEXT --><div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: \'Lato\', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We\'re thrilled to have you here! Get ready to dive into your new account.</div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#FFA73B" align="center"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td align="center" valign="top" style="padding: 40px 10px 40px 10px;"></td></tr></table></td></tr><tr><td bgcolor="#FFA73B" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">  <h1 style="font-size: 36px; font-weight: 400; margin: 2;">${title}</h1><img src="https://mobile.udaralinksapp.online/Images/logo_single.png" width="125" height="120" style="display: block; border: 0px;" /></td></tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${description.split('\n').map(d=>`<p style="margin: 0;">${d}</p>`)}<br/>${images&&images.length?images.map(i=>`<p><a href="https://mobile.udaralinksapp.online/Images/${i}"><img src="https://mobile.udaralinksapp.online/Images/${i}"/></a></p>`):''}</td></tr><tr><td bgcolor="#ffffff" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="border-radius: 3px;" bgcolor="#ff6905"></td></tr></table></td></tr></table></td></tr> <!-- COPY --><tr><td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"></td></tr><tr><td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"><p style="margin: 0;">Best Regards,<br/>${user.username}<br/><a style='font-weight:bold;' href='mailto://${user.email}'>${user.email}</a></p></td></tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"><h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>  <p style="margin: 0;"><a href="#" target="_blank" style="color: #FFA73B;">We&rsquo;re here to help you out</a></p></td></tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"><tr><td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"><br><!-- <p style="margin: 0;">If these emails get annoying, please feel free to <a href="#" target="_blank" style="color: #111111; font-weight: 700;">unsubscribe</a>.</p> --></td></tr></table></td></tr></table></body></html>`;
};


const tx_receipts = ({tx, user})=>{
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
  
      <title>simple invoice receipt email template - Bootdey.com</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <style type="text/css">
        /* -------------------------------------
      GLOBAL
      A very basic CSS reset
  ------------------------------------- */
        * {
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          font-size: 14px;
        }
  
        img {
          max-width: 100%;
        }
  
        body {
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none;
          width: 100% !important;
          height: 100%;
          line-height: 1.6;
        }
  
        /* Let's make sure all tables have defaults */
        table td {
          vertical-align: top;
        }
  
        /* -------------------------------------
      BODY & CONTAINER
  ------------------------------------- */
        body {
          background-color: #f6f6f6;
        }
  
        .body-wrap {
          background-color: #f6f6f6;
          width: 100%;
        }
  
        .container {
          display: block !important;
          max-width: 600px !important;
          margin: 0 auto !important;
          /* makes it centered */
          clear: both !important;
        }
  
        .content {
          max-width: 600px;
          margin: 0 auto;
          display: block;
          padding: 20px;
        }
  
        /* -------------------------------------
      HEADER, FOOTER, MAIN
  ------------------------------------- */
        .main {
          background: #fff;
          border: 1px solid #e9e9e9;
          border-radius: 3px;
        }
  
        .content-wrap {
          padding: 20px;
        }
  
        .content-block {
          padding: 0 0 20px;
        }
  
        .header {
          width: 100%;
          margin-bottom: 20px;
        }
  
        .footer {
          width: 100%;
          clear: both;
          color: #999;
          padding: 20px;
        }
        .footer a {
          color: #999;
        }
        .footer p,
        .footer a,
        .footer unsubscribe,
        .footer td {
          font-size: 12px;
        }
  
        /* -------------------------------------
      TYPOGRAPHY
  ------------------------------------- */
        h1,
        h2,
        h3 {
          font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande",
            sans-serif;
          color: #000;
          margin: 40px 0 0;
          line-height: 1.2;
          font-weight: 400;
        }
  
        h1 {
          font-size: 32px;
          font-weight: 500;
        }
  
        h2 {
          font-size: 24px;
        }
  
        h3 {
          font-size: 18px;
        }
  
        h4 {
          font-size: 14px;
          font-weight: 600;
        }
  
        p,
        ul,
        ol {
          margin-bottom: 10px;
          font-weight: normal;
        }
        p li,
        ul li,
        ol li {
          margin-left: 5px;
          list-style-position: inside;
        }
  
        /* -------------------------------------
      LINKS & BUTTONS
  ------------------------------------- */
        a {
          color: #1ab394;
          text-decoration: underline;
        }
  
        .btn-primary {
          text-decoration: none;
          color: #fff;
          background-color: #1ab394;
          border: solid #1ab394;
          border-width: 5px 10px;
          line-height: 2;
          font-weight: bold;
          text-align: center;
          cursor: pointer;
          display: inline-block;
          border-radius: 5px;
          text-transform: capitalize;
        }
  
        /* -------------------------------------
      OTHER STYLES THAT MIGHT BE USEFUL
  ------------------------------------- */
        .last {
          margin-bottom: 0;
        }
  
        .first {
          margin-top: 0;
        }
  
        .aligncenter {
          text-align: center;
        }
  
        .alignright {
          text-align: right;
        }
  
        .alignleft {
          text-align: left;
        }
  
        .clear {
          clear: both;
        }
  
        /* -------------------------------------
      ALERTS
      Change the class depending on warning email, good email or bad email
  ------------------------------------- */
        .alert {
          font-size: 16px;
          color: #fff;
          font-weight: 500;
          padding: 20px;
          text-align: center;
          border-radius: 3px 3px 0 0;
        }
        .alert a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
        }
        .alert.alert-warning {
          background: #f8ac59;
        }
        .alert.alert-bad {
          background: #ed5565;
        }
        .alert.alert-good {
          background: #1ab394;
        }
  
        /* -------------------------------------
      INVOICE
      Styles for the billing table
  ------------------------------------- */
        .invoice {
          margin: 40px auto;
          text-align: left;
          width: 80%;
        }
        .invoice td {
          padding: 5px 0;
        }
        .invoice .invoice-items {
          width: 100%;
        }
        .invoice .invoice-items td {
          border-top: #eee 1px solid;
        }
        .invoice .invoice-items .total td {
          border-top: 2px solid #333;
          border-bottom: 2px solid #333;
          font-weight: 700;
        }
  
        /* -------------------------------------
      RESPONSIVE AND MOBILE FRIENDLY STYLES
  ------------------------------------- */
        @media only screen and (max-width: 640px) {
          h1,
          h2,
          h3,
          h4 {
            font-weight: 600 !important;
            margin: 20px 0 5px !important;
          }
  
          h1 {
            font-size: 22px !important;
          }
  
          h2 {
            font-size: 18px !important;
          }
  
          h3 {
            font-size: 16px !important;
          }
  
          .container {
            width: 100% !important;
          }
  
          .content,
          .content-wrap {
            padding: 10px !important;
          }
  
          .invoice {
            width: 100% !important;
          }
        }
      </style>
    </head>
    <body>
      <table class="body-wrap">
        <tbody>
          <tr>
            <td></td>
            <td class="container" width="600">
              <div class="content">
                <table class="main" width="100%" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td class="content-wrap aligncenter">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td class="content-block">
                                <h2>Thanks for using Udara</h2>
                              </td>
                            </tr>
                            <tr class="aligncenter">
                              <td
                                class="aligncenter"
                                style="
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                "
                              >
                                <img
                                  src="https://mobile.udaralinksapp.online/Images/logo_single.png"
                                  width="125"
                                  height="120"
                                  style="
                                    display: block;
                                    text-align: center;
                                    border: 0px;
                                  "
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="content-block">
                                <table class="invoice">
                                  <tbody>
                                    <tr>
                                      <td>
                                        Hello, <b>${user.username}</b><br />${date_string(tx.created)}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        ${commalise_figures(tx.value)} NGN has been ${tx.preamble} ${tx.type==='escrow'?"": 'your Udaralinks wallet'}<br />
                                        Here are the details of your transaction
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <table
                                          class="invoice-items"
                                          cellpadding="0"
                                          cellspacing="0"
                                        >
                                          <tbody>
                                            <tr>
                                              <td>${tx.title}</td>
                                              <td class="alignright">
                                                &#8358; ${commalise_figures(tx.value)}
                                              </td>
                                            </tr>
                                          ${tx.fee?`<tr>
                                              <td>Tx Fee</td>
                                              <td class="alignright">
                                              &#8358; ${commalise_figures(tx.fee)}
                                              </td>
                                            </tr>`:''}
                                            ${tx.fee?'':`<tr class="total">
                                              <td class="alignright" width="80%">
                                                Total
                                              </td>
                                              <td class="alignright">
                                              &#8358; ${commalise_figures(tx.value)}
                                              </td>
                                            </tr>`}
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td class="">Regards, <br />Udara Links</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="footer">
                  <table width="100%">
                    <tbody>
                      <tr>
                        <td class="aligncenter content-block">
                          Questions? Email
                          <a href="mailto:support@udaralinks.com"
                            ><span
                              class="__cf_email__"
                              data-cfemail="9deee8ededf2efe9ddfef2f0edfcf3e4b3f4f3fe"
                              >support@udaralinks.com</span
                            ></a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <script
        data-cfasync="false"
        src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
      <script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
      <script type="text/javascript"></script>
    </body>
  </html>
  `
}
export {
  verification,
  forgot_password_email,
  tx_receipts,
  transactions_report,
  admin_created_email,
  contact_email,
  welcome_email,
};
