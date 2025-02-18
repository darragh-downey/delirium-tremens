import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
    // Initialize with a default value that won't cause hydration issues
    const { subscribe, set } = writable<Theme>('dark');

    // Handle theme changes
    function setTheme(newTheme: Theme) {
        console.log('Setting theme to:', newTheme); // Debug log
        if (browser) {
            // Remove both classes first to ensure clean state
            document.documentElement.classList.remove('light', 'dark');
            // Add the new theme class
            document.documentElement.classList.add(newTheme);
            localStorage.setItem('theme', newTheme);
        }
        set(newTheme);
    }

    // Initialize theme from system/localStorage
    function initialize() {
        if (browser) {
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
            console.log('Initializing theme to:', initialTheme); // Debug log
            setTheme(initialTheme);

            // Listen for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    return {
        subscribe,
        set: setTheme,
        initialize
    };
}

export const theme = createThemeStore(); 