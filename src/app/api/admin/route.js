import checkAdmin from "@/lib/checkLogin";
import { cookies } from "next/headers";

export async function POST(request) {
  const cookiesStore = await cookies();

  const { email, password } = await request.json();
  if (
    email !== process.env.ADMIN_EMAIL &&
    password !== process.env.ADMIN_PASSWORD
  ) {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid credentials" }),
      {
        status: 401,
      }
    );
  }

  const sessionToken = process.env.ADMIN_TOKEN;
  cookiesStore.set("token", sessionToken);

  return new Response(
    JSON.stringify({ success: true, message: "Admin logged in successful" }),
    {
      status: 201,
    }
  );
}

export async function GET() {
  const isAdmin = await checkAdmin();
  return Response.json({ message: "Admin route accessed", isAdmin });
}
