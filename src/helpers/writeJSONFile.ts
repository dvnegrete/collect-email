import { readFileSync } from "fs";
import { writeFile } from "fs/promises";
import path from "path";

import { Register } from "@/shared/interfaces/Register.interface";

export const writeJSONFile = async (userRegister: Register) => {
    const filePath = path.join(process.cwd(), 'src/data/index.json');
    try {
        const fileContent = readFileSync(filePath, "utf8");
        const content = JSON.parse(fileContent)
        content.list.push(userRegister)
        await writeFile(filePath, JSON.stringify(content, null, 2))
    } catch (error) {
        console.log(error);
    }
}