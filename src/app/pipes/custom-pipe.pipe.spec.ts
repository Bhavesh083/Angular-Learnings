import { CustomPipe1 } from './custom-pipe.pipe';

describe('CustomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipe1();
    expect(pipe).toBeTruthy();
  });
});
