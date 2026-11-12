import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass } from 'lucide-react'
import { articles, categories, destinations, experiences } from './data'
import { Eyebrow, Image, Metadata, Newsletter, Reveal, ScrollCue, SectionHeading, TextLink } from './components'
import { TripPlannerForm } from './forms'

function PageIntro({ eyebrow, title, copy, className = '' }) {
  return <section className={`page-intro wrap ${className}`}><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{copy && <p>{copy}</p>}</section>
}

function ExperienceCard({ item, index = 0 }) {
  return (
    <Reveal className={`experience-card experience-card-${index % 3}`}>
      <Link to={`/experiences/${item.slug}`} className="image-link"><Image src={item.image} alt={item.alt} className="experience-image" /><span className="image-arrow"><ArrowUpRight size={20} /></span></Link>
      <div className="experience-card-meta"><span>{item.category}</span><span>{item.duration}</span></div>
      <h3><Link to={`/experiences/${item.slug}`}>{item.name}</Link></h3>
      <p className="experience-place">{item.place}</p>
      <div className="experience-card-bottom"><span>From <strong>{item.price}</strong> <small>/ person</small></span><TextLink to={`/experiences/${item.slug}`}>The details</TextLink></div>
    </Reveal>
  )
}

function JournalCard({ article, index = 0 }) {
  return <Reveal className={`journal-card journal-card-${index}`}>
    <Link to={`/journal/${article.slug}`} className="image-link"><Image src={article.image} alt={article.alt} className="journal-image" /><span className="image-arrow"><ArrowUpRight size={20} /></span></Link>
    <div className="journal-meta"><span>{article.category}</span><span>{article.date} · {article.read}</span></div>
    <h3><Link to={`/journal/${article.slug}`}>{article.title}</Link></h3>
    <p>{article.excerpt}</p>
    <TextLink to={`/journal/${article.slug}`}>Read the story</TextLink>
  </Reveal>
}

