
export enum SnackbarType {
  DONE,
  ERROR
}

export type Snackbar = {
  type: SnackbarType
  text: string
}