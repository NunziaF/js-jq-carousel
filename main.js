// creare uno slider
$(document).ready(function(){

// gestione evento sul prev
  $('.prev').click(
    //funzione di CB
    prevImg
  );

// gestione evento sul next
  $('.next').click(
    //funzione di CB
    nextImg
  );

// gestione evento su nav
  $('.nav i').click(
    //funzione di CB
    nav
  );


  // funzione next
  function nextImg() {

    // salvo ref a img attiva al momento del click
    var imgActive = $('.images img.active');

    // salvo il pallino attivo
    var ballActive = $('.nav i.active');

    // tolgo la classe active all'img selezionata
    imgActive.removeClass('active');

    // tolgo la classe active al pallino selezionato
    ballActive.removeClass('active');

    // verifico se questa img era l'ultima
    if (imgActive.hasClass('last')) {
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    } else {
      // applica classe active alla prox img
      imgActive.next().addClass('active');
      ballActive.next().addClass('active');
      // console.log(imgActive.next());
    };
  };

  // funzione prevImg
  function prevImg() {

    // salvo ref a img attiva al momento del click
    var imgActive = $('.images img.active');

    // salvo il pallino attivo
    var ballActive = $('.nav i.active');

    // tolgo la classe active all'img selezionata
    imgActive.removeClass('active');
    // tolgo la classe active al pallino selezionato
    ballActive.removeClass('active');

    // verifico se questa img era la prima
    if(imgActive.hasClass('first')){
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    } else {
      // applica classe active alla prox img
      imgActive.prev().addClass('active');
      ballActive.prev().addClass('active');
    };
  };

  // funzione nav
  function nav() {

    // salvo ref a img attiva al momento del click
    var imgActive = $('.images img.active');

    // salvo il pallino attivo
    var ballActive = $('.nav i.active');

    // tolgo la classe active all'img
    imgActive.removeClass('active');

    // tolgo la classe active al pallino
    ballActive.removeClass('active');

    // aggiungo la classe active al pallino selezionato
    $(this).addClass('active');


    //ad ogni pallino selezionato corrisponde un'immagine che si attiva
    if (ballActive.hasClass('first')) {
      $('.images > img').eq(0).addClass('active');

    } else if (ballActive.hasClass('last')) {
      $('.images > img').eq(3).addClass('active');

    } else if (ballActive.hasClass('second')) {
      $('.images > img').eq(1).addClass('active');

    } else {
      $('.images > img').eq(2).addClass('active');
    }
  };
});
