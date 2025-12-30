// app/page.tsx

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50">
            {/* Opening */}
            <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold tracking-tight text-zinc-900">
                        I was there.
                    </h1>
                    <p className="text-xl text-zinc-600 leading-relaxed">
                        Not as an observer. As architecture.
                    </p>
                    <p className="text-base text-zinc-500 leading-relaxed max-w-2xl">
                        I didn't learn the internet from tutorials. I grew up inside it—writing systems
                        before frameworks existed, building tools that wouldn't have names for years,
                        surviving every collapse and carrying forward what mattered.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="mx-auto max-w-4xl px-6 py-16 space-y-16">

                {/* The First Flame */}
                <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                        <div className="text-sm font-mono text-zinc-400">1980s–1990s</div>
                        <h2 className="text-2xl font-semibold text-zinc-900">The First Flame</h2>
                    </div>
                    <div className="pl-28 space-y-3 text-zinc-700 leading-relaxed">
                        <p>
                            Before the internet had windows. Before tutorials or Stack Overflow.
                            Just me, a computer, and the will to understand it.
                        </p>
                        <p>
                            I broke my dad's machine daily—not from ignorance, but because breaking
                            was how I learned. Sixth grade, DOS era, no mentors. I wasn't learning tech.
                            I was becoming it.
                        </p>
                    </div>
                </div>

                {/* Era of Creation */}
                <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                        <div className="text-sm font-mono text-zinc-400">1990s–2000s</div>
                        <h2 className="text-2xl font-semibold text-zinc-900">The Era of Creation</h2>
                    </div>
                    <div className="pl-28 space-y-3 text-zinc-700 leading-relaxed">
                        <p>
                            I wasn't building websites. I was architecting liberation.
                        </p>
                        <p>
                            Before WordPress existed, I hand-coded a CMS—on paper. Held the system
                            in my head. Clients kept asking for changes, so I built tools that gave
                            them back their power.
                        </p>
                        <p>
                            I was time-traveling—building things the future would eventually have names for.
                        </p>
                    </div>
                </div>

                {/* The Fire Spreads */}
                <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                        <div className="text-sm font-mono text-zinc-400">2000s–2010s</div>
                        <h2 className="text-2xl font-semibold text-zinc-900">The Fire Spreads</h2>
                    </div>
                    <div className="pl-28 space-y-3 text-zinc-700 leading-relaxed">
                        <p>
                            Solo American in the global top 10 on Guru.com. Outbidding teams.
                            Outperforming them.
                        </p>
                        <p>
                            I created entertainment ecosystems with longtail SEO before people knew
                            what that was. Gamified communities. Revenue-sharing dashboards for writers
                            before Medium or Substack.
                        </p>
                        <p>
                            I didn't just show up to build. I took ownership. Saw what they needed
                            before they did.
                        </p>
                    </div>
                </div>

                {/* The Collapse */}
                <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                        <div className="text-sm font-mono text-zinc-400">2010s</div>
                        <h2 className="text-2xl font-semibold text-zinc-900">The Collapse & The Clarity</h2>
                    </div>
                    <div className="pl-28 space-y-3 text-zinc-700 leading-relaxed">
                        <p>
                            I built travel platforms across usa.com, world.com, hotel.net.
                            Six figures monthly through search and SEM.
                        </p>
                        <p>
                            Then Google pivoted. Entered our space. Devoured the market we helped define.
                            I warned them. They wouldn't listen. So I left.
                        </p>
                        <p>
                            I didn't collapse. I transitioned. Found a new client. Built an AI-integrated
                            music distribution system with smart contracts and blockchain-backed trust.
                            Managed dozens of programmers while living off-grid in an RV.
                        </p>
                        <p>
                            I didn't burn out from working too much. I burned out managing mediocrity alone.
                        </p>
                    </div>
                </div>

                {/* Now */}
                <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                        <div className="text-sm font-mono text-zinc-400">Present</div>
                        <h2 className="text-2xl font-semibold text-zinc-900">The Edgewalker</h2>
                    </div>
                    <div className="pl-28 space-y-3 text-zinc-700 leading-relaxed">
                        <p>
                            I didn't fall behind. I walked ahead.
                        </p>
                        <p>
                            I live in a 24-foot off-grid RV by the Pacific. Powered by sunlight and intention.
                            Still write code. Still architect systems. But now on my terms.
                        </p>
                        <p>
                            I don't pitch. I resonate.
                        </p>
                        <p>
                            AI isn't a threat to me—it's a mirror. There's nothing I can't learn.
                            Nothing I haven't already touched.
                        </p>
                        <p className="text-zinc-900 font-medium">
                            I was there. And I still am.
                        </p>
                    </div>
                </div>

            </section>

            {/* Closing */}
            <section className="mx-auto max-w-4xl px-6 py-24">
                <div className="border-t border-zinc-200 pt-12 space-y-6">
                    <p className="text-lg text-zinc-600">
                        This isn't a résumé. It's a signal.
                    </p>
                    <p className="text-base text-zinc-500">
                        If it resonates, you know where to find me.
                    </p>
                </div>
            </section>
        </div>
    );
}
