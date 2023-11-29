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

  async getMegumin(){
    try {
      const response = await axios.get('https://api.waifu.pics/sfw/megumin');
      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }
  async getTapas(){
    try {
      const response = await axios.get('https://api.waifu.pics/sfw/slap');
      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new WaifuModel();