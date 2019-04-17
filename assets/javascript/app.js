$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='red-text'>Jill</span>. <br>I'm a <span class='red-text'>full stack web developer student</span>. <br>Welcome to my portfolio site!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='red-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'>Hello! My name is Jill and I am currently an Early Childhood Special Education Teacher. I have been employed as a teacher for almost 7 years. With many changes coming next year, I too decided I need change. I have always been interested in computers and exploring how they function. With that in mind, I have decided to change careers and take the necessary steps into becoming a Web Developer. Since I am only at the beginning of my Bootcamp, I can say it has been challenging but also exciting. I am ready for a new direction in my life. On a personal level, I am a single parent raising my amazing 14 year old daughter. She is actively involved in Club Volleyball so WE basically eat, sleep, and breathe volleyball. Our week nights right now are consumed with trainers, physical therapy, and practice. It is exciting to see all her hard work come together when they have tournaments on the weekends. She is excited for this change in our life. </p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='red-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='mailto:jilljill68@gmail.com'>jilljill68@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv=$("<div class='col s6'><a href='https://github.com/jveltrie' target='_blank'><img class='responsive-img ourImage' src='assets/images/download.png'></a></div>");
        var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/jill-veltrie-81632717a' target='_blank'><img class='responsive-img ourImage' src='assets/images/LinkedIn.png'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='red-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/beer.png'><span style='font-size:1.40em;' class='card-title white-text red'>Brews and Blues</span></div><div class='card-content'><p class='card-textcontent'>Find venues and breweries together.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href=' https://bryton-jay-smith.github.io/martel/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href=' https://github.com/bryton-jay-smith/martel' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/blue.png'><span style='font-size:1.40em;' class='card-title white-text red'>Crystal Collector</span></div><div class='card-content'><p class='card-textcontent'>Chose jewels to add up to given amount.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://jveltrie.github.io/Unit-4-Game/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href=' https://github.com/jveltrie/Unit-4-Game' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/256x256bb.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Word Guess Game</span></div><div class='card-content'><p class='card-textcontent'>Word guess game.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://jveltrie.github.io/Word-Guess-Game' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/jveltrie/Word-Guess-Game ' target='_blank'>GitHub</a></p></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/resume-writing-image.webp'><span style='font-size:1.40em;' class='card-title white-text red'>Resume</span></div><div class='card-content'><p class='card-textcontent'>Resume</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='resume 1.pdf' target='_blank'>View Resume</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/nrvpatel03/Giftastic-webpage'/div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/1970368.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Trivia Question Game</span></div><div class='card-content'><p class='card-textcontent'>A timed trivia game</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://jveltrie.github.io/TriviaGame/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/jveltrie/TriviaGame' target='_blank'>GitHub</a></p></div></div>");

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})
