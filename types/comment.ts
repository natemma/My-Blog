export interface Comment {
    id: number;
    author: string;
    text: string;
    date: string;
    //likes: number;
    replies?: Comment[];
  }
  
  // examples
  export const mockComments: Comment[] = [
    {
      id: 1,
      author: "Alex ",   
      text: "I'm waiting for this game soooo much!!!!",
      date: "2 hours ago",
      // likes: 24,
      replies: [
        {
          id: 11,
          author: "Dev Team",
          text: "Thanks for your opinion, we appreciate it",
          date: "1 hour ago",
          // likes: 8
        }
      ]
    },
    {
      id: 2,
      author: "Game Reviewer",
      text: "Looks pretty interesting",
      date: "5 min ago",
      //likes: 15
    },
    {
      id: 3,
      author: "Indie Lover",
      text: "I adore these types of games istg, thanks for ypur work!!!",
      date: "1 day ago",
      //likes: 42
    }
  ];