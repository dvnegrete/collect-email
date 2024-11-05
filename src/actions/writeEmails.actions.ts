import { readFileSync } from "fs";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import { Register } from "@/shared/interfaces/Register.interface";

export const writeEmails = async (userRegister: Register) => {
    const filePath = path.join(process.cwd(), 'src/data/index.json');
    try {
        const fileContent = readFileSync(filePath, "utf8");
        const content = JSON.parse(fileContent)
        content.list.push(userRegister)
        await writeFile(filePath, JSON.stringify(content, null, 2));
        const data = await readFile(filePath, 'utf8');
        const { list } = JSON.parse(data);
        return list;
    } catch (error) {
        console.log(error);
    }
}