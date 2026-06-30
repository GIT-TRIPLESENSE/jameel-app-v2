import type { PrototypeAction } from '../types';

export type ActionHandler = (action: PrototypeAction) => void;

export type ButtonVariant = 'light' | 'dark' | 'outlineOnDark' | 'outlineOnLight';
