"use server"
import { promises as fs } from "fs";
import path from "path";

export const readEmails = async () => {
    try {
        const filePath = path.join(process.cwd(), 'src/data/index.json');
        const data = await fs.readFile(filePath, 'utf8');
        const { list } = JSON.parse(data);
        return list;
    } catch (error) {
        console.error('Error read file JSON:', error);
    }
}