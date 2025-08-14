# Jones Kisaka - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring Home, About, and Contact pages.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal performance
- **Contact Form**: Functional contact form with validation
- **Navigation**: Smooth navigation between pages with active state indicators

## Pages

1. **Home**: Introduction and overview of services
2. **About**: Detailed background, expertise, and philosophy
3. **Contact**: Contact form and additional contact information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd The-Jones-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
The-Jones-Website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   └── globals.css        # Global styles
├── components/
│   └── Navigation.tsx     # Navigation component
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Updating Content

- Edit the content in each page component (`app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`)
- Update contact information in the Contact page
- Modify the navigation links in `components/Navigation.tsx`

### Styling

- Global styles are in `app/globals.css`
- Tailwind CSS classes are used throughout the components
- Custom CSS classes are defined in `globals.css`

### Contact Form

The contact form is currently set up to log form data to the console. To make it functional:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function in `app/contact/page.tsx`
3. Replace the console.log with actual API calls

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `out` directory:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out through the contact form on the website. 