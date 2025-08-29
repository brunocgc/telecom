import React from 'react'

export default function NetworkBackground() {
  return (
  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" aria-hidden="true">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#6B7280" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* grid of lines */}
      <g stroke="url(#g1)" strokeWidth="1" fill="none">
        <path className="network-line" d="M50 100 L300 60 L520 140 L860 80 L1150 130" />
        <path className="network-line" d="M30 260 L240 220 L480 300 L760 250 L1100 300" />
        <path className="network-line" d="M80 420 L360 380 L600 460 L900 400 L1150 460" />
      </g>
    </svg>
  )
}
