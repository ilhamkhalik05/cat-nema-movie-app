import { toast } from 'react-toastify';

export function showUnavailableFeatureNotification() {
  toast.error('Oopss, this feature is not available yet');
}

export function showMustLoginNotification() {
  toast.error('You must login to use this feature!');
}
