const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage && localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(savedValue || null);
    }

    onSet((newValue: string, _: any, isReset: boolean) => {
      isReset
        ? localStorage && localStorage.removeItem(key)
        : localStorage && localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
