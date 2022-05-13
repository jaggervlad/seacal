// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from 'lib/dbConnect';
import Message from 'models/Message';
import type { NextApiRequest, NextApiResponse } from 'next';

async function validateHuman(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data.success;
}

interface FormData {
  email: string;
  message: string;
  token: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const formData: FormData = req.body;
    const human = await validateHuman(formData.token);
    await dbConnect();

    if (!human) {
      res.status(400);
      res.json({ errors: ['Regresa cuando no seas un robot!'] });
      return;
    }
    const { email, message } = formData;

    await Message.create({
      email,
      message,
    });

    res.status(200);
    res.json({ message: 'Mensaje creado correctamente' });
  }
}
