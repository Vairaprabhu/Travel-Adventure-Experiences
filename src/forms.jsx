import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { destinations, categories } from './data'
import { Eyebrow } from './components'

export function TripPlannerForm() {
  const [sent, setSent] = useState(false)
  const [startDate, setStartDate] = useState('')
  function submit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSent(true)
  }
  if (sent) {
    return <div className="form-success" role="status"><span className="success-icon"><Check size={22} /></span><Eyebrow>Enquiry prepared</Eyebrow><h3>Your next chapter starts here.</h3><p>This is a demonstration form. Your details have not been sent or saved, and no booking has been made.</p><button className="button button-outline" type="button" onClick={() => setSent(false)}>Start another enquiry</button></div>
  }
  const today = new Date().toISOString().slice(0, 10)
  return (
    <form className="planner-form" onSubmit={submit}>
      <p className="demo-notice">A note before you begin: this is a demo enquiry form. Nothing is sent or reserved.</p>
      <div className="form-grid">
        <label className="field field-wide">Where are you dreaming of?
          <select name="destination" defaultValue="" required><option value="" disabled>Select a destination</option>{destinations.map((destination) => <option key={destination.slug} value={destination.name}>{destination.name}</option>)}<option value="not-sure">I’m open to ideas</option></select>
        </label>
        <label className="field">Departing
          <input type="date" name="startDate" min={today} value={startDate} onChange={(event) => setStartDate(event.target.value)} required />
        </label>
        <label className="field">Returning
          <input type="date" name="endDate" min={startDate || today} required />
        </label>
        <label className="field">Number of travellers
          <select name="travellers" defaultValue="" required><option value="" disabled>Choose a number</option>{[1, 2, 3, 4, 5, 6].map((number) => <option key={number} value={number}>{number} {number === 1 ? 'traveller' : 'travellers'}</option>)}<option value="7+">7 or more</option></select>
        </label>
        <label className="field">Kind of adventure
          <select name="adventure" defaultValue="" required><option value="" disabled>Choose your pace</option>{categories.slice(1).map((category) => <option key={category}>{category}</option>)}<option>Surprise me</option></select>
        </label>
        <label className="field">Budget per person
          <select name="budget" defaultValue="" required><option value="" disabled>Choose a range</option><option>Under $1,500</option><option>$1,500 — $3,000</option><option>$3,000 — $5,000</option><option>$5,000+</option><option>Let’s talk about it</option></select>
        </label>
        <label className="field field-wide">Email address
          <input type="email" name="email" placeholder="you@somewhere.com" autoComplete="email" required />
        </label>
      </div>
      <button className="button button-green" type="submit">Send a trip enquiry <ArrowRight size={17} /></button>
      <p className="form-privacy">Your details stay in this browser demo; nothing is transmitted.</p>
    </form>
  )
}
