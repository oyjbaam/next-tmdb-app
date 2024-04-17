export const generatePagination = (curPage: number, totalPages: number[]) => {
  const totalPageLength = totalPages.length

  if (totalPageLength < 6) {
    return [...totalPages]
  }
  if (curPage >= 1 && curPage <= 3) {
    return [1, 2, 3, 4, '...', totalPageLength]
  }
  if (curPage === 4) {
    const sliced = totalPages.slice(0, 5)
    return [...sliced, '...', totalPageLength]
  }
  if (curPage > 4 && curPage < totalPageLength - 2) {
    const sliced1 = totalPages.slice(curPage - 2, curPage)
    const sliced2 = totalPages.slice(curPage, curPage + 1)
    return [1, '...', ...sliced1, ...sliced2, '...', totalPageLength]
  }
  if (curPage > totalPageLength - 3) {
    const sliced = totalPages.slice(totalPageLength - 4)
    return [1, '...', ...sliced]
  }
  return []
}
