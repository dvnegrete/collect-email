"use server"
import { promises } from "fs";
import path from "path";

export const readEmails = async () => {
    try {
        const filePath = path.join(process.cwd(), 'src/data/index.json');
        const data = await promises.readFile(filePath, 'utf8');
        const { list } = JSON.parse(data);
        return list;
    } catch (error) {
        console.error('Error read file JSON:', error);
    }
}