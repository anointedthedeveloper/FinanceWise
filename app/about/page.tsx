import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - FinanceWise',
  description: 'Learn about FinanceWise mission, values, and commitment to helping you achieve financial freedom.',
}

export default function About() {
  const values = [
    {
      title: 'Accuracy',
      description: 'We provide well-researched, accurate financial information backed by credible sources.',
    },
    {
      title: 'Education',
      description: 'Our mission is to educate and empower individuals to make informed financial decisions.',
    },
    {
      title: 'Accessibility',
      description: 'We make complex financial concepts easy to understand for everyone.',
    },
    {
      title: 'Independence',
      description: 'Our content is impartial and not influenced by any specific financial institutions.',
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About FinanceWise
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Your trusted source for financial knowledge and investment guidance.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              At FinanceWise, we believe financial literacy is the foundation of personal and economic well-being. Our mission is to provide clear, comprehensive, and actionable financial education to help individuals of all backgrounds make informed decisions about their money.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              We are committed to breaking down complex financial concepts into understandable guides, offering practical strategies for wealth building, investment management, and long-term financial planning. Whether you're just starting your financial journey or optimizing an existing portfolio, FinanceWise is here to empower you with knowledge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expert-written content covers everything from budgeting fundamentals to advanced investment strategies, always with the goal of helping you achieve financial freedom and security.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <Card key={idx} className="bg-card border border-border p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Expertise</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              FinanceWise is written and maintained by financial experts and educators with years of experience in the industry. Our team includes individuals with backgrounds in:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Personal Finance Management</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Investment Analysis and Portfolio Management</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Retirement Planning and Tax Strategy</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Financial Education and Communication</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span>Behavioral Finance and Financial Psychology</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Important Disclaimer</h2>
          <Card className="bg-muted border border-border p-6">
            <p className="text-muted-foreground leading-relaxed">
              FinanceWise provides educational content for informational purposes only. Our articles and guides are not professional financial, investment, tax, or legal advice. The content on this website should not be considered as a substitute for professional advice from a qualified financial advisor, investment professional, tax advisor, or attorney. 
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Before making any financial decisions, investments, or changes to your portfolio, please consult with a qualified professional who understands your personal financial situation, goals, and risk tolerance. Past performance is not indicative of future results, and all investments carry risk, including potential loss of principal.
            </p>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
