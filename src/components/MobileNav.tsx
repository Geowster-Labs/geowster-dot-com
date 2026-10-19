import { useEffect, useState } from 'react';

interface Props {
  links: { href: string; label: string }[];
  current: string;
  contactHref: string;
}

export default function MobileNav({ links, current, contactHref }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="relative z-50 rounded-xl border border-border px-4 py-3 text-sm font-semibold"
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-5 pt-28 pb-10"
        >
          <ul className="space-y-2">
            {[{ href: '/', label: 'Home' }, ...links].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={current === href ? 'page' : undefined}
                  className="text-headline block aria-[current=page]:text-muted"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href={contactHref} className="rounded-xl bg-fg px-5 py-4 text-center font-semibold text-bg">
            Get in touch
          </a>
        </nav>
      )}
    </div>
  );
}
