describe('Example', () => {
  beforeAll(() => {
    return device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('flavr.screen.login'))).toBeVisible();
  });
});
