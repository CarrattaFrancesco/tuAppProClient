import { Base64imagePipe } from './base64image.pipe';

describe('Base64imagePipe', () => {
  it('create an instance', () => {
    const pipe = new Base64imagePipe();
    expect(pipe).toBeTruthy();
  });
});
