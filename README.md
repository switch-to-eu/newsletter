# Switch-to.EU Newsletter - React Email

Newsletter built with [React Email](https://react.email) for Switch-to.EU.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (currently using 16.7.0 - consider upgrading for best compatibility)

### Installation

```bash
npm install
```

### Development

Start the React Email development server:

```bash
npm run dev
```

This will start the React Email preview server at `http://localhost:3000` where you can see and test your email templates.

### Building

Export your emails to HTML:

```bash
npm run build
```

This creates static HTML files in the `out` directory.

## 📁 Project Structure

```
/
├── emails/                    # React Email templates
│   └── launch-newsletter.tsx # Launch newsletter (Issue #001)
├── public/                   # Static assets (legacy)
├── src/                      # Source files
├── package.json             # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 📧 Creating New Newsletters

1. Create a new `.tsx` file in the `emails/` directory
2. Use React Email components to build your email
3. Export as default component
4. Preview in development server
5. Export to HTML for production

## 🎨 Design System

- **Primary Brand Color**: `#1a3c5a`
- **Background**: `#fefbf9`
- **Content Background**: `#ffffff`
- **Text Color**: `#383838`
- **Fonts**: Hanken Grotesk (body), Bricolage Grotesque (headings)

## 🔄 Migration from HTML

The project was migrated from static HTML newsletters to React Email components for:

- **Better maintainability** - Component-based architecture
- **Reusable components** - Shared header, footer, styling
- **TypeScript support** - Type safety and better DX
- **Email client compatibility** - React Email handles email quirks
- **Preview & testing** - Live development server

## 🌐 Deployment

The built HTML files can be deployed to any static hosting service. The original deployment setup with Docker and Sliplane can still be used with the `out/` directory.

## 📝 Original Newsletter Archive

The original HTML newsletters are preserved in `public/newsletters/` for reference.

## 🎨 Local Fonts

We use self-hosted fonts for better privacy and performance:

- **Hanken Grotesk** (SemiBold, Bold, Italic variants)
- **Bricolage Grotesque** (ExtraBold)

No external font dependencies (Google Fonts removed for privacy).

## 🔄 Continuous Deployment

Every push to the `main` branch automatically:

1. Triggers a new build on Sliplane
2. Builds the Docker container (copies only `public/` folder)
3. Deploys to production
4. Updates newsletter.switch-to.eu

## 📝 Adding New Newsletters

1. Create new HTML file in `/public/newsletters/` folder
2. Update `/public/index.html` to include the new newsletter
3. Commit and push changes
4. Sliplane automatically deploys the update

## 🌐 Production URL

- **Live site:** https://newsletter.switch-to.eu
- **Health check:** https://newsletter.switch-to.eu/health
- **GitHub repo:** https://github.com/switch-to-eu/newsletter

## 🛠 Local Development

To test locally:

```bash
# Build the container
docker build -t newsletter .

# Run locally
docker run -p 8080:80 newsletter

# Visit http://localhost:8080
```

Note: Local development uses HTTP, but production enforces HTTPS.

## 🔒 Privacy & Security

- **No external dependencies** - All fonts served locally
- **HTTPS-only** - Automatic redirects and security headers
- **Minimal attack surface** - Only `public/` folder is deployed
- **Content Security Policy** - Strict CSP headers for enhanced security
