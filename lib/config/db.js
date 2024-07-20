import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://Chinmay:chromium@cluster0.cdbtymo.mongodb.net/Todo-app")
    console.log("DB Connected");
}