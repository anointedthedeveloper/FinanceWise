import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { getBlogArticleBySlug, getAllBlogArticles } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found - FinanceWise',
      description: 'The article you are looking for does not exist.',
    }
  }

  return {
    title: `${article.title} - FinanceWise`,
    description: article.excerpt,
  }
}

export function generateStaticParams() {
  const articles = getAllBlogArticles()
  return articles.map(article => ({
    slug: article.slug,
  }))
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getAllBlogArticles()
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-card border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
              {article.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {article.title}
            </h1>

            <div className="flex items-center justify-between text-muted-foreground">
              <div className="flex items-center space-x-4">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <span className="text-sm">{article.readTime} min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('#')) {
                // Handle headers
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
              } else if (paragraph.startsWith('-')) {
                // Handle lists
                const items = paragraph.split('\n')
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-muted border border-border rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> This article is for educational purposes only and should not be considered as professional financial, investment, or legal advice. Always consult with a qualified financial advisor before making financial decisions.
            </p>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-card border-t border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relArticle) => (
                  <Link key={relArticle.id} href={`/blog/${relArticle.slug}`}>
                    <div className="bg-background p-4 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                        {relArticle.category}
                      </span>
                      <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                        {relArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relArticle.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {relArticle.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ad Placeholder */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
