"use server"
type FormTypeRegister = {
    username?: string;
    email?: string;
}

export const handlerRegister = async (formData: FormTypeRegister) => {
    const username = formData.username;
    const email = formData.email;
    console.log({ username, email });
}