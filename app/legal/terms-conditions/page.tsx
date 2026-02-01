import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - FinanceWise',
  description: 'Terms and Conditions for using the FinanceWise website.',
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 2024</p>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using FinanceWise (the "Website"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on FinanceWise for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the Website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Framing or otherwise obscuring any trademark, logo, or other proprietary information of the Website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer of Warranties</h2>
              <p>
                The materials on FinanceWise are provided on an "as is" basis. FinanceWise makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Financial Disclaimer</h2>
              <p>
                <strong>IMPORTANT:</strong> The content provided on FinanceWise is for educational and informational purposes only and should not be construed as professional financial, investment, tax, or legal advice.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>All information is provided as-is without warranty of any kind</li>
                <li>FinanceWise does not provide personalized financial advice</li>
                <li>Past performance does not guarantee future results</li>
                <li>All investments carry risk, including potential loss of principal</li>
                <li>Consult a qualified financial advisor before making investment decisions</li>
              </ul>
              <p className="mt-4">
                FinanceWise is not responsible for any financial decisions you make based on information from this Website. By using our content, you assume all responsibility and risk for your financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitations of Liability</h2>
              <p>
                In no event shall FinanceWise or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FinanceWise, even if FinanceWise or an authorized representative has been notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Accuracy of Materials</h2>
              <p>
                The materials appearing on FinanceWise could include technical, typographical, or photographic errors. FinanceWise does not warrant that any of the materials on its Website are accurate, complete, or current. FinanceWise may make changes to the materials contained on its Website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Materials and Content</h2>
              <p>
                Unless otherwise stated, FinanceWise owns the intellectual property rights for all materials on the Website. All intellectual property rights are reserved. You may access this for personal use subject to restrictions set in these terms and conditions.
              </p>
              <p className="mt-4">
                You must not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Republish materials from FinanceWise without proper attribution</li>
                <li>Sell, rent, or sub-license material from the Website</li>
                <li>Reproduce, duplicate, or copy materials from FinanceWise for commercial purposes</li>
                <li>Redistribute content from FinanceWise unless content is specifically made for redistribution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. User-Generated Content</h2>
              <p>
                By submitting comments, feedback, or any content to FinanceWise, you grant FinanceWise a non-exclusive, royalty-free, perpetual license to use, modify, and distribute such content. You represent and warrant that you own or have necessary permissions for all content you submit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Links to Third-Party Websites</h2>
              <p>
                FinanceWise has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by FinanceWise of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Modifications</h2>
              <p>
                FinanceWise may revise these terms of service for its Website at any time without notice. By using this Website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which FinanceWise operates, and you irrevocably submit to the exclusive jurisdiction of the courts located in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Prohibited Conduct</h2>
              <p>
                When using the Website, you must not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Engage in any conduct that restricts or inhibits anyone's use of the Website</li>
                <li>Post or transmit any abusive, defamatory, obscene, or otherwise objectionable material</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Spam or send unsolicited communications</li>
                <li>Use the Website for illegal purposes or in violation of any applicable laws</li>
                <li>Harass, threaten, or intimidate any users or staff</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless FinanceWise and its owners, operators, officers, agents, and employees from any and all claims, damages, losses, costs, and expenses, including attorney's fees, arising from or related to your use of the Website or violation of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, that provision will be modified to the minimum extent necessary to make it valid, or if this is not possible, it will be severed, and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-card border border-border rounded">
                <p className="font-semibold text-foreground">FinanceWise</p>
                <p>Email: legal@financewise.example.com</p>
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
