import { useEffect, useRef, useCallback } from 'react'

/**
 * @doc ref로 참조하는 값 이외의 영역을 클릭시 handler 실행
 */
const useOutsideClick = <T extends HTMLElement>(handler: () => void, when = true) => {
  const savedHandler = useRef(handler)
  const ref = useRef<T>(null)

  const memoizedCallback = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        savedHandler.current()
      }
    },
    [ref]
  )

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (when) {
      document.addEventListener('click', memoizedCallback, true)
      document.addEventListener('touchstart', memoizedCallback, true)

      return () => {
        document.removeEventListener('click', memoizedCallback, true)
        document.removeEventListener('touchstart', memoizedCallback, true)
      }
    }
  }, [ref, handler, when, memoizedCallback])
  return ref
}

export default useOutsideClick
