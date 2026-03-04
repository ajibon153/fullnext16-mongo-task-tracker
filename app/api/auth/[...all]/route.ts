import { auth } from "@/lib/auth/auth"
import { NextResponse } from "next/server"
import { toNextJsHandler } from "better-auth/next-js"

export const { GET, POST } = toNextJsHandler(auth)
