class ListClass{

    constructor(title,list,openEl,menuFunction,key){
        this.title = title;
        this.list = list;
        this.openEl = openEl.el;
        this.status = openEl.status;
        this.menuFunction = menuFunction;
        this.onOpenMenu = Boolean(openEl.el);
        this.key = key;
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

    getCurrentStatus = () => {
        console.log("Current Status is : ",this.status)
        return this.status;
    }

    handleList = () => {
        this.menuFunction((oldValue)=>{
            return {
                ...oldValue,
                status : !oldValue.status
            }
        })
    }

}


class NavMenuItem{
    constructor(name,path,subKey){
        this.name = name;
        this.path = path;
        this.subKey = subKey;
    }
}


export {ListClass,NavMenuItem};