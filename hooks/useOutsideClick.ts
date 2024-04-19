import { useEffect, useRef, useCallback } from 'react'

/**
 * @doc ref로 참조하는 값 이외의 영역을 클릭시 handler 실행
 */

const useOutsideClick = <T extends HTMLElement>(handler: (e: MouseEvent | TouchEvent) => void) => {
  const savedHandler = useRef(handler)
  const ref = useRef<T>(null)

  const memoizedCallback = useCallback(
    (event: MouseEvent | TouchEvent) => {
      event.stopPropagation()
      if (ref.current && !ref.current.contains(event.target as Node)) {
        savedHandler.current(event)
      }
    },
    [ref]
  )

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    document.addEventListener('mousedown', memoizedCallback, true)
    document.addEventListener('touchmove', memoizedCallback, true)
    return () => {
      document.removeEventListener('mousedown', memoizedCallback, true)
      document.removeEventListener('touchmove', memoizedCallback, true)
    }
  }, [ref, handler, memoizedCallback])

  return ref
}

export default useOutsideClick
