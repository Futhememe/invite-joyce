import { fauna } from "@/lib/fauna";
import { query as Q } from "faunadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json()

  if(!id) {
    return NextResponse.json({
      message: 'id is required'
    }, { status: 400 })
  }

  try {
    const response = await fauna.query(
      Q.Map(
        Q.Paginate(
          Q.Match(Q.Index("invite_by_id"), id)
        ),
        Q.Lambda("X", Q.Get(Q.Var("X")))
      )
    )
    // @ts-ignore
    return NextResponse.json(response.data[0].data, { status: 200 })
  } catch (error) {
    return NextResponse.json({
      message: 'guest not found'
    }, { status: 404 })
  }
}