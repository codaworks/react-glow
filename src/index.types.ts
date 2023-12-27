import { CSSProperties } from 'react'

export type GlowCaptureProps = {
    className?: string,
    size?: number,
    children?: React.ReactNode
}

export type GlowProps = {
    className?: string,
    style?: CSSProperties,
    children?: React.ReactNode,
    color?: string,
    debug?: boolean
}