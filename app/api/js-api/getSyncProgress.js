// @flow
import { request } from './lib/request';

export type GetSyncProgressResponse = {
  _spLocalCD: {
    getChainDifficulty: {
      getBlockCount: number,
    }
  },
  _spNetworkCD: {
    getChainDifficulty: {
      getBlockCount: number,
    }
  },
  _spPeers: number,
};

export const getSyncProgress = (ca: string): Promise<GetSyncProgressResponse> => {
  return request({
    hostname: 'localhost',
    method: 'GET',
    path: '/api/settings/sync/progress',
    port: 8090,
    ca,
  });
};
