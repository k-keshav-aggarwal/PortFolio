import admin from '../firebase/admin.js';

export default async function handler(req, res) {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    return res.status(200).json({ message: 'Authenticated!', uid: decoded.uid });
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
