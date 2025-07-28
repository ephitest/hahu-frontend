import mongoose from 'mongoose';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const Contact = mongoose.models.Contact || mongoose.model('Contact',
      new mongoose.Schema({
        name: String,
        email: String,
        message: String,
      })
    );

    const contact = new Contact(req.body);
    await contact.save();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('MongoDB Error:', error);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

export default handler;