'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Download, Eye } from 'lucide-react'
import QRCodeDisplay from '@/components/qr-code-display'

export default function QRCodeGenerator() {
  // Change the PDF URL to the CV web page
  const pdfUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/cv`

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">
            Professional QR Code CV
          </h1>
          <p className="text-amber-700">
            Scan the QR code to view Meryem Laalioui's professional resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* QR Code Display */}
          <div className="flex justify-center">
            <QRCodeDisplay url={pdfUrl} />
          </div>

          {/* Controls and Preview */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200">
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                QR Code Features
              </h2>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Professional design matching your template
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  High-quality QR code generation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Direct link to PDF resume
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Mobile-friendly scanning
                </li>
              </ul>
            </Card>

            <div className="flex gap-4">
              <Button 
                onClick={() => {
                  // Open CV in new tab/page
                  window.open('/cv', '_blank')
                }}
                className="flex-1 bg-amber-700 hover:bg-amber-800 text-white"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview CV
              </Button>
              <Button 
                onClick={() => {
                  // In a real application, this would download the actual PDF
                  const link = document.createElement('a')
                  link.href = pdfUrl
                  link.download = 'CV-Meryem-Laalioui.pdf'
                  link.click()
                }}
                variant="outline"
                className="flex-1 border-amber-700 text-amber-700 hover:bg-amber-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
