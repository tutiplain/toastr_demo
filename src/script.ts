

//this is a reference to the existing toastr object available on the global scope
var toastr:any;
var $:any;  //reference to JQuery object 

//reference to DOM objects used
var txtTitle:any;
var txtMessage:any;

//a class that serves as a wrapper around the toastr API
class ToastrDemo
{
    //member variables
    private message: string;  //represents the message to display
    private title: string;    //the title of the "toast"


    constructor(initialMessage:string,initialTitle:string) 
    {
        this.message = initialMessage;
        this.title = initialTitle;
    }

    //setters, getters
    public setMessage(newMsg:string) { this.message = newMsg;}
    public getMessage() {return this.message;}

    public setTitle(newTitle:string) { this.title = newTitle; }
    public getTitle() {return this.title;}

    //methods
    public showToast()
    {
        toastr.success(this.message,this.title);
    }
}

let myDemo = new ToastrDemo('First message','First Title');


/*
    Here we are setting up two-way binding manually.
    This would be best done with an external framework like Vue or Angular, as it would reduce the amount of code written
*/
 $(document).ready(function() {
    //bind button event
    $('#btnShow').click(function() {
                myDemo.showToast();
    });

    //bind txtTitle event
    $('#txtTitle').on('change',function(){
        myDemo.setTitle($('#txtTitle').val());
    });

    //bind txtMessage event
    $('#txtMessage').on('change',function(){
        myDemo.setMessage($('#txtMessage').val());
    })
});

