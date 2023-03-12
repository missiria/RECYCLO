import {isRtl} from './isRtl'
import i18n from 'i18next'

describe('isRtl', () => {
    it('should return true if the language is arabic', () => {
        i18n.language = 'ar'
        expect(isRtl(i18n)).toBe(true)
    })
    it('should return false if the language is not arabic', () => {
        i18n.language = 'fr'
        expect(isRtl(i18n)).toBe(false)
    })
})
