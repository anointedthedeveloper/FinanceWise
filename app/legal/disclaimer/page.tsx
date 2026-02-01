import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - FinanceWise',
  description: 'Important disclaimer about financial content and information on FinanceWise.',
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Disclaimer</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 2024</p>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">
            <section className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h2 className="text-2xl font-bold text-red-900 mb-4">IMPORTANT LEGAL NOTICE</h2>
              <p className="text-red-800">
                The information provided on FinanceWise is for educational and informational purposes only. It is not professional financial, investment, tax, or legal advice. Do not rely solely on this website for investment decisions. Always consult with a qualified financial advisor, investment professional, or tax advisor before making any financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. No Professional Advice</h2>
              <p>
                FinanceWise does not provide professional financial, investment, tax, or legal advice. The content on this website is general in nature and should not be considered as a substitute for professional advice from a qualified financial advisor, investment professional, tax advisor, or attorney. Any reliance on the content of this website is at your own risk and responsibility.
              </p>
              <p className="mt-4">
                Seeking professional advice is especially important if you are considering making significant financial decisions, such as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Opening investment accounts or making major investments</li>
                <li>Purchasing real estate or other significant assets</li>
                <li>Planning for retirement or major life events</li>
                <li>Debt management or refinancing decisions</li>
                <li>Tax planning and optimization strategies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. No Personalized Advice</h2>
              <p>
                FinanceWise does not provide personalized financial advice tailored to your specific situation, goals, risk tolerance, or financial condition. The general information provided may not be appropriate for your particular circumstances. A qualified financial advisor can assess your individual situation and provide personalized recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Past Performance</h2>
              <p>
                Historical performance data, past returns, and historical market trends discussed on FinanceWise are not indicative of or guarantee future results. Market conditions change, and past performance does not ensure future success. All investments carry risk, including the potential loss of principal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Investment Risk</h2>
              <p>
                All investments carry risk. Depending on the type of investment, risks may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Market Risk:</strong> Investment values fluctuate with market conditions</li>
                <li><strong>Principal Risk:</strong> You may lose some or all of your invested capital</li>
                <li><strong>Volatility Risk:</strong> Prices may change rapidly and unpredictably</li>
                <li><strong>Liquidity Risk:</strong> You may not be able to sell investments when desired</li>
                <li><strong>Interest Rate Risk:</strong> Changes in interest rates affect bond and fixed-income investments</li>
                <li><strong>Inflation Risk:</strong> Inflation may erode the purchasing power of returns</li>
                <li><strong>Concentration Risk:</strong> Investing heavily in one asset or sector increases risk</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Information</h2>
              <p>
                While we strive to provide accurate and current information, FinanceWise does not warrant that all information is accurate, complete, or current. Market data, financial information, and statistics may become outdated. We encourage you to verify important information from multiple reliable sources and consult with professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <p>
                FinanceWise and its owners, operators, officers, agents, and employees shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Your use of or inability to use the Website</li>
                <li>Reliance on information provided on FinanceWise</li>
                <li>Financial losses or investment losses resulting from decisions based on Website content</li>
                <li>Errors, omissions, or inaccuracies in the content</li>
                <li>Interruptions or delays in Website access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Third-Party Content and Links</h2>
              <p>
                FinanceWise may contain references to third-party websites, resources, and content. We do not endorse, control, or guarantee the accuracy of third-party information. We are not responsible for the content, accuracy, or practices of external websites or resources linked from FinanceWise. Use of third-party websites is at your own risk and discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. No Guarantee of Results</h2>
              <p>
                FinanceWise does not guarantee or promise any specific financial results from implementing strategies or recommendations discussed on the Website. Investment outcomes depend on many factors including market conditions, economic factors, individual circumstances, and execution. Results will vary from person to person and may differ from expectations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Conflict of Interest</h2>
              <p>
                FinanceWise may receive compensation from affiliate links, sponsorships, or advertising. While we strive to maintain editorial integrity, readers should be aware that some links or recommendations may result in compensation to FinanceWise. This potential conflict does not change our commitment to providing accurate information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Tax and Legal Considerations</h2>
              <p>
                Tax laws are complex and subject to change. The tax implications of any financial decision may vary based on your individual circumstances. Similarly, legal considerations may apply to various financial strategies. Always consult with a qualified tax advisor or attorney regarding the tax and legal implications of your financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. When to Seek Professional Help</h2>
              <p>
                You should consider consulting with qualified professionals in the following situations:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>You are unsure about your financial goals or investment strategy</li>
                <li>You have significant assets or complex financial situations</li>
                <li>You are planning for major life events or transitions</li>
                <li>You want to optimize your tax situation</li>
                <li>You need help with estate planning or legal matters</li>
                <li>You have recently inherited money or received a significant sum</li>
                <li>You are starting a business or considering self-employment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Acknowledgment</h2>
              <p>
                By using FinanceWise, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>You have read and understood this disclaimer</li>
                <li>You understand the limitations and risks of the information provided</li>
                <li>You will not hold FinanceWise responsible for financial losses or outcomes</li>
                <li>You will consult with qualified professionals before making financial decisions</li>
                <li>You assume all responsibility for your financial decisions and their consequences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
              <p>
                If you have questions about this disclaimer or our practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-card border border-border rounded">
                <p className="font-semibold text-foreground">FinanceWise</p>
                <p>Email: disclaimer@financewise.example.com</p>
                <p>Phone: +1 (800) 555-1234</p>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
