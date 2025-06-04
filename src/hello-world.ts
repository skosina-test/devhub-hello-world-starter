import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

// List of different "Hello World" messages
const helloMessages = [
  'Hello World!',
  'Hola Mundo!',
  'Bonjour le Monde!',
  'Hallo Welt!',
  'Ciao Mondo!',
  'Привет мир!',
  'こんにちは世界！',
  '안녕 세상!',
  'Olá Mundo!',
  'नमस्ते दुनिया!'
];

// Function to get a random message
function getRandomHelloMessage(): string {
  const index = Math.floor(Math.random() * helloMessages.length);
  return helloMessages[index];
}

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  const method = req.method?.toUpperCase() ?? "GET"; 
  const url = req.url;

  if (url === '/api/message' && method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    if (!res.headersSent) {
      res.writeHead(200);
    }
    res.end(JSON.stringify({ message: getRandomHelloMessage() }));
    return; // Make sure to return here so no more response is sent after this point
  }

  if (method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path.join(__dirname, '../public/index.html'), (err: NodeJS.ErrnoException | null, data: Buffer) => {
      if (err) {
        if (!res.headersSent) {
          res.writeHead(500);
        }
        res.end('Error loading the page');
        return; // Ensure no more processing after response is sent
      }
      if (!res.headersSent) {
        res.writeHead(200);
      }
      res.end(data);
    });
  } else {
    if (!res.headersSent) {
      res.writeHead(405);
    }
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

server.listen(8000, () => {
  console.log('App started on port 8000');
});
