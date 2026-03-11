import { describe, expect, it } from 'vitest';
import {
  RELEASE_ISSUES_URL,
  RELEASE_REPOSITORY_NAME,
  RELEASE_REPOSITORY_OWNER,
  RELEASE_REPOSITORY_URL,
  detectReleaseChannel,
  isPrereleaseChannel,
} from '@electron/shared/release-source';

describe('release source metadata', () => {
  it('points repository links at the fork', () => {
    expect(RELEASE_REPOSITORY_OWNER).toBe('briceguo188');
    expect(RELEASE_REPOSITORY_NAME).toBe('ClawX');
    expect(RELEASE_REPOSITORY_URL).toBe('https://github.com/briceguo188/ClawX');
    expect(RELEASE_ISSUES_URL).toBe('https://github.com/briceguo188/ClawX/issues');
  });

  it('detects stable and prerelease channels from semver versions', () => {
    expect(detectReleaseChannel('0.2.0')).toBe('latest');
    expect(detectReleaseChannel('0.2.1-beta.1')).toBe('beta');
    expect(detectReleaseChannel('0.2.1-alpha.3')).toBe('alpha');
  });

  it('treats only latest as a stable update channel', () => {
    expect(isPrereleaseChannel('latest')).toBe(false);
    expect(isPrereleaseChannel('beta')).toBe(true);
    expect(isPrereleaseChannel('alpha')).toBe(true);
  });
});
