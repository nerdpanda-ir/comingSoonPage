class TypeJs
{
    /* user option object */
    options =
        {
            place : '#type'
            ,
            speed :1200
            ,
            string : 'HI'
        };
    /* user option object */
    timer = null ;
    counter = null;
    constructor(options)
    {
        this.fetchSetting(options);
        if(!window.Array.isArray(this.options.string))
            this.setType(this.options.string);
        else
        {
            this.counter= 0;
            this.setType(this.options.string[this.counter++]);
        }

    }
    /* get user setting in the constractor and fetch in  option property */
    fetchSetting(options)
    {
        for(let andis in this.options)
            if(options.hasOwnProperty(andis))
                this.options[andis]=options[andis];
    }
    /* get typer element */
    get getTyperElement()
    {
        let element ;
        try
        {
            element = window.document.body.querySelector(this.options.place);
            if(element===null)
                throw `selector ${this.options.place} => not found in page !!! `;
        }
        catch (e)
        {
            window.console.error(e);
            element = false;
        }
        finally
        {
            return element;
        }
    }
    /* get typer element */

    /*create type iinterval */
    setType(str)
    {
        let countString =str.length;
        let counter = 0 ;
        this.timer = window.setInterval(()=>{
            let char = str[counter++];
            if(counter<=countString&& char!==undefined)
                this.getTyperElement.innerHTML +=((char===' ') ? '&nbsp':char);
            else
            {
                this.clearInterval();
                if(window.Array.isArray(this.options.string) &&  this.counter<this.options.string.length)
                    this.clearType();
            }


        },this.options.speed)
    }
    /* detype interval */
    clearType()
    {
        this.timer= setInterval(()=>
        {
            let str = this.getTyperElement.innerText;
           let strLength = str.length-1;
           if(str[strLength]!==undefined)
           {
               let process = str.substr(0,strLength);
               this.getTyperElement.innerText = process;
           }
           else
           {
               this.clearInterval();
               if (window.Array.isArray(this.options.string) && this.counter<this.options.string.length)
                this.setType(this.options.string[this.counter++])
           }

        }, this.options.speed);

    }
    /* clear interval method !!! */
    clearInterval()
    {
        for (;this.timer>0;this.timer--)
            window.clearInterval(this.timer);
    }
}

export  default TypeJs;