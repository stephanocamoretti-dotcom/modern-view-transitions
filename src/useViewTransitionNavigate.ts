import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

export function useViewTransitionNavigate() {
  const navigate = useNavigate();

  return (to: string) => {
    // Check if the browser supports View Transitions API
    if (!document.startViewTransition) {
      navigate(to);
      return;
    }

    // Wrap the navigation and React state update in flushSync
    // to ensure the DOM is updated synchronously for the snapshot
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });
  };
}
