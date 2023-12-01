import axios from 'axios';
import IWaifuRepository from '../Ports/waifus-Port';

export default class WaifuRepositoryAdapter extends IWaifuRepository {
  async getWaifuImage() {
    const response = await axios.get('https://api.waifu.pics/sfw/waifu');
    return response.data.url;
  }

}