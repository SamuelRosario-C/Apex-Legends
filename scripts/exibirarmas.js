let listWeapons = document.querySelector("#list-weapons")

const weapons = [
    {
        link: "https://cdn1.dotesports.com/wp-content/uploads/sites/3/2019/08/23180351/R-301-770x449.jpg",
        name: "Carabina R-301",
        type: "Fuzil de Assalto",
        class: "S"
    }, {
        link: "https://preview.redd.it/sx2zr0jrin281.jpg?auto=webp&s=563c76d2530c31ac67c46c787c9fe08bec2e0173",
        name: "Flatline",
        type: "Fuzil de Assalto",
        class: "A"
    }, {
        link: "https://www.mundoplayers.com/wp-content/uploads/2019/05/Havoc-Energy-Rifle.jpg",
        name: "Havoc Rifle",
        type: "Fuzil de Assalto",
        class: "B"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/1ae0ffd5b8e06c1843c901296c57715271c3dc2a-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394",
        name: "Hemlok Burst AR",
        type: "Fuzil de Assalto",
        class: "B"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/7d1c5c3bec5d013be27a69e2d234295ac2b982c8-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394",
        name: "Prowler Burst PDW",
        type: "Submetralhadoras",
        class: "B"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/45452870a26e1b6400ab20d1e6e74a70698b13cf-1920x1080.jpg?rect=0,0,1919,1080&w=686&h=386&auto=format",
        name: "Volt",
        type: "Submetralhadoras",
        class: "S"
    }, {
        link: "https://answers.ea.com/t5/image/serverpage/image-id/70237i45FEED7BD2D33601?v=v2",
        name: "R-99",
        type: "Submetralhadoras",
        class: "S"
    }, {
        link: "https://www.dexerto.com/wp-content/uploads/articles/Apex_Legends_Alternator.jpg",
        name: "Alternator",
        type: "Submetralhadoras",
        class: "B"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/537f550c58d19f88e34e82cde9673c8da9c846bc-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "C.A.R.",
        type: "Submetralhadoras",
        class: "A"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/5d372e25557269d6e20651f6ca3dd929b01888dd-1334x751.jpg?w=700&h=394&dpr=2",
        name: "Spitfire",
        type: "Metralhadora leve",
        class: "S"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/9b53d91634d9d09f83175bfb66ebecf6dbf95938-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "Rampage LMG",
        type: "Metralhadora leve",
        class: "B"
    }, {
        link: "https://www.gamerevolution.com/assets/uploads/2020/08/Apex-Legends-Devotion-nerf-1280x720.jpg",
        name: "Devotion",
        type: "Metralhadora leve",
        class: "B"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/e300e60e6d661de1d54084ef1faf1ae75e11dec0-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "L-Star",
        type: "Metralhadora leve",
        class: "C"
    }, {
        link: "https://www.gamingaccessweekly.com/wp-content/uploads/2019/07/apex-legends-weapons-sniper-rifle-kraber-min.jpg",
        name: "Kraber",
        type: "Fuzil de precisão",
        class: "S"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/49a5b556bd5421785496afc8fc3c4d4cdbce9070-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "Longbow",
        type: "Fuzil de precisão",
        class: "F"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/a4bac9c584b0fec0df7d96752e00fead88cda43d-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "Sentinel",
        type: "Fuzil de precisão",
        class: "F"
    }, {
        link: "https://static1-es.millenium.gg/articles/1/44/61/@/29307-1165398-2019-10-01-21-18-54-window-orig-1-article_m-1.png",
        name: "Rifle de Carga",
        type: "Fuzil de precisão",
        class: "B"
    }, {
        link: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2020/01/14/the-g7-scout-is-getting-a-nerf-in-an-upcoming-apex-legends-update_feature.jpg",
        name: "G7 Scout",
        type: "Armas de Atirador",
        class: "S"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/da0c19dc4913b33791711a5b7d8849804a0dd9c1-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "Triple Take",
        type: "Armas de Atirador",
        class: "A"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/912fab040f492d913fa2cf33536e32d0024ae3b8-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "Repeater 30-30",
        type: "Armas de Atirador",
        class: "F"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/ac497371a717f2cc763b37e9173ea46a42ceb801-1920x1080.jpg?rect=1,0,1917,1080&w=316&h=178&auto=format",
        name: "Mastiff",
        type: "Escopeta",
        class: "S"
    }, {
        link: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/12/apex-legends-peacekeeper-nerf-shotgun.jpg",
        name: "Peacekeeper",
        type: "Escopeta",
        class: "S"
    }, {
        link: "https://www.dexerto.com/wp-content/uploads/2019/11/EVA-8-apex-legends-bug.jpg",
        name: "EVA-8 Automática",
        type: "Escopeta",
        class: "C"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/33c2eff27a3c9ee28cab73886b1cbe4d9a882efb-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394",
        name: "Mozambique",
        type: "Escopeta",
        class: "C"
    }, {
        link: "https://answers.ea.com/t5/image/serverpage/image-id/68583iE2CDB3A5D3E8A2A3?v=v2",
        name: "Wingman",
        type: "Pistola",
        class: "S"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/87074ba9973525c9e9fa88331caf370d5a733a0a-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "RE-45",
        type: "Pistola",
        class: "C"
    }, {
        link: "https://cdn.realsport101.com/images/ncavvykf/gfinityesports/871e2e44b7f08c4da5746fcb8c31d9506cc34b8f-1920x1080.jpg?rect=1,0,1919,1080&w=700&h=394&dpr=2",
        name: "P2020",
        type: "Pistola",
        class: "F"
    }]

    

for (let i = 0; i < weapons.length; i++) {
    const urls = `<img class="img-weapons" src=${weapons[i].link}>`;
    const name = `<p class="name-weapons">${weapons[i].name}</p>`
    const types = `<h2 class="type-weapons">${weapons[i].type}</h2>`   
    const nivelClass = `<h2 class="class-weapons">${weapons[i].class}</h2>`  
    listWeapons.innerHTML = listWeapons.innerHTML + `<article>${nivelClass + types + urls + name}</article>`

   



}