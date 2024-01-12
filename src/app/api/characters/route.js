import { NextResponse } from "next/server";
import { getCharacters } from "./controllers/getCharacters";

export async function GET(req) {


    const name = req.nextUrl.searchParams.get('name') || '';

    const status=req.nextUrl.searchParams.get('status') || ''

    const gender=req.nextUrl.searchParams.get('gender') || ''

    const species=req.nextUrl.searchParams.get('species') || ''

    const page=req.nextUrl.searchParams.get('page') || ''

    const data=await getCharacters(page, name, status, gender, species)

    console.log(species)

    return NextResponse.json(data)

}
