export default class FetchWaifuUseCase {
  constructor({ waifu }) {
    this.waifu = waifu;
  }

  async execute() {
    const image = await this.waifu.getWaifuImage();
    return image;
  }
}

