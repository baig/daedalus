// @flow
import {
  WALLET_RECOVERY_PHRASE_WORD_COUNT,
  PAPER_WALLET_RECOVERY_PHRASE_WORD_COUNT,
  LEGACY_WALLET_RECOVERY_PHRASE_WORD_COUNT,
  YOROI_WALLET_RECOVERY_PHRASE_WORD_COUNT,
} from './cryptoConfig';

export const CREATE_WALLET_STEPS = [
  'instructions',
  'template',
  'mnemonics',
  'validate',
  'hashImage',
  'config',
];

export const WALLET_RESTORE_TYPES = {
  REGULAR: 'regular', // Shelley wallet
  CERTIFICATE: 'certificate', // Paper wallet
  LEGACY: 'legacy', // Byron wallet
  YOROI_REGULAR: 'yoroi-regular', // Yoroi regular (rewards) wallet
  YOROI_LEGACY: 'yoroi-legacy', // Yoroi legacy (balance) wallet
};

export const RECOVERY_PHRASE_WORD_COUNT_OPTIONS = {
  [WALLET_RESTORE_TYPES.REGULAR]: WALLET_RECOVERY_PHRASE_WORD_COUNT,
  [WALLET_RESTORE_TYPES.CERTIFICATE]: PAPER_WALLET_RECOVERY_PHRASE_WORD_COUNT,
  [WALLET_RESTORE_TYPES.LEGACY]: LEGACY_WALLET_RECOVERY_PHRASE_WORD_COUNT,
  [WALLET_RESTORE_TYPES.YOROI_REGULAR]: YOROI_WALLET_RECOVERY_PHRASE_WORD_COUNT,
  [WALLET_RESTORE_TYPES.YOROI_LEGACY]: YOROI_WALLET_RECOVERY_PHRASE_WORD_COUNT,
};

export const WALLET_PUBLIC_KEY_NOTIFICATION_MAX_LENGTH = 30;

export const WALLET_PUBLIC_KEY_SHARING_ENABLED = true;
