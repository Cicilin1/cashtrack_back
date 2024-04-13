
type categoryProps = {
    title: string,
    id?: string,
    color: string
}

export class Category {
    public id?: string;
    public title: string;
    public color: string;

    constructor({title, id, color }: categoryProps ) {
        this.id = id;
        this.title = title;
        this.color  = color.toUpperCase();
    }

}


const category = new Category({
    title: 'title',
    id: 'salve',
    color: 'red'
})