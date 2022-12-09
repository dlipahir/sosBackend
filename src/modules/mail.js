const nodemailer = require('nodemailer');
require('dotenv').config()
//const secure_configuration = require('./secure');

const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
	// type: 'OAuth2',
	user:process.env.MAIL,
	pass:process.env.PASS,
	// clientId: "66496666152-a4a5v8v4mjsqrh80gef1sij7o6pibgjo.apps.googleusercontent.com",
	// clientSecret: "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",
	// refreshToken: "1//04RS9TyhM-v8uCgYIARAAGAQSNwF-L9IrEVhrcFByH67CF9WetxoFH60eNlgT0HpeGcXgjitFc73EbLvZQalnGsJObnkbvL7-Upc"
}
});

// const mailConfigurations = {
// 	from: 'ahirdilp@gmail.com',
// 	to: 'propixel007@gmail.com',
// 	subject: 'Sending Email using Node.js',
// 	text: 'Hi! There, You know I am using the NodeJS '
// 	+ 'Code along with NodeMailer to send this email.'
// };
	
// transporter.sendMail(mailConfigurations, function(error, info){
// 	if (error) throw Error(error);
// 	console.log('Email Sent Successfully');
// 	console.log(info);
// });
const gmailsent=async()=>{
	const mailConfigurations = {
		from: 'ahirdilp@gmail.com',
		to:email,
		subject: 'OTP for sosApp',
		text: `Hi! There, your otp is ${otp}`
		+ ' and will expires in 5 Minutes'
	};

     transporter.sendMail(mailConfigurations,async function(error, info){
		if (error) return error;
		//console.log('Email Sent Successfully');
		//console.log(info);
		return info;
	});
}





const SendMail=async(email,otp)=>{
	const mailConfigurations = {
		from: 'ahirdilp@gmail.com',
		to:email,
		subject: 'OTP for sosApp',
		text: `Hi! There, your otp is ${otp}`
		+ ' and will expires in 5 Minutes'
	};
	const maildata=await transporter.sendMail(mailConfigurations);
	//console.log(maildata);
	return maildata;
 // const result= await gmailsent(email,otp)
}

module.exports={SendMail};
