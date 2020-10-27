class Form{

    constructor(){
        this.input = createInput('');
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.refresh = createButton('Reset');
    }

    myHide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){

        var title = createElement('h2');
        title.html('Car Racing game');
        title.position(130,0);


        this.input.position(130,160);
        this.button.position(250,250);

        this.refresh.position(displayWidth-100,20);

        this.refresh.mousePressed(()=>{
           player.updateCount(0); 
           game.update(0);

        })

       

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(130,160);

        })
    }
}    