function DestinationStory({ destination, className = '' }) {
  return (
    <article className={`destination-story ${className}`}>
      <Link to={`/destinations/${destination.slug}`} className="destination-photo image-link">
        <Image src={destination.image} alt={destination.imageAlt} />
        <span className="destination-index">{destination.number} / 04</span>
        <span className="image-arrow"><ArrowUpRight size={20} /></span>
      </Link>
      <div className="destination-story-copy"><Eyebrow>{destination.region}</Eyebrow><h3><Link to={`/destinations/${destination.slug}`}>{destination.name}</Link></h3><p>{destination.description}</p><TextLink to={`/destinations/${destination.slug}`}>Find your way</TextLink></div>
    </article>
  )
}

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Mountains')
  const selectedJourney = experiences.find((item) => item.category === selectedCategory) || experiences[0]
  return <>
    <Metadata title="The world is still wild" description="Find places that make you feel something. Independent travel stories and thoughtful adventures from NOMAD." />
    <section className="home-hero">
      <Image src="photo-1470770841072-f978cf4d019e" alt="A vast alpine lake framed by mountains at dusk" className="hero-photo" loading="eager" width={2200} />
      <div className="hero-shade" />
      <svg className="hero-contour" viewBox="0 0 680 550" fill="none" aria-hidden="true">
        <path d="M88 0C128 76 8 105 85 168s189 33 170 114-92 85-24 143 163 32 228 125" />
        <path d="M42 0C82 76-38 105 39 168s189 33 170 114-92 85-24 143 163 32 228 125" />
        <circle cx="459" cy="451" r="7" />
      </svg>
      <div className="hero-coordinate"><span>FIELD NOTES / 001</span><strong>47° 16′ N<br />11° 23′ E</strong><small>Somewhere in the Alps</small></div>
      <div className="hero-content"><span className="hero-kicker"><i /> Independent travel journal <b>·</b> Est. 2018</span><h1>THE WORLD<br />IS STILL<br /><em>WILD.</em></h1><div className="hero-bottom"><p>Find places that make you<br />feel something.</p><Link className="hero-cta" to="/destinations">Start wandering <ArrowRight size={17} /></Link></div></div>
      <div className="hero-index"><span>01</span><i /><span>04</span></div>
      <ScrollCue />
      <span className="hero-caption">A little further from the familiar.</span>
    </section>

    <section className="manifesto-band" id="stories">
      <div className="manifesto-index"><span>THE NOMAD WAY</span><span>EST. 2018 — ALWAYS WANDERING</span></div>
      <div className="manifesto-copy"><Eyebrow>For the beautifully curious</Eyebrow><h2>Take the road<br />that <em>changes you.</em></h2><p>Less itinerary. More instinct. We make room for the kind of travel that pulls you into the moment — and sends you home a little different.</p><TextLink to="/discover">Find your kind of elsewhere</TextLink></div>
      <div className="manifesto-aside"><span className="manifesto-symbol">N<span>×</span></span><span>GO FAR.<br />FEEL MORE.</span><span>FIELD PRINCIPLE 01</span></div>
    </section>

    <section className="atlas-section wrap">
      <div className="atlas-heading"><div><Eyebrow>Coordinates for your next story</Eyebrow><h2>Pick a point.<br /><em>Find your own way.</em></h2></div><TextLink to="/destinations">Open the atlas</TextLink></div>
      <div className="atlas-rail"><span>THE NOMAD ATLAS</span><span>04 PLACES / INFINITE WAYS THROUGH</span></div>
      <div className="destination-composition">
        {destinations.map((destination, index) => <DestinationStory key={destination.slug} destination={destination} className={`atlas-story atlas-story-${index}`} />)}
      </div>
    </section>

    <section className="finder-section">
      <div className="finder-top"><div><Eyebrow light>Choose your compass point</Eyebrow><h2>What pulls<br />you <em>out there?</em></h2></div><p>Don’t overthink it.<br />Go with the feeling.</p></div>
      <div className="finder-controls" role="group" aria-label="Choose an adventure type">{categories.slice(1).map((category, index) => <button key={category} className={`finder-tab${selectedCategory === category ? ' finder-tab-active' : ''}`} onClick={() => setSelectedCategory(category)} type="button" aria-pressed={selectedCategory === category}><span>0{index + 1}</span>{category}<ArrowUpRight size={15} /></button>)}</div>
      <div className="finder-result" aria-live="polite">
        <Link className="finder-image image-link" to={`/experiences/${selectedJourney.slug}`}><Image src={selectedJourney.image} alt={selectedJourney.alt} /><span className="finder-image-label">A JOURNEY TO GET LOST IN</span><span className="image-arrow"><ArrowUpRight size={20} /></span></Link>
        <div className="finder-story"><span className="finder-story-index">YOUR NEXT FIELD NOTE <b>№ 0{experiences.indexOf(selectedJourney) + 1}</b></span><Eyebrow light>{selectedJourney.category} / {selectedJourney.place}</Eyebrow><h3>{selectedJourney.name}</h3><p>{selectedJourney.note}. A little more time outside the lines, a little less time watching the clock.</p><div className="finder-story-meta"><span>{selectedJourney.duration}</span><span>From {selectedJourney.price} / person</span></div><Link className="finder-link" to={`/experiences/${selectedJourney.slug}`}>Follow this trail <ArrowRight size={17} /></Link></div>
      </div>
      <Link to="/discover" className="finder-all">See all journeys <span>↗</span></Link>
    </section>

    <section className="feature-section">
      <div className="feature-image-wrap"><Image src="photo-1464822759023-fed622ff2c3b" alt="The vast Patagonian mountain wilderness" className="feature-image" /><div className="feature-photo-stamp"><span>FIELD NO.</span><strong>014</strong><span>CHILE / 50° S</span></div></div>
      <div className="feature-copy"><Eyebrow>Featured expedition / Patagonia</Eyebrow><h2>Eight days<br />off the <em>edge.</em></h2><p>Under the granite giants, the trail doesn’t care about your inbox. Walk the wild spine of Patagonia, one weather-shaped day at a time.</p>
        <div className="feature-facts"><div><span>Duration</span><strong>8 days</strong></div><div><span>Difficulty</span><strong>Moderate +</strong></div><div><span>Best season</span><strong>Nov — Mar</strong></div><div><span>From</span><strong>$2,480 <small>/ person</small></strong></div></div>
        <Link className="button button-green" to="/experiences/patagonia-on-foot">Trace the itinerary <ArrowRight size={17} /></Link>
        <span className="demo-caption">Sample itinerary & pricing for illustration only</span>
      </div>
      <span className="feature-index">FIELD NO. 014 — SOUTHERN PATAGONIA</span>
    </section>

    <section className="journal-section wrap"><div className="journal-header"><SectionHeading eyebrow="Dispatches from the field" title={<>Stories from<br /><em>the in-between.</em></>} copy="Notes from the road, lessons from the trail, and small reasons to go." /><TextLink to="/journal">Open the journal</TextLink></div><div className="journal-grid">{articles.map((article, index) => <JournalCard key={article.slug} article={article} index={index} />)}</div></section>

    <section className="home-planner"><div className="home-planner-copy"><Eyebrow light>Make room for elsewhere</Eyebrow><h2>Take your<br />own <em>way out.</em></h2><p>Tell us what you’re drawn to. We’ll help you find a thoughtful way there.</p><Link to="/plan" className="button button-paper">Build your trip <ArrowRight size={17} /></Link></div><Image src="photo-1510798831971-661eb04b3739" alt="A secluded cabin in a forest at dusk" /></section>
    <Newsletter />
  </>
}

