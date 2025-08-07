# QR CV Generator

A professional QR code CV generator built with Next.js, React, and Tailwind CSS. This application allows users to create and share their CV through a QR code that links to a professional web-based resume.

## 🚀 Features

- **QR Code Generation**: Generate QR codes that link directly to your CV
- **Professional CV Layout**: Clean, modern CV design with responsive layout
- **Multi-language Support**: CV content in French with English proficiency levels
- **Mobile-Friendly**: Optimized for both desktop and mobile viewing
- **Print-Ready**: Professional layout suitable for printing
- **Customizable**: Easy to modify CV content and styling

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **QRCode**: QR code generation library
- **Lucide React**: Icon library

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 18 or higher)
- npm, yarn, or pnpm package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/qr-cv-generator.git
cd qr-cv-generator
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
qr-cv-generator/
├── app/                    # Next.js app directory
│   ├── cv/                # CV page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── cv-preview.tsx    # CV preview component
│   ├── qr-code-display.tsx # QR code component
│   └── ui/               # UI components
├── public/               # Static assets
│   └── images/           # Images including CV photo
└── styles/               # Additional styles
```

## 🎨 Customization

### Updating CV Content

1. **Personal Information**: Edit `app/cv/page.tsx` to update your personal details
2. **Photo**: Replace `/public/images/meryem-photo.jpg` with your photo
3. **Skills**: Modify the skills section in the CV component
4. **Experience**: Update work experience and education sections

### Styling

- **Colors**: Modify the amber color scheme in `app/globals.css`
- **Layout**: Adjust responsive breakpoints and spacing
- **Typography**: Update font sizes and weights

## 📱 Features

### QR Code Generation
- Generates QR codes that link to your CV
- High-quality, scannable QR codes
- Direct access to your professional resume

### CV Layout
- Professional header with photo and contact information
- Skills section with progress bars
- Education and experience timeline
- Personal qualities and interests
- Print-friendly design

### Responsive Design
- Optimized for desktop and mobile viewing
- Consistent layout across all devices
- Professional appearance on all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Heroku
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please contact:
- Email: meryemlaalioui092@gmail.com
- Phone: 0600928206

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Icons from Lucide React
- QR code generation with QRCode library 