import { create } from '@opentf/react-state';

const [useAppState, setAppState] = create({ user: null, theme: 'Light' });

export { useAppState, setAppState };
