class Restaurant{

    id: string;
    title: string;

    constructor(restaurantTitle: string){
        this.title = restaurantTitle;
        this.id = new Date().toISOString();
    }

};

export default Restaurant;