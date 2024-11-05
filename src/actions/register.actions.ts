"use server"

import { writeJSONFile } from "@/helpers/writeJSONFile";
import { imageDefault } from "@/shared/imageDefault";
import { Register } from "@/shared/interfaces/Register.interface";
// import { useWriteEmails } from "@/hooks/useWriteEmails";

export const handlerRegister = async (formData: Register) => {
    const username = formData.username;
    const email = formData.email;
    // const {data} = useWriteEmails({username, email})
    await writeJSONFile({ username, email, image: imageDefault });
}