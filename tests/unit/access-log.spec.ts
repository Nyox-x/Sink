import { describe, expect, it } from 'vitest'
import { events2logs } from '../../server/utils/access-log'

describe('events2logs', () => {
  it('preserves the client IP recorded in Analytics blobs', () => {
    const [log] = events2logs([{
      blob1: 'example',
      blob2: 'https://example.com',
      blob4: '203.0.113.7',
      timestamp: '2024-01-01 12:34:56',
    }])

    expect(log).toMatchObject({
      slug: 'example',
      ip: '203.0.113.7',
      timestamp: 1704112496,
    })
  })
})
