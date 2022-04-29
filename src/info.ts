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
  contacts: [
    { type: 'ContactPhone', text: '+7 (910) 131-40-26', link: 'tel:+79101314026' },
    { type: 'Telegram', text: 'Telegram', link: 'https://t.me/kosheyaka' },
    { type: 'Email', text: 'Email', link: 'mailto:koshey0@gmail.com' },
    { type: 'LinkedIn', text: 'LinkedIn', link: 'https://www.linkedin.com/in/kosheyaka' },
    { type: 'GitHub', text: 'GitHub', link: 'https://github.com/Kosheyaka' },
  ],
  languages: [
    {
      flag: '🇺🇸',
      title: 'English',
      level: 'B1+? Reading and hearing are fine, but I should practice speaking more. ' +
        'It should be enough to complete tasks and participate in daily meetings.',
      cert: {
        certName: 'EF SET Certificate (C1 @ 2019)',
        certLink: 'https://www.efset.org/cert/pBcTwg',
      },
    },
    { flag: '🇷🇺', title: 'Russian', level: 'Native' },
  ],
  education: {
    fullName: '',
    faculty: '',
    grade: '',
  },
  aboutMe: [],
  career: [],
  stack: [],
};
