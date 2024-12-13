"use client"

export default function ErrorPage({ error }: { error: Error }) {
    return <div className="flex items-center justify-center h-screen">
    <div className="text-2xl text-red-500">ارور در حین واکشی رخ داده است</div>
  </div>
}