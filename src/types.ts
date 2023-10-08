
export interface CommonOptions {
  recursive?: boolean
  ignorePaths?: string | string[]
  include?: string | string[]
  exclude?: string | string[]
  prod?: boolean
  dev?: boolean
  loglevel: string
  failOnOutdated?: boolean
  silent?: boolean
  force?: boolean
}
