// ==============================
// cardOverlay
// ========================================

cardOverlay = {
    config: {
          card: '.card',
          cardOverlay: '.card__overlay',
          cardOverlayTrigger: '.card__overlay__trigger',
          cardOverlayDismiss: '.card__overlay__dismiss'
    },
  
    handleCardOverlay: function() {
      const self = this;
          
      const cards = document.querySelectorAll(self.config.card);
      
          for (var i = 0; i < cards.length; i++) {
              let card = cards[i];
              let cardOverlay = card.querySelector(self.config.cardOverlay);
              let cardOverlayTrigger = card.querySelector(self.config.cardOverlayTrigger);
              let cardOverlayDismiss = card.querySelector(self.config.cardOverlayDismiss);
              self.handleCardOverlayButtons(cardOverlayTrigger, cardOverlay);
              self.handleCardOverlayButtons(cardOverlayDismiss, cardOverlay);
          }  
    },
      
      handleCardOverlayButtons: function(cardOverlayTrigger, cardOverlay) {
          cardOverlayTrigger.addEventListener("click", function() {
        cardOverlay.classList.toggle("is--active");
      });
      },
      
    init: function() {
      const self = this;
      
      self.handleCardOverlay();
    }
  };
  
  // run
  cardOverlay.init();
  