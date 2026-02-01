import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - FinanceWise',
  description: 'Our privacy policy explaining how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 2024</p>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                FinanceWise ("we," "us," "our," or "Company") operates the website at financewise.example.com (the "Website"). This Privacy Policy explains our practices regarding the collection, use, disclosure, and safeguarding of your personal information.
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. By accessing and using FinanceWise, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Information You Provide Directly</h3>
              <p>
                When you visit our Website, we may collect information that you provide directly, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Comments and feedback on articles</li>
                <li>Information submitted through contact forms</li>
                <li>Your preferences and interests in financial topics</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p>
                When you access our Website, we automatically collect certain information about your device and browsing activity, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website URL</li>
                <li>Device identifiers</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookies and Tracking Technologies</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Cookies</h3>
              <p>
                We use cookies on our Website to enhance user experience, track usage patterns, and deliver personalized content. Cookies are small data files stored on your device that allow us to recognize your browser on subsequent visits.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.2 Google AdSense and DART Cookies</h3>
              <p>
                FinanceWise uses Google AdSense to display advertisements on our Website. Google, as a third-party vendor, uses cookies (specifically DART cookies) to serve ads based on your previous visits to FinanceWise and other websites on the internet.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>DART Cookie Purpose:</strong> Google uses the DART cookie to deliver targeted advertisements based on your interests and browsing history.</li>
                <li><strong>Data Collection:</strong> Google may collect non-personally identifiable information about you through the DART cookie, including demographic data, general location data, and browsing patterns.</li>
                <li><strong>Opt-Out:</strong> You can opt out of DART cookie tracking by visiting Google's Ad Settings page at https://www.google.com/settings/ads or Google's Privacy Policy at https://policies.google.com/privacy.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.3 Other Tracking Technologies</h3>
              <p>
                We may also use web beacons, pixels, and similar tracking technologies to measure the effectiveness of our Website and advertising campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Your Information</h2>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>To deliver and improve our Website content</li>
                <li>To respond to your inquiries and customer service requests</li>
                <li>To personalize your experience and deliver relevant content</li>
                <li>To analyze Website usage and trends</li>
                <li>To display targeted advertising through Google AdSense</li>
                <li>To prevent fraud and enhance Website security</li>
                <li>To comply with legal obligations</li>
                <li>For marketing and promotional purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Service Providers</h2>
              <p>
                FinanceWise may share your information with third-party service providers who assist us in operating our Website, conducting our business, or serving you. These providers include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Google AdSense:</strong> For serving targeted advertisements and analytics</li>
                <li><strong>Analytics Providers:</strong> To understand user behavior and Website performance</li>
                <li><strong>Email Service Providers:</strong> For communications and newsletters</li>
              </ul>
              <p className="mt-4">
                These service providers are contractually obligated to use your information only as necessary to provide services to FinanceWise and are required to maintain the confidentiality and security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Right to Access:</strong> You can request access to your personal data</li>
                <li><strong>Right to Correction:</strong> You can request correction of inaccurate data</li>
                <li><strong>Right to Deletion:</strong> You can request deletion of your data</li>
                <li><strong>Right to Opt-Out:</strong> You can opt out of marketing communications</li>
                <li><strong>Cookie Management:</strong> You can control cookie preferences through your browser settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Security</h2>
              <p>
                FinanceWise implements reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is completely secure. While we use industry-standard security protocols, we cannot guarantee absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
              <p>
                FinanceWise does not knowingly collect personal information from children under the age of 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child's access to our Website. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Links to Third-Party Websites</h2>
              <p>
                FinanceWise may contain links to third-party websites that are not operated by us. This Privacy Policy applies only to our Website, and we are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any linked websites before providing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                FinanceWise may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated Privacy Policy on our Website and updating the "Last Updated" date. Your continued use of the Website following notification of changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-card border border-border rounded">
                <p className="font-semibold text-foreground">FinanceWise</p>
                <p>Email: privacy@financewise.example.com</p>
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
