interface Comment {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
  replies: Comment[];
}

interface Reaction {
  type: 'helpful' | 'insightful' | 'question';
  count: number;
} 