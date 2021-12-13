class ListClass{
    
    constructor(title,list,openEl,menuFunction){
        this.title = title;
        this.list = list;
        this.openEl = openEl;
        this.menuFunction = menuFunction;
        this.onOpenMenu = Boolean(openEl);
    }

    menuOpenFunction = (event) => {
        this.menuFunction(event.target);
    }

    menuCloseFunction = () => {
        this.menuFunction(null);
    }

}

export default ListClass;