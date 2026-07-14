import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2563eb',
          borderRadius: 7,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 11.3c0 3.9-3.8 7-8.5 7-1 0-2-.12-2.9-.35L4 19.5l1.2-3.35C4.1 14.8 3 13.2 3 11.3c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <line x1="8.6" y1="14" x2="8.6" y2="11.6" stroke="#34d399" strokeWidth="1.9" strokeLinecap="round" />
          <line x1="11.5" y1="14" x2="11.5" y2="9.8" stroke="#34d399" strokeWidth="1.9" strokeLinecap="round" />
          <line x1="14.4" y1="14" x2="14.4" y2="7.8" stroke="#34d399" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size },
  )
}
