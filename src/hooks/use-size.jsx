import * as React from "react"

/**
 * Returns the current { width, height } of the element referenced by the given ref.
 * Uses ResizeObserver for paint-time accuracy.
 */
export function useSize(ref) {
  const [size, setSize] = React.useState(null)

  React.useEffect(() => {
    const el = ref?.current
    if (!el) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })

    observer.observe(el)
    // Set initial size synchronously
    const rect = el.getBoundingClientRect()
    setSize({ width: rect.width, height: rect.height })

    return () => observer.disconnect()
  }, [ref])

  return size
}
