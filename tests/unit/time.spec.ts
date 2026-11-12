import { describe, expect, it } from 'vitest'
import { shortTime } from '../../app/utils/time'

describe('shortTime', () => {
  it('includes seconds in the displayed time', () => {
    const timestamp = Date.UTC(2024, 0, 1, 12, 34, 56) / 1000

    expect(shortTime(timestamp, 'en-GB')).toMatch(/^\d{2}:\d{2}:\d{2}$/)
  })
})
