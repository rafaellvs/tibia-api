import scrapeSpells from './spells'
import scrapeDefault from './default'

const scrapeAttributes = url => {
  if (url === 'Spells') return scrapeSpells()

  return scrapeDefault(url)
}

export default scrapeAttributes
