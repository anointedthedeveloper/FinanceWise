import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal - FinanceWise',
  description: 'Legal documents including Privacy Policy, Terms and Conditions, and Disclaimer.',
}

export default function Legal() {
  const legalDocs = [
    {
      title: 'Privacy Policy',
      description: 'Learn how we collect, use, and protect your personal information. Includes details about Google AdSense, DART cookies, and your privacy rights.',
      href: '/legal/privacy-policy',
    },
    {
      title: 'Terms and Conditions',
      description: 'Our terms of use for the FinanceWise website, including disclaimers and limitations of liability.',
      href: '/legal/terms-conditions',
    },
    {
      title: 'Disclaimer',
      description: 'Important financial and legal disclaimers regarding the content and advice provided on FinanceWise.',
      href: '/legal/disclaimer',
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Legal Information
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-12">
            Our legal documents and important information about using FinanceWise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalDocs.map((doc, idx) => (
              <Link key={idx} href={doc.href}>
                <Card className="h-full bg-card border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {doc.description}
                  </p>
                  <div className="text-primary font-semibold flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-6 bg-muted border border-border rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">Important Notice</h2>
            <p className="text-muted-foreground mb-4">
              All content on FinanceWise is provided for educational and informational purposes only. We do not provide professional financial, investment, tax, or legal advice. Before making any financial decisions, please consult with a qualified financial advisor who understands your personal financial situation, goals, and risk tolerance.
            </p>
            <p className="text-muted-foreground">
              Past performance is not indicative of future results. All investments carry risk, including potential loss of principal. By using FinanceWise, you acknowledge that you have read and understood these disclaimers and assume all responsibility for your financial decisions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
