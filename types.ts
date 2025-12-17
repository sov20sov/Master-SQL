
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation?: string;
}

export interface LessonSection {
  title: string;
  content: string; // Markdown-like text
  codeExample?: string;
  image?: string; // Placeholder URL usually
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  sections: LessonSection[];
  quiz: QuizQuestion[];
  durationMinutes: number;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export type SqlResult = {
  columns: string[];
  rows: any[][];
  message?: string;
  error?: string;
  executionTime?: number; // In milliseconds
  rowCount?: number;
};

export interface UserProgress {
  completedLessons: string[]; // Array of Lesson IDs
  quizScores: Record<string, number>; // LessonID -> Score
  completedChallenges: string[];
  achievements: string[];
}

export interface ReferenceMaterial {
  id: string;
  title: string;
  sections: {
    heading: string;
    content: string;
    code?: string;
    table?: { headers: string[]; rows: string[][] };
  }[];
}

export interface Challenge {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  task: string;
  initialSql: string;
  expectedResultHash?: string; // Simplified validation
  hints: string[];
  solution?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}


export interface SqlDictionaryItem {
  id: string;
  term: string;
  category:
    | "Query"
    | "Conditions"
    | "DML"
    | "DDL"
    | "Constraints"
    | "Joins"
    | "Functions";
  definition: string;
  example: string;
  note?: string;
  usedWith?: string[];
  commonMistake?: string;
  relatedLessons?: string[]; // lesson ids
}



export interface DictionaryTerm {
  id: string;
  term: string;
  category: string;
  definition: string;
  example: string;
  note?: string;
  usedWith?: string[];
  commonMistakes?: string;
  relatedLessonId?: string;
}