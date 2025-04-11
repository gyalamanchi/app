// This is a mock API endpoint - replace with your actual backend endpoint
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { message } = req.body;
      
      // This is a simple echo response - replace with actual AI processing
      const reply = `You said: ${message}`;
      
      res.status(200).json({ reply });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }