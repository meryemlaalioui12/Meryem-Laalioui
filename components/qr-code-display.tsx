'use client'

import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

interface QRCodeDisplayProps {
  // url: string // Removed the url prop as it's no longer needed
}

export default function QRCodeDisplay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      // Generate QR code pointing to the CV web page
      const cvUrl = `${window.location.origin}/cv`
      QRCode.toCanvas(canvasRef.current, cvUrl, {
        width: 200,
        margin: 2,
        color: {
          dark: '#8B4513', // Brown color to match the design
          light: '#FFFEF7' // Cream color
        },
        errorCorrectionLevel: 'M'
      })
    }
  }, [])

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-8 -left-8 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20,20 Q20,5 35,5 L65,5 Q80,5 80,20 L80,50 Q80,65 65,65 L35,65 Q20,65 20,50 Z"
            fill="#D2691E"
            stroke="none"
          />
        </svg>
      </div>
      
      <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20,35 Q20,20 35,20 L65,20 Q80,20 80,35 L80,65 Q80,80 65,80 L35,80 Q20,80 20,65 Z"
            fill="#CD853F"
            stroke="none"
          />
        </svg>
      </div>

      {/* Main QR Code Card */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-3xl shadow-2xl border-2 border-amber-200 max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-amber-900 mb-2 tracking-wider">
            SCAN HERE
          </h2>
          <p className="text-amber-700 italic text-lg font-medium">
            To see my cv
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-white p-6 rounded-2xl shadow-inner border border-amber-300 mb-6">
          <div className="flex justify-center">
            <canvas 
              ref={canvasRef}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-amber-800 font-semibold text-lg">
            More information at
          </p>
          <p className="text-amber-600 text-sm mt-1">
            meryemlaalioui092@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
