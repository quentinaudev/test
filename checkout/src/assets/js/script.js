function redirect(sessionid) {
    
    // var stripe = Stripe('pk_test_1KhXCRAbHZLYjB6QVFS2wAXJ');
    //var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    var stripe = Stripe('pk_test_51H7Ld2KvQZ4dVMrmGx15Slr2wRnUGe1QvRgP9bxn9UlTH3cZkpoFRZxchQiMB87PGBgdukaf2T0fs84zUTURPEuw00TSGH6aXR');

    stripe.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as argument here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: sessionid
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        console.log('appel du checkout stripe')
      });
  }