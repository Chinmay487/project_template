class ListClass{
    
    constructor(title,list,openEl,menuFunction){
        this.title = title;
        this.list = list;
        this.openEl = openEl.el;
        this.menuFunction = menuFunction;
        this.onOpenMenu = Boolean(openEl.el);
        this.menuStatus = openEl.status;
    }

    menuOpenFunction = (event) => {
        this.menuFunction((oldValue)=>{
            return {
                ...oldValue , 
                el: event.target 
            }
        });
    }

    menuCloseFunction = () => {
        this.menuFunction((oldValue)=>{
            return {
                ...oldValue , 
                el : null
            }
        });
    }


    handleList = () => {
        this.menuFunction((oldValue)=>{
            const {status} = oldValue ;
            return {
                ...oldValue , 
                status : !status
            }
        })
    }

}

export default ListClass;