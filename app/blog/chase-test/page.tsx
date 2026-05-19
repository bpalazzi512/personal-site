import Link from 'next/link'
import { AuthProvider } from '@/components/auth/AuthProvider'

export const metadata = {
  title: 'What Ten Days in the Southwest Taught Me About Slowing Down | Bobby Palazzi',
  description: "A road trip through Utah and Arizona, some bad sandwiches, and a few things I'm still thinking about.",
}

export default function BlogPost() {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-white">
        {/* Nav */}
        <nav className="w-full border-b border-gray-100 px-6 py-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              ← Bobby Palazzi
            </Link>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Blog</span>
          </div>
        </nav>

        <article className="max-w-2xl mx-auto px-6 pb-24">
          {/* Header */}
          <header className="pt-14 pb-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
                Personal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-gray-950 mb-6">
              What Ten Days in the Southwest Taught Me About Slowing Down
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gray-950 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                B
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Bobby Palazzi</p>
                <p className="text-xs text-gray-400">May 2, 2026 · 8 min read</p>
              </div>
            </div>
          </header>

          {/* Cover image */}
          <div className="relative w-full mb-12 rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80"
              alt="Open road through the American Southwest at golden hour"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-4">
              <span className="text-[10px] text-white/60">Photo via Unsplash</span>
            </div>
          </div>

          {/* Body */}
          <div className="prose-custom">
            <p className="text-xl leading-relaxed text-gray-700 font-medium mb-8">
              I almost didn&apos;t go.
            </p>

            <p>
              I had a project deadline looming, a Jira board that looked like a crime scene, and approximately zero
              reasons to spend ten days driving through Utah and Arizona with a cooler full of mediocre grocery store
              sandwiches. But my friend Danny called one afternoon, said he had a truck, a week off, and a vague
              itinerary that started with &ldquo;go west,&rdquo; and somehow that was enough.
            </p>

            <p>
              We left on a Tuesday. No particular reason &mdash; Danny had a work thing Monday and I had a dentist
              appointment I&apos;d been rescheduling since October. We loaded up at 5am, split a gas station coffee
              that tasted like burnt ambition, and merged onto I-80 heading toward the sunrise.
            </p>

            <p>
              I want to say the first few days were transformative. They weren&apos;t. They were mostly just long.
              Long stretches of flat highway with nothing but the hum of the engine and a Spotify playlist we both
              silently judged each other for adding songs to. But somewhere around Moab &mdash; driving down a red
              canyon road with the windows down and Neutral Milk Hotel playing too loud &mdash; something in me
              actually started to let go.
            </p>

            <h2>The part nobody talks about</h2>

            <p>
              There&apos;s a version of a road trip that exists in Instagram posts and travel blogs: golden hour
              shots, perfectly packed gear, meaningful gazes toward distant horizons. That&apos;s not what this was.
              This was sunburned shoulders and shoes that smelled like camping and a distinct lack of cell signal at
              exactly the moments you needed it most.
            </p>

            <p>
              But here&apos;s the thing &mdash; the discomfort was sort of the point.
            </p>

            <p>
              I spend most of my waking hours in front of a screen, which sounds like a complaint but is really just
              a fact of my life that I&apos;ve made peace with. I like what I do. But there&apos;s a particular kind
              of mental fatigue that comes with always being reachable, always a notification away from someone
              else&apos;s priority. Out there, in the canyons, that pressure just evaporated. Not because I was
              suddenly enlightened, but because there was literally no signal.
            </p>

            <p>
              We hiked Angels Landing in Zion. If you&apos;ve done it, you know. If you haven&apos;t &mdash;
              it&apos;s a switchback trail that becomes a chain-assisted scramble up a knife-edge ridge with sheer
              drops on both sides. I&apos;m not particularly afraid of heights, but at one point I was hugging a rock
              face thinking about my life choices in a very immediate and concrete way. Danny, who has the
              self-preservation instincts of a golden retriever, was twelve feet ahead of me grinning and taking a
              video.
            </p>

            <p>
              We made it to the top. The view was one of those things that makes you feel small in exactly the right
              way.
            </p>

            <h2>What I actually brought home</h2>

            <p>
              I didn&apos;t come back with any revelations about purpose or destiny. That feels like too grand a
              thing to claim from ten days in a truck. But I did notice some things.
            </p>

            <p>
              I&apos;ve been going to bed earlier. This is boring to report but genuinely meaningful to me.
              There&apos;s something about spending a week waking up with the sun that recalibrated whatever internal
              clock I&apos;d broken with years of late-night debugging sessions.
            </p>

            <p>
              I cook more. We made dinner over a camp stove most nights &mdash; nothing complicated, usually pasta
              or rice with whatever we&apos;d picked up &mdash; and there was something satisfying about it that I
              can&apos;t fully articulate. I think it&apos;s the directness of it. You&apos;re hungry. You cook.
              You eat. There&apos;s no abstraction layer between the problem and the solution.
            </p>

            <p>
              I check my phone less first thing in the morning. This is the hardest one to maintain, and I&apos;m
              not going to pretend I&apos;ve been perfect about it. But I&apos;ve been trying. Ten minutes in the
              morning where I don&apos;t immediately start processing the world has made a surprising difference in
              how I feel by noon.
            </p>

            <h2>On coming back</h2>

            <p>
              The first day back was hard. Not in a dramatic way &mdash; more like the quiet deflation of a good
              weekend ending. I sat at my desk, opened my laptop, and felt the full weight of the backlog I&apos;d
              accumulated. It took about three days to get my footing again.
            </p>

            <p>
              But I kept a photo on my desktop: Danny standing on the edge of a cliff in Bryce Canyon, silhouetted
              against an improbably pink sky, arms stretched out like an idiot. It&apos;s a bad photo technically.
              The exposure is off. He&apos;s too small in the frame. But every time I see it I remember that the
              world is bigger than whatever&apos;s in front of me right now, and that&apos;s been worth more than I
              expected.
            </p>

            <p>
              I&apos;ll probably go again next year. Maybe further west. Maybe south. Doesn&apos;t really matter.
              The point isn&apos;t the destination. I know that sounds like a bumper sticker. But after ten days of
              driving through some of the most beautiful country I&apos;ve ever seen, I think I finally believe it.
            </p>

            {/* Closing note */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-400 italic">
                If you made it this far &mdash; thanks for reading. This is my first attempt at writing something
                longer than a README, so I appreciate the patience. If you have trip recommendations, shoot me a
                message.
              </p>
            </div>
          </div>
        </article>
      </main>

      <style>{`
        .prose-custom p {
          margin-bottom: 1.6rem;
          line-height: 1.85;
          color: #374151;
          font-size: 1.0625rem;
        }
        .prose-custom h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }
      `}</style>
    </AuthProvider>
  )
}
