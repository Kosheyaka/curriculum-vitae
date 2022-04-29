export interface IContact {
  type: string;
  text: string;
  link: string;
}

export interface ILanguageCert {
  certName: string;
  certLink: string;
}

export interface ILanguage {
  flag: string;
  title: string;
  level: string;
  cert?: ILanguageCert;
}

export interface IEducation {
  fullName: string;
  faculty: string;
  grade: string;
}

export type ITextStyle = 'regular'| 'bold' | 'mono' | 'inherit';

type IText = {
  text: string;
  style: ITextStyle;
};

type ITextList = {
  items: IText[];
};

type INewLine = { isNewLine: true };
type IDivider = { isDivider: true };

export type IAboutMeItem = IText | IDivider | INewLine | ITextList;
export type ICareer = IText | IDivider | INewLine | ITextList;

export type IStackCategory = 'Frontend' | 'Backend' | 'Databases' | 'Architecture';

export type IStackItem = {
  toolName: string;
  rating: string;
  commentary: string;
};

export type IStack = {
  category: IStackCategory;
  items: IStackItem[];
};

export type InfoType = {
  contacts: IContact[];
  languages: ILanguage[];
  education: IEducation;
  aboutMe: IAboutMeItem[];
  career: ICareer[];
  stack: IStack[];
};

export const Info: InfoType = {
  contacts: [],
  languages: [],
  education: {
    fullName: '',
    faculty: '',
    grade: '',
  },
  aboutMe: [],
  career: [],
  stack: [],
};
