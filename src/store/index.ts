import { create } from 'zustand';

export type AppUiState = Record<string, never>;

export const useAppStore = create<AppUiState>(() => ({}));
