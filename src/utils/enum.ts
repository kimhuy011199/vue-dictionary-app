export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export enum FetchStatus {
  IDLE = 'idle',
  FETCHING = 'fetching',
  RESOLVED = 'resolved',
  REJECTED = 'rejected'
}
