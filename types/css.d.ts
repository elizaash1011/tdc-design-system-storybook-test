/**
 * Lets `import '@/global.css'` typecheck.
 *
 * Metro (via NativeWind) and Vite both handle CSS imports as a side effect, but
 * TypeScript has no built-in knowledge of them and reports TS2882 on the bare
 * import. This declaration is types-only and has no runtime effect.
 */
declare module '*.css';
