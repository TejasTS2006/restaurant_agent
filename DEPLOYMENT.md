# Deployment Guide | KitchenOS

Follow these steps to deploy the KitchenOS Autonomous Platform.

## 1. Local Production Build (Recommended for testing)
To check if the application is production-ready on your local machine:

```bash
# Install all dependencies
npm install

# Create the optimized production build
npm run build

# Start the production server
npm run start
```

## 2. Deploy to Vercel (Easiest & Recommended)
Since KitchenOS is a Next.js application, Vercel is the natural choice for deployment.

1.  Push your code to [GitHub](https://github.com/Tushar-A-Kumar/restaurant_agent).
2.  Go to [vercel.com](https://vercel.com) and sign in.
3.  Click **"Add New"** > **"Project"**.
4.  Import the `restaurant_agent` repository.
5.  Click **"Deploy"**. Vercel will automatically detect Next.js and handle the configuration.

## 3. Environment Configuration
Once deployed, ensure your Agent Loop continues to work by checking:
- **Middleware/Proxy**: Ensure your `proxy.ts` is correctly handling requests in the deployment environment.
- **Node Version**: Set your deployment environment to use **Node 20.x** or higher.

## 4. Post-Deployment Check
After the URL is live, verify the following:
1.  **Auth Flow**: Visit the `/login` route and ensure the demo credentials work.
2.  **Agent Loop**: Visit the Dashboard and trigger the Agent Loop to ensure the internal API endpoints are reachable.
3.  **Real-time Charts**: Ensure the Sales Analysis graph renders correctly.

---
**Need help with a specific platform?** Let me know if you want to deploy to AWS, DigitalOcean, or Docker!
