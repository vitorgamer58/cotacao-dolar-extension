import { env } from 'node:process'
import type { ManifestV3Export } from '@crxjs/vite-plugin'
import packageJson from './package.json' with { type: 'json' }

const { version, description } = packageJson

/**
 * Remove any unwanted characters from the version string.
 * (Allow only digits, dots, and dashes)
 */
const sanitizeVersion = (ver: string): string => ver.replace(/[^\d.-]+/g, '')

/**
 * Split the sanitized version into parts.
 * Returns an object with default values if parts are missing.
 */
const parseVersion = (ver: string) => {
  const sanitized = sanitizeVersion(ver)
  const parts = sanitized.split(/[.-]/)
  const [major = '0', minor = '0', patch = '0', label = '0'] = parts
  return { major, minor, patch, label }
}

const { major, minor, patch, label } = parseVersion(version)

const isDevelopment = env.NODE_ENV === 'development'

const permissions = isDevelopment ? ['background', 'tabs', 'storage'] : []

const hostPermissions = isDevelopment ? ['<all_urls>'] : []

export default {
  manifest_version: 3,
  version: `${major}.${minor}.${patch}.${label}`,
  icons: {
    '128': 'logo128x128.png',
    '48': 'logo48x48.png',
    '32': 'logo32x32.png',
    '16': 'logo16x16.png'
  },
  description,
  name: 'Cotação Dólar',
  action: {
    default_popup: 'index.html',
    default_icon: 'logo32x32.png'
  },
  permissions,
  host_permissions: hostPermissions
} as ManifestV3Export
