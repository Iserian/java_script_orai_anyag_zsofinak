const kepek = [
    {
        id: 0,
        url:'kep1.jpg',
        felirat: 'felirat_1'
    },
    {
        id: 1,
        url:'kep2.jpg',
        felirat: 'felirat_2'
    },
    {
        id: 2,
        url:'kep3.jpg',
        felirat: 'felirat_3'
    },
    {
        id: 3,
        url:'kep4.jpg',
        felirat: 'felirat_4'
    },
    {
        id: 4,
        url:'kep5.jpg',
        felirat: 'felirat_5'
    },
    {
        id: 5,
        url:'kep6.jpg',
        felirat: 'felirat_6'
    }
]

const hossz = kepek.length;

let megjelenitendoKepIndex = 0;
let megjelenitendoKep = kepek[megjelenitendoKepIndex];

document.addEventListener('DOMContentLoaded', function(event){
    galeriaKeszit();
    elozoEsemeny();
    kovetkezoEsemeny();
    kisKepKijelol();

})


function galeriaKeszit(){
    const KISKEPEK = document.querySelector('#kiskepek');
    // document.querySelector('#kiskepek .kiskep');
    for (let index = 0; index < hossz; index++) {
        const aktualis = kepek[index];
        const img = document.createElement('img');
        img.src = 'images/' + aktualis.url;
        img.id = aktualis.id;
        img.alt = aktualis.felirat;
        img.classList.add('kiskep');
        KISKEPEK.append(img);
        kisKepEsemeny(img, aktualis.id);
    }
}

function kisKepEsemeny(img, id){
    img.addEventListener('click', function(){
        megjelenitendoKepIndex = id;
        kepMetodus();

        img.classList.add("active");
    })
}

function kisKepKijelol(){
    const kiskepek = document.querySelectorAll("#kiskepek img");
    kiskepek[megjelenitendoKepIndex].classList.add("active");
}

function kisKepOsztalyLevesz(){
    const kiskepek = document.querySelectorAll("#kiskepek img");
    for (let index = 0; index < kiskepek.length; index++) {
        const aktualis = kiskepek[index];
        aktualis.classList.remove("active");
        
    }
}

function megkeresMegjelenitendo(){
    for (let index = 0; index < hossz; index++) {
        const aktualis = kepek[index];
        if (aktualis.id === megjelenitendoKepIndex) {
            megjelenitendoKep = aktualis;
        }
    }
    console.log(megjelenitendoKep)


}

function megjelenitKep(){
    const fokep = document.querySelector('#fokep');
    fokep.src = 'images/' + megjelenitendoKep.url;
}

function elozoEsemeny(){
    const prev = document.querySelector('#prev')
    prev.addEventListener('click', function(){
        let elsoElem = megjelenitendoKepIndex == 0;
        if(elsoElem){
            megjelenitendoKepIndex = hossz - 1;
        }
        else{
            megjelenitendoKepIndex--;
        }
        kepMetodus();
    });
}

function kovetkezoEsemeny(){
    const next = document.querySelector('#next')
    next.addEventListener('click', function(){
        let utolsoElem = megjelenitendoKepIndex == hossz - 1;
        if(utolsoElem){
            megjelenitendoKepIndex = 0;
        }
        else{
            megjelenitendoKepIndex++;
        }
        kepMetodus();

    });
}

function kepMetodus(){
    kisKepOsztalyLevesz();
    megkeresMegjelenitendo();
    megjelenitKep();
    kisKepKijelol();
}