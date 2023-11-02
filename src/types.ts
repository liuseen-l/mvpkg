import type { Agent } from '@antfu/ni'

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

export interface TypePkgMeta {
  devDependencies: Record<string, string>
  dependencies: Record<string, string>
}

export interface TypeAgent {
  agent: Agent
}

export enum COMMAND_TYPE {
  I = 'install',
  U = 'uninstall',
}

export interface TypeCommand {
  type: COMMAND_TYPE
}

export interface TypeCommonPkgMeta {
  name: string
  version: string
  message: string
}

export type DepType = 'dependencies' | 'devDependencies' | 'peerDependencies' | 'optionalDependencies' | 'packageManager'
export interface RawDep {
  name: string
  currentVersion: string
  source: DepType
}
