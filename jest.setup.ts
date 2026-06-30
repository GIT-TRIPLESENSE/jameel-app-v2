import { jest } from '@jest/globals';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import './src/i18n';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
