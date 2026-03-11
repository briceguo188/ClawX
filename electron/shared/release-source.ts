export const RELEASE_REPOSITORY_OWNER = 'briceguo188';
export const RELEASE_REPOSITORY_NAME = 'ClawX';

export const RELEASE_REPOSITORY_URL = `https://github.com/${RELEASE_REPOSITORY_OWNER}/${RELEASE_REPOSITORY_NAME}`;
export const RELEASE_ISSUES_URL = `${RELEASE_REPOSITORY_URL}/issues`;

export function detectReleaseChannel(version: string): 'latest' | string {
  const match = version.match(/-([a-zA-Z]+)/);
  return match ? match[1] : 'latest';
}

export function isPrereleaseChannel(channel: string): boolean {
  return channel !== 'latest';
}
