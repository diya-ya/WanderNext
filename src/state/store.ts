import { create } from 'zustand';

type Preferences = {
  username: string;
  travelType: 'solo' | 'family' | 'couple';
  interests: string[];
  budget: [number, number];
};

type SavedItem = { id: string; title: string; type: 'stay' | 'cafe' | 'attraction' | 'post'; date?: string };

type AppState = {
  preferences: Preferences;
  saved: SavedItem[];
  setPreferences: (p: Partial<Preferences>) => void;
  addSaved: (item: SavedItem) => void;
  removeSaved: (id: string) => void;
  updateSavedDate: (id: string, date: string) => void;
};

const STORAGE_KEY = 'wandernext_state_v1';

function loadState(): Pick<AppState, 'preferences' | 'saved'> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error('empty');
    return JSON.parse(raw);
  } catch {
    return {
      preferences: {
        username: 'Explorer',
        travelType: 'solo',
        interests: ['nature', 'cafes'],
        budget: [500, 1500],
      },
      saved: [
        { id: 'st1', title: 'Seaside Villa', type: 'stay', date: '2025-10-12' },
        { id: 'cf1', title: 'Azulejo Cafe', type: 'cafe', date: '2025-10-13' },
        { id: 'p1', title: 'Best ramen spots in Kyoto?', type: 'post' },
      ],
    };
  }
}

export const useAppStore = create<AppState>((set, get) => ({
  ...loadState(),
  setPreferences: (p) => {
    set({ preferences: { ...get().preferences, ...p } });
    persist();
  },
  addSaved: (item) => {
    set({ saved: [...get().saved, item] });
    persist();
  },
  removeSaved: (id) => {
    set({ saved: get().saved.filter(i => i.id !== id) });
    persist();
  },
  updateSavedDate: (id, date) => {
    set({ saved: get().saved.map(i => i.id === id ? { ...i, date } : i) });
    persist();
  },
}));

function persist() {
  const state = useAppStore.getState();
  const snapshot = { preferences: state.preferences, saved: state.saved };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
}
