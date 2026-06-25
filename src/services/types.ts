export type ApiRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ApiErrorCode =
  | 'NETWORK_ERROR'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'VALIDATION_ERROR'
  | 'NOT_IMPLEMENTED'
  | 'UNKNOWN_ERROR';

export type ApiResponseMeta = {
  requestId?: string;
};

export type ApiError = {
  code: ApiErrorCode;
  message: string;
  status?: number;
  details?: unknown;
};

export type ApiResponse<TData> =
  | {
      ok: true;
      data: TData;
      meta?: ApiResponseMeta;
    }
  | {
      ok: false;
      error: ApiError;
      meta?: ApiResponseMeta;
    };

export type ApiRequestOptions<TBody = unknown> = {
  path: string;
  method: ApiRequestMethod;
  body?: TBody;
  headers?: Record<string, string>;
  signal?: AbortSignal;
};

export type ApiClient = {
  request<TData, TBody = unknown>(options: ApiRequestOptions<TBody>): Promise<ApiResponse<TData>>;
};

export type AppServices = {
  apiClient: ApiClient;
};
