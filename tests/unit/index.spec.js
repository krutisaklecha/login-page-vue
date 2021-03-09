import router from '../../src/router/index';

describe('Mounted router index file', () => {

    it('has data', () => {
        expect(router.mode).toContain('history');
    });
    it('has routes object defined', () => {
        expect(typeof router.options.routes).toBe('object');
    });
    it('is routing path correct', () => {
        expect(router.history.current.fullPath).toContain('/')
    });

});
