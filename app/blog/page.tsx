import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { getAllBlogArticles } from '@/lib/blog-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - FinanceWise',
  description: 'Read expert financial advice, investment strategies, and money management guides.',
}

export default function BlogIndex() {
  const articles = getAllBlogArticles()
  const categories = Array.from(new Set(articles.map(a => a.category)))

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Financial Insights & Investment Strategies
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Explore our comprehensive collection of articles on personal finance, investing, wealth building, and financial planning.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-card border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog">
                <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                  All Articles
                </button>
              </Link>
              {categories.map((category) => (
                <div key={category} className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="h-full bg-card border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime} min read</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Ad Placeholder */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-muted rounded-lg p-8 text-center border border-border">
            <p className="text-muted-foreground text-sm">Advertisement</p>
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-format="horizontal"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