export function DiscoverPage() {
  const search = new URLSearchParams(window.location.search)
  const initial = categories.includes(search.get('kind')) ? search.get('kind') : 'All journeys'
  const [active, setActive] = useState(initial)
  const filtered = active === 'All journeys' ? experiences : experiences.filter((item) => item.category.toLowerCase() === active.toLowerCase())
  return <>
    <Metadata title="Discover" description="Find the adventure that feels like you, from wild mountain trails to slow cultural journeys." />
    <PageIntro eyebrow="The world, your way" title={<>Find the feeling<br />you’re <em>after.</em></>} copy="Not sure where to start? Follow your curiosity. The rest has a way of taking care of itself." />
    <section className="discover-content wrap">
      <div className="filter-toolbar" role="group" aria-label="Filter experiences by adventure type">{categories.map((category) => <button key={category} type="button" className={`filter-chip${active === category ? ' filter-active' : ''}`} onClick={() => setActive(category)} aria-pressed={active === category}>{category}</button>)}</div>
      <p className="results-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'journey' : 'journeys'} to wander into</p>
      {filtered.length ? <div className="experience-grid">{filtered.map((item, index) => <ExperienceCard key={item.slug} item={item} index={index} />)}</div> : <div className="empty-state"><Compass size={28} /><h2>No journeys here just yet.</h2><p>Try another kind of adventure. There’s always another way through.</p><button className="button button-outline" onClick={() => setActive('All journeys')}>See every journey</button></div>}
    </section>
    <Newsletter />
  </>
}

export function DestinationsPage() {
  return <>
    <Metadata title="Destinations" description="Explore thoughtful travel stories from Iceland, Bali, Patagonia, Japan, and beyond." />
    <PageIntro eyebrow="A map with room to wander" title={<>Places that<br />stay <em>with you.</em></>} copy="We go for the landscapes, of course. We come back for everything we didn’t expect." />
    <section className="all-destinations wrap"><div className="destination-listing">{destinations.map((destination, index) => <DestinationStory key={destination.slug} destination={destination} className={`listing-story listing-story-${index}`} />)}</div></section>
    <Newsletter />
  </>
}

