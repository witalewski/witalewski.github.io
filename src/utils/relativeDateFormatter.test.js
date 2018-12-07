import { getRelativeDate } from './relativeDateFormatter';
import sinon from 'sinon';

describe("relativeDateFormatter", () => {
    let clock;

    beforeAll(() => {
        clock = sinon.useFakeTimers(new Date('2018-12-01 11:30'));
    });

    afterAll(() => {
        clock.restore();
    });

    it('displays "just now" for any future date', () => {
        expect(getRelativeDate('2023-11-11')).toEqual("just now");
    });

    it('displays "just now" for less than minute ago', () => {
        expect(getRelativeDate('2018-12-01 11:29:50')).toEqual("just now");
    });

    it('properly formats timestamp 1 minute ago', () => {
        expect(getRelativeDate('2018-12-01 11:29:00')).toEqual("1 minute ago");
    });

    it('properly formats timestamp almost 5 minutes ago', () => {
        expect(getRelativeDate('2018-12-01 11:24:50')).toEqual("5 minutes ago");
    });

    it('properly formats timestamp a little more than 5 minutes ago', () => {
        expect(getRelativeDate('2018-12-01 11:24:20')).toEqual("5 minutes ago");
    });

    it('properly formats timestamp 6 minutes ago', () => {
        expect(getRelativeDate('2018-12-01 11:24:00')).toEqual("6 minutes ago");
    });

    it('properly formats timestamp 10 hours ago', () => {
        expect(getRelativeDate('2018-12-01 1:29:00')).toEqual("10 hours ago");
    });

    it('properly formats timestamp yesterday', () => {
        expect(getRelativeDate('2018-11-30 11:29:00')).toEqual("yesterday");
    });

    it('properly formats timestamp 2 days ago', () => {
        expect(getRelativeDate('2018-11-29 11:29:00')).toEqual("2 days ago");
    });

    it('properly formats timestamp 12 days ago', () => {
        expect(getRelativeDate('2018-11-19 11:29:00')).toEqual("1 week ago");
    });

    it('properly formats timestamp 14 days ago', () => {
        expect(getRelativeDate('2018-11-17 11:29:00')).toEqual("2 weeks ago");
    });

    it('properly formats timestamp 4 months ago', () => {
        expect(getRelativeDate('2018-08-07 11:29:00')).toEqual("16 weeks ago");
    });

    it('properly formats timestamp last year', () => {
        expect(getRelativeDate('2017-11-30 23:29:00')).toEqual("last year");
    });

    it('properly formats timestamp 2 years ago', () => {
        expect(getRelativeDate('2016-12-06 23:29:00')).toEqual("2 years ago");
    });

    it('properly formats timestamp 3 years ago', () => {
        expect(getRelativeDate('2015-12-06 23:29:00')).toEqual("3 years ago");
    });
});