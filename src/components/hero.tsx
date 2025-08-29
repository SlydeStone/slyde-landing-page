import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center scroll-mt-16">
      {/* Unicorn Studio Interactive Background Element */}
      <div 
        className="absolute inset-0 z-0"
        aria-label="Unicorn Studio Interactive Background Element"
      >
        {/* This div will contain the interactive background element */}
        {/* Placeholder for now - will be replaced with actual Unicorn Studio element */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
          {/* Left Column - Text and Buttons */}
          <div className="text-center lg:text-left lg:col-span-7">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Forget your CLABE,<br />
              Just Slyde.
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12">
              Sending money is now as easy as sending a text.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-full font-medium transition-colors">
                Download for iPhone
              </button>
              <button className="border-2 border-border bg-background text-foreground hover:bg-accent text-lg px-8 py-6 h-auto rounded-full font-medium transition-colors">
                Download for Android
              </button>
            </div>
          </div>

          {/* Right Column - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end lg:col-span-3">
            <div className="relative">
              <Image 
                src="/iphone.png" 
                alt="iPhone Mockup" 
                width={765} 
                height={918} 
                className="w-[765px] h-[918px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
