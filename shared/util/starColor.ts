export const starColor = (vote: number) => {
  const rating = Math.round(vote) / 2
  const colors = ['#ff5a5a', '#ffc75a', '#3ce420']
  const index = Math.min(Math.floor(rating / 1.67), 2)
  return { color: colors[index], index }
}

export const textColorClass: Record<number, string> = {
  0: 'text-red-400',
  1: 'text-yellow-400',
  2: 'text-green-400',
}
