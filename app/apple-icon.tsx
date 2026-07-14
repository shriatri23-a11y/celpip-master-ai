import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: 40,
        }}
      >
        <svg width="130" height="130" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 11.3c0 3.9-3.8 7-8.5 7-1 0-2-.12-2.9-.35L4 19.5l1.2-3.35C4.1 14.8 3 13.2 3 11.3c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13.4 10.2 10.2 12.6 12.4 16.4 8.4"
            fill="none"
            stroke="#34d399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4 8.4 16.4 8.4 16.4 11.4"
            fill="none"
            stroke="#34d399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  )
}
