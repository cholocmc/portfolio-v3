const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

let cancelActive: (() => void) | null = null;

/** Height of the sticky header, so sections land just below it. */
function headerOffset() {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  return header ? header.getBoundingClientRect().height : 0;
}

/**
 * Smoothly scrolls so the top of `#id` sits right under the sticky header.
 * `id === "top"` scrolls to the very top of the page.
 */
export function scrollToSection(id: string) {
  const el = id === "top" ? null : document.getElementById(id);
  if (id !== "top" && !el) return;

  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const targetY = el
    ? Math.min(maxY, Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset()))
    : 0;

  const url = id === "top" ? window.location.pathname + window.location.search : `#${id}`;
  history.replaceState(null, "", url);

  const finish = () => {
    if (el) {
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  };

  cancelActive?.();
  const startY = window.scrollY;
  const distance = targetY - startY;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    finish();
    return;
  }

  const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.3));
  let start: number | null = null;
  let frame = 0;

  // Let the user take over: any wheel/touch/key input cancels the animation.
  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    cancelActive = null;
  };
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);
  cancelActive = stop;

  const step = (now: number) => {
    if (start === null) start = now;
    const t = Math.min(1, (now - start) / duration);
    window.scrollTo(0, startY + distance * easeInOutCubic(t));
    if (t < 1) {
      frame = requestAnimationFrame(step);
    } else {
      stop();
      finish();
    }
  };
  frame = requestAnimationFrame(step);
}
