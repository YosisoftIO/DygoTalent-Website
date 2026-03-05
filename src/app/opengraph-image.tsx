import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'DygoTalent — Talent Management for the Creator Economy'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
          color: '#f5f5f5',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: '-2px',
            }}
          >
            Dygo
            <span style={{ color: '#DD183B' }}>Talent</span>
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#a3a3a3',
            maxWidth: '700px',
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Talent Management for the Creator Economy
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#DD183B',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
