import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static assets and files from root
app.use(express.static(__dirname));

// Route index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route resume
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'resume.html'));
});

// Route second-brain
app.get('/second-brain', (req, res) => {
  res.sendFile(path.join(__dirname, 'second-brain-case-study.html'));
});

// Fallback for missing nomi_case_study.html -> route to nomi-design-system-case-study.html if accessed
app.get('/nomi_case_study.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'nomi-design-system-case-study.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
