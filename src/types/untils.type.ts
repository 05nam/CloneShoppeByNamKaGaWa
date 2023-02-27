export interface ErrorResponse<Data> {
  massage: string
  data?: Data
}

export interface SuccessReponse<Data> {
  massage: string
  data: Data
}
