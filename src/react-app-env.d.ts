/// <reference types="react-scripts" />

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';