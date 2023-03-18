import Credential from '@/utils/Credential';
import { connect } from '@/utils/db';
import Auth from '@/utils/Auth';

export default async function handler(req, res) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const user = await client
    .db(DB_NAME)
    .collection('users')
    .findOne({ email: req.body.email });
  client.close();
  
  if (user) {
    const isValid = await Credential.compare(req.body.password, user.password);
    if (isValid) {
      const authToken = await Auth.generateToken({});
      return res.status(200).json({ message: 'Signin success', authToken });
    }
  }

  return res.status(401).json({ message: 'Invalid email/password' });
}
