import { baseApi } from './baseApi';

interface LabubuStat {
  ip: string;
  user_name: string;
  duration_ms: number;
  updated_at: number;
}

type LabubuStatsResponse = LabubuStat[];

export const labubuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLabubuStats: builder.query<LabubuStatsResponse, void>({
      query: () => ({
        url: '/api/labubu'
      }),
      providesTags: ['Labubu'],
    }),
  }),
});

export const { useGetLabubuStatsQuery } = labubuApi;