export function DestinationPage() {
  const { slug } = useParams()
  const destination = destinations.find((item) => item.slug === slug)
  if (!destination) return <NotFoundPage />
  const related = experiences.filter((item) => item.place.toLowerCase().includes(destination.name.toLowerCase()) || (destination.slug === 'patagonia' && item.slug === 'patagonia-on-foot') || (destination.slug === 'japan' && item.place.includes('Japan')) || (destination.slug === 'iceland' && item.place.includes('Iceland')) || (destination.slug === 'bali' && item.place.includes('Indonesia')))
  return <>
    <Metadata title={destination.name} description={destination.description} />
    <section className="detail-hero"><Image src={destination.image} alt={destination.imageAlt} loading="eager" width={2000} /><div className="detail-hero-shade" /><div className="detail-hero-content"><Link className="back-link back-link-light" to="/destinations"><ArrowLeft size={15} /> All destinations</Link><Eyebrow light>{destination.region}</Eyebrow><h1>{destination.name}</h1><p>{destination.eyebrow}</p></div><span className="detail-hero-caption">{destination.number} / A NOMAD FIELD GUIDE</span></section>
    <section className="destination-detail-intro wrap"><div><Eyebrow>{destination.mood}</Eyebrow><h2>Some places<br />change your <em>pace.</em></h2></div><div><p>{destination.description}</p><p>Come for the wide-open spaces. Stay for the conversations, the little rituals, and the feeling that you’ve found your own way into the story.</p><div className="destination-season"><span>When to wander</span><strong>{destination.season}</strong></div></div></section>
    <section className="destination-related wrap"><SectionHeading eyebrow="Take the long way" title="Journeys from here" /><div className="experience-grid">{(related.length ? related : experiences.slice(0, 3)).map((item, index) => <ExperienceCard key={item.slug} item={item} index={index} />)}</div></section><Newsletter />
  </>
}

export function ExperiencesPage() {
  return <>
    <Metadata title="Experiences" description="Small-group journeys made for curiosity, connection, and taking the long way around." />
    <PageIntro eyebrow="The way into a place" title={<>Journeys, not<br /><em>checklists.</em></>} copy="Small-group, thoughtfully paced adventures for people who want to feel a place, not just see it." />
    <section className="wrap experiences-page"><div className="experience-page-note"><Eyebrow>A note on our sample itineraries</Eyebrow><p>These are demonstration journeys with indicative details and pricing. No booking or availability is offered on this site.</p></div><div className="experience-grid">{experiences.map((item, index) => <ExperienceCard key={item.slug} item={item} index={index} />)}</div></section><Newsletter />
  </>
}

export function ExperiencePage() {
  const { slug } = useParams()
  const item = experiences.find((experience) => experience.slug === slug)
  if (!item) return <NotFoundPage />
  return <>
    <Metadata title={item.name} description={`${item.name}: a ${item.duration} sample ${item.category.toLowerCase()} itinerary in ${item.place}.`} />
    <section className="detail-hero experience-detail-hero"><Image src={item.image} alt={item.alt} loading="eager" width={2000} /><div className="detail-hero-shade" /><div className="detail-hero-content"><Link className="back-link back-link-light" to="/experiences"><ArrowLeft size={15} /> All experiences</Link><Eyebrow light>{item.category} / {item.place}</Eyebrow><h1>{item.name}</h1><p>{item.note}</p></div><span className="detail-hero-caption">DEMONSTRATION ITINERARY · NOT AVAILABLE TO BOOK</span></section>
    <section className="experience-detail-body wrap"><div className="experience-detail-copy"><Eyebrow>A little more wild</Eyebrow><h2>Take the long way.<br /><em>See what happens.</em></h2><p>This sample journey is for inspiration: a few days to leave the familiar behind, meet the place on its own terms, and come home with a story that’s yours.</p><p>Every NOMAD itinerary is imagined with local knowledge and a lighter footprint in mind. This example does not represent a real trip or confirmed availability.</p><Link className="button button-green" to="/plan">Ask about a journey like this <ArrowRight size={17} /></Link></div><aside className="experience-facts"><Eyebrow>At a glance</Eyebrow><div><span>Where</span><strong>{item.place}</strong></div><div><span>How long</span><strong>{item.duration}</strong></div><div><span>Kind of journey</span><strong>{item.category}</strong></div><div><span>Example price</span><strong>{item.price} <small>/ person</small></strong></div><p>Sample itinerary and pricing only. No booking is made through this demonstration site.</p></aside></section><Newsletter />
  </>
}

