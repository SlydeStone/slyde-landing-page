export function Support() {
  return (
    <section id="support" className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our support team is here to help you get the most out of Slyde. We're available 24/7 to assist with any questions or issues.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Email Support */}
          <div className="text-center p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Email Support</h3>
            <p className="text-muted-foreground mb-6">
              Send us a detailed message and we'll get back to you within 2 hours.
            </p>
            <button className="border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors h-12">
              Send Email
            </button>
          </div>

          {/* Help Center */}
          <div className="text-center p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Help Center</h3>
            <p className="text-muted-foreground mb-6">
              Browse our comprehensive knowledge base for answers to common questions.
            </p>
            <button className="border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors h-12">
              Browse Articles
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center p-8 rounded-xl border bg-muted/30">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Other Ways to Reach Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-foreground mb-2">Phone Support</h4>
              <p className="text-muted-foreground">+52 619 777 9514</p>
              <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Business Inquiries</h4>
              <p className="text-muted-foreground">partnerships@slyde.mx</p>
              <p className="text-sm text-muted-foreground">For enterprise solutions</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Press & Media</h4>
              <p className="text-muted-foreground">press@slyde.mx</p>
              <p className="text-sm text-muted-foreground">Media kit available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
