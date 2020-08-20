// converts attributes to snake_case and deals with edge cases
export const formatAttribute = string => {
  if (string === 'NPC') return 'npc_price'
  if (string === 'Rune Group') return 'group'
  if (string === 'Level') return 'lvl'

  return string
    ? string.replace(/\n/g, '').replace(/\./g, '').replace(/\s/g, '_').replace(/%/g, '_mod').toLowerCase()
    : 'image'
}