export function JournalPage() {
  return <>
    <Metadata title="Travel Journal" description="Field notes, travel stories, and thoughtful inspiration from the NOMAD journal." />
    <PageIntro eyebrow="A journal for the journey" title={<>Stories from<br /><em>out there.</em></>} copy="Dispatches from the road, small lessons from the wild, and a few things we wanted to remember." />
    <section className="journal-page wrap"><div className="journal-feature"><Link to={`/journal/${articles[0].slug}`} className="image-link"><Image src={articles[0].image} alt={articles[0].alt} width={1700} /><span className="image-arrow"><ArrowUpRight size={20} /></span></Link><div><Eyebrow>{articles[0].category} · {articles[0].date}</Eyebrow><h2><Link to={`/journal/${articles[0].slug}`}>{articles[0].title}</Link></h2><p>{articles[0].excerpt}</p><TextLink to={`/journal/${articles[0].slug}`}>Read the story</TextLink></div></div><div className="journal-grid">{articles.slice(1).map((article, index) => <JournalCard key={article.slug} article={article} index={index} />)}</div></section><Newsletter />
  </>
}

export function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)
  if (!article) return <NotFoundPage />
  return <>
    <Metadata title={article.title} description={article.excerpt} />
    <article className="article-page">
      <header className="article-header wrap"><Link className="back-link" to="/journal"><ArrowLeft size={15} /> Travel Journal</Link><Eyebrow>{article.category} · {article.date} · {article.read}</Eyebrow><h1>{article.title}</h1><p>{article.excerpt}</p></header>
      <div className="article-hero"><Image src={article.image} alt={article.alt} width={2000} loading="eager" /><span>NOTES FROM SOMEWHERE ELSE · NOMAD JOURNAL</span></div>
      <div className="article-body"><p className="article-lede">There is a particular kind of quiet that arrives when you give a place enough time to introduce itself.</p><p>It starts with the small things. The sound of a door opening before the street has woken up. The way the light finds the hillside just after breakfast. A conversation that takes longer than you expected because nobody is in a hurry to finish it.</p><blockquote>“The best journeys leave a little room for what you couldn’t have planned.”</blockquote><p>We set out thinking we would collect landmarks. Instead, we brought home details: the turn we almost didn’t take, a table shared with strangers, the weather changing its mind over the mountains. Those are the moments that keep unfolding long after the journey is over.</p><p>So wherever you find yourself next, leave a little space around the plan. There’s a good chance the best part is waiting there.</p><div className="article-signoff">Words from the road <span>— NOMAD FIELD NOTES</span></div></div>
      <div className="article-next wrap"><Eyebrow>Keep wandering</Eyebrow><TextLink to="/journal">Back to the journal</TextLink></div>
    </article><Newsletter />
  </>
}

export function PlanPage() {
  return <>
    <Metadata title="Plan Your Trip" description="Tell us what kind of journey you’re dreaming about. Demo enquiry form; no booking is made." />
    <section className="plan-page"><div className="plan-intro"><Link className="back-link" to="/discover"><ArrowLeft size={15} /> Keep exploring</Link><Eyebrow>A journey starts with a question</Eyebrow><h1>Where are you<br />hoping to <em>go?</em></h1><p>Tell us a little about the trip you’re dreaming of. This demo form helps you imagine it — it won’t send a message or make a reservation.</p><div className="plan-note"><span>01</span><p>Good trips start with curiosity, not a perfect plan.</p></div></div><div className="plan-form-panel"><Eyebrow>Your trip, your way</Eyebrow><h2>Let’s find your elsewhere.</h2><TripPlannerForm /></div></section>
  </>
}

export function NotFoundPage() {
  return <section className="not-found"><Eyebrow>Wrong turn, good view</Eyebrow><h1>We can’t find<br />that <em>place.</em></h1><p>The page you’re looking for has wandered off. Let’s find another way.</p><Link className="button button-green" to="/discover">Back to discovering <ArrowRight size={17} /></Link></section>
}
