export interface ApiResponse<T> {
  errors?: string[];
  message?: string;
  data?: T;
}
