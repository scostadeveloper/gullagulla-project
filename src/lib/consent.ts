export const CONSENT_KEY = 'gullagulla_tracking_consent';

export function hasConsent(): boolean {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted';
  } catch (e) {
    return false;
  }
}

export function setConsent(granted: boolean) {
  try {
    localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
  } catch (e) {}
}

export function clearConsent() {
  try { localStorage.removeItem(CONSENT_KEY); } catch (e) {}
}
