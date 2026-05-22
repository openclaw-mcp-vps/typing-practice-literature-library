export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-xl tracking-tight">TypeLit</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Typing Practice + Classic Literature
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Type Faster by Reading<br />
          <span className="text-[#58a6ff]">the Greatest Books Ever Written</span>
        </h1>
        <p className="text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Practice typing through Moby Dick, Pride and Prejudice, The Great Gatsby, and hundreds more. Track your WPM, accuracy, and comprehension as you go.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Typing — $19/mo
          </a>
          <a
            href="#features"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Fake terminal preview */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left max-w-3xl mx-auto">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          </div>
          <p className="text-[#8b949e] text-sm mb-2">Chapter 1 — Moby Dick &nbsp;|&nbsp; <span className="text-[#58a6ff]">WPM: 72</span> &nbsp;|&nbsp; <span className="text-green-400">Accuracy: 98.2%</span></p>
          <p className="font-mono text-sm leading-relaxed">
            <span className="text-green-400">Call me Ishmael. Some years ago—never mind how long </span>
            <span className="text-white bg-[#58a6ff] px-0.5">p</span>
            <span className="text-[#8b949e]">recisely—having little or no money in my purse...</span>
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">Everything you need to type better</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "📚", title: "500+ Classic Books", desc: "Full novels from Project Gutenberg — Shakespeare, Dickens, Austen, Twain, and more." },
            { icon: "⚡", title: "Real-Time WPM Tracking", desc: "See your words per minute and accuracy update live as you type each sentence." },
            { icon: "📈", title: "Progress Dashboard", desc: "Track improvement over time with charts, streaks, and personal bests per book." },
            { icon: "🎯", title: "Accuracy Heatmaps", desc: "Identify which keys and letter combinations slow you down the most." },
            { icon: "🏆", title: "Leaderboards", desc: "Compete with other readers on the same chapter or book for top WPM." },
            { icon: "🧠", title: "Comprehension Quizzes", desc: "Short quizzes after each chapter to reinforce what you just typed and read." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-colors">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] text-center mb-12">One plan. Full access. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited access to 500+ books",
              "Real-time WPM & accuracy tracking",
              "Progress dashboard & streaks",
              "Accuracy heatmaps",
              "Leaderboards & achievements",
              "Comprehension quizzes",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-green-400 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Today
          </a>
          <p className="text-[#8b949e] text-xs mt-4">7-day free trial · No credit card required to start</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What books are available to type?",
              a: "We include 500+ public domain classics from Project Gutenberg — including works by Jane Austen, Charles Dickens, Mark Twain, Herman Melville, F. Scott Fitzgerald, and many more. New books are added monthly."
            },
            {
              q: "How is TypeLit different from other typing practice tools?",
              a: "Most typing tools use random words or short sentences. TypeLit uses full, real literature — so you improve your typing while actually reading great books. You also get comprehension quizzes and per-book progress tracking."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel anytime from your account settings. You'll retain access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] px-6 py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} TypeLit. All rights reserved.</p>
      </footer>
    </main>
  )
}
