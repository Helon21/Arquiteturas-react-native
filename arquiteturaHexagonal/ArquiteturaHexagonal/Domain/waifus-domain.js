export default class Waifu {
  constructor({ waifuRepository }) {
    this.waifuRepository = waifuRepository;
  }

  async getWaifuImage() {
    return this.waifuRepository.getWaifuImage();
  }

  async getMegumin() {
    return this.waifuRepository.getMegumin();
  }

  async getTapas() {
    return this.waifuRepository.getTapas();
  }
}
