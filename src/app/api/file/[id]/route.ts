import { NextResponse } from "next/server";
export function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  return NextResponse.redirect(`https://drive.google.com/open?id=${id}`, 302);
}
