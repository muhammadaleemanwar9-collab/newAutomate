# 🚀 Deployment Guide - Automate Landing Page

Complete guide to deploy your landing page to production.

## 🔧 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content is finalized
- [ ] Email address in CTA form is correct
- [ ] Pricing plans are accurate
- [ ] All links are working
- [ ] Mobile responsive design tested
- [ ] SEO metadata is correct
- [ ] Analytics codes are added (if needed)
- [ ] Custom domain is ready (if needed)

## ✅ Build for Production

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test production build locally
npm start
```

Visit `http://localhost:3000` to verify the production build works correctly.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Optimized for Next.js
- Zero-config deployment
- Automatic CI/CD
- Free tier available
- Instant rollbacks

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Import"

3. **Configure Environment**
   - Default settings are perfect for this project
   - Click "Deploy"

4. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records (instructions provided)

**Result**: Your site is live and auto-deployed on every push!

---

### Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and your repo
   - Build settings:
     ```
     Build command: npm run build
     Publish directory: .next
     ```
   - Click "Deploy"

3. **Custom Domain**
   - Go to Site Settings → Domain Management
   - Add your custom domain

---

### Option 3: AWS Amplify

**Steps:**

1. **Push to GitHub**

2. **Deploy with Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app" → "Host web app"
   - Select GitHub
   - Authorize and select repository
   - Configure build settings
   - Click "Deploy"

**Note**: Requires AWS account

---

### Option 4: Docker Deployment

Deploy using Docker for self-hosted environments.

**Create Dockerfile:**

```dockerfile
# Use Node.js 18 Alpine as base
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
```

**Build and run:**

```bash
docker build -t automate-landing .
docker run -p 3000:3000 automate-landing
```

---

### Option 5: Self-Hosted (Linux/Ubuntu)

**On your VPS:**

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone repository**
   ```bash
   cd /var/www
   git clone <your-repo-url>
   cd automate-landing
   npm install
   ```

3. **Build project**
   ```bash
   npm run build
   ```

4. **Use PM2 for process management**
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "automate" -- start
   pm2 startup
   pm2 save
   ```

5. **Setup Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

### Option 6: Railway, Render, or Fly.io

**For these platforms:**
- Connect your GitHub repo
- Configure build and start commands
- Deploy with one click
- Follow platform-specific documentation

---

## 🔒 Environment Variables

Create `.env.local` for sensitive data:

```bash
# Email service (optional)
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_API_KEY=your_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# API endpoints
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

**Never commit `.env.local` to Git!**

---

## 📊 Add Analytics

### Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property
3. Get your measurement ID
4. Update `NEXT_PUBLIC_GA_ID` in `.env.local`

### Vercel Analytics

- Automatically enabled on Vercel
- Check Analytics tab in Vercel dashboard

---

## 🛡️ SSL/HTTPS

**Vercel & Netlify**: Automatic SSL certificates

**Self-hosted**: Use Let's Encrypt
```bash
certbot certonly --standalone -d yourdomain.com
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 18
      
      - run: npm install
      - run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📈 Post-Deployment

### Monitor Performance
- Setup monitoring (Vercel, DataDog, New Relic)
- Check Core Web Vitals
- Monitor uptime
- Track error logs

### Maintenance
- Keep dependencies updated
- Review analytics regularly
- Fix any reported issues
- Update content as needed

### Optimization
- Add caching headers
- Compress images
- Minimize bundle size
- Use CDN for static assets

---

## 🆘 Troubleshooting

### Site shows 404
- Ensure build was successful
- Check build logs for errors
- Verify output directory

### Slow performance
- Check bundle size: `npm run build`
- Optimize images
- Enable caching
- Use CDN

### Build failures
```bash
# Clear cache and rebuild
rm -rf node_modules .next
npm install
npm run build
```

---

## 💰 Cost Comparison

| Platform | Free Tier | Pricing |
|----------|-----------|---------|
| Vercel | Yes (generous) | $20/month pro |
| Netlify | Yes | $19/month pro |
| AWS Amplify | 12 months free | Pay as you go |
| Railway | Yes ($5 credit) | $5/month minimum |
| Fly.io | Yes | Pay as you go |
| Self-hosted | No | $5-50/month VPS |

---

## ✨ Best Practices

✅ Always test production build locally
✅ Use environment variables for sensitive data
✅ Keep dependencies updated
✅ Monitor performance metrics
✅ Setup error tracking
✅ Use git branches for features
✅ Automate deployment with CI/CD
✅ Backup your data regularly

---

## 🎯 Recommended Setup

**For beginners**: Vercel (easiest, free tier included)
**For enterprise**: Self-hosted or AWS Amplify
**For performance**: Vercel with custom domain

---

**Happy deploying! 🚀**

Your landing page is ready to reach the world!
