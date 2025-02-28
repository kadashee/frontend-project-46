import fs from 'fs';
import path from 'path';

const parseFile = (filePath) => {
    const absolutePath = path.resolve(process.cwd(), filePath);
    const data = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(data);
}

export default parseFile;