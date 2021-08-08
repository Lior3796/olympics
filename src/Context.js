import { Children, createContext, useContext } from "react";


const navsData = [
    {
     country:"Tokyo 2020",
     catgory:"sport"
    },

    {
        country:"rio 2016",
        catgory:"Athlets"
    },

    {
        country:"Beijin 2008",
        catgory:"News"
    },

    {
        country:"London 2008",
        catgory:"Olympic-games"
    }
]

export const OlympicsEvents = createContext(navsData);

export function GetOlympicsEvents(){
    return useContext(OlympicsEvents);
}

const articlesData = [
    {
     header:"Linoy Ashram wins gold in Rhythmic gymnastics individual all-around",
     img:"https://static.timesofisrael.com/www/uploads/2021/08/000_9KL6YF-e1628324365122-640x400.jpg",
     catgory:"Rhythmic Gymnastics",
     olympics:"Tokyo-2020"
    },
    {
        header:"Simone Biles: It's been a very long week and a long five years",
        img:"https://phantom-marca.unidadeditorial.es/daa79eb038d399635a99a42fb0c4b55a/resize/828/f/webp/assets/multimedia/imagenes/2021/08/03/16279900780300.jpg",
        catgory:"Gymnastics",
        olympics:"Tokyo-2020"
    },

];
 const ArticlesContext = createContext(articlesData);
export function SetArticlesContext(){
    return useContext(ArticlesContext);
}

const miniArticles = [
    {
        header:"Denmark beat France to win the gold Olympic champions in Tokyo!",
        img:"https://res.cloudinary.com/ocsdigitalprd/image/private/f_auto,t_preserve_aspect_desktop/v1628343689/primary/ybsqxanwhihpvqp1uluk",
        catgory:"Athletics",
        olympics:"Tokyo-2020"
    },

    {
        header:"Kevin Durant shoots Team USA to men's basketball gold",
        img:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQPcmXThM52BtgzHH0SxZgIEArCG1kOJlpNb42SS7_pKtFa0Ggltof2-2lobk-s-HTIb9Bwbff5P3rWTvs48PzwmyQScJ4D",
        catgory:"Athletics",
        olympics:"Tokyo-2020"
    },

    {
        header:"Italy’s Jacobs wins men’s 100 metres gold at Tokyo Olympics",
        img:"https://www.aljazeera.com/wp-content/uploads/2021/08/2021-08-01T132325Z_1778665188_SP1EH81116Z82_RTRMADP_3_OLYMPICS-2020-ATH-M-100M-FNL.jpg?resize=770%2C513",
        catgory:"Athletics",
        olympics:"Tokyo-2020"
    },
];

const MiniArticlesContext = createContext(miniArticles);

export function SetMiniArticlesContext(){
    return useContext(MiniArticlesContext);
}

const AthletsData = [
    {
        name:"usain bolt",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_600/primary/lmusmqtktq8slg9yl1xj",
        country:"JAM, ATHLETICS",
    },
    {
        name:"Michael PHELPS",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_600/primary/d805hwu9vwqliue2tbwh",
        country:"USA SWIMMING"
       
    },
    {
        name:"P. V. Sindhu",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_300/f_auto/v1538355600/primary/gsfzbbjmgyi8atet8iot",
        country:"IND,BADMINTON" 
        
       
    },
    {
        name:"Naomi Osaka",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_300/f_auto/v1538355600/primary/artsfgmsk57p9fowvaoo",
        country:"JPN, TENNIS" 
        
       
    },
    {
        name:"Katie LEDECKY",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_300/f_auto/v1538355600/primary/g6lng0pdjmrtll7jo34c",
        country:"USA, SWIMMING" 
    },
    {
        name:"Simone BILES",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_300/f_auto/v1627219484/primary/cts0yqdhtfm9yowtrv1j",
        country:"USA, ARTISTIC Gymnastics" 
    },

    {
        name:"usain bolt",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_600/primary/lmusmqtktq8slg9yl1xj",
        country:"JAM, ATHLETICS",
    },
    {
        name:"Michael PHELPS",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_600/primary/d805hwu9vwqliue2tbwh",
        country:"USA SWIMMING"
       
    },
    {
        name:"P. V. Sindhu",
        img:"https://img.olympicchannel.com/images/image/private/t_1-1_300/f_auto/v1538355600/primary/gsfzbbjmgyi8atet8iot",
        country:"IND,BADMINTON" 
        
       
    },


]

export const AthletsContext = createContext(AthletsData);

export const AthProvider = AthletsContext.Provider;

export function SetAthletsContext(){
   return useContext(AthletsContext);
}

export const UserNameContext = createContext();
export function SetUserName() {
    return useContext(UserNameContext)
}

export function FormContext() { 
    const FormContext = createContext();
    
      return (
           <FormContext.Provider>
               
           </FormContext.Provider>
      )
  }

