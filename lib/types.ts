export enum QuizStepId {
    START = 'START',
    FOCUS = 'FOCUS',
    DETAILS = 'DETAILS',
    RESULTS = 'RESULTS'
}

export enum Category {
    MAKEUP = 'MAKEUP',
    SKINCARE = 'SKINCARE',
    CLEANSING = 'CLEANSING',
    ANTI_AGING = 'ANTI_AGING'
}

export enum Language {
    ES = 'es', // Spain
    US = 'en', // USA
    ME = 'ar', // Middle East
    JP = 'ja', // Japan
    FR = 'fr', // France
    DE = 'de', // Germany
    EL = 'el', // Greece (Added)
    RU = 'ru', // Russia (Added)
    KR = 'ko', // Korea
    CN = 'zh'  // China
}

export interface LocalizedContent {
    title?: string;
    subtitle?: string;
    name?: string;
    description?: string;
    label?: string;
    sub?: string;
    tags?: string[];
}

export interface Product {
    id: string;
    brand: string;
    name: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    subNeed: string[];
    tags: string[];
    translations?: Partial<Record<string, LocalizedContent>>; // Changed key to string to allow flexibility
}

export interface CategoryOption {
    id: string;
    label: string;
    sub: string;
    translations?: Partial<Record<string, LocalizedContent>>;
}

export interface CategoryData {
    id: Category;
    title: string;
    subtitle: string;
    brand: string;
    imageUrl: string;
    options: CategoryOption[];
    translations?: Partial<Record<string, LocalizedContent>>;
}

export interface UserSelections {
    category: Category | null;
    subNeed: string | null;
}
