import React from 'react';

export default function TechIcon({ name, className = "w-4 h-4 mr-1.5 inline-block shrink-0" }) {
  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 6.5 4.5 6.5 4.5V7h5.5v1H4.5S2 7.98 2 13.5 4.5 19 4.5 19H7v-2.5S7 14 9.5 14h5v-1.5s0-2.5-2.5-2.5h-5V8H12s2.5 0 2.5-2.5S12 2 12 2zm-2.5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4.5 18c5.52 0 5.5-2.5 5.5-2.5V17H14v-1h7.5s2.5.02 2.5-5.5S21.5 5 21.5 5H19v2.5s0 2.5-2.5 2.5h-5v1.5s0 2.5 2.5 2.5h5V16H14s-2.5 0-2.5 2.5S14 22 14 22zm2.5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      );
    case 'go':
    case 'golang':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.9 9.5c.3-.5.7-.9 1.2-1.2.6-.3 1.2-.5 1.9-.5h4.1v2.4H5.3c-.4 0-.8.1-1.1.4-.3.2-.5.6-.5 1 0 .4.2.7.5 1 .3.2.7.4 1.1.4h2.2v-1.6h2.5V16H5c-.8 0-1.5-.2-2.1-.6-.6-.4-1.1-.9-1.4-1.5C1.2 13.3 1 12.6 1 11.8s.3-1.5.9-2.3zm13.3-1.7c.8 0 1.5.2 2.1.6.6.4 1.1.9 1.4 1.5.3.6.5 1.3.5 2.1s-.2 1.5-.5 2.1c-.3.6-.8 1.1-1.4 1.5-.6.4-1.3.6-2.1.6s-1.5-.2-2.1-.6c-.6-.4-1.1-.9-1.4-1.5-.3-.6-.5-1.3-.5-2.1s.2-1.5.5-2.1c.3-.6.8-1.1 1.4-1.5.6-.4 1.3-.6 2.1-.6zm0 2.3c-.4 0-.8.1-1.1.4-.3.3-.5.6-.5 1.1s.2.8.5 1.1c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.3-.3.5-.6.5-1.1s-.2-.8-.5-1.1c-.3-.3-.7-.4-1.1-.4z" />
        </svg>
      );
    case 'database':
    case 'sql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm15.5 13.3c-.3-.5-.7-.9-1.4-1.2l-.7-.3c-.5-.2-.8-.4-1-.6-.2-.2-.3-.5-.3-.8 0-.4.2-.7.5-.9.4-.2.9-.3 1.5-.3.6 0 1.2.2 1.6.5.4.3.7.8.8 1.4h2.2c-.1-1.1-.6-2-1.4-2.6-.9-.6-2-1-3.2-1-1.3 0-2.3.4-3.1 1.1-.7.7-1.1 1.7-1.1 2.8 0 1.1.4 2 1.1 2.6.7.6 1.7 1.1 2.9 1.5.5.2.9.4 1.1.6.2.2.3.5.3.8 0 .4-.2.8-.5 1-.4.3-1 .4-1.7.4-.8 0-1.4-.2-1.9-.7-.5-.4-.8-1.1-.9-2h-2.3c.1 1.4.7 2.4 1.6 3.1.9.7 2.1 1 3.5 1 1.4 0 2.6-.4 3.4-1.1.8-.7 1.3-1.8 1.3-3 0-1-.3-1.7-.9-2.3zm-7.6-6.1H8.7v7.2c0 .9-.2 1.5-.6 1.9-.4.4-.9.6-1.7.6-.5 0-1-.1-1.3-.2l-.4-.3v2.1c.5.2 1.1.4 1.9.4 1.5 0 2.6-.4 3.3-1.3.7-.9 1-2.2 1-3.8V10.2z"/>
        </svg>
      );
    case 'dsa':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
          <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
          <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
        </svg>
      );
    case 'gin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14l7-10H5l7 10z"/>
          <line x1="12" y1="14" x2="12" y2="21"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
        </svg>
      );
    case 'chi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 12 15 20 7"/>
          <polyline points="4 13 12 21 20 13"/>
        </svg>
      );
    case 'fastapi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 13.5h7.5L9 22l9-11.5h-7.5L12 2z"/>
        </svg>
      );
    case 'pydantic':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4 11v6l8 4.5 8-4.5V11l-8 4.5z"/>
        </svg>
      );
    case 'uvicorn':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h4l3 6h4l3-6h4v16h-4v-6l-3 4h-4l-3-4v6H4V4z"/>
        </svg>
      );
    case 'sqlalchemy':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 2C13.5 2 8 8 8 13.5a5.5 5.5 0 0 0 11 0c0-3-2-5.5-2-5.5s-.5 2-2 2c-1.5 0-2-1.5-1.5-3.5S13.5 2 13.5 2z"/>
        </svg>
      );
    case 'alembic':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.7 17.2l-5.7-9.5V3h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2h1v4.7L4.3 17.2A3 3 0 0 0 6.9 22h10.2a3 3 0 0 0 2.6-4.8zM12 10.5l4 6.7H8l4-6.7z"/>
        </svg>
      );
    case 'jinja2':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 4h18v3h-2v11h2v3H3v-3h2V7H3V4zm5 3v11h8V7H8z"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5C11.5 2 7 8 7 13.5c0 3.5 2.2 6.5 5 7.5 2.8-1 5-4 5-7.5C17 8 12.5 2 12 1.5zm.3 17.8c-.1.1-.2.2-.3.2s-.2-.1-.3-.2V3.4c2.2 2.7 4 6.4 4 10.1 0 2.8-1.5 5.2-3.7 5.8z"/>
        </svg>
      );
    case 'firebase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.89 15.672L6.255.485A.625.625 0 0 1 7.42.348l3.47 6.517-6.999 8.807zm16.22 0l-2.046-12.83a.625.625 0 0 0-1.116-.345L3.35 18.636l8.28 4.673a.72.72 0 0 0 .74 0l7.74-7.637zm-7.07-7.227l-2.2-4.147a.626.626 0 0 0-1.114 0L8.43 6.942l4.61 1.503z"/>
        </svg>
      );
    case 'supabase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.36 9.89H13.1V.64a.64.64 0 0 0-1.15-.38L2.14 13.11a.64.64 0 0 0 .49 1h8.27v9.25a.64.64 0 0 0 1.15.38l9.81-12.85a.64.64 0 0 0-.5-.99z"/>
        </svg>
      );
    case 'redis':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 6.5l10 4.5 10-4.5L12 2zm-8.2 6.5L12 12l8.2-3.5L12 5 3.8 8.5zM2 10.5l10 4.5 10-4.5v3l-10 4.5-10-4.5v-3zm0 6l10 4.5 10-4.5v3l-10 4.5-10-4.5v-3z"/>
        </svg>
      );
    case 'jwt':
    case 'jwt auth':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      );
    case 'bcrypt':
    case 'bcrypt hashing':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      );
    case 'rbac':
    case 'rbac control':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      );
    case 'docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.5 10.5c-.3-1.6-1.5-2.2-2.5-2.4-.2-.8-.8-1.5-1.7-1.8l-.8-.3-.4.8c-.4.8-.4 1.8-.1 2.6-.9.2-2.4.7-3.2 2.6H2.5c-.3 0-.5.2-.5.5v5c0 2.2 1.8 4 4 4h9c4.4 0 8-3.6 8-8 0-.4 0-.7-.5-.9zM7 7.5h2v2H7v-2zm3 0h2v2h-2v-2zm-6 3h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z"/>
        </svg>
      );
    case 'aws':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.8 14.5c-2.4 1.8-5.7 2.7-8.7 2.7-4.2 0-8-1.6-10.8-4.2-.2-.2-.2-.6.1-.8.3-.2.7-.2.9.1 2.6 2.4 6.1 3.9 10 3.9 2.7 0 5.6-.8 7.8-2.4.3-.2.7-.2.9.1.2.3.1.7-.2.9zM19.9 13c-.2-.3-.5-.4-.8-.3-.3.1-.4.4-.3.7.2.5.3 1.1.3 1.7 0 .2.2.4.4.4.2 0 .4-.2.4-.4 0-.8-.1-1.4-.4-2.1zM8.5 7.5c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-5z"/>
        </svg>
      );
    case 'linux':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.5 2c-3.1 0-4.6 2.3-4.6 5.5 0 1.5.4 3.4.9 4.8-.9 1.4-2.8 2.6-2.8 4.2 0 2.2 2.2 3.5 5 3.5.7 0 1.4-.1 2-.3.6.2 1.3.3 2 .3 2.8 0 5-1.3 5-3.5 0-1.6-1.9-2.8-2.8-4.2.5-1.4.9-3.3.9-4.8C18.1 4.3 15.6 2 12.5 2z"/>
        </svg>
      );
    case 'cicd':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3"/>
          <circle cx="6" cy="6" r="3"/>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
          <line x1="6" y1="9" x2="6" y2="21"/>
        </svg>
      );
    case 'observability':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      );
    case 'networking & security':
    case 'networking':
    case 'security':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      );
    case 'render':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-10 10c0 4.4 2.8 8.1 6.8 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.8 9.8 0 0 1 5.2 0C16.9 4.7 17.8 5 17.8 5c.5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5 4-1.4 6.8-5.1 6.8-9.5A10 10 0 0 0 12 2z"/>
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.6 10.87L13.13 2.4a1.86 1.86 0 0 0-2.63 0L8.64 4.26l3.32 3.32a2.21 2.21 0 0 1 2.8 2.8l3.2 3.2a2.2 2.2 0 1 1-1.32 1.33l-2.99-2.99v4.29a2.21 2.21 0 1 1-1.87 0v-4.47a2.2 2.2 0 0 1-1.19-2.9L7.26 5.64 2.4 10.5a1.86 1.86 0 0 0 0 2.63l8.47 8.47a1.86 1.86 0 0 0 2.63 0l8.1-8.1a1.86 1.86 0 0 0 0-2.63z" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'vercel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L24 22H0L12 1z"/>
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      );
  }
}
