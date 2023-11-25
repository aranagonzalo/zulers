import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const DELETE = async (req, res) => {
    const { id } = res.params;
    try {
        fs.rmSync(`public/blog/${id}`, { recursive: true, force: true });
        const filePath = path.resolve(process.cwd(), "lib/posts.json");
        const jsonData = fs.readFileSync(filePath, "utf-8");
        let posts = JSON.parse(jsonData);
        posts = posts.filter((post) => post.id !== id);
        fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf-8");

        return NextResponse.json({
            success: true,
            message: "Post deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting post:", error.message);
        return NextResponse.json({
            success: false,
            error: "Error deleting post",
        });
    }
};
