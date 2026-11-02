import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16">
      <div className="max-w-2xl mx-auto bg-slate-900 text-white p-10 space-y-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-sky-400">О нас</h1>
        <p className="text-slate-300 leading-relaxed">
          Это каталог проектов. Проекты хранятся в Payload CMS, а страницы сайта
          сделаны на Next.js. На главной можно посмотреть список проектов.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-sky-500 transition-colors"
          >
            На главную
          </Link>
          <Link
            href="/"
            className="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-sky-500 transition-colors"
          >
            Проекты
          </Link>
        </div>
      </div>
    </main>
  )
}
