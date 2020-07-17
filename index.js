//Recognise Dependancies

const Discord = require("discord.js")
const auth = require("./options.json")
const bot = new Discord.Client()

//Login and log login success

bot.login(options.token)

bot.on('ready', function(){
    console.log("Logged in as " + bot.user.tag + " and an ID of " + bot.user.id)
})

bot.on('message', function(message){

    //declare variables

    var channelID = message.channel.id
    var userID = message.author.id
    var messageID = message.id
    var serverID = message.guild.id
    var username = message.author.username
    var channel = message.channel
    var content = message.content

    //character limit

    if(content.length > 300){
        message.delete()
        channel.send("<@" + userID + ">, your message has been removed for exceeding the 300 characer limit.")
        console.log('One message from ' + username + ' has been removed for being over the 300 character limit.')
    }

    //special greetings

    try {
        if(userID == "499440551243022336" && message.mentions.users.first().id == bot.user.id && content.substring(0, 1) != options.wakekey){
            var greetings = [
                "yo whaddup aleebee",
                "my boi alibi!!!! ;)",
                "aye broooo",
                "hey alibbiii how it beee?",
                "huh? who are you? nah im just kiddin what up alibiiiiii",
                "BRO HOW IT BE GOIN ALEEBEE",
                "ayyyeee whats good mannnn",
                "hello there",
                "aye watchu been up to my guy",
                "heyy whatsup alibi"
            ]
            var randomgreeting = Math.floor(Math.random()*greetings.length)
            channel.startTyping()
            setTimeout(function(){
                channel.stopTyping(true)
                channel.send(greetings[randomgreeting])
            }, 2000);
        }
    }catch(err){}

    try {
        if(userID == "427625038502690848" && message.mentions.users.first().id == bot.user.id && content.substring(0, 1) != options.wakekey){
            var greetings = [
                "AYE STITCHYY ;3",
                "heeeyyy its my guy stitchesssssssssss",
                "yooo stitchyy",
                "ayyee how it be my guyyy",
                "HEYYY ITS STITCHES!!1!1",
                "yoooo whatchu up to my guy stitches",
                "aayyee whats up stitchy",
                "whatsup my dude stitchyyyyy",
                "hey hows it goin my broski",
                "yo whats UP MY BRONANA"
            ]
            var randomgreeting = Math.floor(Math.random()*greetings.length)
            channel.startTyping()
            setTimeout(function(){
                channel.stopTyping(true)
                channel.send(greetings[randomgreeting])
            }, 2000);
        }
    }catch(err){}

    //detect wake key, command, and arguments

    if (content.substring(0, 1) == options.wakekey){
        var args = content.substring(1).split(" ")
        var cmd = args[0]
        args = args.splice(1)

        switch(cmd)
        {
            case "help":
                channel.send("Hey! Here's a list of all the command you can use with me!")
            break;
            case "slap":

                try
                {
                    if(bot.user.id == message.mentions.users.first().id){
                        channel.send("I catch your slap and give you a death glare until you die. Don't mess with Itachi >:D")
                        return
                    }

                    if(userID == message.mentions.users.first().id){
                        channel.send("You want to slap... yourself...? Oooookaaayyyy")
                        return 
                    }

                    var randomgif = Math.ceil(Math.random()*11)
                    channel.send(("%USER% slapped %VICTIM%! Ouch!").replace(/%USER%/g, username).replace(/%VICTIM%/g, message.mentions.users.first().username))
                    channel.send({files: ["./slap/slap" +  randomgif + ".gif"]})
                }
                catch(error)
                {
                    channel.send("Include somebody to slap.")
                }
            break;
            case "kill":

                try
                {
                    var deaths = ["%VICTIM% choked on a shoe that %USER% shoved down their throat",
                        "%USER% was speeding down the road and slammed into %VICTIM%'s pet penguin and %VICTIM% died of sadness",
                        "%USER% pulled out a gun and shot at %VICTIM% and all that came out was a big flag that said \"Bang!\" And %VICTIM% died of shock.",
                        "%USER% cut off %VICTIM%'s toes off and %VICTIM% fell of a cliff",
                        "%USER% offered %VICTIM% to smell %USER%'s flowers, but it was a trap and a comically large knife flew out of the flowers and stabbed %VICTIM%'s face",
                        "%USER% offered %VICTIM% a drink of water, but when %VICTIM% drank it they realized it had tons of tiny invisible knives in it and they ripped up %VICTIM%'s insides",
                        "%USER% fed %VICTIM% a watermelon that had black seeds in it and a huge watermelon grew in %VICTIM%'s stomach and blew them up",
                        "%VICTIM% sat on a whoopie cushion that %USER% planted and it released so much air that it shot %VICTIM% into the sky and they fell to their death",
                        "%USER% used their mind powers to summon an anvil in the air above %VICTIM%'s head",
                        "%USER% rigged %VICTIM%'s jetpack so it could go up but couldn't come down. %VICTIM% suffocated in space."
                    ];

                    var randomdeath = Math.floor(Math.random()*deaths.length)

                    if(bot.user.id == message.mentions.users.first().id){
                        channel.send("You can't kill me, I am immortal. >:D")
                        return
                    }

                    if(userID == message.mentions.users.first().id){
                        channel.send("You want to kill... yourself...? Oh no...")
                        return 
                    }

                    channel.send(((deaths[randomdeath]).replace(/%USER%/g, username)).replace(/%VICTIM%/g, message.mentions.users.first().username))
                }
                catch(error)
                {
                    channel.send("Include somebody to kill")
                }
            break;
            case "flip":
                var randomnum = Math.round(Math.random())
                switch(randomnum)
                {
                    case 0:
                        channel.send("Heads!")
                    break;
                    case 1:
                        channel.send("Tails!")
                    break;
                }
            break;
            case "8ball":
                var randomnum = Math.round(Math.random())
                switch(randomnum)
                {
                    case 0:
                        channel.send("Of course!")
                    break;
                    case 1:
                        channel.send("Absolutely not!")
                    break;
                }
            break;
            case "funfact":
                var funfacts = ["everybody that exists > james charles", "I murdered my entire family! ;3", "Xbox > Playstation", "Canada doesn't exist", 
                "The Oreos beat the Chips Ahoy clan in The Great Nabisco War with multiple sieges straight to the central chocolate chip HQ, and infiltrated the main computers and self destructed the outside walls. The Oreos brutally slaughtered the Chips Ahoy military showing no mercy.", 
                "LWAIY > YIAY", "Vain > FaZe", "Alibi likes chocolate milk more than he likes you", "あなたは同性愛者です", "You're not even as cool as Stitches so don't even try to be comparing yourself to Alibi"]
                var randomfact = Math.floor(Math.random()*funfacts.length)
                channel.send(funfacts[randomfact])
            break;
            case "shank":
                if(bot.user.id == message.mentions.users.first().id){
                    channel.send("You can't shank me, that's against the rules >:(")
                    return
                }

                if(userID == message.mentions.users.first().id){
                    channel.send("You want to shank yourself...? Uhhhhh")
                    return 
                }
                var shankdeaths = [
                    "%VICTIM% was shanked by %USER%. Oops that sucks for you, %USER%.",
                    "%USER% crafted a shank and assaulted %VICTIM% with it from behind. Lol."
                ]
                var randomshank = Math.floor(Math.random()*shankdeaths.length)
                channel.send(((shankdeaths[randomshank]).replace(/%USER%/g, username)).replace(/%VICTIM%/g, message.mentions.users.first().username))
            break;
            case "ping":
                channel.send("Pong!")
            break;

        }
    }
})