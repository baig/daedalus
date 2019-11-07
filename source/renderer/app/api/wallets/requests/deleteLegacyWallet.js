// @flow
import type { RequestConfig } from '../../common/types';
import { request } from '../../utils/request';

export const deleteLegacyWallet = (
  config: RequestConfig,
  { walletId }: { walletId: string }
): Promise<*> =>
  request({
    method: 'DELETE',
    path: `/v2/byron-wallets/${walletId}`,
    ...config,
  });