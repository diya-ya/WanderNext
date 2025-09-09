import { useState } from 'react';

export function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup' | 'reset'>('login');
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">{mode === 'login' ? 'Welcome back' : mode === 'signup' ? 'Create account' : 'Reset password'}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Prototype only — no real authentication.</p>
        </div>
        <div className="mt-8 space-y-4">
          {mode !== 'reset' && (
            <button className="w-full py-2 rounded-md border border-gray-300 dark:border-gray-700">Continue with Google</button>
          )}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-4">
            {mode !== 'reset' && (
              <input placeholder="Email" className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
            )}
            {mode !== 'reset' && (
              <input type="password" placeholder="Password" className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
            )}
            {mode === 'signup' && (
              <input placeholder="Username" className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
            )}
            {mode === 'reset' && (
              <input placeholder="Registered email" className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
            )}
            <button className="w-full py-2 rounded-md bg-brand text-white">{mode === 'login' ? 'Sign in' : mode === 'signup' ? 'Create account' : 'Send reset link'}</button>
            <div className="text-sm text-gray-600 dark:text-gray-400 flex justify-between">
              {mode !== 'login' && <button onClick={() => setMode('login')}>Have an account? Sign in</button>}
              {mode !== 'signup' && <button onClick={() => setMode('signup')}>Create account</button>}
              {mode !== 'reset' && <button onClick={() => setMode('reset')}>Forgot password</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


