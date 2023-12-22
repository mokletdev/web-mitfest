import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { fileTypeFromBuffer } from "file-type";
import { generateSecureToken } from "@/utils/verificationToken";
import { uploadFile } from "@/lib/googleDrive";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json(
      { status: 403, message: "Forbidden" },
      { status: 403 },
    );
  }

  const { email } = session?.user!;

  const formData = await req.formData();
  const file: File | null = formData.get("file") as File;

  if (!file) {
    return NextResponse.json(
      { status: 400, message: "Bad request" },
      { status: 400 },
    );
  }

  const folderId = process.env.DRIVE_FOLDER_ID;
  const fileId = generateSecureToken();

  let streamFile = await file.arrayBuffer();
  const filename = `${fileId}_${email}`;
  const mimetype = await fileTypeFromBuffer(streamFile);
  const upload = await uploadFile(
    filename,
    mimetype?.mime,
    (streamFile = toBuffer(streamFile)),
    folderId,
    email,
  );
  const data = { id: upload.id };
  return NextResponse.json(
    { status: 200, message: "success", data },
    { status: 302 },
  );
}
function toBuffer(arrayBuffer: ArrayBuffer) {
  const buffer = Buffer.from(new Uint8Array(arrayBuffer));
  return buffer;
}
