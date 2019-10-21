export const adaptError = (errorPayload: any) => ({
    status: errorPayload.status,
    message: errorPayload.error.message,
    url: errorPayload.url
  });
