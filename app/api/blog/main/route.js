import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { v4 } from "uuid";

export const POST = async (req) => {
    try {
        const mainData = await req.formData();

        const title = mainData.get("title");
        const author = mainData.get("author");
        const authorDescription = mainData.get("authorDescription");
        const image = mainData.get("image");

        const uuid = v4();
        const blogDirectory = path.join("public", "blog");
        const postDirectory = path.join(blogDirectory, uuid);
        fs.mkdirSync(postDirectory);

        // Save image is exists
        if (image) {
            const buffer = Buffer.from(await image.arrayBuffer());
            fs.writeFileSync(`${postDirectory}/post.jpg`, buffer);
        }

        // Read the existing data from the JSON file
        const filePath = path.resolve(process.cwd(), "lib/posts.json");
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const posts = JSON.parse(jsonData);

        // Create a new post object (you can customize this as needed)
        const newPost = {
            id: uuid,
            author,
            authorDescription,
            title,
            image: image ? `/blog/${uuid}/post.jpg` : "",
            paragraphs: [],
        };

        // Add the new post to the array
        posts.push(newPost);

        // Write the updated data back to the JSON file
        fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf-8");

        return NextResponse.json({ id: uuid });
    } catch (error) {
        console.error("Error processing main blog data:", error.message);
        return NextResponse.json({
            success: false,
            error: "Error processing main blog data",
        });
    }
};

export const GET = async () => {
    try {
        const filePath = path.resolve(process.cwd(), "lib/posts.json");
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const posts = JSON.parse(jsonData);
        return NextResponse.json(posts);
    } catch (error) {
        console.error("Error processing main blog data:", error.message);
        return NextResponse.json({
            success: false,
            error: "Error processing main blog data",
        });
    }
};
