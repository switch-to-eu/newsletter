# Switch-to.EU Newsletter

Static newsletter archive deployed at newsletter.switch-to.eu

## 📁 Project Structure

```
/
├── public/                         # Public files (deployed)
│   ├── index.html                 # Newsletter archive listing
│   ├── newsletters/               # Individual newsletter files
│   └── assets/
│       └── fonts/                 # Local font files (woff2)
├── Dockerfile                     # Container configuration
├── nginx.conf                     # Web server configuration
├── .dockerignore                  # Docker build exclusions
└── README.md                      # This file
```


## 📝 Adding New Newsletters

1. Create new HTML file in `/public/newsletters/` folder
2. Update `/public/index.html` to include the new newsletter
3. Commit and push changes

## 🌐 Production URL

- **Live site:** https://newsletter.switch-to.eu
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