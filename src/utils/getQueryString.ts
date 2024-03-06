import { SearchParams } from '../types';

export function getQueryString(params: URLSearchParams) {
  const searchParams: SearchParams = [...params.entries()].map((entry) => ({
    key: entry[0],
    value: entry[1],
  }));

  const resultQuery = searchParams.reduce(
    (q, param, index) =>
      index > 0
        ? `${q}&${param.key}=${param.value}`
        : `${q}${param.key}=${param.value}`,
    ''
  );

  return resultQuery;
}
