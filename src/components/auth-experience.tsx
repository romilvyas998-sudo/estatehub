'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  ArrowRight,
  Check,
  Chrome,
  Eye,
  EyeOff,
  Mail,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function AuthExperience({ locale }: { locale: string }) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [role, setRole] = useState<'buyer' | 'broker'>('buyer');
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Email + Password Authentication
  const handleEmailAuth = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setError('');
    setMessage('');

    try {
      if (mode === 'signin') {
        // SIGN IN
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        }

        // Login successful
        window.location.href = `/${locale}/${
          role === 'broker' ? 'broker' : 'dashboard'
        }`;
      } else {
        // SIGN UP
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              role,
              phone,
            },
          },
        });

        if (error) {
          throw error;
        }

        // If email confirmation is enabled in Supabase
        if (data.user && !data.session) {
          setMessage(
            'Account created successfully. Please check your email and click the confirmation link.'
          );
        } else {
          // If email confirmation is disabled
          window.location.href = `/${locale}/${
            role === 'broker' ? 'broker' : 'dashboard'
          }`;
        }
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Google Authentication
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/${locale}/dashboard`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (err: any) {
      setError(
        err.message ||
          'Google login failed. Please check your Supabase Google provider settings.'
      );
      setLoading(false);
    }
  };

  return (
    <main className="page-shell grid min-h-[calc(100vh-74px)] items-center gap-8 py-10 lg:grid-cols-2 lg:py-16">
      {/* LEFT SIDE */}
      <section className="relative hidden min-h-[580px] overflow-hidden rounded-3xl bg-ink p-10 text-white lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(212,169,79,.45),transparent_24%),radial-gradient(circle_at_20%_85%,rgba(48,87,71,.65),transparent_34%)]" />

        <div className="relative flex h-full flex-col justify-between">
          <div>
            <p className="eyebrow">Welcome to EstateHub</p>

            <h1 className="mt-5 max-w-md font-serif text-6xl font-bold leading-[.98]">
              Every good move starts here.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              A more human way to find your home, make an informed choice,
              and connect with the people behind a place.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-7">
            <AuthFact value="1,250+" label="verified homes" />
            <AuthFact value="4.9/5" label="local rating" />
            <AuthFact value="24/7" label="support" />
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="mx-auto w-full max-w-md">
        <p className="eyebrow">
          {mode === 'signin' ? 'Welcome back' : 'Join EstateHub'}
        </p>

        <h2 className="mt-3 font-serif text-4xl font-bold text-ink dark:text-white">
          {mode === 'signin'
            ? 'Pick up where you left off.'
            : 'Find your next place.'}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {mode === 'signin'
            ? 'Sign in to save homes, track inquiries and manage your search.'
            : 'Create an account in a minute. No credit card required.'}
        </p>

        {/* BUYER / BROKER SELECTION */}
        {mode === 'signup' && (
          <div className="mt-7 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setRole('buyer')}
              className={`rounded-2xl border p-4 text-left transition ${
                role === 'buyer'
                  ? 'border-gold bg-gold/10'
                  : 'border-slate-200 dark:border-white/10'
              }`}
            >
              <ShieldCheck
                className={
                  role === 'buyer' ? 'text-gold' : 'text-slate-400'
                }
                size={19}
              />

              <p className="mt-3 text-sm font-bold text-ink dark:text-white">
                I&apos;m looking
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Buy or rent a home
              </p>
            </button>

            <button
              type="button"
              onClick={() => setRole('broker')}
              className={`rounded-2xl border p-4 text-left transition ${
                role === 'broker'
                  ? 'border-gold bg-gold/10'
                  : 'border-slate-200 dark:border-white/10'
              }`}
            >
              <ArrowRight
                className={
                  role === 'broker' ? 'text-gold' : 'text-slate-400'
                }
                size={19}
              />

              <p className="mt-3 text-sm font-bold text-ink dark:text-white">
                I&apos;m listing
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Broker or landlord
              </p>
            </button>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* SUCCESS MESSAGE */}
        {message && (
          <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            {message}
          </div>
        )}

        {/* EMAIL FORM */}
        <form
          onSubmit={handleEmailAuth}
          className="mt-7 space-y-4"
        >
          {/* EMAIL */}
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-ink dark:text-white">
              Email address
            </span>

            <div className="relative">
              <Mail
                size={17}
                className="absolute left-3 top-3 text-slate-400"
              />

              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-surface w-full pl-10"
                placeholder="you@example.com"
              />
            </div>
          </label>

          {/* PHONE - SIGNUP ONLY */}
          {mode === 'signup' && (
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink dark:text-white">
                Phone number{' '}
                <span className="font-normal text-slate-400">
                  (optional)
                </span>
              </span>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-3 top-3 text-slate-400"
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-surface w-full pl-10"
                  placeholder="+91 00000 00000"
                />
              </div>
            </label>
          )}

          {/* PASSWORD */}
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-ink dark:text-white">
              Password
            </span>

            <div className="relative">
              <input
                required
                type={show ? 'text' : 'password'}
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-surface w-full pr-10"
                placeholder="At least 6 characters"
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-2 top-2 rounded-lg p-1.5 text-slate-400"
              >
                {show ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="gold-button w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? 'Please wait...'
              : mode === 'signin'
              ? 'Sign in'
              : 'Create account'}

            {!loading && <ArrowRight size={17} />}
          </button>
        </form>

        {/* OR */}
        <div className="my-6 flex items-center gap-3 text-xs text-slate-400 before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200 dark:before:bg-white/10 dark:after:bg-white/10">
          or
        </div>

        {/* GOOGLE LOGIN */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="outline-button w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Chrome size={17} />

          {loading ? 'Please wait...' : 'Continue with Google'}
        </button>

        {/* SWITCH SIGN IN / SIGN UP */}
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          {mode === 'signin' ? (
            <>
              New here?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setError('');
                  setMessage('');
                }}
                className="font-bold text-gold"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('signin');
                  setError('');
                  setMessage('');
                }}
                className="font-bold text-gold"
              >
                Sign in
              </button>
            </>
          )}
        </p>

        {/* SECURITY MESSAGE */}
        <p className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] text-slate-400">
          <Check size={13} className="text-moss" />
          Secure authentication powered by Supabase
        </p>
      </section>
    </main>
  );
}

function AuthFact({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="font-serif text-2xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-[11px] text-white/55">
        {label}
      </p>
    </div>
  );
}