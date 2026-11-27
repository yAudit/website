// netlify/functions/telegram.ts
import { Telegram } from 'telegraf';
import { Handler } from '@netlify/functions';

const IPToBlock = (process.env.IP_TO_BLOCK || '').split(',');

export const handler: Handler = async (event, context) => {
  // Parse the request body
  const body = JSON.parse(event.body || '{}');
  
  // Get IP from Netlify headers
  const clientIP = event.headers['x-forwarded-for'] || '';

  // IP blocking check
  if (IPToBlock.includes(clientIP)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ success: false })
    };
  }

  // User agent check
  const userAgent = event.headers['user-agent'] || '';
  if (userAgent.includes('python-requests')) {
    console.log('Blocked python-requests from IP:', clientIP);
    return {
      statusCode: 403,
      body: JSON.stringify({ success: false })
    };
  }

  const telegram = new Telegram(process.env.TELEGRAM_BOT as string);
  // console.log(process.env.TELEGRAM_BOT);
  // console.log(process.env.TELEGRAM_CHAT);
  
  
  try {
    await telegram.sendMessage(
      process.env.TELEGRAM_CHAT as string, `
-------------------------------------------------------------------
You got a new message from your website contact form:
Name: ${body.name}
Telegram username: ${body.tguser}
Service: ${body.service || "Not specified"}
Protocol: ${body.protocol}
Preferred audit completion date: ${body.date}
Website: ${body.website}
Github repo link: ${body.github}
Additional information: ${body.message}
------------------------------------------------------------------`);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Telegram error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error })
    };
  }
};