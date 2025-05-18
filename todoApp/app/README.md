# SimplifAI || TodoApp Web Application

> Built with [Wasp](https://wasp.sh), based on the [Open Saas](https://opensaas.sh) template.

This is the main web application of TodoApp, featuring a full-stack TypeScript setup with React, Prisma, and Tailwind CSS.

## Project Structure

```
app/
├── src/                    # Source code
│   ├── admin/             # Admin dashboard features
│   ├── analytics/         # Analytics integration
│   ├── auth/              # Authentication logic
│   ├── client/            # Client-side components
│   ├── demo-ai-app/       # AI features demo
│   ├── file-upload/       # File upload functionality
│   ├── landing-page/      # Landing page components
│   ├── messages/          # Messaging system
│   ├── payment/           # Payment integration
│   ├── server/            # Server-side logic
│   ├── shared/           # Shared utilities
│   └── user/             # User management
├── public/               # Static assets
├── migrations/          # Database migrations
├── main.wasp           # Wasp configuration
├── schema.prisma       # Database schema
└── package.json        # Dependencies
```

## Prerequisites

- Node.js (16.x or higher)
- PostgreSQL database
- [Wasp CLI](https://wasp-lang.dev/docs/quick-start) installed globally

## Development

### Environment Setup

1. Create two environment files in the root directory:

`.env.client`:
```env
VITE_API_URL=http://localhost:3000
```

`.env.server`:
```env
DATABASE_URL=postgresql://your-db-url
JWT_SECRET=your-jwt-secret
```

### Running locally

1. Start the database:
```bash
wasp start db
```

2. If this is your first time or you've made schema changes:
```bash
wasp db migrate-dev
```

3. Start the development server:
```bash
wasp start
```

The app will be available at http://localhost:3000

## Features

- 🔐 Authentication with Email/Password
- 💳 Stripe Integration
- 📊 Analytics Dashboard
- 🤖 AI Integration
- 📁 File Upload
- 👤 User Management
- 🎨 Tailwind CSS Styling
- 📱 Responsive Design

## Available Scripts

- `wasp start` - Start the development server
- `wasp start db` - Start the PostgreSQL database
- `wasp db migrate-dev` - Run database migrations
- `wasp build` - Build for production
- `wasp deploy` - Deploy your application

## Customization

### Styling
- Tailwind configuration in `tailwind.config.cjs`
- PostCSS configuration in `postcss.config.cjs`
- Custom fonts in `public/fonts/`

### Database
- Prisma schema in `schema.prisma`
- Migrations in `migrations/`

### TypeScript
- Configuration in `tsconfig.json`
- Vite configuration in `vite.config.ts`

## Deployment

1. Build the application:
```bash
wasp build
```

2. Deploy using your preferred hosting service:
```bash
wasp deploy
```

## Additional Resources

- [Wasp Documentation](https://wasp-lang.dev/docs)
- [OpenSaaS Template](https://opensaas.sh)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

