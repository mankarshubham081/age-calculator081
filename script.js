const handleClick = () => {
  const bday = parseInt(document.getElementById('day').value)
  const bmon = document.getElementById('month').value
  const byear = parseInt(document.getElementById('year').value) 
  const uiname = document.getElementById('user').value
  const date = new Date(Date.now())
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const mons = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',
    'jan', 'feb', 'marc', 'apri', 'may', 'june', 'july', 'augu', 'sept', 'octo', 'novemb', 'decemb'
  ]
  const bmonth = parseInt(bmon) < 13 ? parseInt(bmon) - 1 : mons.indexOf(bmon) > - 1 ? mons.parseInt(bmon) % 12 : 'not found'

  const d = new Date(byear, bmonth, bday)
  const diff= new Date(Date.now() - d.getTime())
  const days = (diff.getDate() - 1)
  const months = (diff.getMonth() + 1)
  const years = (diff.getFullYear() - 1970)

  document.getElementById('result').innerHTML =

    days > 0 && months > 0 && years > 0 && 32 > days 
      
    ?

    ' Hey '+ uiname +', your age is : <br>' + (days -1) + (days === 1 ? ' day, ' : ' days, ')
    + (months-1) + (months === 1 ? ' month, ' : ' months, ')
    + years + ' years.'

    :

    'invalid date'
}

document.getElementById('submit').addEventListener('click', handleClick)

