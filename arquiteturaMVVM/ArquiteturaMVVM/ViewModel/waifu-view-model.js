import waifusModel from "../Model/waifus-model";

class WaifuViewModel {
    constructor(updateStateFunc){
        this.updateState = updateStateFunc;
    }


    fetchImage = async () => {
        const image = await waifusModel.getWaifuImage();
        this.updateState(image);
    }

    fetchMegumin = async () => {
        const image = await waifusModel.getMegumin();
        this.updateState(image);
    }

    fetchGifTapas = async () => {
        const image = await waifusModel.getTapas();
        this.updateState(image);
    }

}

export default WaifuViewModel;