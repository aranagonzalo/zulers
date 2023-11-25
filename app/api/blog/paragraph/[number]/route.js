import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Handle each paragraph data
export const POST = async (req) => {
    try {
        const data = await req.formData();
        const index = data.get("index");
        const image = data.get("image");
        const title = data.get("title");
        const text = data.get("text");
        const id = data.get("id");
        const bullet = JSON.parse(data.get("bullet"));

        // Find the last folder in public/blog and calculate the next folder name
        const blogDirectory = path.join("public", "blog");
        const postDirectory = path.join(blogDirectory, id);

        // Save image is exists
        if (image) {
            const buffer = Buffer.from(await image.arrayBuffer());
            fs.writeFileSync(`${postDirectory}/paragraph${index}.jpg`, buffer);
        }

        // Read the existing data from the JSON file
        const filePath = path.resolve(process.cwd(), "lib/posts.json");
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const posts = JSON.parse(jsonData);

        // Find the corresponding post
        const correspondingPost = posts.find((post) => post.id === id);

        // Create a new paragraph object
        const newParagraph = {
            title,
            text,
            bullet,
            image: image ? `/blog/${id}/paragraph${index}.jpg` : "",
        };
        // Add the paragraph to the corresponding post
        correspondingPost.paragraphs.push(newParagraph);

        // Write the updated data back to the JSON file
        fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf-8");

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error processing paragraph data:", error.message);
        return NextResponse.json({
            success: false,
            error: "Error processing paragraph data",
        });
    }
};
