import React, { CSSProperties, ReactNode, useEffect, useRef } from 'react'
import './glow.css'

export const GlowCapture = ({ className = '', size = 400, ...rest }) => {
    const element = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const move = (e: PointerEvent) => {
            if (e.pointerType === 'mouse') {
                requestAnimationFrame(() => {
                    // @ts-ignore
                    element.current?.style.setProperty('--glow-x', `${e.layerX}px`)
                    // @ts-ignore
                    element.current?.style.setProperty('--glow-y', `${e.layerY}px`)
                })
            }
        }

        const leave = () => {
            element.current?.style.removeProperty('--glow-x')
            element.current?.style.removeProperty('--glow-y')
        }

        element.current?.addEventListener('pointermove', move, { passive: true })
        element.current?.addEventListener('pointerleave', leave, { passive: true })
        return () => {
            element.current?.removeEventListener('pointermove', move)
            element.current?.removeEventListener('pointerleave', leave)
        }
    }, [])

    return <div ref={element}
        className={`glow-capture ${className}`}
        style={{ '--glow-size': `${size}px` } as CSSProperties}
        {...rest} />
}


const mask = `
radial-gradient(var(--glow-size) var(--glow-size) at calc(var(--glow-x, -999px) - var(--glow-left, 0px))
calc(var(--glow-y, -999px) - var(--glow-top, 0px)), #000000 1%, transparent 50%)
`

export const Glow = (
    { className, style, children, color = '#f50057', debug, ...rest }:
        { className: string, style: CSSProperties, children: ReactNode, color: string, debug: boolean }) => {
    const element = useRef<HTMLDivElement>(null)

    useEffect(() => {
        element.current?.style.setProperty('--glow-top', `${element.current?.offsetTop}px`)
        element.current?.style.setProperty('--glow-left', `${element.current?.offsetLeft}px`)
    })

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            requestAnimationFrame(() => {
                element.current?.style.setProperty('--glow-top', `${element.current?.offsetTop}px`)
                element.current?.style.setProperty('--glow-left', `${element.current?.offsetLeft}px`)
            })
        })

        const capture = element.current?.closest('.glow-capture')
        if (capture)
            observer.observe(capture)


        return () => observer.disconnect()
    }, [])

    return <div ref={element} className='glow' {...rest}>
        <div className={className} style={style} {...rest}>
            {children}
        </div>
        <div className={`glow-mask ${className ? className : ''}`}
            style={{
                ...style,
                '--glow-color': color,
                mask: debug ? undefined : mask,
                WebkitMask: debug ? undefined : mask
            } as CSSProperties}
            {...rest}>
            {children}
        </div>
    </div>
}