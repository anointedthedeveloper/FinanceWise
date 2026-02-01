import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, TrendingUp, DollarSign, PieChart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Home() {
  const featuredArticles = [
    {
      id: 1,
      title: 'Getting Started with Index Funds',
      excerpt: 'Learn how index funds can be the foundation of a diversified investment portfolio with low fees and consistent returns.',
      date: 'January 28, 2024',
      category: 'Investing',
      slug: 'index-funds-guide',
    },
    {
      id: 2,
      title: 'The Complete Beginner\'s Guide to Budgeting',
      excerpt: 'Master the fundamentals of personal budgeting and learn proven strategies to take control of your finances.',
      date: 'January 25, 2024',
      category: 'Personal Finance',
      slug: 'budgeting-guide',
    },
    {
      id: 3,
      title: 'Understanding Dividend Investing',
      excerpt: 'Explore how dividend-paying stocks can provide passive income and contribute to long-term wealth building.',
      date: 'January 22, 2024',
      category: 'Investing',
      slug: 'dividend-investing',
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                Master Your Financial Future
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                Discover expert financial insights, investment strategies, and money management tips to build lasting wealth and achieve financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Read Our Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-card p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Investment Strategies</h3>
                    <p className="text-sm text-muted-foreground">Learn proven approaches to grow your wealth.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Money Management</h3>
                    <p className="text-sm text-muted-foreground">Master budgeting and financial planning.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <PieChart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Portfolio Building</h3>
                    <p className="text-sm text-muted-foreground">Build a diversified investment portfolio.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="bg-card border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Featured Articles
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Explore our latest insights on finance, investing, and wealth building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <Card className="h-full bg-background hover:shadow-lg transition-shadow cursor-pointer border border-border">
                    <div className="p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="text-sm text-muted-foreground pt-4 border-t border-border">
                        {article.date}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <Button variant="outline">
                  View All Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Start your journey to financial freedom with our comprehensive guides and expert insights.
            </p>
            <Link href="/blog">
              <Button className="bg-primary-foreground text-primary hover:bg-secondary">
                Start Reading Now
              </Button>
            </Link>
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
