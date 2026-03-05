import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#DD183B',
          color: '#ffffff',
          fontSize: 80,
          fontWeight: 700,
          fontFamily: 'sans-serif',
          letterSpacing: '-2px',
        }}
      >
        DT
      </div>
    ),
    { ...size }
  )
}
