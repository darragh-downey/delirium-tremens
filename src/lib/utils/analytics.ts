interface PageView {
  path: string;
  duration: number;
  scrollDepth: number;
  timestamp: Date;
}

export function trackPageView(data: PageView) {
  // Analytics implementation
} 