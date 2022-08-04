import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

import { nanoid } from 'nanoid';

export function middleware(req: NextRequest, ev: NextFetchEvent) {

   if(req.nextUrl.pathname.startsWith('/api/get-user')){
    console.log("returning early...")
    return;
   }

//console.log("Path??", req.nextUrl.pathname)
}