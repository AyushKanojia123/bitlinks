import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {

  const { shorturl } = await params   // ✅ FIX

  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  const doc = await collection.findOne({ shorturl })

  if (doc?.url) {
    redirect(doc.url)
  }

  // fallback redirect
  redirect(process.env.NEXT_PUBLIC_HOST)
}