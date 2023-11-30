import axios from 'axios';

class WaifuModel {
  async getWaifuImage() {
    try {
      const response = await axios.get('https://api.waifu.pics/sfw/waifu');
      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }

}

export default new WaifuModel();