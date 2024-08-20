export const starColor = (vote: number | undefined) => {
  const colors = ['#ff5a5a', '#ffc75a', '#3ce420']
  if (vote) {
    const rating = Math.round(vote) / 2
    const index = Math.min(Math.floor(rating / 1.67), 2)
    return { color: colors[index], index }
  }
  return { color: colors[0], index: 0 }
}

export const textColorClass: Record<number, string> = {
  0: 'text-red-400',
  1: 'text-yellow-400',
  2: 'text-green-400',
}
