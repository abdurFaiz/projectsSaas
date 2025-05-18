import { Link as WaspRouterLink, routes } from 'wasp/client/router';

interface NavigationItem {
  name: string;
  href: string;
}

export default function Footer({ footerNavigation }: {
  footerNavigation: {
    app: NavigationItem[]
    company: NavigationItem[]
  }
}) {
  return (
    <div className='flex flex-col items-center bg-white text-white py-16'>
      {/* Main CTA Section */}
      <div className='text-center mb-4'>
        <WaspRouterLink
          to={routes.LoginRoute.to}
          className='inline-flex items-center bg-orange-100 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100'
        >
          AI-Powered Productivity
          <span className="ml-2">→</span>
        </WaspRouterLink>
      </div>

      {/* Subtitle */}
      <p className='text-gray-400 mb-16'>
        No monthly fees. Pay once, use forever. Refund within 7 days.
      </p>

      {/* Bottom Links */}
      <div className='flex gap-6 text-sm text-gray-400'>
        <a href="#" className='hover:text-white'>Terms</a>
        <a href="#" className='hover:text-white'>Privacy</a>
        <a href="#" className='hover:text-white'>Support</a>
        <a href="#" className='hover:text-white'>Installation Guide ↗</a>
        <button className='hover:text-white'>🌗</button>
      </div>

      {/* Company Info */}
      <div className='flex items-center gap-2 mt-8 text-sm text-gray-400'>
        <span className='flex items-center'>
          Abdurrahman Faiz
          <span className='ml-1 px-1 bg-gray-700 rounded text-xs'>AI</span>
        </span>
        <span>C/o Lokus, LLC 295, 447 Broadway, 2nd Floor Surakarta, SC 10013</span>
        <span>© 2025 Lokus, LLC</span>
      </div>
    </div>
  )
}
