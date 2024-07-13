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
    const updateResponse = await fauna.query(
      Q.Update(
        Q.Select("ref",
          Q.Get(
            Q.Match(Q.Index("guest_by_id"), id)
          )
        ),
        {
          data: { 
            status: 'Accepted'
          }
        }
      )
    )
    // @ts-ignore
    return NextResponse.json(updateResponse, { status: 200 })
  } catch (error) {
    return NextResponse.json({
      message: 'guest not found'
    }, { status: 404 })
  }
}