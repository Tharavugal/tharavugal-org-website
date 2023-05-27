import { create } from '@opentf/react-state';

const [useAppState, setAppState] = create({ user: null, theme: 'Light', loading: false });

export { useAppState, setAppState };
