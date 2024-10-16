import { toast } from 'react-toastify';

export function showUnavailableFeatureNotification() {
  toast.error('Oopss, this feature is not available yet');
}
